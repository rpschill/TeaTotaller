import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

interface TeaModel {
  Batch: string;
  BrewTemp: number;
  BrewTempScale: string;
  Caffeine: boolean;
  Ingredients: string[];
  Manufacturer: string;
  Measurement: string;
  Name: string;
  Notes: string;
  Origin: string;
  SteepingTime: number;
  SteepingTimeRange: { From: number, To: number };
  TeaType: string;
  UseSteepingRange: boolean;
}

@Injectable()
export class TeaService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  addTea(data: TeaModel): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('teas')
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getTeas() {
    return this.firestore.collection('teas').snapshotChanges();
  }

  updateTea(data, updates) {
    return this.firestore
      .collection('teas')
      .doc(data.payload.doc.id)
      .set(updates);
  }

  deleteTea(data) {
    return this.firestore
      .collection('teas')
      .doc(data.payload.doc.id)
      .delete();
  }
}
