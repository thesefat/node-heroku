### How to play with this app

- Clone this repo and install dependencies via `npm install` or `yarn install`
- For running with mongodb must have to `docker`, then run this command via terminal.

    `docker run --name mongodb -d --rm -p 27027:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password mongo`

- Now `npm start` & have some fun 👍

<br>

### API Endpoints & Definitions

<br>

- __/api/courses [ GET, POST, PUT, DELETE ]__

    ```
    {
        name:'computer science'
    }
    ```

- __/api/students [ GET, POST, PUT, DELETE ]__

    ```
    {

    "name":"Sefat Anam",
    "isGold":true,
    "phone":"12312312311",
    "courseIds":[
        "623b669f8da9b1233e324583","623b66938da9b1233e324581"]

    }

    ```

- __/api/users/login [ POST ]__

    ```
    {
       "email":"sefatanam@gmail.com",
       "password":"12345678"
    }
    ```

- __/api/users/register [ POST ]__

    ```
    {
        "name":"sefatanam",
        "email":"sefatanam@gmail.com",
        "password":"12345678"
    }
    ```
