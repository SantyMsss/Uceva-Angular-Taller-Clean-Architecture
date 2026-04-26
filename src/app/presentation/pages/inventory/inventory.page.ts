import { Component, inject } from '@angular/core';
import { GetAllInventoryUseCase } from '../../../core/application/usecases/get-all-inventory.usecase';
import { Inventory } from '../../../core/domain/models/inventory.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { InventoryTableComponent } from '../../components/inventory-table/inventory-table.component';
import { State } from '../../interfaces/state.interface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  imports: [InventoryTableComponent, AlertComponent],
  providers: [GetAllInventoryUseCase]
})
export class InventoryPage {
  inventories: Inventory[] = [];
  state: State = 'init';

  private getAllInventoryUseCase = inject(GetAllInventoryUseCase);

  ngOnInit(): void {
    this.state = 'loading';
    this.getAllInventoryUseCase.execute(10).subscribe({
      next: (inventories) => {
        this.inventories = inventories;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}
