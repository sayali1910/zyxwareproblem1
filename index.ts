type LogLevel = 'debug' | 'info' | 'warn' | 'error';
type LogFormatter = (level: LogLevel, message: string) => string;

class Logger {
    
  private logLevel: LogLevel = 'info';
  private logFormatter :LogFormatter=(level,message)=>`[${level.toUpperCase()}] ${message}`
  setLogLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }
  setLogFormatter(logFormatter:LogFormatter) {
    this.logFormatter=logFormatter
  }
  log(currentlevel: LogLevel, message: string) {
    const levels = ['debug', 'info', 'warn', 'error'];
    if (levels.indexOf(currentlevel) >= levels.indexOf(this.logLevel)) {
      console.log(this.logFormatter(currentlevel,message));
    }
  }
}
const logger = new Logger(); 
logger.log('info', 'This is an info message'); 
logger.log('debug', 'This is a debug message'); 
logger.log('error', 'This is an error message'); 

logger.setLogLevel('debug'); 
logger.setLogFormatter((level, message) => `[${level.toUpperCase()}] ${message}`); 
logger.log('info', 'This is an info message'); 
logger.log('debug', 'This is a debug message'); 
logger.log('error', 'This is an error message'); 


