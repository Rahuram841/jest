import { Factory, Seeder } from 'typeorm-seeding';
import { Product } from '../src/products/product.entity';

export class ProductFixture implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Product)()
      .map(async (product: Product) => {
        product.name = 'Sample Product';
        product.category = 'Sample Category';
        product.price = 50.0;
        product.stockQuantity = 100;
        return product;
      })
      .createMany(10); // Create 10 mock products
  }
}


