import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql', // Change this to your SQL database type
      host: 'localhost', // Your database host
      port: 3306, // Your database port
      username: 'root', // Your database username
      password: 'Ashoka@2500', // Your database password
      database: 'commerce', // Your database name
      entities: [Product], // Add your entity classes here
      synchronize: false, // Set to true for development, false for production
    }),
    ProductsModule,
  ],
})
export class AppModule {}