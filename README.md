# Presentación Proyectos MASCOTAS

1. **Introducción**
    - Proposito de la propuesta:
        - crear una aplicación web para facilitar la adopción de mascotas y fomentar el cuidado responsable de los animales.
    - La aplicación deberá permitir:
        - Buscar mascotas extraviadas
        - Registrar mascotas encontradas
        - Facilitar un medio de comunicacion entre la persona que encontró a la mascota y quien la extravió.
        - Adoptar mascotas que no son las extraviadas.
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
        - MySQL: Base de datos relacional para almacenar la información de las mascotas, usuarios, etc.
        - Trello y Notion: Herramientas de gestión de proyectos para organizar las tareas y colaborar con el equipo.
        - Git y GitHub: Sistema de control de versiones y plataforma de alojamiento para el código fuente.
5. **Arquitectura de la aplicación**
    
    La aplicación seguirá una arquitectura cliente-servidor, donde el frontend y el backend se comunicarán a través de una API RESTful. Utilizaremos el framework Angular para desarrollar el frontend y NestJS para construir el backend. La base de datos MySQL se utilizará para almacenar la información relacionada con las mascotas, los usuarios y las solicitudes de adopción.
    
    **Arquitectura cliente-servidor**
    
    - El cliente será la parte frontend de la aplicación desarrollada en Angular. Proporcionará una interfaz de usuario interactiva para que los usuarios puedan cargar información de mascotas, buscar animales disponibles y hacer un primer contacto entre las partes.
    - El servidor será el backend de la aplicación desarrollado en NestJS. Será responsable de manejar las solicitudes del cliente, procesar la lógica de negocio y acceder a la base de datos para almacenar y recuperar información.
    
    **API RESTful**
    
    - El backend proporcionará una API RESTful que seguirá los principios de REST para permitir la comunicación eficiente entre el frontend y el backend.
    - La API RESTful será segura mediante el uso de tokens de autenticación para proteger las rutas y los recursos sensibles.
    
    **Base de datos MySQL**
    
    - En primer instancia usaremos Sequelize, en caso de de llegar con los plazos de entrega utilizaremos MySQL como el sistema de gestión de base de datos para almacenar la información esencial de la aplicación.
    - Se crearán tablas para gestionar los datos de las mascotas, los usuarios y las solicitudes de adopción. Por ejemplo:
        - Tabla "mascotas" para almacenar detalles como nombre, edad, raza, descripción, etc.
        - Tabla "usuarios" para almacenar información sobre los adoptantes y voluntarios. Tambien puede separarse el ‘usuario’ y ‘contraseña’ de ingreso en una tabla “ingresos”.
        - Tabla "ciudades" y "barrios" para restringir el area de busqueda.
        - Tabla "especies" para  restringir el area de busqueda.
6. DER
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b24ea6d-f748-4401-8ca2-3fa2cd7638a6/Untitled.png)
    
7. **Funcionalidades clave**
    - Principales funcionalidades de la aplicación:
        - Registro e inicio de sesión de usuarios.
        - Cargar información de mascotas para adopción.
        - Búsqueda y filtrado de mascotas.
        - Proceso de adopción e info de contacto del transito/ poseedor de la mascota.
        - Seguimiento del estado de adopción.
8. **Diseño de interfaz de usuario**
    
    [PROJECT Mascotas Perdidas Website_compressed.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4acfa8c5-9c3f-43bb-9493-042fce88df37/PROJECT_Mascotas_Perdidas_Website_compressed.pdf)
    
    ![PROJECT_Mascotas_Perdidas_Website_compressed_page-0001.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fff68ccd-3dfe-4acd-ac23-84a9124f3ace/PROJECT_Mascotas_Perdidas_Website_compressed_page-0001.jpg)
    
    ![PROJECT_Mascotas_Perdidas_Website_compressed_page-0004.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c82856cb-52e3-46d6-94b8-075336dc02d1/PROJECT_Mascotas_Perdidas_Website_compressed_page-0004.jpg)
    
    ![PROJECT_Mascotas_Perdidas_Website_compressed_page-0002.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/651648a6-c381-4e01-9ea2-a0ad35d09f9b/PROJECT_Mascotas_Perdidas_Website_compressed_page-0002.jpg)
    
    ![PROJECT_Mascotas_Perdidas_Website_compressed_page-0005.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/417fb22e-2a0a-4e35-9c72-f5801cf5950b/PROJECT_Mascotas_Perdidas_Website_compressed_page-0005.jpg)
    
    ![PROJECT_Mascotas_Perdidas_Website_compressed_page-0007.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0bef502-2870-4547-a39b-eb4d56bcd702/PROJECT_Mascotas_Perdidas_Website_compressed_page-0007.jpg)
    
    ![PROJECT_Mascotas_Perdidas_Website_compressed_page-0008.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/891db694-515c-4aef-ae15-d57b2634eadb/PROJECT_Mascotas_Perdidas_Website_compressed_page-0008.jpg)
    
    ![PROJECT_Mascotas_Perdidas_Website_compressed_page-0003.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/858a293b-5db0-4bcd-966f-0209ae26b020/PROJECT_Mascotas_Perdidas_Website_compressed_page-0003.jpg)
    
    ![PROJECT_Mascotas_Perdidas_Website_compressed_page-0006.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5457c450-d7d4-4ef5-80af-c14d6e35440d/PROJECT_Mascotas_Perdidas_Website_compressed_page-0006.jpg)
    
    ![PROJECT_Mascotas_Perdidas_Website_compressed_page-0009.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/466591a1-2c67-4f6e-b79f-92474a0a206f/PROJECT_Mascotas_Perdidas_Website_compressed_page-0009.jpg)
    
9. **Plan de desarrollo**
    
    https://trello.com/b/onBJgcNW/x-academy-proyecto
    
10. **Equipo de desarrollo**