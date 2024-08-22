Galería de fotos

En este ejercicio se practica:

    Binding
    Directivas estructurales
    Utilización del directorio assets

Se trata de programar una galería de fotos en el componente galería del ejercicio anterior.

Ejemplo modelo: https://carherco.es/curso-angular/#/galeria

(Este ejemplo modelo es similar pero no es exacto. Es para tener una idea. Lo que se pide realmente es lo que está escrito en el enunciado de este documento).

NOTA: Este ejercicio se puede programar en un componente del proyecto anterior o también se puede programar en un proyecto nuevo.

1. Descarga al menos 8 fotos y ponlas en el directorio src/assets del proyecto. Dentro de src/assets puedes crear subdirectorios si así lo deseas

Desde el html puedes enlazar las imágenes de la siguiente forma:

<img src=”assets/….” />

2. Crea una lista (array) con objetos del tipo:

´´´js
{
  id: number => 'id de la foto'
  src: string => nombre o path de la imagen
  title => title de la imagen
}
´´´
Puedes crear la lista en un archivo, en un servicio, en el propio componente…, pero sea como sea al final del todo esa lista tiene que llegar a una propiedad pública del componente Galería.

3. La galería de fotos constará de 3 partes:

    · Imagen seleccionada: Una parte con la lista de todas las imágenes (en pequeño) de la galería.
    · Listado de imágenes: Una parte en la que se muestre en grande una de las fotos
    · Botonera: Una parte con una botonera con 6 botones: anterior, siguiente, aumentar, disminuir, play, stop.

Crea la estructura HTML para mostrar esas 3 partes/bloques en la pantalla

4. Programa la galería, las funcionalidades son las siguientes:

    · Al empezar, se mostrará una de las imágenes en la parte de Imagen seleccionada.
    · Al hacer click en una imagen de la lista, la imagen correspondiente se mostrará en la parte de imagen seleccionada.
    · Al hacer click en el botón siguiente, se cambiará la imagen seleccionada por la siguiente de la lista.
    · Se pondrá “disabled” el botón siguiente cuando la imagen seleccionada sea la última de la lista.
    · Al hacer click en el botón anterior, se cambiará la imagen seleccionada por la anterior de la lista.
    · Se pondrá “disabled” el botón anterior cuando la imagen seleccionada sea la primera de la lista.
    · Al hacer click en el botón Aumentar, se agrandará el tamaño de la imagen seleccionada.
    · Al hacer click en el botón Disminuir, se reducirá el tamaño de la imagen seleccionada.
    · Al hacer click en el botón Play, se “pondrá en marcha el reproductor”, es decir, la imagen seleccionada empezará a cambiar cada 2 segundos. Cuando el reproductor llegue a la última imagen volverá a empezar por la primera.
    · Al hacer click en el botón Stop, se detendrá el reproductor, es decir, la imagen seleccionada dejará de cambiar cada 2 segundos.
    · El botón de Stop solamente se mostrará cuando esté en marcha el reproductor.
    · El botón de Play solamente se mostrará cuando el reproductor esté detenido.

RETOS

    · Remarcar con estilos css la imagen de la lista que corresponda con la imagen actualmente seleccionada

    · Paginar el listado de imágenes. En vez de mostrar todas las imágenes de golpe, mostrarlas de 3 en 3. Añadir un botón Anterior y otro siguiente para avanzar o retroceder de “página” en el listado.

Ayuda: La pipe slice trocea un array Ejemplo: En <img *ngFor="let image of images | slice:3:6" /> la pipe slice haría return de los elementos 3, 4 y 5 del array images.

slice:0:3 => Empezaría en el 0 y terminaría en el 3 pero sin incluir el 3. slice:3:6 => Empezaría en el 3 y terminaría en el 6 pero sin incluir el 6. slice:6:9 => Empezaría en el 6 y terminaría en el 9 pero sin incluir el 9.


