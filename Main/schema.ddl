DROP SCHEMA IF EXISTS projectschema CASCADE;
CREATE SCHEMA projectschema;
SET SEARCH_PATH TO projectschema;

-- A monthly Canada housing price index.
-- date is the released date of housing price index data.
-- index is the value of the Canadian housing price index.
CREATE TABLE HousingPI (
        date TEXT NOT NULL,
        index FlOAT NOT NULL,
        PRIMARY KEY (date)
);

-- A monthly Canada unemployment rate.
-- date is the released date of the unemployment rate.
-- rate is the value of the unemployement rate in Canada.
CREATE TABLE UnemploymentRt (
        date TEXT NOT NULL,
        rate FlOAT NOT NULL,
        PRIMARY KEY (date),
        FOREIGN KEY (date) REFERENCES HousingPI(date)
);

-- A monthly Canada interest rate.
-- date is the released date of the interest rate.
-- rate if the value of the interest rate in Canada.
CREATE TABLE InterestRt (
        date TEXT NOT NULL,
        rate FlOAT NOT NULL,
        PRIMARY KEY (date),
        FOREIGN KEY (date) REFERENCES HousingPI(date)
);

-- A quaterly Canada household debt-to-income.
-- date is the released date of the household debt-to-income
-- ratio is the value of the Canadian household debt-to-incom.
CREATE TABLE HouseholdDTI (
        date TEXT NOT NULL,
        ratio FlOAT NOT NULL,
        PRIMARY KEY (date),
        FOREIGN KEY (date) REFERENCES HousingPI(date)
);


