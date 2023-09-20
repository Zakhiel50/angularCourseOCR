import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
title! : string;
description! : string;
createdDate! : Date;
snaps! : number;
imgUrl!: string; 

ngOnInit() {
  this.title = "Me :)";
  this.description = "It's me, Okay !? 🤪."
  this.createdDate = new Date();
  this.snaps = 6;
  this.imgUrl = "https://media.licdn.com/dms/image/D4E03AQHEts4hMpHr6A/profile-displayphoto-shrink_800_800/0/1683886850340?e=2147483647&v=beta&t=QMCmuBueDbOSpUTfCAfqOv-BEVBsDNjEXSRjNzXHcCo";

}
}
