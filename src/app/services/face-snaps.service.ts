import { Injectable } from "@angular/core";
import { FaceSnap } from "../face-snap/models/face-snap.model";

@Injectable({
    providedIn: "root"
})



export class faceSnapsService{

    faceSnaps: FaceSnap[] = [
        {
          title: "Me",
          description: "It's me, Okay !? 🤪.",
          imgUrl: "https://media.licdn.com/dms/image/D4E03AQHEts4hMpHr6A/profile-displayphoto-shrink_800_800/0/1683886850340?e=2147483647&v=beta&t=QMCmuBueDbOSpUTfCAfqOv-BEVBsDNjEXSRjNzXHcCo",
          createdDate: new Date(),
          snaps: 12562,
          location: "Le grand-Celland"
        },
        {
          title: "A f*****g duck",
          description: "Coin-coin, i'm a duck 🦆",
          imgUrl: "https://images.pexels.com/photos/16725752/pexels-photo-16725752/free-photo-of-oiseau-animal-longue-exposition-faune.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          createdDate: new Date(),
          snaps: 355,
          location: "Brecey"
        },
        {
          title: "My refuge",
          description: "Beyond the clouds",
          imgUrl: "https://ecodev.ch/wp-content/uploads/2019/06/joshua-earle-12689-unsplash.jpg",
          createdDate: new Date(),
          snaps: 0,
        }
      ]
}