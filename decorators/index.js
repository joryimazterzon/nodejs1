class DataService {
    processData(data) {
        return data.map(item => item * 2);
    }
}

// Decorat DataService

class DataServiceWithLogging {
    constructor(dataService,logger) {
        this.dataService = dataService;
        this.logger = logger;
    }
    processData(data) {
        this.logger.log('iniciando proceso de datos'); // esta es la logica del decorador
        const resultado = this.dataService.processData(data); // esta es la logica del servicio base
        this.logger.log('proceso de datos finalizado'); // esta es la logica del decorador
        return resultado; // esta es la logica del decorador
    }
}

class Logger {
    log(message) {
        console.log(`[Logger] ${message}`);
    }
}

const baseService = new DataService();
const logger = new Logger();
const decorateService = new DataServiceWithLogging(baseService, logger);

// uso del servicio decorado
const inputData = [1, 2, 3, 4, 5];
const processedData = decorateService.processData(inputData);
console.log(processedData);