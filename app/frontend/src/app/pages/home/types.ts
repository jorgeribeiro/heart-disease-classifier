export class Symptoms {
	age: number = 30;
	sex: number = 1;
    cp: number = 2;
    trestbps: number = 124;
    chol: number = 250;
    fbs: number = 1;
    restecg: number = 1;
    thalach: number = 160;
    exang: number = 1;
    oldpeak: number = 1.4;
    slope: number = 1;
    ca: number = 2;
    thal: number = 2;
}

export class ProbabilityPrediction {
    name: string;
    value: number;
}

export class LogisticRegressionResult {
    accuracy: number;
}
