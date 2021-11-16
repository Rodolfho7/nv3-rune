import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../core/interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  private baseUrl = 'https://runescape-clan-api.herokuapp.com/user';

  constructor(private httpClient: HttpClient) { }

  runeRankUser(userName: string): Observable<Player> {
    return this.httpClient.get<Player>(`${this.baseUrl}/${userName}`);
  }
}
