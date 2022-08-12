import requests
from bs4 import BeautifulSoup
import re

def parseSubject():
    subjList = []
    url = "https://www.topuniversities.com/subject-rankings/2022"
    r = requests.get(url).text
    soup = BeautifulSoup(r, "html.parser")
    broadSubj = soup.find_all("div", attrs={"class": "select-subj"})
    for bs in broadSubj:
        subj = bs.find("ul").find_all("li")
        for s in subj:
            snew = s.find("a").text.strip()
            subjList.append(re.sub("\(2022\)", "", snew))
    return subjList

if __name__ == "__main__":
    print(parseSubject())