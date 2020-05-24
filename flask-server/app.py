from flask import Flask, jsonify
from covid_data import data 

app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False

@app.route("/covid19qc/api", methods=["GET"])
def api():
    response = jsonify(data)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == "__main__":
    app.run(debug=True)

