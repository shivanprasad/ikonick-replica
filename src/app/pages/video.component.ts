import {Component, Input} from "@angular/core";

@Component({
  selector: 'ikonick-video',
  templateUrl: 'video.component.html',
  styleUrls: ['video.component.css']
})

export class VideoComponent {
  @Input() main_text: string;
  @Input() secondary_text: string;
  @Input() img_link: string;

  constructor(){
    this.main_text = "";
    this.secondary_text = "";
    this.img_link = "";
  }

}
