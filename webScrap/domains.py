
import requests
from bs4 import BeautifulSoup

# Make a request to the website
url = "https://avocatalgerien.com/categories/" 

response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract the data you need
    categories_list = soup.find('div', class_='categories-list')

    if categories_list:
        catcol_first_div = categories_list.find('div', class_='catcol first')

        if catcol_first_div:
            maincat_list = catcol_first_div.find('ul', class_='maincat-list')

            if maincat_list:
                # Extract domain names and links from <li> elements
                domains_data = []
                for li in maincat_list.find_all('li'):
                    anchor_tag = li.find('a') 
                    if anchor_tag:
                        domain_name = anchor_tag.text.strip()
                        domain_link = anchor_tag['href'].strip()  # Assuming the link is in the 'href' attribute
                        domains_data.append({'name': domain_name, 'link': domain_link})

                # Print or further process the extracted data
                for domain_data in domains_data:
                    print("Domain Name:", domain_data['name'])
                    print("Domain Link:", domain_data['link'])
            else:
                print("No <ul> with class 'maincat-list' found.")
        else:
            print("No div with class 'catcol first' found.")
    else:
        print("No div with class 'categories-list' found.")
else:
    print("Failed to retrieve the webpage. Status code:", response.status_code)
    





