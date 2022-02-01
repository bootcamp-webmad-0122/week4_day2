# week4_day2

> Express


## Main points: Express 

- Crear un servidor básico con rutas y archivos estáticos en Express supone:
  - Requerir Express
    ````javascript
    const express = require('express')
    ````
  - Instanciar la aplicación a partir de Express
    ````javascript
    const app = express()
    ````
  - Incluir el *middleware* de directorio con archivos estáticos `public`
    ````javascript
    app.use(express.static('public'))
    ````
  - Enrutar
    ````javascript
    app.get('/', (req, res) => res.send('<h1>Hi there!</h1>'))
    ````
  - Levantar el servidor
    ````javascript
    app.listen(3000, () => console.log("Server listening on port 3000"))
    ````
  
- Enrutar supone hacer uso del método `.get()`o `.post()` de la aplicación instanciada, recibiendo como argumentos:
  - Endpoint en formato de string.
  - Callback con los parámetros por defecto `req` (petición) y `res` (respuesta).
  
## Main points: Nodemon
- El módulo global Nodemon atiende a los cambios en un archivo, siendo iniciado mediante `nodemon`*`nombre_archivo`*. 
- El comando `nodemon -e js,hbs,css server.js` levanta Nodemon con alcance de parciales.
- Idealmente debe incluirse su configuración en el script `start` del archivo `package.json`, en vistas a levantarlo a través del comando `npm start`: 
  ````json
  "scripts": {
    "start": "nodemon -e js,hbs,css server.js"
  }
  ````
  
## Main points: objeto response
- El objeto `response` dispone de tres métodos para mostrar información en el cliente:
  - `.send()`: muestra el código pasado como argumento en el cliente.
  - `.sendFile()`: muestra en el cliente el archivo enlazado mediante el path absoluto argumentado.
  - `.render()`: renderiza la vista cuyo nombre sea argumentado.
  
  
## Main points: dynamic templating

- El método `.render()` recibe dos argumentos:
  * Nombre del archivo handlebars, sin extensión
  * **Objeto** con datos (opcional)
- Los archivos de HBS interpolan propiedades con dos llaves (solo mostrar) o tres (renderizar)
- Los _helpers_ principales de HBS son `if`, `each`, `unless` y `with`


## Main points: layout

- El archivo de plantilla debe nombrarse `layout.hbs`.
- Este será siempre renderizado por el servidor.
- El contenido de cada vista específica será renderizado en su `{{{ body }}}`.


## Main points: partials

- Para usar _partials_ es necesario:
  * Requerir `hbs`
  * Registrar su directorio a través de `hbs.registerPartials(path)`
  * Incluir los parciales (sin guiones medios en el nombre) en el directorio registrado (generalmente `views/partials`)
- Un _partial_ puede ser incluido en un archivo de HBS mediante al sintaxis `{{>partialName}}`

