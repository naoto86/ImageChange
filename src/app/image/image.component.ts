import { Component, OnInit,Input } from '@angular/core';
import { Effect } from '../effect/effect';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input()effectName:string;
  @Input()effectClass:string;
  imgSrc:string;
  constructor() { }
  ngOnInit() {
     this.imgSrc = '../../img/IMG_5070.JPG';
  }
}
