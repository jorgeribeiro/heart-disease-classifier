# Heart Disease Classifier
Classification of heart disease based on symptoms and personal features

## Technologies
- sklearn (Logistic Regression, SVM)
- pandas
- Flask
- Angular

## Dataset
[Dataset used](https://archive.ics.uci.edu/ml/datasets/Heart+Disease)

## Content
The main part of the project is inside the [app](https://github.com/jorgimello/heart-disease-classifier/tree/master/app) folder. Backend is basically the [app.py](https://github.com/jorgimello/heart-disease-classifier/blob/master/app/backend/app.py) script and it has only one route to call the prediction. Frontend folder contains the code for a simple Angular app. 

The [heart disease notebook](https://github.com/jorgimello/heart-disease-classifier/blob/master/heart_disease.ipynb) is the source of my first tests. I tried a simple Neural Network with TensorFlow, but so far the results are not good. Then I tested a simple Logistic Regression with sklearn and I got 91.8% of accuracy.

## Acknowledgment
This project could not be built without the help of this [article from medium](https://medium.com/@dvelsner/deploying-a-simple-machine-learning-model-in-a-modern-web-application-flask-angular-docker-a657db075280).

It was my first time using Flask and its author made it simple to understand and integrate Flask with sklearn.
He also provides a simple interface built with Angular.

I also would like to thank [this article](http://lucdemortier.github.io/projects/3_mcnulty.html), that helped me understand the heart disease dataset better.
