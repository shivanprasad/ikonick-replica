import { Component } from '@angular/core';
import {CarouselItemsModel} from "./pages/carousel-items.model";
import {mock_carousel_items_list} from "./pages/mock_carousel_items_list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ikonick';

}
