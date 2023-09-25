import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap.model';
import { faceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss']
})
export class SnapFaceListComponent implements OnInit {
  faceSnaps! : FaceSnap[];

  constructor(private faceSnapsService : faceSnapsService) { }

    ngOnInit(): void {
    
    this.faceSnaps = this.faceSnapsService.faceSnaps  
  }

  
}
