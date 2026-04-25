import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order, OrderStatus } from '../../../core/domain/models/order.model';

/**
 * Componente de tabla de pedidos.
 *
 * Se utiliza para mostrar un listado de pedidos en una tabla,
 * mostrando información como cliente, total, estado y fecha.
 *
 * @remarks
 * Este componente recibe los pedidos desde un componente padre
 * a través del Input `orders` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges según el estado del pedido.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-orders-table [orders]="ordersList"></app-orders-table>
 * ```
 */
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class OrdersTableComponent {
  /**
   * Listado de pedidos que se mostrarán en la tabla.
   * @type {Order[]}
   * @remarks
   * Este Input permite pasar un array de pedidos desde un componente padre.
   * Cada pedido debe cumplir la interfaz `Order`.
   */
  @Input() orders: Order[] = [];

  /**
   * Mapeo de estados de pedidos a tipos de Badge.
   * @type {Record<OrderStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - 'Pendiente'   → 'warning'  (amarillo)
   * - 'En proceso'  → 'primary'  (azul)
   * - 'Entregado'   → 'success'  (verde)
   * - 'Cancelado'   → 'danger'   (rojo)
   */
  statusMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'En proceso': 'primary',
    'Entregado': 'success',
    'Cancelado': 'danger',
  };
}
