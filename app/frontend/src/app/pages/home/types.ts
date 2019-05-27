export class Symptoms {
    cp: number = 2;
    thalach: number = 160;
    ca: number = 2;
    oldpeak: number = 1.4;
    sex: number = 1;
    trestbps: number = 124;
    age: number = 30;
}

export class ProbabilityPrediction {
    name: string;
    value: number;
}

export class LogisticRegressionResult {
    accuracy: number;
}
