import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { Inventory } from '../../domain/models/inventory.model';
import { Order } from '../../domain/models/order.model';
import { Product } from '../../domain/models/product.model';
import { User } from '../../domain/models/user.model';
import { DataService } from './data.service';
import { INVENTORY_MOCK } from '../../../mocks/inventory.mocks';
import { ORDERS_MOCK } from '../../../mocks/orders.mocks';
import { USERS_MOCK } from '../../../mocks/users.mocks';
import { PRODUCTS_MOCK } from '../../../mocks/products.mocks';

jest.mock('@faker-js/faker', () => ({
  faker: {
    commerce: {
      productName: jest.fn(() => 'Producto Test'),
      price: jest.fn(() => '10.00'),
    },
    person: {
      firstName: jest.fn(() => 'Juan'),
      lastName: jest.fn(() => 'Pérez'),
    },
    number: {
      int: jest.fn(() => 30),
    },
    internet: {
      email: jest.fn(() => 'test@mail.com'),
    },
    date: {
      recent: jest.fn(() => new Date('2024-06-01T12:00:00Z')),
    },
    helpers: {
      arrayElement: jest.fn((arr) => arr[0]),
    },
  },
}));

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  const countUsers = 5;
  const countProducts = 5;
  const countOrders = 5;
  const countInventories = 5;
  const pathUrlNode = `${environment.baseUrlNode}/api`;
  const pathUrlSpringBoot = `${environment.baseUrlSpringBoot}/api`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  it('debe crearse correctamente', () => {
      expect(service).toBeTruthy();
  });
  
  it('debe devolver el listado de usuarios locale', (done) => {
    service.getAllUsersLocal(countUsers).subscribe((users: User[]) => {
      expect(users.length).toEqual(countUsers);
      done();
    });
  });

  it('debe devolver el listado de productos locale', (done) => {
    service.getAllProductsLocal(countProducts).subscribe((products: Product[]) => {
      expect(products.length).toEqual(countProducts);
      done();
    });
  });

  it('debe obtener usuarios desde Node por HTTP', () => {
    service.getAllUsersNode(countUsers).subscribe((users) => {
      expect(users).toEqual(USERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/users/${countUsers}`);
    expect(req.request.method).toBe('GET');
    req.flush(USERS_MOCK);
  });

  it('debe obtener productos desde Node por HTTP', () => {
    service.getAllProductsNode(countProducts).subscribe((products) => {
      expect(products).toEqual(PRODUCTS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/products/${countProducts}`);
    expect(req.request.method).toBe('GET');
    req.flush(PRODUCTS_MOCK);
  });

  it('debe obtener usuarios desde SpringBoot por HTTP', () => {
    service.getAllUsersSpringBoot(countUsers).subscribe((users) => {
      expect(users).toEqual(USERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/users/${countUsers}`);
    expect(req.request.method).toBe('GET');
    req.flush(USERS_MOCK);
  });

  it('debe obtener productos desde SpringBoot por HTTP', () => {
    service.getAllProductsSpringBoot(countProducts).subscribe((products) => {
      expect(products).toEqual(PRODUCTS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/products/${countProducts}`);
    expect(req.request.method).toBe('GET');
    req.flush(PRODUCTS_MOCK);
  });

  it('debe obtener pedidos desde Node por HTTP', () => {
    service.getAllOrdersNode(countOrders).subscribe((orders: Order[]) => {
      expect(orders).toEqual(ORDERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/orders/${countOrders}`);
    expect(req.request.method).toBe('GET');
    req.flush(ORDERS_MOCK);
  });

  it('debe obtener pedidos desde SpringBoot por HTTP', () => {
    service.getAllOrdersSpringBoot(countOrders).subscribe((orders: Order[]) => {
      expect(orders).toEqual(ORDERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/orders/${countOrders}`);
    expect(req.request.method).toBe('GET');
    req.flush(ORDERS_MOCK);
  });

  it('debe devolver el listado de inventarios local', (done) => {
    service.getAllInventoryLocal(countInventories).subscribe((inventories: Inventory[]) => {
      expect(inventories.length).toEqual(countInventories);
      done();
    });
  });

  it('debe obtener inventarios desde Node por HTTP', () => {
    service.getAllInventoryNode(countInventories).subscribe((inventories: Inventory[]) => {
      expect(inventories).toEqual(INVENTORY_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/inventory/${countInventories}`);
    expect(req.request.method).toBe('GET');
    req.flush(INVENTORY_MOCK);
  });

  it('debe obtener inventarios desde SpringBoot por HTTP', () => {
    service.getAllInventorySpringBoot(countInventories).subscribe((inventories: Inventory[]) => {
      expect(inventories).toEqual(INVENTORY_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/inventory/${countInventories}`);
    expect(req.request.method).toBe('GET');
    req.flush(INVENTORY_MOCK);
  });

});