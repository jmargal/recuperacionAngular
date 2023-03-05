# Recuperación Angular

A partir del código proporcionado tienes que realizar lo siguiente:

## Organización del código

Lo primero que vamos a hacer va a se organizar un poco el código, para ello vamos a modularizar un poco la aplicación y separarla en componentes. Vamos a crear un módulo shared donde vamos a poner el navbar y el sidebar (están marcados con comentarios en el componente principal de nuestra aplicación).

En la sección main content se mostrará el contenido según la ruta en la que nos encontremos.

## Login

El enlace del navbar debe llevarte a la pantalla de login, deberás averiguar la ruta a partir del código, además tendrá que "iluminarse" cuando esté en la ruta. El componente login ya está realizadoa falta de la llamada al servicio y de guardar los datos necesarios para mantener la sesión, en este proyecto deberás guardarla en las cookies. Una vez iniciada la sesión te deberá llevar a la página de inicio (Dashboard).

## Logout

Dicho enlace eliminará los datos de sesión y nos llevará a la página de inicio (Dashboard).

## Hospitales

Crea un módulo con carga diferida (lazy loading) llamado hospitales, dicho módulo constará de los siguientes elementos que se cargarán según la ruta:

- /hospitales : Cargará al el componente HospitalesList que recuperará de la api los hospitales y mostrará sus datos, para ello en la carpeta templates dispones de un ejemplo de código html. Además como ves en la plantilla existe un botón **Añadir hospital** que nos llevará a la siguiente ruta. Todos los usuarios podrán acceder a esta ruta aunque no hayan iniciado sesión.
  
- /hospitales/add : Consistirá en un formulario de plantilla (template form) que nos permitirá añadir un hospital, dispones también de una plantilla del mismo. Solo los usuarios que tengan iniciada sesión podrán acceder a esta página y añadir hospitales. Se realizarán las siguientes validaciones y se mostrarán los errores cuando no se cumplan:
  
  - Nombre: requerido y longitud mínima 5.
    
  - Dirección: requerido y longitud mínima 10.
    
  - Tipo: requerido.
    
  - El botón de enviar se podrá pulsar si el formulario es válido.
    

Se debe crear un servicio separado para los hospitales.

## Médicos

Crea un módulo con carga diferida (lazy loading) llamado medicos, dicho módulo constará de los siguientes elementos que se cargarán según la ruta, este módulo sólo se cargará cuando el usuario tenga iniciada la sesión:

- /medicos : Cargará el componente MedicosList que recuperará de la api todos los médicos y mostrará sus datos, para ello en la carpeta templates dispones de un ejemplo de código html. Además como ves en la plantilla existe un botón **Añadir médico** que nos llevará a la siguiente ruta.
  
- /medicos/add: Consistirá en un formulario reactivo (Reactive Form) que nos permitirá añadir un médico, dispones también de una plantilla del mismo. Una vez en la página si el usuario no tiene el rol ADMIN_ROLE se mostrará el mensaje en caso contrario se mostrará el formulario para añadir médicos. Se realizarán las siguientes validaciones y se mostrarán los errores cuando no se cumplan:
  
  - Nombre: requerido y longitud mínima 5.
    
  - Especialidad: requerido y longitud mínima 5.
    
  - Teléfono: longitud exacta de 9 (opcional: solo admite números).
    
  - Hospital: requerido.
    
  - Se puede enviar el formulario aunque sea inválido mostrándose en ese caso todos los errores que haya.
    
- /medicos/:id : Cargará el componente Medico y mostrará la información del médico correspondiente, a este componente se accede a partir del botón del listado de médicos.
  

Se debe crear un servicio separado para los médicos.

## Criterios de evaluación:

| Criterio | Puntuación |
| --- | --- |
| Creación de módulos y componentes para la reorganización del código | **0,5** |
| Configuración de las rutas y los enlaces correctamente mostrándose la ruta activa | **0,5** |
| Guardas los datos del usuario tras el inicio de sesión y redirección a la página de inicio | **1** |
| Borrado de los datos de usuario tras el cierre de sesión y redirección a la página de inicio | **0,5** |
| Creación de módulos con carga diferida y sus rutas correspondientes | **1** |
| Recuperar elementos de la API y mostrarlos correctamente | **1** |
| Protección de las rutas para los usuarios autenticados | **1** |
| Formulario de plantilla para añadir hospitales permite añadir hospitales, realiza las validaciones solicitadas y no permite enviar hasta que sea correcto. | **1,25** |
| Se muestra de forma condicional el formulario para añadir médicos o el enlace según el rol del usuario autenticado | **0,5** |
| Formulario reactivo para añadir médicos permite añadir médicos, realiza las validaciones solicitadas y si se envía sin ser válido muestra todos los errores. | **1,25** |
| Al pulsar el botón en el listado de médicos se muestra la página con los detalles del médico. | **1** |
| Se utiliza un interceptor para añadir el token en las peticiones que es necesario. | **0,25** |
| Creación de los servicios de hospital y médicos | **0,25** |