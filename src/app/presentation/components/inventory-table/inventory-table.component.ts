import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Inventory, InventoryMovement } from '../../../core/domain/models/inventory.model';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class InventoryTableComponent {
  @Input() inventories: Inventory[] = [];

  movementMap: Record<InventoryMovement, BadgeType> = {
    'entrada': 'success',
    'salida': 'danger',
    'ajuste': 'warning',
  };
}
