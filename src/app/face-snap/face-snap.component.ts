import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() FaceSnap! : FaceSnap;

  title! : string;
  description! : string;
  createdDate! : Date;
  snaps! : number;
  imgUrl!: string;
  snapped! : boolean;
  btnContent! : string;

  ngOnInit() {
    this.snapped = false
    this.btnContent = "Oh Snap !"
  }

  
  onAddOrRemoveSnap() {
    if (this.snapped === false) {
      this.snapped = true 
      this.FaceSnap.snaps++;
      this.btnContent = "Oops unsnap !"  
    }
    else {
      this.snapped = false;
      this.FaceSnap.snaps--
      this.btnContent = "Oh Snap !"
    }
  }
  
}



