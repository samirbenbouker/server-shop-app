# API

#### IMPORTANTE: al hacer `git clone` instalar los paquetes necesarios con: `npm install` o usar la url `https://server-shop-app.herokuapp.com/`

Este repositorio contiene la API que permitirá realizar conexiones con nuestro Cluster en MongoDB. Aqui se definirán diferentes endpoints para controlar las acciones y peticiones desde diferentes URLs.

Nota: Los parámetros de los endpoints utilizan el principio de las URL Query: `?param=value`

## env.js File
Crear un fichero en la raiz del proyecto `env.js` que contendra la siguiente información:
- `MONGO_URL`: "url de la base de datos mongo"
- `PORT`: 5000
- `JWT_SEC`: "clave para la encriptacion para el Token de la aplicación"
- `PASS_ENC`: "clave para la encriptacion para el Token de la aplicación"
- `NODE_ENV`: "production"

Al final hacer `module.export = {MONGO_URL, PORT, JWT_SEC, PASS_ENC, NODE_ENV}`

## Endpoints:

#### Auth
Los siguientes dos endpoints realizan el proceso necesario para el login y el registro del usuario. Dichos endpoints necesitan un email y una password, y nuestra api les acredita un token de acceso a la aplicación. En caso de no encontrar un usuario con email y password válido en la base de datos el token del objeto JSON sera nulo.

<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/auth/login</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>username</td>
    <td>String</td>
    <td>Contains the username of the user</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>password</td>
    <td>String</td>
    <td>Contains the Password of the user</td>
    <td>Yes</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/auth/register</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>username</td>
    <td>String</td>
    <td>Contains the username of the user</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>password</td>
    <td>String</td>
    <td>Contains the Password of the user</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>email</td>
    <td>String</td>
    <td>Contains the email of the user</td>
    <td>Yes</td>
  </tr>
</table>

#### CRUD User

Los siguientes 4 endpoints realizan el proceso que le corresponde en la colección especificada (Create, Read, Update, Delete):
- `Get /api/users` devuelve todos los usuarios que contiene la base de datos. 
- `Get /api/users/find/{idUser}` permite obtener un usuario especifico. 
- `Del /api/users/find/{idUsers}` permite eliminar un usuario especifico. 
- `Put /api/users/find/{idUsers}` permite actualizar un usuario especifico ya existentes.  

