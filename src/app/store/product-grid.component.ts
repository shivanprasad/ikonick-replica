import {Component, Input} from "@angular/core";
import {ProductCardItemModel} from "./product-card-item.model";
import {mock_product_card_list_best_sellers, mock_product_card_list_bundles} from "./mock_product_card_list";

@Component({
  selector: 'ikonick-product-grid-best-sellers',
  templateUrl: 'product-grid.component.html',
  styleUrls: ['product-grid.component.css']
})
export class ProductGridComponent {
  cards: ProductCardItemModel [] = [];

  constructor(){
    for(var card of mock_product_card_list_best_sellers){
      this.cards.push(card);
    }
  }
}

@Component({
  selector: 'ikonick-product-grid-bundles',
  templateUrl: 'product-grid.component.html',
  styleUrls: ['product-grid.component.css']
})
export class ProductGridComponentBundles {
  cards: ProductCardItemModel [] = [];

  constructor(){
    for(var card of mock_product_card_list_bundles){
      this.cards.push(card);
    }
  }
}
