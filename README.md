# CedroTech-API

> ### This is an API Rest developed in NodeJS to register customer documents in txt files

&nbsp;&nbsp;&nbsp;

## 🛠 Technology

The main tools used in the project:

- [Typescript][typescript]
- [Node.js][nodejs]
- [ExpressJS][express]
- [PostgreSQL][postgresql]
- [TypeORM][typeorm]
- [ESLint][eslint]
- [JWT][jsonwebtoken]




[typescript]: https://www.typescriptlang.org/
[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/pt-br/
[postgresql]: https://www.postgresql.org/
[typeorm]: https://typeorm.io
[eslint]: https://eslint.org/
[jsonwebtoken]: https://jwt.io/


[license]: https://opensource.org/licenses/MIT


&nbsp;&nbsp;

## how to run the project


```bash
# clone repository
git clone https://github.com/fernandobritto/CedroTech-API.git

# enter the project folder
cd CedroTech-API

# install dependencies
yarn install

# fill in the environment variables
TOKEN_SECRET
TOKEN_EXPIRATION

# fill in the ormconfig file with your database information
ormconfig.json

# migrate the tables to your database
yarn typeorm migration:run

# run the project
yarn dev
```
&nbsp;&nbsp;&nbsp;

# Author

Fernando Britto

https://fernandobritto.github.io/

https://br.linkedin.com/in/fernando-britto-web-developer

