import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { supabase } from '../supabase-client'; 

//¿Qué se recibirá?
export interface SubidaDeImagenes {
  //Archivo que se subirá
  archivo: File;
  //URL del archivo subido
  url: BehaviorSubject<string | null>; 
  //Nombre del archivo
  nombre: string; 
  //Tipo de archivo
  tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubidaDeImagenesService {
  //Bucket que almacenará las imágenes
  private bucket = "archivosactividad";
  private imagenes: SubidaDeImagenes[] = [];

  constructor() {}

  //Método para subir una imagen
  async subirImagen(imagen: SubidaDeImagenes){
    // Subir archivo a Supabase Storage
    const { error } = await supabase
      .storage
      .from(this.bucket)
      .upload(imagen.nombre, imagen.archivo);

    if (error) {
      imagen.url.next(null);
      console.error('Error subiendo imagen:', error);
      return;
    }

    // Obtener URL pública
    const { data } = supabase
      .storage
      .from(this.bucket)
      .getPublicUrl(imagen.nombre);

    imagen.url.next(data.publicUrl);
    // Puedes agregar la imagen a tu arreglo si lo necesitas
    this.imagenes.push(imagen);
    console.log('Imagen subida con éxito:', data.publicUrl);
    // Guardar la información en la tabla 'imagenes'
    const { error: dbError } = await supabase
      .from('persistenciaImagen')
      .insert([
        {
          nombre: imagen.nombre,
          url: data.publicUrl,
          tipo: imagen.tipo
        }
      ]);

    if (dbError) {
      console.error('Error guardando en la base de datos:', dbError);
    }
  }

  // Método para obtener imágenes persistentes
  async obtenerImagenesPersistentes(): Promise<any[]> {
    const { data, error } = await supabase
      .from('persistenciaImagen')
      .select('*');

    if (error) {
      console.error('Error obteniendo imágenes persistentes:', error);
      return [];
    }

    return data || [];
  }
}
