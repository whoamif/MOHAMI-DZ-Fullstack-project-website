import requests
from bs4 import BeautifulSoup
import domains
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


from selenium.common.exceptions import TimeoutException, NoSuchElementException, ElementClickInterceptedException
import time


gl_domains=domains.domains_data #list contains all domains names and links





def get_lawyer_links(url):
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        lawyers_list = soup.find('div', class_="list")     

        if lawyers_list:
            lawyersProfile_links = []
            for article in lawyers_list.find_all('article'):
                law_link = article.find('a')
                if law_link:
                    my_link = law_link['href'].strip()
                    lawyersProfile_links.append(my_link)
                else:
                    print('Your link does not exist')

            # Check for pagination
            next_page_link = soup.find('a', class_='next page-numbers')
            if next_page_link:
                
                next_page_url = next_page_link['href']
                print("Scraping next page:", next_page_url)
                lawyersProfile_links += get_lawyer_links(next_page_url)

            return lawyersProfile_links
        else:
            print('Your div with class "list" does not exist')
            return []
    else:
        print("Failed to retrieve the webpage. Status code:", response.status_code)
        return []
#end of function 

# Starting URL for the first page
start_url = "https://avocatalgerien.com/listings/category/code-administratif/"

# Get lawyer links from all pages
all_lawyer_links = get_lawyer_links(start_url) 
cpt=0



# Print the result
for link in all_lawyer_links: 
    
    cpt+=1
    print(cpt)

    print("The link to lawyer page is:", link) 
    #extract the data from the profile of each lawyer :

    response = requests.get( link ) 
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        profile= soup.find('article')
        profile_infos=[]
        
        if profile:
            header=profile.find('h1')
            if header: 
                name=header.find('a')
                if name:
                    lawyerName=name.text.strip() #lawyer name 
                    print(lawyerName)
            
            info=profile.find('ul')
            if info:

                adr=info.find('li',class_="address")
                lawyerAdr=adr.text.strip()#lawyerAdr 
                print(lawyerAdr)

                #email 
                email=info.find('li',id="listing-email")
                if email:
                    ema=email.find('a')
                    lawyerEmail=ema['href'] #lawyer email
                    print(lawyerEmail) 
                else:
                    lawyerEmail="NULL"
                    print("lawyer has no email")
                
                
                
                #to get lawyer phone num
                    
                # Use Selenium to reveal the hidden phone number
                driver = webdriver.Chrome()
                driver.get(link)

                # Wait for the overlay to disappear
                wait = WebDriverWait(driver, 10)
                try:
                    wait.until(EC.invisibility_of_element_located((By.ID, 'cn-notice-text')))
                    print("Overlay disappeared successfully.")
                except TimeoutException:
                    print("Timeout: Overlay did not disappear within the specified time.")

                # Locate and click the element to reveal the phone number
                try:
                    reveal_button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.reveal span')))
                    reveal_button.click()
                    print("Clicked on the reveal button successfully.")
                except TimeoutException:
                    print("Timeout: Reveal button not clickable within the specified time.")
                except (NoSuchElementException, ElementClickInterceptedException) as e:
                    print(f"Error: {e}")

                # Wait for the phone number to be visible
                # Wait for the reveal animation to complete
                
                time.sleep(3) # Adjust the sleep time accordingly 
                try:
                    phone_element = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, 'li.phone strong.reveal')))
                    lawyerPhn = phone_element.text.strip()
                    print("Phone Number:", lawyerPhn)  # lawyerphone
                except TimeoutException:
                    print("Timeout: Phone number not visible within the specified time.")

                # Continue with your existing code

                # Close the browser window
                driver.quit()  
                
            else:
                print(' ul not found') 

            
            left=profile.find('div',class_="details-left")
            if left :
                categories=left.find('p',class_="listing-cat")

                if categories:
                    lawyerDomain=[]#lawyersdomain 
                    doms=list(categories.find_all('a')) 

                    for dom in doms:
                        lawyerDomain.append(dom.text.strip())
                    print(lawyerDomain)
                else:
                    print(' p element not found ')
            else:
                print('right element not found ') 
                
            tabs=profile.find('div',id="listing-tabs")

            if tabs:
                buttons=tabs.find('div',class_="tabs")
                tabs_sections=tabs.find('div',class_="tabs-section")

                desc=tabs_sections.find('section',id="overview") 
                if desc:
                    lawyer_bio=[] #lawyer_bio
                    list_of_paras=list(desc.find_all('p'))
                    if list_of_paras:
                        for ele in list_of_paras:
                            lawyer_bio.append(ele.text.strip()) 
                        print("BIO",lawyer_bio) 
                    else:
                        print('discription not found ')
                else:
                    print('desc elem not found')

                
                time_scedule=tabs_sections.find('section',id="hours") 
                if time_scedule:
                    timing=time_scedule.find('p') 
                    if timing:
                        lawyer_schedule=timing.text.strip()  
                        if lawyer_schedule:
                            print("HEURE:",lawyer_schedule) #lawyer_schedule 
                    else:
                        print("lawyer schedule not found")
                else:
                    print("element time_scedule not found")
                
                #comments rahoum fi section id="reviews" 
                
                comments_tab=tabs_sections.find('section',id="reviews")
                if comments_tab:
                    comme=comments_tab.find('div',class_="review")
                    if comme:
                        review_content=comme.find('div',class_="review-content")
                        if review_content:
                            review_body=review_content.find('div',class_="review-body")
                            if review_body:
                                lawyers_comments=[] #lawyers_comments
                                all_comms=list(review_body.find_all('p'))
                                if all_comms:
                                    for comm in all_comms:
                                        lawyers_comments.append(comm.text.strip()) 
                                        print("COMMENTS: ",lawyers_comments)
                                else:
                                    print('NO COMMENTS FOR LAWYER')
                                
                            else:
                                print("review_body element not found")
                    else:
                        print("NO COMMENTS")
                else:
                    print("section not found")        
            else:
                print('element "listing-tabs" not found ')
                
            print("NOW SCRAPING THE RATING")
            
            #rating is in div"right_details"
            # Assuming 'profile' is the BeautifulSoup object representing the HTML content
            right = profile.find('section', class_='contact-details clearfix')

            if right:
                right_details = right.find('div', class_='details-right')
                
                if right_details:
                    # Lawyer profile picture:
                    larger =  right_details.find('div', class_='larger')    
                    if larger:    
                        img = larger.find('a')    
                        if img:
                            profile_pic = img['href']  # lawyer profile picture
                            print("PROFILE PIC: ", profile_pic)
                        else:
                            print("element img not found ")
                    else:
                        print("element 'div' with class='larger' not found")

                    # Lawyer rating:
                    rating = right_details.find('div', class_='rating')
                    if rating:
                        rate = rating.find('meta', itemprop='ratingValue')
                        if rate:
                            lawyer_rate = rate['content']
                            print("RATE:", lawyer_rate)
                        else:
                            print("Element 'meta' with itemprop='ratingValue' not found")
                    else:
                        print("Element 'div' with class='rating' not found")
                else:
                    print("Element 'div' with class='details-right' not found")
            else:
                print("Element 'section' with class='contact-details clearfix' not found")


            



        else:
            print("element article not found")
    else:
        print("Failed to retrieve the webpage. Status code:", response.status_code)
        
#finished scraping all data from lawyers profiles 
        
