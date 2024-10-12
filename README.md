## RESTful API Store Inventory

This is the API of the product to fulfill phincon academy assignment 3

## Swagger UI
![alt text](https://github.com/Fiorezarn/Assigment3_FiorezaRadhinNaufal/blob/main/public/images/swaggerui.png)

## Features
1. **Get All Products**: Retrieve a list of all products with optional search functionality by product name or product description.
2. **Get Product by ID**: Retrieve details of a specific product using its unique identifier.
3. **Create Product**: Add a new product to the database.
4. **Archive and Unarchive Product**: Change the status of a product to archived or unarchived.
5. **Delete Product**: Permanently remove a product from the database.

## Tech Stack

<div>
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/ExpressJS-Light.svg" title="Express" alt="Express" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/swagger/swagger-original.svg"  title="Swagger" alt="Swagger" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Sequelize-Light.svg" title="Sequelize" alt="Sequelize" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" title="mysql" alt="mysql" width="50" height="50"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="nodejs" alt="nodejs" width="50" height="50"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodemon/nodemon-original.svg" title="nodemon" alt="nodemon" width="50" height="50"/>&nbsp;
</div>

## How to Run Locally

1. Clone the repository:  ```git clone https://github.com/Fiorezarn/Assignment3_FiorezaRadhinNaufal.git```
2. ```cd Assignment3_FiorezaRadhinNaufal```
3. ```npm install```
4. Ensure that your web server (e.g., Apache, Nginx) and database server (e.g., MySQL, PostgreSQL) are running.
5. ```npx sequelize-cli db:migrate```
6. ```npx sequelize-cli db:seed:all```
7. ```npm start```
