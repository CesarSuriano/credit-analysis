import { Component, Input } from '@angular/core';
import { RuleItemResultEnum } from 'src/app/shared/enums/rule-item-result.enum';

@Component({
  selector: 'app-recomendation-card',
  templateUrl: './recomendation-card.component.html',
  styleUrls: ['./recomendation-card.component.scss']
})
export class RecomendationCardComponent {
  @Input() currentRecomendation!: RuleItemResultEnum;
  recomendations: any = {
    [RuleItemResultEnum.block]: {
      image: 'assets/images/block.svg',
      label: 'Bloquear'
    },
    [RuleItemResultEnum.alert]: {
      image: 'assets/images/alert.svg',
      label: 'Aguardar'
    },
    [RuleItemResultEnum.proceed]: {
      image: 'assets/images/proceed.svg',
      label: 'Prosseguir'
    },
  };
}
