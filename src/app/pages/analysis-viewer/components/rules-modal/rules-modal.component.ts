import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rule } from 'src/app/shared/models/rule';

@Component({
  selector: 'app-rules-modal',
  templateUrl: './rules-modal.component.html',
  styleUrls: ['./rules-modal.component.scss']
})
export class RulesModalComponent {
  @Input() visible = false;
  @Input() rule!: Rule;
  @Output() visibleChange = new EventEmitter<boolean>();  
  
  onHide() {
    this.visibleChange.emit(false);
  }
}
