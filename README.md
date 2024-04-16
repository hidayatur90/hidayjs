<p align="center"><img src="https://github.com/hidayatur90/hd-template/assets/85423030/75670ab7-c935-4152-8726-761403f0765e" width="300" alt="HidayJS"></p>

# About HidayJS (v1.0.0)

HidayJS is open-source *pure backend* template using ExpressJS based on clean MVC (Model View Controllers) architecture.

## Tech

- [ExpressJS] version ^4.19.2
- [Sequelize] version ^6.37.1
- [Sequelize-cli] version ^6.6.2
- [Nodemon] version ^3.1.0
- [Dotenv] version ^16.4.5
- Supported dialects: [mssql], [mariadb], [mysql], [oracle], [postgres], [db2] and [sqlite].

This stack is still under development and possible to change at any time.

## Installation

Dillinger requires [Node.js] to run. In this example below we want to use npm and [npx], if you use [yarn] or others it doesn't matter just adjust it.

1. Clone this Repository
```sh
git clone https://github.com/hidayatur90/hd-template
```

2. Install the dependencies and devDependencies and start the server.

```sh
cd hd-template
npm i
```

3. Rename .env.example to .env and update the file.
```sh
PORT=your_port
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_DIALECT=your_database_dialect
SECRET_KEY=your_secret_key_here
```
*adjust .env to what you will use

4. Set your dialect

In this template the default dialect that use is MySQL, if you want to change it just install the library and adjust it. For example you want to use PostgreeSQL you can do...
```sh
npm install pg
```
and change DB_DIALECT on your .env file to your own dialect.

5. Migrate the database and seed it using sequelize-cli
```sh
npx sequelize-cli db:migrate 
npx sequelize-cli seed:generate
```

6. Finally, run the HidayJS
```sh
npm run dev
```

## Default Auth

On this HidayJS template we use JWT auth, so if you want to try it make sure you must authenticate and set your token to the header.

| header | value |
| ------ | ------ |
| Content-Type | application/json |
| authorization | Bearer your_jwt_token |

## Improvement
HidayJS its just MVC template for ExpressJS so you can improve that with your requirement apps. For example you can improve with Swagger to make the Documentation API, you can change the default auth to OAuth, etc.

## License

[MIT License]

   [ExpressJS ]: <https://expressjs.com/>
   [Sequelize]: <https://sequelize.org/>
   [Sequelize-cli ]: <https://sequelize.org/docs/v7/cli/>
   [Nodemon]: <https://www.npmjs.com/package/nodemont>
   [Dotenv]: <https://www.npmjs.com/package/dotenv>
   [mssql]: <https://www.microsoft.com/en-us/sql-server/sql-server-downloads>
   [mariadb]: <https://mariadb.org/>
   [mysql]: <https://www.mysql.com/>
   [oracle]: <https://www.oracle.com/id/>
   [postgres]: <https://www.postgresql.org/>
   [db2]: <https://www.ibm.com/id-id/products/db2>
   [sqlite]: <https://www.sqlite.org/>
   [node.js]: <http://nodejs.org>
   [npx]: <https://www.npmjs.com/package/npx>
   [yarn]: <https://yarnpkg.com/>
   [MIT License]: <https://github.com/hidayatur90/hd-template/blob/main/LICENSE>
