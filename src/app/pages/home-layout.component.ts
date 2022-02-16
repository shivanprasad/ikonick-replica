import { Component } from '@angular/core'
import {CarouselItemsModel} from "./carousel-items.model";
import {mock_carousel_items_list} from "./mock_carousel_items_list";

@Component({
  selector: 'ikonick-home-layout',
  templateUrl: 'home-layout.component.html',
  styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent{
  carousels: CarouselItemsModel [] = [];

  constructor(){
    for(var carousel of mock_carousel_items_list){
      this.carousels.push(carousel);
    }
  }
}
