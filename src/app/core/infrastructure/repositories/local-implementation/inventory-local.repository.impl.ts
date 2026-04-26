import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InventoryRepository } from "../../../domain/repositories/inventory.repository";
import { DataService } from "../../services/data.service";
import { Inventory } from "../../../domain/models/inventory.model";

/**
 * Implementación concreta del repositorio de inventarios con datos locales simulados.
 *
 * @remarks
 * Este repositorio pertenece a la **capa de Infrastructure**
 * y actúa como un **Adapter** entre:
 *
 * - El contrato del dominio {@link InventoryRepository}
 * - La fuente de datos {@link DataService}
 *
 * Responsabilidades:
 * - Implementar el contrato definido por el dominio
 * - Delegar la obtención de datos al datasource
 * - Adaptar, transformar o enriquecer los datos si es necesario
 *
 * ❗ Este repositorio NO contiene lógica de negocio.
 * ❗ No expone detalles de infraestructura al dominio.
 *
 * @see {@link InventoryRepository}
 * @see {@link DataService}
 */
@Injectable()
export class InventoryLocalRepositoryImpl extends InventoryRepository {

    /**
     * Datasource encargado de obtener los datos de inventarios.
     *
     * @remarks
     * Se inyecta usando la función `inject()` de Angular
     * para evitar constructores explícitos y favorecer
     * un estilo más declarativo.
     */
    private dataService = inject(DataService);

    /**
     * Obtiene el listado completo de inventarios.
     *
     * @remarks
     * Este método cumple el contrato definido en
     * {@link InventoryRepository#getAll}.
     *
     * @param countInventories - Cantidad de inventarios a solicitar
     * @returns Observable que emite un arreglo de {@link Inventory}
     */
    getAll(countInventories: number): Observable<Inventory[]> {
        return this.dataService.getAllInventoryLocal(countInventories);
    }

}
