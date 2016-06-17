/**
 * Created by navyaeetaram on 6/16/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()

export class GetService{
    constructor(private _http:Http){}
    private myUrl='http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/CA/San Francisco';
    getData():Observable<any>{
        return this._http.get(this.myUrl)
            .map(this.extractData);


        }
    private extractData(res: Response){
        let body= res.json();
        return body.data||{};
    }
}
