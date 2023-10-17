# Presentación Proyectos MASCOTAS

1. **Introducción**
    - Proposito de la propuesta:
        - Crear una aplicación web para facilitar la adopción de mascotas y fomentar el cuidado responsable de los animales.
    - La aplicación deberá permitir:
        - Buscar mascotas extraviadas
        - Registrar mascotas encontradas
        - Facilitar un medio de comunicacion entre la persona que encontró a la mascota y quien la extravió.
        - Adoptar mascotas que se encuentren en adopción.
2. **Objetivos del proyecto**
    - Aplicar todas los conocimientos aprendidos.
    - Aprender herramientas de comunicación y trabajo en equipo.
    - Ser prototipo para organizaciones, municipios, zoonosis, etc.
3. **Público objetivo**
    - Principales usuarios:
        - Propietarios de mascotas: facilitar la busqueda de las mascotas extraviadas.
        - Rescatistas y personas que transitan una mascota: permitir que la difusión facilite la reubicación y acorte los tiempos de reencuentro.
        - Personas que desean regalar/ dar en adopción mascotas: facilitar la visibilización de mascotas que buscan tener propietarios.
4. **Tecnologías a utilizar**
    - Menciona las tecnologías principales que utilizarás en el desarrollo del proyecto:
        - Angular: Framework de frontend para crear la interfaz de usuario.
        - NestJS: Framework de backend que permitirá construir una API RESTful segura y eficiente.
        - Sequelize: Base de datos relacional para almacenar la información de las mascotas, usuarios, etc.
        - Trello y Notion: Herramientas de gestión de proyectos para organizar las tareas y colaborar con el equipo.
        - Git y GitHub: Sistema de control de versiones y plataforma de alojamiento para el código fuente.
5. **Arquitectura de la aplicación**
    
    La aplicación seguirá una arquitectura cliente-servidor, donde el frontend y el backend se comunicarán a través de una API RESTful. Utilizaremos el framework Angular para desarrollar el frontend y NestJS para construir el backend. La base de datos Sequelize se utilizará para almacenar la información relacionada con las mascotas, los usuarios y las ubicaciones.
    
    **Arquitectura cliente-servidor**
    
    - El cliente será la parte frontend de la aplicación desarrollada en Angular. Proporcionará una interfaz de usuario interactiva para que los usuarios puedan cargar información, buscar mascotas disponibles y hacer un primer contacto entre las partes.
    - El servidor será el backend de la aplicación desarrollado en NestJS. Será responsable de manejar las solicitudes del cliente, procesar la lógica de negocio y acceder a la base de datos para almacenar y recuperar información.
    
    **API RESTful**
    
    - El backend proporcionará una API RESTful que seguirá los principios de REST para permitir la comunicación eficiente entre el frontend y el backend.
    - La API RESTful será segura mediante el uso de tokens de autenticación para proteger las rutas y los recursos sensibles.
    
    **Base de datos Sequelize**
    
    - En primer instancia usaremos Sequelize, nos proponemos en un futuro utilizar MySQL como el sistema de gestión de base de datos para almacenar la información esencial de la aplicación.
    - Se crearán tablas para gestionar los datos de las mascotas, los usuarios y las solicitudes de adopción. Por ejemplo:
        - Tabla "mascotas" para almacenar detalles como color, foto, descripción, etc.
        - Tabla "usuarios" para almacenar información sobre los adoptantes y voluntarios. Tambien puede separarse el ‘usuario’ y ‘contraseña’ de ingreso en una tabla “login”.
        - Tabla "ciudades" y "barrios" para restringir el area de busqueda.
        - Tabla "especies" para  restringir el area de busqueda.
6. DER
    
    ![DER](https://i.ibb.co/dGVxq2G/cf2e2daa-5fe3-47c9-99df-e7623d03f303.jpg)
    
7. **Funcionalidades clave**
    - Principales funcionalidades de la aplicación:
        - Registro e inicio de sesión de usuarios.
        - Cargar información de mascotas para adopción o que fueron encontradas.
        - Búsqueda y filtrado de mascotas.
        - Proceso de adopción e info de contacto del transito/ poseedor de la mascota.
        - Estado de visibilidad de mascota: evita borrado de mascotas entregadas cambiando el estado de visibilidad.
8. **Diseño de interfaz de usuario**
    
    ![Home](https://i.ibb.co/XsZJ3gc/home.png)
    
    ![Buscar Ahora!](https://i.ibb.co/X8DSfms/buscarahora.png)
    
    ![Reportar Mascota](https://i.ibb.co/kH1D6DP/reportarperdida.png)
    
    ![Tus Mascotas](https://i.ibb.co/8PMD7Zb/tusmascotas.png)
    
    ![Login](https://i.ibb.co/gMvFFFB/login.png)
    
    ![Register](https://i.ibb.co/nnGVg0k/register.png)
    
9. **Plan de desarrollo**
    
    https://trello.com/b/gClMnoi5/x-academy-mascotas
    
10. **Equipo de desarrollo Equipo N° 27**

| Nombre | Rol |
| --- | --- |
| Cinthia Romina Vota | FRONT |
| Fredi Rodolfo Campero | BACK |
| Juan Manuel Camilo | FRONT |
| Maria Lourdes Araujo | BACK |