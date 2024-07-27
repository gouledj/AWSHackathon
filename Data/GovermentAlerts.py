import requests
import xml.etree.ElementTree as ET
import json

# Define the URL with the specific parameters
url = "https://www.alberta.ca/NewsRoom/newsroom.cfm?numDaysBack=365&deptID=0&keywordRSS=Situation%20Update"


#Halfway through the hackathon we decided to not go with the data analyiss portion
response = requests.get(url)
response.raise_for_status()  # Check if the request was successful

root = ET.fromstring(response.content)

data = []

for item in root.findall('./channel/item'):
    title = item.find('title').text if item.find('title') is not None else "No title"
    description = item.find('description').text if item.find('description') is not None else "No description"
    link = item.find('link').text if item.find('link') is not None else "No link"
    pubdate = item.find('pubdate').text if item.find('pubdate') is not None else "No pubdate"
    
    data.append({
        'title': title,
        'description': description,
        'link': link,
        'pubdate': pubdate
    })

print(data)

json_data = json.dumps(data, indent=4)

with open('alberta_newsroom_situation_updates.json', 'w') as json_file:
    json_file.write(json_data)

print("Scraping completed and data saved to 'alberta_newsroom_situation_updates.json'")
