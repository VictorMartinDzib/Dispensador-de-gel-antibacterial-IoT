import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from '../../services/firebasedb.service';
import { ToastController } from '@ionic/angular';
import { interval } from 'rxjs';

@Component({
  selector: 'app-desipensador',
  templateUrl: './desipensador.page.html',
  styleUrls: ['./desipensador.page.scss'],
})
export class DesipensadorPage implements OnInit {

  toggleStatus: boolean = false;
  public total: Number;
  public estadoText: string;
  public values: dbf;
  constructor(public dispensadordb: FirebasedbService, public toastController: ToastController) {
    this.updateTotal();
  }

  ngOnInit() {
    this.dispensadordb.getEstadoDispensador().subscribe(
      (resp: dbf) => {
        this.values = resp;
        this.total = this.values.usos;
        this.estadoText = this.values.status;
        if (this.estadoText == "encendido") {
          this.toggleStatus = true;
        } else {
          this.toggleStatus = false;
        }
      }
    )
  }

  async updateTotal() {

    /** 
     * 'interval'
     * Esta funcion se encarga de realizar peticiones cada segundo para actualizar la informacion
     * del total de usos en tiempo real
    */

    const cambiarCadaSegundo = await interval(1000).subscribe(x => { 
      this.dispensadordb.getEstadoDispensador().subscribe(
        (resp: dbf) => {
          this.total = resp.usos;
          this.estadoText = resp.status;
          if (this.estadoText == "encendido") {
            this.toggleStatus = true;
          } else {
            this.toggleStatus = false;
          }
        }
      )
    });
  }

  cambiarEstado(event) {

    if (this.toggleStatus) {
      this.estadoText = "encendido";
    } else {
      this.estadoText = "apagado"
    }
    this.dispensadordb.setEstado(this.estadoText);
  }

  //Toast o mensaje con informacion del proyecto
  async presentModal() {
    const toast = await this.toastController.create({
      message: 'Desarrollado por Victor Martin Dzib',
      duration: 2000
    });
    toast.present()
  }

}
