require('dotenv').config()
exports.config = function () {

    if (process.env.NODE_ENV === 'production') {
        return {
            connectionString: process.env.PROD_CONNECTION_STRING,
            databaseName: process.env.DATABASE_NAME,
            winstonConnectionString: process.env.PROD_WINSTON_CONNECTION_STRING
        };
    } else if (process.env.NODE_ENV === 'development') {
        return {
            connectionString: process.env.DEV_CONNECTION_STRING,
            databaseName: process.env.DATABASE_NAME,
            winstonConnectionString: process.env.DEV_WINSTON_CONNECTION_STRING
        }
    }
}
