import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../core/interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  // private baseUrl = 'https://runescape-clan-api.herokuapp.com/user';
  private baseUrl = 'https://runepixels.com:5000/players';

  constructor(private httpClient: HttpClient) { }

  runeRankUser(userName: string): Observable<Player> { // Player no lugar de any
    const userNameFormated = userName.replace(' ', '-');
    return this.httpClient.get<Player>(`${this.baseUrl}/${userNameFormated}`);
  }
}
