/**
 * Interfaz que representa un pedido del sistema.
 *
 * Contiene la información básica necesaria para mostrar un pedido
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada pedido debe tener un `id` único, el nombre del cliente,
 * un `status` que refleja su estado actual, un `total` en pesos
 * colombianos y la fecha en que fue creado.
 *
 * @example
 * ```ts
 * const pedido: Order = {
 *   id: 1,
 *   customerName: 'Carlos Ramírez',
 *   product: 'Small Wooden Ball',
 *   quantity: 18,
 *   totalPrice: 631728,
 *   status: 'Pendiente',
 *   date: '2026-03-29'
 * };
 * ```
 */
export interface Order {
  /** Identificador único del pedido */
  id: number;

  /** Nombre del cliente que realizó el pedido */
  customerName: string;

  /** Nombre del producto pedido */
  product: string;

  /** Cantidad de unidades del producto */
  quantity: number;

  /** Precio total del pedido en pesos colombianos */
  totalPrice: number;

  /** Estado actual del pedido */
  status: OrderStatus;

  /** Fecha del pedido (formato ISO string) */
  date: string;
}

/**
 * Tipo de estado de un pedido.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Pendiente'
 * - 'En proceso'
 * - 'Entregado'
 * - 'Cancelado'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: OrderStatus = 'Pendiente';
 * ```
 */
export type OrderStatus = 'Pendiente' | 'En proceso' | 'Entregado' | 'Cancelado';
