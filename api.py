from flask import Flask, render_template
import translators as ts
from flask_cors import CORS, cross_origin
from requests import get
from bs4 import BeautifulSoup
app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/<text>', methods=["POST"])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def index(text):
    return ts.google(from_language="en", to_language="tr", query_text=text)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/randomtext')
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def text():
    response = get("https://randomword.com/paragraph")
    text = BeautifulSoup(response.text, 'html.parser')
    return text.select(selector='#random_word_definition')[0].text
