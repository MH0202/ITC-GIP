# WPS Execute Operation
 
import requests, os
 
payload = open(os.path.dirname(os.path.abspath(__file__)) +"\\intersection_poly.xml").read()
 
 
wpsServerUrl = "https://gisedu.itc.utwente.nl/student/s2241587/gpw/wps.py?"
 
response = requests.post(wpsServerUrl, data=payload)
print("Content-type: application/json")
print()
print(response.text)