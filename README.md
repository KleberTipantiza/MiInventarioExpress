# MiInventarioExpress

Aplicación web de gestión de productos con autenticación y chat en tiempo real, desarrollada con Node.js, Express, MongoDB y Socket.io. Este proyecto aplica el modelo MVC y buenas prácticas de programación del lado del servidor.

---

# Estructura del Proyecto (MVC)

MiInventarioExpress/ 
- index.js # Archivo principal del servidor 
- models/ # Esquemas de datos (Producto.js) 
- routes/ # Rutas de productos y autenticación 
- views/ # Vistas con Handlebars (.hbs) 
- public/ # Archivos estáticos (CSS) 
- uploads/ # Imágenes subidas por los usuarios 
- package.json # Dependencias y scripts

---

# Funcionalidades Implementadas

- Autenticación de usuarios con sesiones (`express-session`) y contraseñas encriptadas (`bcrypt`)
- CRUD completo de productos (crear, listar, editar, eliminar)
- Carga de imágenes (`multer`)
- Validación de formularios (`express-validator`)
- Chat en tiempo real entre usuarios autenticados (`socket.io`)
- Navegación protegida por sesión
- Vistas dinámicas con Handlebars (`hbs`)

---

# Requisitos previos

- Tener instalado Node.js y MongoDB
- MongoDB debe estar corriendo localmente en el puerto 27017
- VS Code recomendado como editor

# Usuario de prueba

- **Usuario:** `admin`  
- **Contraseña:** `1234`

---

# Instrucciones de Uso

1. Clonar el repositorio del siguiente enlace: https://github.com/KleberTipantiza/MiInventarioExpress.git
2. Instalacion de dependencias necesarias, se puede realizarlo utilizando el comando "npm install" en el terminal de vs code dentro del proyecto.
3. Inicializar el servidor, para ello desde el terminal se debe ejecutar el comando "node index.js", de esta manera el servidor se ejecutara en: http://localhost:3000/login
4. Por ultimo para iniciar sesion, se debe ingresar los datos de usuario de prueba presentados anteriormente.




git clone https://github.com/tuusuario/MiInventarioExpress.git
cd MiInventarioExpress
