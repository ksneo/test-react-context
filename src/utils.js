import debug from 'debug';

export function consoleLogger(namespace) {
    const namespaceDebug = debug(namespace);
    namespaceDebug.log = console.log.bind(console);
    return namespaceDebug;
}

export function logger(namespace) {
    return {
        console: consoleLogger(namespace),
    };
}