Para obtener todos los usuarios de la base de datos (<b>Read</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/users</th>
  </tr>
</table>

Para obtener un usuario especifico (<b>Read</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/users/find/{idUser}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idUser</td>
    <td>String</td>
    <td>User id</td>
    <td>Yes</td>
  </tr>
</table>

Para eliminar un usuario especifico (<b>Delete</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Del /api/users/find/{idUser}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idUser</td>
    <td>String</td>
    <td>User id</td>
    <td>Yes</td>
  </tr>
</table>

Para actualizar un usuario especifico (<b>Update</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Put /api/users/find/{idUser}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idUser</td>
    <td>String</td>
    <td>User id</td>
    <td>Yes</td>
  </tr>
    <tr>
    <td>Name field</td>
    <td>JSON{field: value,...}</td>
    <td>With the name of the value we can put a new value to the user</td>
    <td>Yes</td>
  </tr>
</table>

#### CRUD Product

Los siguientes 4 endpoints realizan el proceso que le corresponde en la colección especificada (Create, Read, Update, Delete):
- `Get /api/products` devuelve todos los productos que contiene la base de datos. 
- `Post /api/products` permite crear un producto especifico. 
- `Get /api/products/find/{idProduct}` permite obtener un producto especifico. 
- `Del /api/products/find/{idProduct}` permite eliminar un producto especifico. 
- `Put /api/products/find/{idProduct}` permite actualizar un producto especifico ya existentes.  

Para obtener todos los productos de la base de datos (<b>Read</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/products</th>
  </tr>
</table>

Para obtener todos los productos de la base de datos (<b>Create</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Post /api/products</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>title</td>
    <td>String</td>
    <td>Name product</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>desc</td>
    <td>String</td>
    <td>Description product</td>
    <td>No</td>
  </tr>
  <tr>
    <td>img</td>
    <td>String</td>
    <td>Product image</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Categories</td>
    <td>[String]</td>
    <td>The categories to which the product belongs</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>price</td>
    <td>Number</td>
    <td>Product price</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>inStock</td>
    <td>Boolean</td>
    <td>If product is in stock</td>
    <td>No</td>
  </tr>
</table>

Para obtener un product especifico (<b>Read</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/products/find/{idProduct}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idProduct</td>
    <td>String</td>
    <td>Product id</td>
    <td>Yes</td>
  </tr>
</table>

Para eliminar un producto especifico (<b>Delete</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Del /api/products/find/{idUser}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idProduct</td>
    <td>String</td>
    <td>Product id</td>
    <td>Yes</td>
  </tr>
</table>

Para actualizar un producto especifico (<b>Update</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Put /api/products/find/{idProducts}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idUser</td>
    <td>String</td>
    <td>Product id</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Name field</td>
    <td>JSON{field: value,...}</td>
    <td>With the name of the value we can put a new value to the product</td>
    <td>Yes</td>
  </tr>
</table>

#### CRUD Cart

Los siguientes 4 endpoints realizan el proceso que le corresponde en la colección especificada (Create, Read, Update, Delete):
- `Get /api/carts` devuelve todos los carritos que contiene la base de datos. 
- `Post /api/carts` permite crear un carrito especifico. 
- `Get /api/carts/find/{idCart}` permite obtener un carrito especifico. 
- `Del /api/carts/find/{idCart}` permite eliminar un carrito especifico. 
- `Put /api/carts/find/{idCart}` permite actualizar un carrito especifico ya existentes.  

Para obtener todos los carritos de la base de datos (<b>Read</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/carts</th>
  </tr>
</table>

Para obtener todos los carritos de la base de datos (<b>Create</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Post /api/carritos</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>userId</td>
    <td>String</td>
    <td>User id</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>products</td>
    <td>[{productId: String, quantity: number}]</td>
    <td>Insert the product id and quantity you has bought</td>
    <td>Yes</td>
  </tr>
</table>

Para obtener un carrito especifico (<b>Read</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/carts/find/{idCart}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idCart</td>
    <td>String</td>
    <td>Cart id</td>
    <td>Yes</td>
  </tr>
</table>

Para eliminar un carrito especifico (<b>Delete</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Del /api/carts/find/{idCart}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idCart</td>
    <td>String</td>
    <td>Cart id</td>
    <td>Yes</td>
  </tr>
</table>

Para actualizar un cart especifico (<b>Update</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Put /api/carts/find/{idCart}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idCart</td>
    <td>String</td>
    <td>Cart id</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Name field</td>
    <td>String</td>
    <td>With the name of the value we can put a new value to the cart</td>
    <td>Yes</td>
  </tr>
</table>

#### CRUD Order

Los siguientes 4 endpoints realizan el proceso que le corresponde en la colección especificada (Create, Read, Update, Delete):
- `Get /api/orders` devuelve todos los pedidos que contiene la base de datos. 
- `Post /api/orders` permite crear un pedido especifico. 
- `Get /api/orders/find/{idOrder}` permite obtener un pedido especifico. 
- `Del /api/orders/find/{idOrder}` permite eliminar un pedido especifico. 
- `Put /api/orders/find/{idOrder}` permite actualizar un pedido especifico ya existentes.  

Para obtener todos los pedidos de la base de datos (<b>Read</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/orders</th>
  </tr>
</table>

Para obtener todos los pedidos de la base de datos (<b>Create</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Post /api/orders</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>userId</td>
    <td>String</td>
    <td>User id</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>products</td>
    <td>[{productId: String, quantity: number}]</td>
    <td>Insert the product id and quantity you has bought</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>amount</td>
    <td>Number</td>
    <td>Total price order</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>address</td>
    <td>String</td>
    <td>User address</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>status</td>
    <td>String</td>
    <td>Status order</td>
    <td>Yes</td>
  </tr>
</table>

Para obtener un pedido especifico (<b>Read</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Get /api/orders/find/{idOrder}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idOrder</td>
    <td>String</td>
    <td>Order id</td>
    <td>Yes</td>
  </tr>
</table>

Para eliminar un pedido especifico (<b>Delete</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Del /api/orders/find/{idOrder}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idOrder</td>
    <td>String</td>
    <td>Order id</td>
    <td>Yes</td>
  </tr>
</table>

Para actualizar un pedido especifico (<b>Update</b>):
<table>
  <tr>
    <th colspan="4" >Response: JSON</th>
  </tr>
  <tr>
    <th colspan="4" >Put /api/orders/find/{idOrder}</th>
  </tr>
  <tr>
    <th>Param</th>
    <th>Values</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>idOrder</td>
    <td>String</td>
    <td>Order id</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Name field</td>
    <td>String</td>
    <td>With the name of the value we can put a new value to the order</td>
    <td>Yes</td>
  </tr>
</table>

