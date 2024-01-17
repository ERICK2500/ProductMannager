import LoggerService from "../services/logger.service.js";
import config from "../config/config.js";

const logger = new LoggerService(config.enviroment)

export const attachLogger = (req, res, next) => {
  console.log('Logger attached successfully.');
  req.logger = logger.logger;
  req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`);
  next();
};


export const getLogger = () => logger.logger;