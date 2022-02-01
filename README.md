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
- El módulo global Nodemon atiende a los cambios en un archivo, siendo iniciado mediante:
  - `nodemon`: escucha los cambios sobre el archivo indicado como *entry point* (propiedad `main`de `package.json`).
  - `nodemon`*`nombre_archivo`*: escucha los cambios realizados en el archivo indicado.
  ````javascript
  app.get('/', (req, res) => res.render('nombre-vista'))
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


## Main points: layout

- El layout debe tener el nombre `layout.hbs`
- Debe contener la información dinámica en `{{{ body }}}`


## Main points: partials

- Para usar partials es necesario:
  * Requerir `hbs`
  * Registrar su directorio a través de `hbs.registerPartials(path)`
  * Incluir los parciales (sin guiones medios en el nombre) en el directorio registrado (`views/partials`)
- Un partial puede ser incluido en un hbs mediante al sintaxis `{{> partialName}}`


## Apuntes finales

- El comando `nodemon -e js,hbs,css app.js` levanta Nodemon con alcance de parciales.

