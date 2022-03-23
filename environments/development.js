class Credentials
{
    static port = 27027;
    static password = 'password';
    static host = 'localhost';
    static username = 'admin';
    static authSource = 'admin';
    static databaseName = 'University';
}

exports.config = {
    // connectionString: `mongodb://${Credentials.username}:${Credentials.password}@${Credentials.host}:${Credentials.port}?retryWrites=true&w=majority`,
    connectionString: "mongodb+srv://cnq:rPKMMHEtEVZI3TTb@cluster0.audg9.mongodb.net?retryWrites=true&w=majority",
    useNewUrlParser: true,
    databaseName: Credentials.databaseName,
    useUnifiedTopology: true,
    // winstonConnectionString: `mongodb://${Credentials.username}:${Credentials.password}@${Credentials.host}:${Credentials.port}/${Credentials.databaseName}?retryWrites=true&w=majority&authSource=${Credentials.authSource}`,
    winstonConnectionString: `mongodb+srv://cnq:rPKMMHEtEVZI3TTb@cluster0.audg9.mongodb.net/University?retryWrites=true&w=majority&authSource=${Credentials.authSource}`,

}




// const uri = "mongodb+srv://cnq:<password>@cluster0.audg9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
