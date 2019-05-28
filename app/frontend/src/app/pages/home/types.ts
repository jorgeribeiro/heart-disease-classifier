export class Symptoms {
	// Com doença de coração
	
	age: number = 63;
	sex: number = 1;
    cp: number = 3;
    trestbps: number = 145;
    chol: number = 233;
    fbs: number = 1;
    restecg: number = 0;
    thalach: number = 150;
    exang: number = 0;
    oldpeak: number = 2.3;
    slope: number = 0;
    ca: number = 0;
    thal: number = 1;

    // Sem doença de coração
    /*
	age: number = 47;
	sex: number = 1;
    cp: number = 1;
    trestbps: number = 110;
    chol: number = 275;
    fbs: number = 0;
    restecg: number = 0;
    thalach: number = 118;
    exang: number = 1;
    oldpeak: number = 1;
    slope: number = 1;
    ca: number = 1;
    thal: number = 2;
    */
}

export class ProbabilityPrediction {
    name: string;
    value: number;
}

export class LogisticRegressionResult {
    accuracy: number;
}
