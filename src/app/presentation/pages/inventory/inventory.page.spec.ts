import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GetAllInventoryUseCase } from '../../../core/application/usecases/get-all-inventory.usecase';
import { INVENTORY_MOCK } from '../../../mocks/inventory.mocks';
import { InventoryTableComponent } from '../../components/inventory-table/inventory-table.component';
import { InventoryPage } from './inventory.page';

describe('InventoryPage', () => {
  let component: InventoryPage;
  let fixture: ComponentFixture<InventoryPage>;

  const GetAllInventoryUseCaseMock = { execute: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryPage, InventoryTableComponent],
    })
    .overrideComponent(InventoryPage, {
      set: {
        providers: [
          { provide: GetAllInventoryUseCase, useValue: GetAllInventoryUseCaseMock }
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryPage);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
    expect(component.state).toBe('init');
    expect(component.inventories).toEqual([]);
  });

  it('debe cargar los inventarios y cambiar el estado a success', () => {
    GetAllInventoryUseCaseMock.execute.mockReturnValue(of(INVENTORY_MOCK));
    fixture.detectChanges();
    expect(component.inventories).toEqual(INVENTORY_MOCK);
    expect(component.state).toBe('success');
  });

  it('no debería cargar los inventarios y cambiar el estado a error', () => {
    GetAllInventoryUseCaseMock.execute.mockReturnValue(
      throwError(() => new Error('error'))
    );
    fixture.detectChanges();
    expect(component.inventories).toEqual([]);
    expect(component.state).toBe('error');
  });
});
