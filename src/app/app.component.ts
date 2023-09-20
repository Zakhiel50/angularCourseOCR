import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/models/face-snap.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap! : FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  
  ngOnInit() {
    this.mySnap = new FaceSnap(
      "Me",
      "It's me, Okay !? 🤪.",
      "https://media.licdn.com/dms/image/D4E03AQHEts4hMpHr6A/profile-displayphoto-shrink_800_800/0/1683886850340?e=2147483647&v=beta&t=QMCmuBueDbOSpUTfCAfqOv-BEVBsDNjEXSRjNzXHcCo",
      new Date(),
      0,
    );

    this.myOtherSnap = new FaceSnap(
      "A f*****g duck",
      "Coin-coin, i'm a duck 🦆",
      "https://images.pexels.com/photos/16725752/pexels-photo-16725752/free-photo-of-oiseau-animal-longue-exposition-faune.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      new Date(),
      0,
    )

    this.myLastSnap = new FaceSnap(
      "My refuge",
      "Beyond the clouds",
      "https://ecodev.ch/wp-content/uploads/2019/06/joshua-earle-12689-unsplash.jpg",
      new Date(),
      0,
    )
  }
}
