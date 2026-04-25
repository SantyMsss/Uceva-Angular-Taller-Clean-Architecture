import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrderRepository } from "../../../domain/repositories/order.repository";
import { DataService } from "../../services/data.service";
import { Order } from "../../../domain/models/order.model";

/**
 * Implementación concreta del repositorio de pedidos.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y cumple
 * el rol de **Adapter** entre el dominio y la fuente de datos.
 *
 * Implementa el contrato {@link OrderRepository}
 * utilizando {@link DataService} como datasource.
 *
 * Este patrón permite:
 * - Desacoplar el dominio de detalles técnicos
 * - Sustituir la fuente de datos sin afectar casos de uso
 * - Facilitar pruebas unitarias mediante mocks
 *
 * @see {@link OrderRepository}
 * @see {@link DataService}
 */
@Injectable()
export class OrderNodeRepositoryImpl extends OrderRepository {

    /**
     * Datasource encargado de obtener los datos de pedidos.
     *
     * @remarks
     * Se inyecta mediante la API `inject()` de Angular,
     * recomendada en arquitecturas modernas y código standalone.
     */
    private dataService = inject(DataService);

    /**
     * Obtiene el listado completo de pedidos.
     *
     * @remarks
     * Implementa el método definido en
     * {@link OrderRepository#getAll}.
     *
     * En este nivel se pueden realizar:
     * - Transformaciones de datos
     * - Manejo de errores
     * - Políticas de caché
     *
     * @returns Observable que emite un arreglo de {@link Order}
     */
    getAll(countOrders: number): Observable<Order[]> {
        return this.dataService.getAllOrdersNode(countOrders);
    }

}
