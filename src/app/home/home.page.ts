import { Component } from '@angular/core';
import { SubidaDeImagenesService, SubidaDeImagenes } from '../services/subida-de-imagenes.service';
import { BehaviorSubject } from 'rxjs';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';
import { NgIf, AsyncPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NgIf, AsyncPipe, IonButton, NgForOf],
})
export class HomePage {
  imagen: SubidaDeImagenes | null = null;
  urlImagen$ = new BehaviorSubject<string | null>(null);
  selectedFile: File | null = null; 
  imagenesPersistentes: any[] = [];
  //Para ocultar la fotografia recien subida y la galeria de fotografias
  mostrarFotografiaRecienSubida: boolean = false;
  mostrarGaleriaFotografias: boolean = false;

  constructor(private subidaService: SubidaDeImagenesService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.mostrarFotografiaRecienSubida = false; // Ocultar fotografía recién subida al seleccionar un nuevo archivo
  }

  async subirImagen() {
    if (this.selectedFile) {
      this.imagen = {
        archivo: this.selectedFile,
        url: this.urlImagen$,
        nombre: this.selectedFile.name,
        tipo: this.selectedFile.type
      };
      await this.subidaService.subirImagen(this.imagen);
      alert('Imagen subida con éxito: ' + this.urlImagen$.getValue());
      // Limpiar el archivo seleccionado después de subir
      this.selectedFile = null; 
      this.mostrarFotografiaRecienSubida = true; 
    } else {
      alert('No se ha seleccionado ningún archivo para subir.');
    }
  }

  async obtenerImagenes() {
    this.imagenesPersistentes = await this.subidaService.obtenerImagenesPersistentes();
    this.mostrarGaleriaFotografias = true; 
  }
}
