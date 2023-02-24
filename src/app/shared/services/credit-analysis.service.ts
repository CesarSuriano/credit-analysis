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
    // ambiente de teste
    // return this.http.get('/data/grouped_analysis.json').pipe(
    
    //produção
    return this.http.get('https://raw.githubusercontent.com/CesarSuriano/credit-analysis/master/src/data/grouped_analysis.json').pipe(
      map((data: Object) => {
        return data as CreditAnalysis;
      })
    );
  }
}
