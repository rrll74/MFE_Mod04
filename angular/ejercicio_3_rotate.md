Directiva: Rotate

Crear una directiva para rotar imágenes.

En este ejercicio se practica:

    · Creación de una directiva personalizada
    · Parametrización de directivas con @Input
    · Binding de eventos con @HostListener
    · Ciclo de vida: ngOnInit()

Ejemplo modelo: https://carherco.es/curso-angular/#/rotate

(Este ejemplo modelo es similar pero no es exacto. Es para tener una idea. Lo que se pide realmente es lo que está escrito en el enunciado de este documento).

El interfaz de uso de la directiva sería el siguiente:

<img rotate src="..."/>
<img rotate="45" src="..."/>
<img rotate="45" step="15" src="..."/>

    · Al hacer click en una imagen que tenga el atributo rotate, la imagen deberá rotar los grados indicados en el atributo step.
    · Por defecto rotará en pasos de 10 grados
    · Se le podrá indicar una rotación inicial en el propio atributo rotate
    · Si se hace click en la imagen con la tecla mayúsculas pulsada, la imagen rotará hacia el lado contrario. AYUDA: La propiedad transform de css permite establecer una rotación para un elemento del DOM. Ejemplo: Esta declaración css

img {
transform: rotate(20deg);
}

mostraría los elementos img girados 20 grados.

RETO:

Prueba esta directiva en elementos que no sean imágenes (un h1, un div un p…), verás que también pueden ser rotados con esta directiva.

    · Modifica el selector de la directiva para que solamente afecte a elementos img.

