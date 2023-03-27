import { Component, Input } from '@angular/core';
import { RuleItemResultEnum } from 'src/app/shared/enums/rule-item-result.enum';
import { Document } from 'src/app/shared/models/document';
import { Rule } from 'src/app/shared/models/rule';

@Component({
  selector: 'app-documents-card',
  templateUrl: './documents-card.component.html',
  styleUrls: ['./documents-card.component.scss']
})
export class DocumentsCardComponent {
  @Input() documents!: Array<Document>;
  currentRule!: Rule;
  showRules: boolean = false;
  results: any = {
    [RuleItemResultEnum.block]: {
      class: 'red',
      label: 'Bloquear'
    },
    [RuleItemResultEnum.alert]: {
      class: 'yellow',
      label: 'Aguardar'
    },
    [RuleItemResultEnum.proceed]: {
      class: 'green',
      label: 'Prosseguir'
    },
  };

  onModalHide(event: boolean) {
    this.showRules = event;
  }
}
