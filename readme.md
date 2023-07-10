# Products list REST API

This is a simple REST API application to manage a products list. You can read all your saved data stored in a remote data base. Then you can add, edit and delete products in the UI.

## Built with 
- Node.js and Express
- Javascript
- REST API 

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org)

## Express Routes

| Route                       | HTTP Verb | Description              |
| ----------------------------| --------- | ------------------------ |
| /healthcheck                | GET       | Test for API healthcheck |
| /products                   | GET       | Get list of all products |
| /products/createProduct     | POST      | Creates a new product    |
| /products/updateProduct/:id | PUT       | Updates a product        |
| /products/deleteProduct/:id | DELETE    | Deletes a product        |


### Basic example **Create Product** `/products/createProduct  `:

Request Body:
```json
{
  "product_name": "televisor",
  "color": "negro",
  "category": "home",
  "price": "100",
}
```

Response:

```json
{
    "product_name": "televisor",
    "color": "negro",
    "category": "home",
    "price": "100",
    "id": 1
}
```

### Developers

1. Run `npm install` to install server dependencies.

2. Create a `.env` file in the root directory.
 
3. Define `PORT=8080` as enviroment variable in `.env` file.

5. Run `npm run dev` to start the development server.

<br/>
<br/>
<br/>


**Help us reach further!** 🚀
