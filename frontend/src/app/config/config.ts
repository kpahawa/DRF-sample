import { Injectable } from '@angular/core';


@Injectable()
export class Config {
    private readonly dev = {
        serverAndProtocol: null,
        port: null,
        // set dev parent URL here
        parentURL: "http://127.0.0.1:8201",
        urlPrefix: null
    };
   
    private readonly prod = {
        serverAndProtocol: '92f16d81.ngrok.io/',
        port: null,
        // set dev parent URL here
        parentURL: 'http://localhost:4200',
        urlPrefix: null
    };
    public readonly ActiveEnvironment = this.dev;
} 