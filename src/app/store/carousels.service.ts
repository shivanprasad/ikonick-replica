import {HttpClient} from "@angular/common/http";
import {CarouselItemsModel} from "./carousel-items.model";
import {Injectable} from "@angular/core";

@Injectable(
  {providedIn: 'root'}
)
export class CarouselsService{
  private baseUrl: string = "https://ikonick-replica-default-rtdb.firebaseio.com/";
  private carouselsEndPoint: string = "carousel_items.json"

  constructor(private http:HttpClient){
  }
  getCarousels(){
    return this.http.get<CarouselItemsModel []>(this.baseUrl + this.carouselsEndPoint);
  }

  getCarousel(index: number){
    return this.http.get<CarouselItemsModel>(this.baseUrl + 'carousel_items' + '/' + index + '.json');
  }
}
