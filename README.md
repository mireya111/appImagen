# Subida de imágenes con Ionic y Supabase

**Autor:** García Mireya

## 📌 ¿Qué hace esta app?

Permite subir imágenes o archivos a Supabase. Al subir, se guarda la info (nombre, url, tipo) en una tabla para poder listarlos después, ya que desde el bucket no se pueden realizar la consulta por seguridad (ciertas restricciones de Supabase). Se puede visualizar la imagen que se subio recientemente al bucket, la table y todas las imagenes registradas en la esta última; las imagenes se pueden visualizar más de cerca y los archivos pueden descargarse.

---

## 🛠️ Herramientas usadas

- Ionic Angular (standalone)
- Supabase
- TypeScript
- RxJS
- HTML/SCSS

---

## ⚙️ Pasos seguidos

1. **Crear app**  
   `ionic start myApp blank --type=angular`

2. **Instalar Supabase**  
   `npm install @supabase/supabase-js`

3. **Configurar conexión**  
   Se crea el archivo `supabase-clients.ts` y ahí se ponen las credenciales de Supabase.

4. **Crear bucket**  
   Se crea en Supabase, nombre usado: `archivosactividad`. Puede ser público o privado (en este caso es público).

6. **Otorgación de permisos**
   Se crea una politica en el bucket anteriormente creado que permita insertar los archivos que se desee. 

7. **Crear tabla**  
   Tabla `archivos` con: `id`, `nombre`, `url`, `tipo`. Sirve para listar lo subido.

8. **Otorgación de permisos**
   Se da permisos de escritura para registrar la información de la imagen.

7. **Crear servicio**  
   `ionic generate service services/subida-de-imagenes`  
   Sube el archivo al bucket y guarda los datos en la tabla.

8. **Se codifica**

## Evidencia del diseño y el funcionamiento 
**Opciones a seleccionar**
![image](https://github.com/user-attachments/assets/040611ee-6819-4463-b021-35566330b7f0)

**Subida de un archivo**
![image](https://github.com/user-attachments/assets/7d548cce-a0c7-4c44-ac95-9e00b80318d0)

![image](https://github.com/user-attachments/assets/242a0239-1868-429e-946a-25c000018dd5)

**Confirmación de la subida de la imagen en bucket de Supabase**
![image](https://github.com/user-attachments/assets/fb0fbfef-a1a0-44d4-a82b-b7362a2b106c)

**Confirmación de la subida de la imagen en una tabla de Supabase**
![image](https://github.com/user-attachments/assets/9e2ee3a5-4933-4012-8791-2b3e41900216)

**Visualizar todos los archivos registrados**
Cabe recalcar que se registraron mas archivos para que se visualice la funcionalidad.

![image](https://github.com/user-attachments/assets/f74bd859-74fb-4358-ae38-45377875a59b)

![image](https://github.com/user-attachments/assets/3e92ff44-0997-4b76-96dd-46cfd371b71e)

![image](https://github.com/user-attachments/assets/3861e58c-0d2f-4767-9211-c4a69b4aa267)

## 🧪 Para correr el proyecto

```bash
npm install
ionic serve
