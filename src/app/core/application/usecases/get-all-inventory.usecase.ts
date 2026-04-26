import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../../domain/models/inventory.model';
import { InventoryRepository } from '../../domain/repositories/inventory.repository';


/**
 * Caso de uso para obtener el listado completo de inventarios.
 *
 *  * @description
 * Este caso de uso pertenece a la **capa de aplicación** y representa
 * una acción del sistema orientada al negocio: recuperar todos los
 * inventarios disponibles.
 *
 * Actúa como intermediario entre la capa de presentación y el dominio,
 * delegando la obtención de datos al contrato `InventoryRepository`.
 *
 * @remarks
 * - No conoce detalles de infraestructura.
 * - No transforma los datos para la UI.
 * - Propaga los resultados y errores al consumidor.
 *
 * La dependencia se resuelve mediante **inyección por contrato**
 * utilizando la función `inject()` de Angular.
 * 
 * @example
 * ```ts
 * this.getAllInventoryUseCase.execute(10).subscribe(inventories => {
 *  // manejo de resultados
 * });
 * ```
 * @architecture Clean Architecture
 * @layer Application
 * @see Inventory
 * @see InventoryRepository
 */
@Injectable()
export class GetAllInventoryUseCase {
    /**
       * Repositorio de inventarios inyectado por contrato.
       *
       * @remarks
       * La implementación concreta se define en la capa de infraestructura.
       */
      private inventoryRepository = inject(InventoryRepository);
    
      /**
       * Ejecuta el caso de uso.
       *
       * @param countInventories - Cantidad de inventarios a solicitar
       * @returns {Observable<Inventory[]>}
       * Observable que emite el listado completo de inventarios del dominio.
       *
       * @remarks
       * - Delegación directa al repositorio.
       * - No contiene lógica de presentación.
       * - Mantiene el principio de responsabilidad única.
       */
      execute(countInventories: number): Observable<Inventory[]> {
        return this.inventoryRepository.getAll(countInventories);
      }
    }
    