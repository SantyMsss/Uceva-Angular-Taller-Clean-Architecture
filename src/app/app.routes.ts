import { Routes } from '@angular/router';
import { UsersPage } from './presentation/pages/users/users.page';
import { ProductsPage } from './presentation/pages/products/products.page';
import { OrdersPage } from './presentation/pages/orders/orders.page';
import { InventoryPage } from './presentation/pages/inventory/inventory.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de pedidos.
   *
   * @remarks
   * Renderiza el componente `OrdersPage`, encargado
   * de mostrar y gestionar el listado de pedidos.
   */
  { path: 'orders', component: OrdersPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: 'inventory', component: InventoryPage },

  { path: '**', redirectTo: 'users' },
];