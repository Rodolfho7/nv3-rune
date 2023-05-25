import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../core/interfaces/player';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  runeRankUser(userName: string): Observable<Player> {
    return this.httpClient.get<Player>(`${this.baseUrl}/member/${userName}`);
  }
}
