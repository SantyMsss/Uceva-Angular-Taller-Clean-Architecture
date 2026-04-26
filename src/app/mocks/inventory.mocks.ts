import { Inventory } from "../core/domain/models/inventory.model";
/**
 * Datos de inventario de ejemplo para pruebas y desarrollo.
 * Estos datos se utilizan para simular la respuesta de la API REST
 * y permitir el desarrollo de la interfaz de usuario sin depender
 * de un backend real.
 * 
 * Cada objeto en el array representa un registro de inventario con
 * información como el id, productId, productName, quantity, movements y lastUpdated.
 * 
 * @remarks
 * Estos datos son estáticos y no cambian durante la ejecución de la aplicación.
 * Se recomienda utilizarlos solo para propósitos de desarrollo y pruebas, y no deben
 * ser utilizados en producción.
 * 
 * @example
 * ```ts
 * import { INVENTORY_MOCK } from './inventary.mocks';
 * console.log(INVENTORY_MOCK);
 * ```
 */
export const INVENTORY_MOCK: Inventory[] = [
    {
        id: 1,
        productId: 1,   
        productName: 'Portatil Dell XPS 13',
        quantity: 100,
        movements: 'entrada',
        lastUpdated: new Date('2024-06-01T12:00:00Z')
    },
    {   
        id: 2,
        productId: 2,
        productName: 'Smartphone Samsung Galaxy S21',
        quantity: 50,
        movements: 'salida',
        lastUpdated: new Date('2024-06-02T15:30:00Z')
    }

];