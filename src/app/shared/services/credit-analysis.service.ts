import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CreditAnalysis } from '../models/credit-analysis';

@Injectable({
  providedIn: 'root'
})
export class CreditAnalysisService {
  constructor(private http: HttpClient) { }

  getCreditAnalysis(): Observable<CreditAnalysis> {
    return this.http.get('/assets/mock/grouped_analysis.json').pipe(
      map((data: Object) => {
        return data as CreditAnalysis;
      })
    );
  }
}
