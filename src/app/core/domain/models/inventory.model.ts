/**
 * Interfaz que representa un inventario.
 * 
 * Contiene la información básica necesaria para mostrar un inventario
 * en la tabla o en cualquier componente de listado.
 * 
 * @remarks
 * Cada inventario debe tener un `id` único, un `productId` que referencia a un producto existente,
 * una `quantity` que indica la cantidad disponible
 * y una `lastUpdated` que registra la última fecha de actualización del inventario.
 * 
 * @example
 * ```ts
 * const inventario: Inventory = {
 *   id: 1,
 *  productId: 1,
 *  productName: 'Portatil Dell XPS 13',
 *  quantity: 100,
 *  movements: 'entrada',
 *  lastUpdated: new Date('2024-06-01T12:00:00Z')
 * };
 * ```
 */
export interface Inventory {
    /** Identificador único del inventario */
    id: number;
    /** Identificador del producto al que pertenece el inventario */
    productId: number;
    /** Nombre del producto */
    productName: string;
    /** Cantidad disponible del producto */
    quantity: number;
    /** Tipo de movimiento del inventario */
    movements: InventoryMovement;

    /** Última fecha de actualización del inventario */
    lastUpdated: Date;
}
/**
 * Tipo de movimiento del inventario.
 * 
 * @remarks
 * Este tipo restringe los movimientos a los valores predefinidos:
 * - 'entrada'
 * - 'salida'
 * - 'ajuste'
 * Se utiliza principalmente para mapear badges de colores en la UI.
 * 
 * @example
 * ```ts
 * const movimiento: InventoryMovement = 'entrada';
 * ```
 */
export type InventoryMovement = 'entrada' | 'salida' | 'ajuste';    
 