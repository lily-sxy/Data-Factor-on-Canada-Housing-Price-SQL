DROP SCHEMA IF EXISTS projectschema CASCADE;
CREATE SCHEMA projectschema;
SET SEARCH_PATH TO projectschema;

-- Staging table:

-- The intermediate staging table to load the raw Canada housing price index data.
-- date is the released date of housing price index data.
-- index is the value of the Canada housing price index.
CREATE TABLE HousingPIStaging (
        date TIMESTAMP NOT NULL,
        index FlOAT NOT NULL,
        PRIMARY KEY (date)
);

-- The intermediate staging table to load the raw Canada unemployment rate data.
-- date is the released date of the unemployment rate.
-- rate is the value of the unemployement rate in Canada.
CREATE TABLE UnemploymentRtStaging (
        date TIMESTAMP NOT NULL,
        rate FlOAT NOT NULL,
        PRIMARY KEY (date),
        FOREIGN KEY (date) REFERENCES HousingPIStaging(date)
);

-- The intermediate staging table to load the raw Canada interest rate.
-- date is the released date of the interest rate.
-- rate if the value of the interest rate in Canada.
CREATE TABLE InterestRtStaging (
        date TIMESTAMP NOT NULL,
        rate FlOAT NOT NULL,
        PRIMARY KEY (date),
        FOREIGN KEY (date) REFERENCES HousingPIStaging(date)
);

-- The intermediate staging table to load the raw Canada household debt-to-income data.
-- date is the released date of the household debt-to-income
-- ratio is the value of the Canada household debt-to-incom.
CREATE TABLE HouseholdDTIStaging (
        date TIMESTAMP NOT NULL,
        ratio FlOAT NOT NULL,
        PRIMARY KEY (date),
        FOREIGN KEY (date) REFERENCES HousingPIStaging(date)
);




