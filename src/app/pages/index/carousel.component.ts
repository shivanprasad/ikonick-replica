import {Component, Input} from "@angular/core";

@Component({
  selector: 'ikonick-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.css']
})

export class CarouselComponent {
  @Input() title: string;

  @Input() img1: string;
  @Input() text1: string;

  @Input() img2: string;
  @Input() text2: string;

  @Input() img3: string;
  @Input() text3: string;

  @Input() img4: string;
  @Input() text4: string;

  @Input() img5: string;
  @Input() text5: string;

  @Input() img6: string;
  @Input() text6: string;

  @Input() img7: string;
  @Input() text7: string;

  @Input() img8: string;
  @Input() text8: string;

  @Input() img9: string;
  @Input() text9: string;

  @Input() img10: string;
  @Input() text10: string;

  @Input() img11: string;
  @Input() text11: string;

  @Input() img12: string;
  @Input() text12: string;

  constructor(){
    this.title = "";

    this.img1 = "";
    this.text1 = "";

    this.img2 = "";
    this.text2 = "";

    this.img3 = "";
    this.text3 = "";

    this.img4 = "";
    this.text4 = "";

    this.img5 = "";
    this.text5 = "";

    this.img6 = "";
    this.text6 = "";

    this.img7 = "";
    this.text7 = "";

    this.img8 = "";
    this.text8 = "";

    this.img9 = "";
    this.text9 = "";

    this.img10 = "";
    this.text10 = "";

    this.img11 = "";
    this.text11 = "";

    this.img12 = "";
    this.text12 = "";
  }

}
