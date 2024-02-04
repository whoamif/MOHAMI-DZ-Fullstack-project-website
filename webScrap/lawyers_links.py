
import requests
from bs4 import BeautifulSoup


# Make a request to the website
url = "https://avocatalgerien.com/a-z-listings/" 
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract the data you need
    lawyerslist = soup.find('div', class_="items-inner")

    if lawyerslist:
        lawyers_data = []  # List to store all lawyers' names and links
        lettre_div = lawyerslist.find_all('div', class_="letter-section")  # list of all letter sections
        for letter in lettre_div:
            if letter:
                lawyer_links = letter.find('ul')

                if lawyer_links:
                    # Extract lawyers names and links from <li> elements
                    for li in lawyer_links.find_all('li'):
                        anchor_tag = li.find('a')
                        if anchor_tag:
                            domain_name = anchor_tag.text.strip()
                            domain_link = anchor_tag['href'].strip()  # Assuming the link is in the 'href' attribute
                            lawyers_data.append(domain_link)

                else:
                    print("No <ul> found.")
            else:
                print("No div with class 'letter-section' found.")

        # Print or further process the extracted data
        cpt = 0
        for law_data in lawyers_data:
            cpt = cpt + 1
            print(cpt)
            print("link is ", law_data)
    else:
        print("No div with class 'items-inner' found.")

else:
    print("Failed to retrieve the webpage. Status code:", response.status_code)  


