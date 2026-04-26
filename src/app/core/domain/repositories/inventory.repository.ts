import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory.model';
import { Order } from '../models/order.model';

/**
 * Contrato del repositorio de inventarios.
 * 
 * @description
 * Define el contrato de acceso a datos para la entidad `Inventory`
 * dentro de la **capa de dominio**, siguiendo los principios de Clean Architecture.
 * 
 * Permite desacoplar la lógica de negocio de los detalles de   
 * implementación de la infraestructura.
 * 
 * @remarks 
 * Las implementaciones pueden variar (API REST, GraphQL, almacenamiento local, mocks, etc.) 
 * sin afectar a los casos de uso.
 * 
 * @example
 * ```ts
 * // Inyección por contrato
 * constructor(private inventoryRepository: InventoryRepository) {} 
 * ```
 * 
 * @architecture Clean Architecture
 * @layer Domain
 * 
 * @see Inventory
 * */

export abstract class InventoryRepository {
    /**
      * Obtiene el listado completo de inventarios.
      *
      * @param countInventories - Cantidad de inventarios a solicitar
      * @returns {Observable<Inventory[]>}
      * Observable que emite un arreglo de inventarios del dominio.
      *
      * @remarks
      * - No conoce la fuente de datos.
      * - No transforma entidades de presentación.
      * - Propaga los errores al consumidor.
      */
     abstract getAll(countInventories: number): Observable<Inventory[]>;
   }