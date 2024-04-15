import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arma-tu-pc-app',
  templateUrl: './arma-tu-pc-app.component.html',
  styleUrls: ['./arma-tu-pc-app.component.css']
})
export class ArmaTuPcAppComponent implements OnInit {

  ram: string = 'RAM16';
  procesador: string = 'Corei9N8';
  tarjetaGrafica: string = '';
  discoDuro: string = 'HDD';
  fuenteAlimentacion: number = 600;
  precioTotal: number = 0;
  opcionesRAM: string[] = ['RAM32', 'RAM16', 'RAM8'];
  opcionesProcesador: string[] = ['Corei9N8', 'Corei7N7', 'Corei5N5'];
  opcionesTarjetaGrafica: string[] = ['NVIDIA RTX 3080', 'NVIDIA RTX 3070', 'NVIDIA RTX 3060'];
  opcionesDiscoDuro: string[] = ['HDD', 'SSD']; 

  constructor() { }

  ngOnInit(): void {
  }


}

