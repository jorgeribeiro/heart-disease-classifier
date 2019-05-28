import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {
    Symptoms,
    ProbabilityPrediction,
    LogisticRegressionResult
} from "./types";

const SERVER_URL: string = 'api/';

@Injectable()
export class SymptomsService {

    constructor(private http: Http) {
    }

    // public trainModel(): Observable<LogisticRegressionResult> {
    //     return this.http.post(`${SERVER_URL}train`).map((res) => res.json());
    // }

    public predictSymptoms(symptoms: Symptoms): Observable<ProbabilityPrediction[]> {
        return this.http.post(`${SERVER_URL}predict`, symptoms).map((res) => res.json());
    }
}
