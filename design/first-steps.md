Posibles dependencias
===

He identificador unas posibles dependencias necesarias para el proyecto:

 * addict(autenticación) o guardian
 * scrivener para paginación
 * bower con brunch

Primeros pasos
===

La primera funcionalidad que se va a construir, es la administración de todos los datos paramétricos que se van a necesitar para la construcción de la hoja base del hechicero, se han identificado los siguientes:

 * Ítems (no dependerían de nadie, incluyendo mágicos y potas, supongo que habran de 2 tipos, los que son de llevar, y los que son de vault únicamente).
 * Escuelas de mágia (tendría una relación con otras escualas, las neutrales, las afines y las opuestas).
 * Los hechizos (Solo dependerían de la escuela).
 * Los soldados (dependen de los ítems).
 * Las bases (No dependen de nada).
 * Los recursos de las bases (no dependen de nada).

Estas funcionalidades serán solo para administrador que será quién parametrize el sistema de manera inicial.

Diseño de ítems
===

El modelo será llamado "Item", tendrá los siguientes campos:

 * name:String (como podría interniacionalizarlo?)
 * magic:Boolean (Indicaría si el ítem es mágico o no)
 * vault_only:Boolean (Indicaría si solo se puede poner en la boveda)
 * description:String (Nota de lo que hace)
 * purchase_price:Integer (Precio por el que se compra)
 * 
 
Los ítems podrían ser elementos heredables, de los cuales podrían heredar las siguientes categorías:
===

 * Consumables
 * Weapons
 * Armours
 * Scrolls & Grimoires
 * Others
 
Diseño de soldados:
El modelo será llamado "Soldiers" y se puede utilizar como base para criaturas (sería necesario pensar en la raza como atributo).
===

* name: String
* equipment Map (map de ítems que tiene por defecto)
* move: int
* fight: int
* shoot: int
* armour: int
* will: int
* health: int
* cost: int (valor de compra)


Diseño de escuelas de magia:
No se ha decidido el nombre del modelo.
Las escuelas neutrales son aquellas que no se encuentren entre las aliadas y la opuesta.
===

* name: String
* Allied Schools: Map
* Opposite School: String


