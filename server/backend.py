from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
from bs4.element import Comment
import urllib.request
import numpy as np
import constants


app = Flask(__name__)
CORS(app)    

def tag_visible(element):
    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', '[document]']:
        return False
    if isinstance(element, Comment):
        return False
    return True

def extract_meaning(text):
    keyword_freq = dict(zip(constants.KEYWORDS, np.zeros(len(constants.KEYWORDS), dtype=int).tolist()))
    for word in text.split():
        matches = [key in word.strip() for key in constants.KEYWORDS]
        if any(matches):
            keyword_freq[constants.KEYWORDS[matches.index(True)]] += 1
    return keyword_freq


@app.route("/app")
def main():
    html = urllib.request.urlopen('https://www.nytimes.com/interactive/2019/11/19/nyregion/student-homelessness-nyc.html').read()
    soup = BeautifulSoup(html, 'html.parser')
    texts = soup.findAll(text=True)
    article_text = filter(tag_visible, texts)
    keyword_freq = extract_meaning(u" ".join(t.strip() for t in article_text))
    return str(keyword_freq)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)