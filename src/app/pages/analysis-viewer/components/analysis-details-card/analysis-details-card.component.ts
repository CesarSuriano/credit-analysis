import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { CreditAnalysis } from 'src/app/shared/models/credit-analysis';

@Component({
  selector: 'app-analysis-details-card',
  templateUrl: './analysis-details-card.component.html',
  styleUrls: ['./analysis-details-card.component.scss']
})
export class AnalysisDetailsCardComponent {
  @Input() creditAnalysis!: CreditAnalysis;

  formattedCreatedAt(): string {
    return moment(this.creditAnalysis.createdAt).format('DD/MM/YYYY HH:mm:ss');
  } 
}
