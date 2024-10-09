## RESTful API Store Inventory

This is the API of the product to fulfill phincon academy assignment 3

## Swagger UI
![alt text](https://github.com/Fiorezarn/Assigment3_FiorezaRadhinNaufal/blob/main/public/images/swaggerui.png)

## Features
- **Get All Products**: Retrieve a list of all products with optional search functionality by product name or product description.
- **Get Product by ID**: Retrieve details of a specific product using its unique identifier.
- **Create Product**: Add a new product to the database.
- **Archive and Unarchive Product**: Change the status of a product to archived or unarchived.
- **Delete Product**: Permanently remove a product from the database.

## Tech Stack

<div>
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/ExpressJS-Light.svg" title="Express" alt="Express" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/swagger/swagger-original.svg"  title="Swagger" alt="Swagger" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Sequelize-Light.svg" title="Sequelize" alt="Sequelize" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" title="mysql" alt="mysql" width="50" height="50"/>&nbsp;
</div>

## How to Run Locally

- Clone the repository:  ```git clone https://github.com/Fiorezarn/Assignment3_FiorezaRadhinNaufal.git```
- ```cd Assignment3_FiorezaRadhinNaufal```
- ```npm install```
- Ensure that your web server (e.g., Apache, Nginx) and database server (e.g., MySQL, PostgreSQL) are running. You can typically do this through your local development environment or server management tool.
- ```npx sequelize-cli db:migrate```
- ```npx sequelize-cli db:seed:all```
- ```npm start```
