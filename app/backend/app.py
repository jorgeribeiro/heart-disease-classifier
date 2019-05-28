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
    X = [[float(X['age']), float(X['sex']), 
        float(X['cp']), float(X['trestbps']), 
        float(X['chol']), float(X['fbs']), 
        float(X['restecg']), float(X['thalach']),
        float(X['exang']), float(X['oldpeak']),
        float(X['slope']), float(X['ca']),
        float(X['thal'])]]

    # read model
    clf = joblib.load('model.pkl')
    probabilities = clf.predict_proba(X)

    return jsonify([{'name': 'Sem doença de coração', 'value': round(probabilities[0, 0] * 100, 2)},
    				{'name': 'Com doença de coração', 'value': round(probabilities[0, 1] * 100, 2)}])

if __name__ == '__main__':
	# run web server
    app.run(host=HOST,
            debug=True,  # automatic reloading enabled
			port=PORT)