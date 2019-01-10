import { Injectable } from '@angular/core';

import { Config } from '../config/config';

@Injectable()
export class ApiUrlFactory {

    private baseUrl = '';
    private parentURL = '';

    constructor(private config: Config) {

        if (config.ActiveEnvironment.serverAndProtocol) {
            this.baseUrl = config.ActiveEnvironment.serverAndProtocol;
            this.parentURL = config.ActiveEnvironment.parentURL;

            if (config.ActiveEnvironment.port) {
                this.baseUrl += ":" + config.ActiveEnvironment.port + "/";
            }
        } else {
            if (config.ActiveEnvironment.port) {
                console.error("Port value supplied, but ignored because server not specified");
            }
        }

//        if (config.urlPrefix) {
//            this.baseUrl += config.urlPrefix;
//        }
    }

    public getBaseUrl(): string {
        return this.baseUrl;
    }

    public getParentURL(): string {
        return this.parentURL;
    }

}
