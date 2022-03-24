import {Component, OnInit} from '@angular/core'
import {CarouselItemsModel} from "./carousel-items.model";
import {CarouselsService} from "./carousels.service";

@Component({
  selector: 'ikonick-home-layout',
  templateUrl: 'home-layout.component.html',
  styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit{
  carousels: CarouselItemsModel [] = [];

  constructor(private carouselsService:CarouselsService){
  }

  ngOnInit(): void {
    this.carouselsService.getCarousels().subscribe((data: CarouselItemsModel []) => {
      console.log("Fetching carousels");
      for(var carousel of data){
        console.log(carousel);
        this.carousels.push(carousel);
      }
    });
    throw new Error("Method not implemented.");
  }
}
