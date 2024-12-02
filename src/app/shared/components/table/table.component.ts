import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableDataConfig } from '../../models/table.model';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data: TableDataConfig[] = [];
  @Output() removeRow = new EventEmitter<TableDataConfig>();

  constructor(public uiService: UiService) {}

  handleAction(item: TableDataConfig) {
    this.removeRow.emit(item);
  }
}
