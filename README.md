## Dice Roll Games
Este es un proyecto para el curso de react de Coderhouse.

### Primera Entrega
Por el momento contiene un NavBar con varios botones clickleables y un
CartWidget con un carrito y un boton fijo.

### Segunda Entrega
Se  agregaron  datos  de  un  JSON  para  mostrar  cards  con  los  productos.  El  sitio  ahora  tiene  varias  funcionalidades  de  rutas  y  los  botones  clickables  del  NavBar  llevan  a  sus  destinos.  Se  incorporaron  también  funciones  de  filtro  y  botones  clickables  en  las  cards.

-	*Elementos nuevos*
	 - Cards con datos extraidos de un Json.
	  - El button de detalle muestra mas informacion sobre un producto .
	 - Sistema de ruta y filtro agregado a la nav bar y sus botones respectivos.
	 - Botones para sumar y restar la cantidad del producto a comprar. (aun no tienen funcionabilidad o interaccion con el cart).
	 - Boton de agregar al carrito (aun no interactua con el cart)

 ### Entrega Final

 Se implemento Firebase para el manejo de datos dejando de lado el archivo JSON.  Se trabajo el Cart y los items para lograr una simulacion de compra fluida y facil de entender. Tambien se hizo uso del componente CartContext para crear funciones y variables mejorardo el flow de compra de los articulos.
- *Elementos nuevos*
	- Todos los datos son extraidos de Firebase.
	- Los botones para sumar articulos tienen funciones y logica para no superar el stock o bajar a numeros negativos.
	- Todos los botones del cart (eliminar productos, el form, agregar al cart, etc.) funcionan adecuadamente.
	- El cart suma el total parcial de los items y el total del todo los items.
	- El cart widget muestra la cantidad de articulos en el cart y esta siempre visible. 
	- Hay un form que habilita la finalizacion de la compra, tiene logica de chequeo para los E-mails y al finalizar muestra el ID de la compra con sus respectivos datos.
	- Hay una nueva categoria "ofertas" que muestran  articulos con su rebaja de 50%. Este descuento se aplica correctamente al cart.
	- Se agrego un Loading, para las paginas.

 

### Demo
![Alt](https://s10.gifyu.com/images/finalGif.gif)

### Librerias
Estas son la librerias usadas para este proyecto:
|**Nombre**   |  **Version** |  **Uso** |
|-------------|--------------|----------|
Vite          | V4           | Estructura Inicial / Scaffolding 
Bootstrap     | 5.3.0        | Estilo y maquetación del sito
React-Bootstrap | 2.7.2      | Estilos para react/Vite
Firebase| 9.18.0|Base de datos y storage
React-Router-Dom|6.9.0|Manejo de rutas y navegacion




