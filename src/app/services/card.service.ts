import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CardServiceResponse} from '../dto/CardServiceResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl: string = environment.baseUrl + 'card-scheme';

  constructor(private http: HttpClient) { }

  public verifyCard(cardNumber: string): Observable<CardServiceResponse> {
    return this.http.get<CardServiceResponse>(this.baseUrl + '/verify/' + cardNumber);
  }

  public getHitCount(start: number, limit: number): Observable<CardServiceResponse> {
    return this.http.get<CardServiceResponse>(this.baseUrl + '/stats?start=' + start + '&limit=' + limit);
  }

}
