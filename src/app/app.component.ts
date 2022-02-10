import { Component } from '@angular/core';
import {CarouselItemsModel} from "./pages/index/carousel-items.model";
import {mock_carousel_items_list} from "./pages/index/mock_carousel_items_list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ikonick';
  carousels: CarouselItemsModel [] = [];

  constructor(){
    for(var carousel of mock_carousel_items_list){
      this.carousels.push(carousel);
    }
  }
}
