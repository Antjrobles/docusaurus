---
sidebar_position: 0
---

# UNIDAD 1 - ALMACENAMIENTO DE LA INFORMACION

# BD - UNIDAD 1



> # BASE DE DATOS

- Tutora => Laura Plaza Ruiz



> ## MÉTODOS DE ACCESO



- Secuencial => Encadenado

- Secuencial indexado 

- Directo => Accesso directo, Acceso indexado, Acceso calculado (Hash)



---



> ## TIPOS DE FICHEROS



- FICHEROS SECUENCIALES

- FICHEROS DE ACCESO DIRECTO




---


> ## ORACLE DATABASE

- version 18c => [https://www.oracle.com/database/technologies/xe18c-downloads.html](https://www.oracle.com/database/technologies/xe18c-downloads.html)

- version 21c => [https://www.oracle.com/es/database/technologies/appdev/xe/quickstart.html](https://www.oracle.com/es/database/technologies/appdev/xe/quickstart.html)



- Pequeña guia de introduccion => [https://www.mecd.es/cidead/aulavirtual/pluginfile.php/392683/mod_resource/content/2/BD01_Contenidos_Imprimible/BD01_AccesoSys_creausuario.pdf](https://www.mecd.es/cidead/aulavirtual/pluginfile.php/392683/mod_resource/content/2/BD01_Contenidos_Imprimible/BD01_AccesoSys_creausuario.pdf)



```sql
/* BASIC COMMANDS */

/* Connect to sqlplus */
sqlplus sys as sysdba

/*PASSWORD resina */

/* Show user */
show user con_name

/* Create user */
create user c##antjrobles identified by anjrobles default tablespace users;

/* Grant access */  /* IMPORTANT, when asked for password must be different from the root password. This is the the password for that specific user. Usually same as user, for exmaple antjrobles */
grant connect, resource, DBA to c##antjrobles;

/* Connect to user */
CONNECT c##antjrobles
show user con_ name /* to check connection success */
```



---



