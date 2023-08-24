import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../../src/products/products.controller';
import { ProductsService } from '../../src/products/products.service';
import { Product } from '../../src/products/product.entity';
import { productsMockData } from '../mock-data/products.mock-data';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;
  let productRepository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    productsController = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
    productRepository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  describe('getAllProducts', () => {
    it('should return an array of products', async () => {
      jest.spyOn(productsService, 'getAllProducts').mockResolvedValue(productsMockData);

      const result = await productsController.getAllProducts();
      console.log(result)
      expect(result).toEqual(productsMockData);
    });
  });

  describe('getProduct', () => {
    it('should retrieve a single product by ID', async () => {
      const productId = 1;
      const mockProduct = productsMockData.find(product => product.id === productId);
      jest.spyOn(productsService, 'getProduct').mockResolvedValue(mockProduct);

      const result = await productsController.getProduct(productId);
      console.log(result)
      expect(result).toEqual(mockProduct);
    });
  });

  // ... Other test cases for createProduct, updateProduct, deleteProduct ...
});
