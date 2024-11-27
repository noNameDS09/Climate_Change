import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

# MongoDB connection setup (local)
client = MongoClient("mongodb://127.0.0.1:27017")  # Default local MongoDB connection string
db = client['test']  # Replace with your database name
collection = db['trial']  # Replace with your collection name

# URL of the webpage to scrape
url = "https://www.un.org/en/climatechange/reports"

# Request headers to mimic a browser
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
}

# Request the webpage with headers
response = requests.get(url, headers=headers)

# Check if the request was successful
if response.status_code == 200:
    print("Page successfully fetched!")
else:
    print(f"Failed to fetch page. Status code: {response.status_code}")
    exit()

# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(response.text, 'html.parser')

# Find all the report blocks (you may need to adjust the selector depending on your HTML structure)
tab_divs = soup.find_all('div', class_='tab-pane')

# Iterate through each tab (5 tabs in your case)
for tab in tab_divs:
    tab_name = tab.get('id', 'Unknown Tab')  # Get the tab name (id attribute or fallback to 'Unknown Tab')
    
    # Find each report inside the tab (you may need to adjust the tag selectors based on your HTML)
    reports = tab.find_all('div', class_='row bottommargin')
    
    for report in reports:
        # Extract the image URL (if available)
        img_tag = report.find('img')
        img_url = img_tag['src'] if img_tag else None
        
        # Extract the link to the full report
        link_tag = report.find('a', href=True)
        report_link = link_tag['href'] if link_tag else None
        
        # Extract the title of the report
        title_tag = report.find('h3')
        title = title_tag.text.strip() if title_tag else None
        
        # Extract the second <p> tag only (description)
        description = None
        p_tags = report.find_all('p')
        if len(p_tags) > 1:  # Check if at least two <p> tags exist
            description = p_tags[1].text.strip()  # Get the second <p> tag
        
        # Create a report dictionary with the required fields
        report_data = {
            'tab': tab_name,
            'img': img_url,
            'link': report_link,
            'title': title,
            'description': description
        }

        # Insert the report data into MongoDB collection
        collection.insert_one(report_data)
        # print(report_data)

print("Scraping and database insertion completed.")