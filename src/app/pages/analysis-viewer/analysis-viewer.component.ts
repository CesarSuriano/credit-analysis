import { Component } from '@angular/core';
import { CreditAnalysis } from 'src/app/shared/models/credit-analysis';
import { CreditAnalysisService } from 'src/app/shared/services/credit-analysis.service';

@Component({
  selector: 'app-analysis-viewer',
  templateUrl: './analysis-viewer.component.html',
  styleUrls: ['./analysis-viewer.component.scss']
})
export class AnalysisViewerComponent {
  creditAnalysis!: CreditAnalysis;

  constructor(private creditAnalysisService: CreditAnalysisService) { }

  ngOnInit(): void {
    this.creditAnalysisService.getCreditAnalysis().subscribe(data => {
      this.creditAnalysis = data;
    });
  }
}
