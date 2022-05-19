# API

#### IMPORTANTE: al hacer `git clone` instalar los paquetes necesarios con: `npm install` o usar la url `https://server-shop-app.herokuapp.com/`

Este repositorio contiene la API que permitirá realizar conexiones con nuestro Cluster en MongoDB. Aqui se definirán diferentes endpoints para controlar las acciones y peticiones desde diferentes URLs.

Nota: Los parámetros de los endpoints utilizan el principio de las URL Query: `?param=value`

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
