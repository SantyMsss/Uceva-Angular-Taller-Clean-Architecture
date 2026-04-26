import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { INVENTORY_MOCK } from '../../../../mocks/inventory.mocks';
import { Inventory } from '../../../domain/models/inventory.model';
import { DataService } from '../../services/data.service';
import { InventoryLocalRepositoryImpl } from './inventory-local.repository.impl';

describe('InventoryLocalRepositoryImpl (Infrastructure)', () => {
  let repository: InventoryLocalRepositoryImpl;

  const countInventories = 5;
  const DataServiceMock = { getAllInventoryLocal: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            InventoryLocalRepositoryImpl,
            { provide: DataService, useValue: DataServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(InventoryLocalRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllInventoryLocal()', () => {
    const getAllSpy = DataServiceMock.getAllInventoryLocal.mockReturnValue(of([]));
    repository.getAll(countInventories).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countInventories);
  });

  it('debe devolver el listado de inventarios como Observable', (done) => {
    DataServiceMock.getAllInventoryLocal.mockReturnValue(of(INVENTORY_MOCK));
    repository.getAll(countInventories).subscribe((inventories: Inventory[]) => {
      expect(inventories).toEqual(INVENTORY_MOCK);
      done();
    });
  });
});
