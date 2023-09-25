import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { faceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;

  title! : string;
  description! : string;
  createdDate! : Date;
  snaps! : number;
  imgUrl!: string;
  snapped! : boolean;
  btnContent! : string;

  constructor(private faceSnapService: faceSnapsService) {}

  ngOnInit() {
    this.snapped = false
    this.btnContent = "Oh Snap !"
  }

  
  onAddOrRemoveSnap() {
    if (this.snapped === false) {
      this.snapped = true 
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "snap");
      this.btnContent = "Oops unsnap !"  
    }
    else {
      this.snapped = false;
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "unsnap")
      this.btnContent = "Oh Snap !"
    }
  }
  
}



