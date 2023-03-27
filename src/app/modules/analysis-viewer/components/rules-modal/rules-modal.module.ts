import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { CardLabelModule } from 'src/app/shared/components/card-label/card-label.module';
import { RulesModalComponent } from './rules-modal.component';
import { RulesModalItemComponent } from './components/rules-modal-item/rules-modal-item.component';

@NgModule({
  declarations: [
    RulesModalComponent,
    RulesModalItemComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    CardModule,
    DialogModule,
    TabViewModule,
    CardLabelModule,
  ],
  exports: [
    RulesModalComponent,
    RulesModalItemComponent
  ]
})
export class RulesModalModule { }
