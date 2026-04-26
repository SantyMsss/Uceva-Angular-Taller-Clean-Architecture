import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { INVENTORY_MOCK } from '../../../../mocks/inventory.mocks';
import { Inventory } from '../../../domain/models/inventory.model';
import { DataService } from '../../services/data.service';
import { InventorySpringBootRepositoryImpl } from './inventory-springboot.repository.impl';

describe('InventorySpringBootRepositoryImpl (Infrastructure)', () => {
  let repository: InventorySpringBootRepositoryImpl;

  const countInventories = 5;
  const DataServiceMock = { getAllInventorySpringBoot: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            InventorySpringBootRepositoryImpl,
            { provide: DataService, useValue: DataServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(InventorySpringBootRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllInventorySpringBoot()', () => {
    const getAllSpy = DataServiceMock.getAllInventorySpringBoot.mockReturnValue(of([]));
    repository.getAll(countInventories).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countInventories);
  });

  it('debe devolver el listado de inventarios como Observable', (done) => {
    DataServiceMock.getAllInventorySpringBoot.mockReturnValue(of(INVENTORY_MOCK));
    repository.getAll(countInventories).subscribe((inventories: Inventory[]) => {
      expect(inventories).toEqual(INVENTORY_MOCK);
      done();
    });
  });
});
