### How to play with this app

- For running with mongodb must have to `docker`, then run this command via terminal.

`docker run --name mongodb -d --rm -p 27027:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password mongo`

- Now `npm start` & have some fun 👍

<br>

### API Endpoints & Definitions

<br>

- /api/courses [ GET, POST, PUT, DELETE ]

```
    {
        name:'computer science'
    }
```

- /api/api/students [ GET, POST, PUT, DELETE ]

```
    {

    "name":"Sefat Anam",
    "isGold":true,
    "phone":"12312312311",
    "courseIds":[
        "623b669f8da9b1233e324583","623b66938da9b1233e324581"]

    }

```

- /api/users/login [ POST ]

```
 {
       "email":"sefatanam@gmail.com",
       "password":"12345678"
 }
```

- /api/users/register [ POST ]

```
    {
        "name":"sefatanam",
        "email":"sefatanam@gmail.com",
        "password":"12345678"
    }
```
