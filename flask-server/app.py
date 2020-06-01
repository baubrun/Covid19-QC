from flask import Flask, jsonify, abort
from covid_data import data 
from flask_cors import CORS

app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False
cors = CORS(app, supports_credentials=True)



@app.route("/covid19qc/api", methods=["GET"])
def api():
    return jsonify({"c19qc": data})



@app.route("/covid19qc/api/<string:region>", methods=["GET"])
def get_region(region):
    cd = [d for d in data if d["région"] == region]
    if len(data) == 0:
        abort(404)
    return jsonify({"c19qc": cd})



if __name__ == "__main__":
    app.run(debug=True)

