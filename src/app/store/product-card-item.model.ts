export class ProductCardItemModel {
  img: string;
  title: string;
  description: string;
  price: string;

  constructor(img:string, title:string, description:string, price:string){
    this.img = img;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}
