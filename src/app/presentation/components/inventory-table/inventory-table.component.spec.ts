import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InventoryTableComponent } from './inventory-table.component';
import { INVENTORY_MOCK } from '../../../mocks/inventory.mocks';

describe('InventoryTableComponent', () => {
  let component: InventoryTableComponent;
  let fixture: ComponentFixture<InventoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada inventario', () => {
    component.inventories = INVENTORY_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.inventories.length);
  });

  it('debería mostrar los datos del inventario en cada columna', () => {
    component.inventories = INVENTORY_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const inventory = component.inventories[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(inventory.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(inventory.productName);
      expect(columns[2].nativeElement.textContent.trim()).toBe(String(inventory.quantity));
      expect(columns[3].nativeElement.textContent.trim()).toBe(inventory.movements);
    });
  });

  it('debería mapear cada movimiento a su BadgeType correcto', () => {
    expect(component.movementMap['entrada']).toBe('success');
    expect(component.movementMap['salida']).toBe('danger');
    expect(component.movementMap['ajuste']).toBe('warning');
  });
});
