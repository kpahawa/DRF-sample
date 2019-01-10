import { Injectable } from "@angular/core";
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
// import { CookieService } from "./cookie.service";



@Injectable()
export class HTTPService {

    constructor(private _http: Http) { }

    /**
     * Sends and parses a post request as a JSON response. The with credentials
     * token ensures that any request sent uses the CSRF Token
     *
     * @param obj the parameters to send via post request. The parameters are sent
     * within the request but are not appended to the URL like in the case of a GET request
     * @param URLpath the endpoint that the request needs to hit
     *
     * @returns an observable object with the response that needs to be subscribed to
     */
    public postObject(obj: any, URLpath: string) {
        var headers = new Headers();
        // const token = this.cs.readCookie('csrftoken');
//        headers.append('X-CSRFToken', token);
        return this._http.post(URLpath, obj,
            {   //headers: headers,
                withCredentials: true
            }).map(res => res.json());

    }

    /**
     * Sends and parses a GET request as a JSON response. The with credentials
     * ensures that any request sent uses the CSRF Token returned by Django. the default
     * content type for all requests is JSON.
     *
     * @param URLpath the endpoint that the request needs to hit
     * @param params the params for the request as URLSearchParam objects - for a get
     * request they are depicted on the URL as query param strings. Ex: http://.../?param1=abc
     *
     * @returns an Observable object that needs to be subscribed to
     */
    public getObject(URLpath: string, params?: URLSearchParams) {
        var headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this._http.get(URLpath,
            {
                headers: headers,
                withCredentials: true,
                search: params
            }).map(res => res.json());
    }

    /**
     * send a PUT request to an endpoint in a JSON format
     *
     * @param obj the parameters to send via post request. The parameters are sent
     * within the request but are not appended to the URL like in the case of a GET request
     * @param URLpath the endpoint that the request needs to hit
     *
     * @returns an observable object with the response that needs to be subscribed to
     */
    public putObject(obj: any, URLpath: string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put(URLpath, obj,
            {
                headers: headers,
                withCredentials:true
            }).map(res => res.json());
    }
}
