import { Order } from "../core/domain/models/order.model";

export const ORDERS_MOCK: Order[] = [
    {
        id: 1,
        customerName: 'Alexandrine Hilpert',
        product: 'Small Wooden Ball',
        quantity: 18,
        totalPrice: 631728,
        status: 'Pendiente',
        date: '2026-03-29',
    },
    {
        id: 2,
        customerName: 'Conor Hahn',
        product: 'Sleek Cotton Hat',
        quantity: 11,
        totalPrice: 421509,
        status: 'Pendiente',
        date: '2026-04-12',
    }
];
