from flask import Flask, request, jsonify
from sklearn.linear_model import LogisticRegression

import joblib

# declare constants
HOST = '0.0.0.0'
PORT = 3333

# initialize flask application
app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    # get iris object from request
    X = request.get_json()
    X = [[''' set here features from heart disease dataset ''']]

    # read model
    clf = joblib.load('../../model.pkl')
    probabilities = clf.predict_proba(X)

    return jsonify([{'name': 'Heart-disease', 'value': round(probabilities[0, 0] * 100, 2)},
    				{'name': 'Not Heart-disease', 'value': round(probabilities[0, 1] * 100, 2)}])

    if __name__ == '__main__':
    	# run web server
	    app.run(host=HOST,
	            debug=True,  # automatic reloading enabled
				port=PORT)