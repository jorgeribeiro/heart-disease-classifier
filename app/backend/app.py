from flask import Flask, request, jsonify
from sklearn.linear_model import LogisticRegression

import joblib

# declare constants
HOST = '0.0.0.0'
PORT = 8081

# initialize flask application
app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    # get features object from request
    X = request.get_json()
    X = [[float(X['cp'], float(X['thalach']), float(X['ca']), float(X['oldpeak']), float(X['sex']), float(X['trestbps']), float(X['age']))]]

    # read model
    clf = joblib.load('model.pkl')
    probabilities = clf.predict_proba(X)

    return jsonify([{'name': 'Doença de coração', 'value': round(probabilities[0, 0] * 100, 2)},
    				{'name': 'Sem doença de coração', 'value': round(probabilities[0, 1] * 100, 2)}])

if __name__ == '__main__':
	# run web server
    app.run(host=HOST,
            debug=True,  # automatic reloading enabled
			port=PORT)