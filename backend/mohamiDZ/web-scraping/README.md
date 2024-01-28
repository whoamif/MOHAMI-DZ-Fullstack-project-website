# Avocat-algerien-web-scraping
In this project i scraped data from  avocat algerien website: https://avocatalgerien.com/ , using beautifulsoup and selenium i also saved all data in mysql database 

To run the scraping code you need first to install:

beautifulsoup:

              pip install beautifulsoup4

selenium: 

             pip install selenium

MySQL client & connector: 

              pip install mysqlclient

              pip install mysql-connector-python 

you need to create the database tables in file: "lawyers_data" for the first time using the queries in "dbcreation.txt" 


make sure your MySql server is running


to run the scrapping code:  

                     python lawyers_data.py 

OR you can generate the database using the queries in file "gl_data.sql"  

                 

