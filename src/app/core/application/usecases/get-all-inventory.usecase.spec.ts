import { TestBed } from "@angular/core/testing";
import { GetAllInventoryUseCase } from "./get-all-inventory.usecase";
import { InventoryRepository } from "../../domain/repositories/inventory.repository";
import { firstValueFrom, of, throwError } from "rxjs";
import { INVENTORY_MOCK } from "../../../mocks/inventory.mocks";


describe('GetAllInventoryUseCase', () => {
  let useCase: GetAllInventoryUseCase;

  const countInventories = 5;
  const InventoryRepositoryMock: jest.Mocked<InventoryRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        providers: [
            GetAllInventoryUseCase,
            { provide: InventoryRepository, useValue: InventoryRepositoryMock }
        ]
    })
    .compileComponents();
    useCase = TestBed.inject(GetAllInventoryUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllInventoryUseCase);
  });

  it('debería delegar la llamada al repository', async () => {
    InventoryRepositoryMock.getAll.mockReturnValue(of(INVENTORY_MOCK));
    const result = await firstValueFrom(useCase.execute(countInventories));
    expect(InventoryRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(InventoryRepositoryMock.getAll).toHaveBeenCalledWith(countInventories);
    expect(result).toEqual(INVENTORY_MOCK);
  });

  it('debería propagar un error cuando el repositorio emita un error', async () => {
    const errorMessage = 'Fallo la busqueda de inventarios';
    InventoryRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    const result = useCase.execute(countInventories);
    await expect(firstValueFrom(result)).rejects.toThrow(errorMessage);
    expect(InventoryRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(InventoryRepositoryMock.getAll).toHaveBeenCalledWith(countInventories);
  });

});
