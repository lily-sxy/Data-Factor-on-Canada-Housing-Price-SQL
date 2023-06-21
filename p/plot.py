import numpy as np
import psycopg2 as pg
import matplotlib.pyplot as plt


class Porject:
    """A simple recommender that can work with data conforming to the schema in
    schema.sql.

    === Instance Attributes ===
    dbConnection: Connection to a database of online purchases and product
        recommendations.

    Representation invariants:
    - The database to which dbConnection is connected conforms to the schema
      in schema.sql.
    """

    def __init__(self) -> None:
        """Initialize this Recommender, with no database connection yet.
        """
        self.db_conn = None

    def connect_db(self, url: str, username: str, pword: str) -> bool:
        """Connect to the database at url and for username, and set the
        search_path to "recommender". Return True iff the connection was made
        successfully.

        >>> rec = Recommender()
        >>> # This example will make sense if you change the arguments as
        >>> # appropriate for you.
        >>> rec.connect_db("csc343h-dianeh", "dianeh", "")
        True
        >>> rec.connect_db("test", "postgres", "password") # test doesn't exist
        False
        """
        try:
            self.db_conn = pg.connect(dbname=url, user=username, password=pword,
                                      options="-c search_path=projectschema")
        except pg.Error:
            return False

        return True

    def disconnect_db(self) -> bool:
        """Return True iff the connection to the database was closed
        successfully.

        >>> rec = Recommender()
        >>> # This example will make sense if you change the arguments as
        >>> # appropriate for you.
        >>> rec.connect_db("csc343h-dianeh", "dianeh", "")
        True
        >>> rec.disconnect_db()
        True
        """
        try:
            self.db_conn.close()
        except pg.Error:
            return False

        return True

    def plot_interest_rate(self) -> None:
        try:
            #open a cursor to perform database operations
            cur = self.db_conn.cursor()

            print(1)
            #get averge rating of each item that rated
            cur.execute("select index, rate from interestrt natural left join housingpi;")
            index = []
            rate = []
            for record in cur:
                tup = record
                index.append(tup[0])
                rate.append(tup[1])
            cur.close()
            ratenp = np.array(rate)
            indexnp = np.array(index)
            plt.plot(ratenp, indexnp,'o')
            m, b = np.polyfit(ratenp, indexnp, 1)
            plt.plot(ratenp, m*ratenp+ b)
            plt.title("interest rate vs housing price index")
            plt.xlabel("interest rate")
            plt.ylabel("house pricing index")
            plt.show()
            plt.savefig("interest.png")
            plt.close()
        except pg.Error:
            print("error")
            return None

    def plot_householddti(self) -> None:
        try:
            #open a cursor to perform database operations
            cur = self.db_conn.cursor()

            print(1)
            #get averge rating of each item that rated
            cur.execute("select index, ratio from householddti natural left join housingpi;")
            index = []
            ratio = []
            for record in cur:
                tup = record
                index.append(tup[0])
                ratio.append(tup[1])
            cur.close()
            rationp = np.array(ratio)
            indexnp = np.array(index)
            plt.plot(rationp, indexnp,'o')
            m, b = np.polyfit(rationp, indexnp, 1)
            plt.plot(rationp, m*rationp+ b)
            plt.xlabel("household-debt-to-income ratio")
            plt.ylabel("house pricing index")
            plt.title("household-debt-to-income ratio vs housing price index")
            plt.show()
            plt.savefig("household-debt-to-income ratio.png")
            plt.close()
        except pg.Error:
            print("error")
            return None

    def plot_unemployment_rate(self) -> None:
        try:
            #open a cursor to perform database operations
            cur = self.db_conn.cursor()

            print(1)
            #get averge rating of each item that rated
            cur.execute("select index, rate from unemploymentrt natural left join housingpi;")
            index = []
            rate = []
            for record in cur:
                tup = record
                index.append(tup[0])
                rate.append(tup[1])
            cur.close()
            ratenp = np.array(rate)
            indexnp = np.array(index)
            plt.plot(ratenp, indexnp,'o')
            m, b = np.polyfit(ratenp, indexnp, 1)
            plt.plot(ratenp, m*ratenp+ b)
            plt.xlabel("unemployment rate")
            plt.ylabel("house pricing index")
            plt.title("unemployment rate vs housing price index")
            plt.show()
            plt.savefig("unemploymentrate.png")
            plt.close()
        except pg.Error:
            print("error")
            return None
