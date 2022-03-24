import { Component } from '@angular/core';
import {CarouselItemsModel} from "./store/carousel-items.model";
import {mock_carousel_items_list} from "./store/mock_carousel_items_list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ikonick';

}
