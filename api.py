from flask import Flask
import translators as ts
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/<text>',methods=["POST"])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def index(text):
    return ts.google(from_language="en",to_language="tr",query_text=text)

@app.route('/')
def home():
    return "home"




app.run(debug=False)