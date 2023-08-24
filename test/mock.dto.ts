export class CreateProductDto {
    readonly id:number
    readonly name: string;
    readonly category: string;
    readonly price: number;
    readonly stockQuantity: number;
    readonly country:string
  }

export class UpdateProductDto {
    readonly productName?: string; // Optional fields for updating
    readonly category?: string;
    readonly price?: number;
    readonly stockQuantity?: number;
  }
  