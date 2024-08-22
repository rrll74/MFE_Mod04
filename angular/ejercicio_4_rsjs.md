RETO: Uso de RxJs

1. Modifica el método login() del servicio del primer ejercicio para que devuelva la respuesta de forma asíncrona en un observable.

El servicio quedaría así:

    · login({username: string, password: string}): Observable
    · logout(): void
    · isLogged(): boolean
    · getUsername(): string

AYUDA: Cambia el return true o return false por return of(true) o return of(false).

2. Adapta el componente de login.

    · La respuesta de login() ya no llega directamente como boolean, sino como observable. El componente tendrá que suscribirse al observable para conocer si el login ha ido bien o no.

3. Simula un delay en la respesta del login

AYUDA: Cambia el return of(true) y return of(false) por return of(true).pipe( delay(2000) ) return of(false).pipe( delay(2000) )

4. Pon un indicador (un gif de loading) en el formulario de login que se muestre al darle al botón de submit y desaparezca cuando el método de login haya emitido su respuesta.

AYUDA: Como el observable emite un dato y acto seguido directamente la seña de fin, puedes utilizar tanto la primera función del subscribe (la del next) como la tercera función del subscribe (la del completed) para esconder el gif.
