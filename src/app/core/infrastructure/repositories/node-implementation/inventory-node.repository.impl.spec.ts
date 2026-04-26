import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { INVENTORY_MOCK } from '../../../../mocks/inventory.mocks';
import { Inventory } from '../../../domain/models/inventory.model';
import { DataService } from '../../services/data.service';
import { InventoryNodeRepositoryImpl } from './inventory-node.repository.impl';

describe('InventoryNodeRepositoryImpl (Infrastructure)', () => {
  let repository: InventoryNodeRepositoryImpl;

  const countInventories = 5;
  const DataServiceMock = { getAllInventoryNode: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            InventoryNodeRepositoryImpl,
            { provide: DataService, useValue: DataServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(InventoryNodeRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllInventoryNode()', () => {
    const getAllSpy = DataServiceMock.getAllInventoryNode.mockReturnValue(of([]));
    repository.getAll(countInventories).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countInventories);
  });

  it('debe devolver el listado de inventarios como Observable', (done) => {
    DataServiceMock.getAllInventoryNode.mockReturnValue(of(INVENTORY_MOCK));
    repository.getAll(countInventories).subscribe((inventories: Inventory[]) => {
      expect(inventories).toEqual(INVENTORY_MOCK);
      done();
    });
  });
});
