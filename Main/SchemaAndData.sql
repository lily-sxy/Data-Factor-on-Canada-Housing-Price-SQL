SET SEARCH_PATH TO projectschema;
-- Staging table:

-- The intermediate staging table to load the raw Canada housing price index data.
-- date is the released date of housing price index data.
-- index is the value of the Canada housing price index.
DROP SCHEMA IF EXISTS HousingPIStaging CASCADE;
CREATE TABLE HousingPIStaging (
        date TIMESTAMP NOT NULL,
        index FlOAT NOT NULL,
        PRIMARY KEY (date)
);

-- The intermediate staging table to load the raw Canada unemployment rate data.
-- date is the released date of the unemployment rate.
-- rate is the value of the unemployement rate in Canada.
DROP SCHEMA IF EXISTS UnemploymentRtStaging CASCADE;
CREATE TABLE UnemploymentRtStaging (
        date TIMESTAMP NOT NULL,
        rate FlOAT NOT NULL,
        PRIMARY KEY (date),
        FOREIGN KEY (date) REFERENCES HousingPIStaging(date)
);

-- The intermediate staging table to load the raw Canada interest rate.
-- date is the released date of the interest rate.
-- rate if the value of the interest rate in Canada.
DROP SCHEMA IF EXISTS InterestRtStaging CASCADE;
CREATE TABLE InterestRtStaging (
        date TIMESTAMP NOT NULL,
        rate FlOAT NOT NULL,
        PRIMARY KEY (date)
);

-- The intermediate staging table to load the raw Canada household debt-to-income data.
-- date is the released date of the household debt-to-income.
-- ratio is the value of the Canada household debt-to-income.
DROP SCHEMA IF EXISTS HouseholdDTIStaging CASCADE;
CREATE TABLE HouseholdDTIStaging (
        date TIMESTAMP NOT NULL,
        ratio FlOAT NOT NULL,
        PRIMARY KEY (date),
        FOREIGN KEY (date) REFERENCES HousingPIStaging(date)
);

\COPY HousingPIStaging from 2001-2021HousingPI.csv with csv;
\COPY UnemploymentRtStaging from 2001-2021UnemploymentRt.csv with csv;
\COPY InterestRtStaging from 2001-2021InterestRt.csv with csv;
\COPY HouseholdDTIStaging from 2001-2021HouseholdDTI.csv with csv;

-- Insert data into schema
-- import data into housing pi
insert into housingpi
select to_char(date, 'YYYY-MM') as date,index
from housingpistaging;

--import data into householddt
insert into householddti
select to_char(date, 'YYYY-MM') as date,ratio
from householddtistaging;

--import data into interestrt
insert into interestrt
select to_char(date, 'YYYY-MM') as date,rate
from interestrtstaging;

--import data into unemploymentrt
insert into unemploymentrt
select to_char(date, 'YYYY-MM') as date,rate
from unemploymentrtstaging;
