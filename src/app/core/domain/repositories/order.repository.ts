import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

/**
 * Contrato del repositorio de pedidos.
 *
 * @description
 * Define el contrato de acceso a datos para la entidad `Order`
 * dentro de la **capa de dominio**, siguiendo los principios de
 * Clean Architecture.
 *
 * Permite desacoplar la lógica de negocio de los detalles de
 * implementación de la infraestructura.
 *
 * @remarks
 * Las implementaciones pueden variar (API REST, GraphQL,
 * almacenamiento local, mocks, etc.) sin afectar a los casos de uso.
 *
 * @example
 * ```ts
 * // Inyección por contrato
 * constructor(private orderRepository: OrderRepository) {}
 * ```
 *
 * @architecture Clean Architecture
 * @layer Domain
 *
 * @see Order
 */
export abstract class OrderRepository {

  /**
   * Obtiene el listado completo de pedidos.
   *
   * @param countOrders - Cantidad de pedidos a solicitar
   * @returns {Observable<Order[]>}
   * Observable que emite un arreglo de pedidos del dominio.
   *
   * @remarks
   * - No conoce la fuente de datos.
   * - No transforma entidades de presentación.
   * - Propaga los errores al consumidor.
   */
  abstract getAll(countOrders: number): Observable<Order[]>;
}
