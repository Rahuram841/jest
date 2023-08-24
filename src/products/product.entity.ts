import { Entity, PrimaryGeneratedColumn,Column} from 'typeorm';


@Entity('products')
export class Product{
    @PrimaryGeneratedColumn({name:"ProductId"})
    id:number;

    @Column({name:"ProductName"})
    name:String;

    @Column({name:"Category"})
    category:string;

    @Column({name:"Price",type:'decimal'})
    price:number;

    @Column({name:'StockQuantity'})
    stockQuantity:number;

    @Column({name:'Country'})
    country:string;
}