import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface Item {
  key: string;
  id: number;
}

export class ItemsPayload {
  constructor(
    public operation = 'list',
    public tableName = 'tot',
    public payload = []) { }
}

@Injectable()
export class TotService {

  private endpoint = 'https://vxcau2ie6g.execute-api.eu-west-1.amazonaws.com/prod';

  constructor(private http: Http) { }

  getItems = (payload: ItemsPayload): Observable<Item[]> => {
    return this.http.post(`${this.endpoint}`, payload)
      .map(res => res.json().Items)
      .debug('TotService - getItems')
      .catch((err: Response, _) => {
        console.error(err.statusText);
        return Observable.of([]);
      });
  }

}
