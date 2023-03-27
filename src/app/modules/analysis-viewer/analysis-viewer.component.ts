import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreditAnalysis } from 'src/app/shared/models/credit-analysis';
import { CreditAnalysisService } from 'src/app/shared/services/credit-analysis.service';

@Component({
  selector: 'app-analysis-viewer',
  templateUrl: './analysis-viewer.component.html',
  styleUrls: ['./analysis-viewer.component.scss']
})
export class AnalysisViewerComponent implements OnInit, OnDestroy {
  creditAnalysis!: CreditAnalysis | null;

  constructor(private creditAnalysisService: CreditAnalysisService) { }
  
  ngOnInit(): void {
    this.creditAnalysis = this.creditAnalysisService.getCreditAnalysis();
  }

  ngOnDestroy(): void {
    this.creditAnalysisService.setCreditAnalysis(null);
  }
}
