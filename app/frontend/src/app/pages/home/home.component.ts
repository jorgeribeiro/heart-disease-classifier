import {Component, OnInit} from '@angular/core';
import {SymptomsService} from "./symptoms.service";
import {
    Symptoms,
    ProbabilityPrediction,
    LogisticRegressionResult
} from "./types";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public logisticRegressionResult: LogisticRegressionResult;
    public symptoms: Symptoms = new Symptoms();
    public probabilityPredictions: ProbabilityPrediction[];

    // graph styling
    public colorScheme = {
        domain: ['#1a242c', '#e81746', '#e67303', '#f0f0f0']
    };

    constructor(private irisService: IrisService) {

    }

    ngOnInit() {
        
    }

    public trainModel() {
        this.irisService.trainModel().subscribe((logisticRegressionResult) => {
            this.logisticRegressionResult = logisticRegressionResult;
        });
    }

    public predictSymptoms() {
        this.irisService.predictSymptoms(this.symptoms).subscribe((probabilityPredictions) => {
            this.probabilityPredictions = probabilityPredictions;
        });
    }

}
