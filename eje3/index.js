const esPar = require('./numeros');
const Logger = require('logplease');
const logger = Logger.create('utils');

[2, 3, 101, 201, 202, 100].forEach(numpar => {
    if (esPar(numpar)) {
        logger.info(`El número ${numpar} es par`);
    } else {
        logger.error(`El número ${numpar} no es par`);
    }
});