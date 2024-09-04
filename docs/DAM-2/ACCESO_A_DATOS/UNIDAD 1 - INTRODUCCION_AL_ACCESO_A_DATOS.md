---
sidebar_position: 0
---

# UNIDAD 1 - INTRODUCCION AL ACCESO A DATOS




> ## **1.	INTRODUCCIÓN**
¿A qué nos referimos cuando hablamos de acceso a datos en una aplicación informática?
Podemos afirmar que en la inmensa mayoría de aplicaciones informáticas se pueden diferenciar, a grandes rasgos, en dos partes:
	Por un lado, el programa propiamente dicho, que realiza las operaciones deseadas con los datos necesarios.
	Por otro lado, los datos con los que opera le programa. Esos datos pueden ser obtenidos por el programa mediante diversos métodos: leídos mediante teclado, escaneados, leídos de algún soporte de almacenamiento secundario, etc.
En la mayoría de los casos, cuando programamos, nos interesa que el programa guarde los datos que le hemos introducido, o los resultados que dicho programa haya obtenido, de manera que, si el programa termina su ejecución, los datos no se pierdan y puedan ser recuperados posteriormente, es decir, persistan. Una forma tradicional de hacer esto es mediante la utilización de ficheros o de bases de datos que se guardarán en un dispositivo de memoria no volátil (normalmente un disco).
Te habrás dado cuenta de que el almacenamiento en memoria RAM, mediante variables o vectores, es temporal, los datos se pierden cuando el programa termina. Quizás te habrá pasado alguna vez que, debido a un apagón eléctrico, has perdido el trabajo que estabas haciendo, que todavía no habías grabado. Los datos que se guardan en almacenamiento secundario, como ficheros o bases de datos, se denominan datos persistentes, porque existen, o persisten más allá de la ejecución de la aplicación.
Ese almacenamiento secundario de datos que acabamos de mencionar, habitualmente suele consistir en una base de datos relacional, si bien, a veces, hay otros métodos de almacenamiento, y por tanto, métodos de acceso a esos datos. De conocer esos tipos de almacenamiento y cómo acceder a ellos es de lo que trata este módulo.
En esta unidad inicial, vas a ver una panorámica de los diversos métodos de persistencia que encontraremos en el mercado.

>## 2.	ACCESO A DATOS
Hay diversas estrategias de acceso a datos para gestionar la persistencia de los datos:
	Mediante ficheros.
	Bases de datos, que pueden ser:
o	Relacionales,
o	Orientadas a objetos.
o	Objeto-relacionales.
	 Mapeo objeto relacional (ORM)
	Bases de datos XML (eXtensible Markup Language).
	Componentes.
 

Al principio, en los primeros tiempos de la informática, los datos se guardaban en ficheros convencionales. Con el tiempo, y la experiencia de trabajar con dichos ficheros, se observaron los inconvenientes de los ficheros, y para intentar solucionar los inconvenientes que se observaron surgieron las bases de datos, que entre otras ventajas permitían:
	Eliminar el problema de la información redundante.
	Eliminar información inconsistente.
	Globalizar o centralizar la información. 
	Garantizar el mantenimiento de la integridad en la información. Únicamente se almacena la información correcta.
	Independencia de datos. La independencia de datos implica una separación entre programas y datos, es decir, se pueden hace cambios en la información que contiene la base de datos, o tener acceso a la base de datos de diferente manera, sin tener que hacer cambios en las aplicaciones o en los programas.

2.1.	QUE ESTRATEGIA O MÉTODO DE ACCESO A DATOS USAR

>## 3. FICHEROS
3.1 USO DE FICHEROS EN LA ACTUALIDAD


>## 4.BASE DE DATOS
4.1. INTRODUCCIÓN
4.2. BASE DE DATOS RELACIONALES
4.3. BASE DE DATOS ORIENTADAS A OBJETOS (I)
4.3.1. BASE DE DATOS ORIENTADAS A OBJETOS (II)
4.4. COMPARATIVA ENTRE BASES DE DATOS RELACIONALES Y ORIENTAD A OBJETOS.
4.4.1. DESVENTAJAS DE LAS BASES DE DATOS ORIENTADAS A OBJETOS FRENTE A LAS RELACIONALES

4.5 BASE DE DATOS OBJETO-RELACIONALES
>## 5. ACCESO A BASE DE DATOS MEDIANTE CONECTORES

>## 6. MAPEO OBJETO RELACIONAL (ORM)
6.1. CAPA DE PERSISTENCIA Y FRAMEWORK DE MAPEO

>## 7. BASES DE DATOS XML


>## 8. DESARROLLO DE COMPONENTES
8.1. DEFINICIÓN DE COMPONENTE
8.2. JAVABEANS

>## 9. HERRAMIENTAS DE TRABAJO NECESARIAS PARA EL MÓDULO
9.1. NETBEANS
9.2. ECLIPSE
9.3. PLUGIN DE HIBERNATE
9.4. JDBC
9.5. SISTEMAS DE GESTORES DE BASES DE DATOS RELACIONALES SECCIÓN
9.6. BASES DE DATOS ORIENTADAS A DOCUMENTOS

