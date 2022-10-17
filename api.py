from bs4 import BeautifulSoup
from flask import Flask, render_template,redirect
from flask_cors import CORS, cross_origin
from requests import get
from translators import google

app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/<text>', methods=["POST"])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def translate(text):
    return google(from_language="en", to_language="tr", query_text=text)
   

@app.route('/')
def index():
    return render_template('index.html')
   

def paragraph():
   return BeautifulSoup(get("https://randomword.com/paragraph").text, 'html.parser').select(selector='#random_word_definition')[0].text+" "



@app.route('/paragraph')
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def insertParagraph():
    return paragraph()+" "+paragraph()+" "+paragraph()



@app.route('/word')
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def word():
   return BeautifulSoup(get("https://randomword.com/affirmation").text, 'html.parser').select(selector='#random_word')[0].text

@app.route('/sentence')
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def sentence():
   return BeautifulSoup(get("https://randomword.com/sentence").text, 'html.parser').select(selector='#random_word')[0].text

@app.route('/mastercard')
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def video():
    return redirect("https://cenkkaraboa.com/mastercard.mp4", code=302)



if __name__ == "__main__":
        app.run()
