export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

export class Logger {
  private static logLevel: LogLevel = LogLevel.INFO; // Nível de log padrão

  static setLogLevel(level: LogLevel) {
    this.logLevel = level;
  }

  static debug(message: string, ...args: any[]) {
    if (this.logLevel <= LogLevel.DEBUG) {
      console.debug(`[${LogLevel[LogLevel.DEBUG]}] ${message}`, ...args);
    }
  }

  static info(message: string, ...args: any[]) {
    if (this.logLevel <= LogLevel.INFO) {
      console.info(`[${LogLevel[LogLevel.INFO]}] ${message}`, ...args);
    }
  }

  static warn(message: string, ...args: any[]) {
    if (this.logLevel <= LogLevel.WARN) {
      console.warn(`[${LogLevel[LogLevel.WARN]}] ${message}`, ...args);
    }
  }

  static error(message: string, ...args: any[]) {
    if (this.logLevel <= LogLevel.ERROR) {
      console.error(`[${LogLevel[LogLevel.ERROR]}] ${message}`, ...args);
    }
  }
}
