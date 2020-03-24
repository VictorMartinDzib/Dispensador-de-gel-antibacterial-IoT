import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseAnalytics } from '@angular/fire';
import { map } from 'rxjs/operators';
import {interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebasedbService {

  //Nombre de la coleccion
  private collectionUrl = "dispensador"

  constructor(private http: HttpClient, public db: AngularFireDatabase) {}

  public setEstado(estado: string) {
    //Actualizando el estado unicamente
    const dis = this.db.object(this.collectionUrl);
    dis.update({ status: estado });

  }

  public getEstadoDispensador() {
    return this.db.object(this.collectionUrl).valueChanges().pipe()
  }
}
