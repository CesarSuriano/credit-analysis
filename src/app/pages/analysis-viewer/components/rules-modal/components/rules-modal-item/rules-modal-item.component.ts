import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { RuleItemStatusEnum } from 'src/app/shared/enums/rule-item-status.enum';
import { RuleItem } from 'src/app/shared/models/rule-item';

@Component({
  selector: 'app-rules-modal-item',
  templateUrl: './rules-modal-item.component.html',
  styleUrls: ['./rules-modal-item.component.scss']
})
export class RulesModalItemComponent {
  @Input() ruleItems: Array<RuleItem> = [];
  @Input() cardTitle: string = "";

  status: any = {
    [RuleItemStatusEnum.completed]: {
      label: 'Executado'
    }
  };

  formatDate(date: string): string {
    return moment(date).format('DD/MM/YYYY HH:mm:ss');
  }
}
