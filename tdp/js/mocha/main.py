from flask import Flask, render_template,request, jsonify
from flask_cors import CORS
import requests
import binomio_simple
import json

app = Flask(__name__,
            static_folder='src',
            template_folder='src',)

CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/solve/binomio", methods=['POST'])
def binomio():

    if not request.is_json:
        return jsonify({"errore": "Il contenuto deve essere JSON"}), 400
    
    dati = request.get_json()

    if 'binomio' not in dati:
        return jsonify({"errore": "Campo 'binomio' mancante"}), 400

    binomio = dati['binomio']

    return jsonify({"solve":binomio_simple.expand(binomio)})

@app.route("/api/test")
def test():
    with open("./binomi.json") as file:
         data = json.load(file)

    return jsonify(data)

if __name__ == "__main__":
    app.run("0.0.0.0", 5000)