import {Component, Input} from "@angular/core";

@Component({
  selector: 'ikonick-product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: ['product-card.component.css']
})

export class ProductCardComponent{
  @Input() img: string;
  @Input() title: string;
  @Input() description: string;
  @Input() price: string;

  constructor(){
    this.img = "";
    this.title = "";
    this.description = "";
    this.price = "";
  }
}
