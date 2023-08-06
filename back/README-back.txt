//version npm:
$ npm --version : 9.5.1

$ npm i -g @nestjs/cli -> INSTALAR NESTJS GLOBAL

//version nest:
$ nest --version : 10.1.11

//$ nest new mascotas -> CREACION DE PROYECTO NESTJS

//levantar puerto:
npm run start:dev

Creacion de Modulos, Controlador y Servicios:

--no-spec //para evitar archivos de prueba

$ nest g mo nombredelacarpeta / modulo, crea la carpeta si no existe
$ nest g co nombredelacarpeta / controller
$ nest g s nombredelacarpeta / service

//NOTAS SOBRE INTEGRACION CON BDD:
-> en src terminal
• Necesitamos agregar el módulo de archivos estáticos
$ npm i --save @nestjs/serve-static
• La interacción entre nuestra API y MySQL la va a gestionar TypeORM
$ npm i --save @nestjs/typeorm typeorm mysql