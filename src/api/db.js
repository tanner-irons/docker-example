const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

exports.module.createConnection = function () {
    const config = {
        server: 'localhost',
        authentication: {
            options: {
                userName: 'sa',
                password: 'sql_password1106'
            }
        },
        options: {
            rowCollectionOnDone: true
        }
    }
    const connection = new Connection(config);
    return new Promise((resolve, reject) => {
        connection.on('connect', (err) => {
            if (err) {
                reject(err);
            }
            resolve(connection);
        });
    });
}

function createRequest(query, connection) {
    return new Request(query, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
        connection && connection.close();
    });
}

exports.module.executeRequest = function (query, connection) {
    return new Promise((resolve, reject) => {
        const request = createRequest(query, connection);
        request.on('done', (columns) => {
            resolve(columns);
        });
        connection.execSql(request);
    });

}


