<h1>Documentación PA3</h1>
<p>Esta es la documentación sobre el PA3 del alumno Jeremy Juan Landa Cuayla.</p>
<p>Curso: Programación Web Avanzada</p>
<p>NRC: 4059</p>
<p>Profesor: Jorge Eduardo Rebaza Chumacero</p>
<h2>Contexto</h2>
<p>Se realizó una aplicación full stack que empleó la tecnología MERN</p>
<ul>
  <li>M: MongoDB</li>
  <li>E: Express</li>
  <li>R: React JS</li>
  <li>N: Node JS</li>
</ul>

<h2>Comandos que se usaron</h2>
<h3>Backend</h3>
<p>Para el backend, se utilizaron los siguiente comandos.</p>
<table>
  <tr>
    <th>Comando</th>
    <th>Explicación</th>
  </tr>
  <tr>
    <td>npm init -y</td>
    <td>Inicializa el archivo package.json</td>
  </tr>
  <tr>
    <td>npm i express</td>
    <td>Framework para crear la infraestructura web y Rutas REST</td>
  </tr>
  <tr>
    <td>npm i mongoose</td>
    <td>ODM para modelar datos con MongoDB a través de esquemas y promesas (async/await)</td>
  </tr>
  <tr>
    <td>npm i dotenv</td>
    <td>Carga variables de entorno de un archivo .env para mantener la seguridad.</td>
  </tr>
  <tr>
    <td>npm i cors</td>
    <td>Middleware que autoriza peticiones de otros orígenes o clientes</td>
  </tr>
  <tr>
    <td>npm i nodemon -D</td>
    <td>Reinicia el servidor automáticamente cada vez que modificamos el código</td>
  </tr>
</table>

  <h3>Frontend</h3>
  <p>Para el frontend, se utilizaron los siguiente comandos.</p>
  <table>
    <tr>
      <th>Comando</th>
      <th>Explicación</th>
    </tr>
    <tr>
      <td>npm create vite@latest</td>
      <td>Crear una aplicación React con Vite</td>
    </tr>
    <tr>
      <td>npm install tailwindcss @tailwindcss/vite</td>
      <td>Instalar TailwindCSS para estilizar dinámicamente a través de clases. Luego seguir las indicaciones de https://tailwindcss.com/docs/installation/using-vite</td>
    </tr>
    <tr>
      <td>npm i --save @fortawesome/react-fontawesome@latest</td>
      <td>Instalar íconos. Puedes seguir más indicaciones en https://docs.fontawesome.com/web/use-with/react</td>
    </tr>
    <tr>
      <td>npm i react-router</td>
      <td>Instalar el Router para navegar dentro de la misma aplicación React. Eso se llama SPA. https://www.npmjs.com/package/react-router</td>
    </tr>
    <tr>
      <td>npm i @tanstack/react-query</td>
      <td>Instalar React Query para manejar las peticiones GET, POST, PUT y DELETE de una forma más sencilla. Esta librería nos permite consumir los endpoints del servidor. https://tanstack.com/query/latest/docs/framework/react/installation</td>
    </tr>
  </table>

<h2>¿Cómo tener listo mi proyecto previo a darle Run?</h2>
<h3>Backend</h3>
<p>Debes ejecutar el comando "npm install". Además, debes crear un archivo ".env", en el cual copias todo el contenido del archivo ".env.example"./p>
<h3>Frontend</h3>
<p>También debes ejecutar el comando "npm install".</p>

<h2>¿Cómo hago para correr el proyecto?</h2>
<h3>Base de datos</h3>
<p>En MongoDB, debes crear una base de datos llamada "burger_friend".</p>
<p>Además, debes copiar el puerto local de tu MongoDB, y si es diferente a lo que encuentras en las variables de entorno ".env.example", lo debes cambiar para que te conectes bien a tu MongoDB.</p>
<h3>Backend</h3>
<p>Debes ejecutar "node app.js" para que corra tu servidor NodeJS que gracias a Mongoose tiene conexión con MongoDB.</p>
<h3>Frontend</h3>
<p>Debes ejecutar "npm run dev" para que corra tu aplicación React, la cual consumirá los endpoints del servidor de NodeJS.</p>

<h2>Consideraciones finales</h2>
<p>Debes tener en cuenta restaurar las carpetas "node_modules" tanto en el backend como en el frontend, pues son importantes. Sin embargo, no las incluí en el repositorio porque pesan mucho, y además por temas de incompatibilidad de sistemas operativos, puede que lo que me funciona en Windows no te funcione en Mac, o viceversa.</p>
<p>Entonces, por esa razón se recomienda ignorar esta carpeta en el ".gitignore".</p>
<p>También, no olvides crear tu archivo ".env", y asegurarte que la Mongo Uri coincida con la que tú tienes localmente y con el nombre de la base de datos que hayas escogido para este proyecto. Te recomiendo llamarla como "burger_friend" para que no tengas que realizar muchos cambios.</p>
