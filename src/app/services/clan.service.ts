import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clan } from '../core/interfaces/clan';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  private baseUrl = 'https://runescape-clan-api.herokuapp.com/clan';

  constructor(private httpClient: HttpClient) { }

  runeClanMembers(clanName: string): Observable<Clan> {
    return this.httpClient.get<Clan>(`${this.baseUrl}/${clanName}`);
  }
}
