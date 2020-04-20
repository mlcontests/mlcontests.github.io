import requests 
from bs4 import BeautifulSoup 
import os 
from selenium import webdriver
driver=webdriver.Chrome(
executable_path=(r"C:\Users\ANISH JAIN\Documents\PYTHON_PROGRAMME\chromedriver.exe"))

url=f"https://www.hackerearth.com/challenges"
driver.get(url)
html=driver.execute_script("return document.documentElement.outerHTML")
soup=BeautifulSoup(html,"lxml")

#hackerEarth
title=soup.select(".ongoing .challenge-list-title")
hackerEarth_list={}
header=[]
hyper_link=[]
comapny=[]
for i in range (len(title)):
    header.append(soup.select(".ongoing .challenge-list-title")[i].text)
    hyper_link.append(soup.select(".btn-green-bright")[i]["modal-redirect"])
    comapny.append(soup.select(".ongoing .company-details")[i].text.strip())


for k,link in  enumerate (hyper_link):
    if link.find("learning") !=-1:
        hyper_link[k]="https://www.hackerearth.com"+link
        print(link,k)
    if link.find("hackerearth") == -1:
        hyper_link[k]="https://www.hackerearth.com"+link
        
        
    
hackerEarth_list.update({"header":header})
hackerEarth_list.update({"hyper_link":hyper_link})
hackerEarth_list.update({"comapny":comapny})

# the json file where the output must be stored 
import json
out_file = open("hackerEarth_data.json", "w")  
json.dump(hackerEarth_list, out_file, indent = 6)  
out_file.close() 
