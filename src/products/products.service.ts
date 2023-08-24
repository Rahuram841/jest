// src/products/products.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    console.log("getProducts")
    const response =  await this.productRepository.find();
    return response;
  }

  async getProduct(id: number): Promise<Product> {
  
    return this.productRepository.findOneBy({id:id});
  }

  async createProduct(productData: Product): Promise<Product> {
    const newProduct = this.productRepository.create(productData);
    return this.productRepository.save(newProduct);
  }

  async updateProduct(id: number, productData: Product): Promise<Product> {
    await this.productRepository.update(id, productData);
    return this.getProduct(id);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
