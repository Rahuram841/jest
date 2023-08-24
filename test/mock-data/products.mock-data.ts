// test/unit/mock-data/products.mock-data.ts
import { Product } from '../../src/products/product.entity';

export const productsMockData: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    category: 'Category 1',
    price: 10.99,
    stockQuantity: 50,
    country:""
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 20.99,
    stockQuantity: 30,
    country:''
  },
  // Add more mock products as needed
];
