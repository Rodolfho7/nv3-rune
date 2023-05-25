import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Member } from '../core/interfaces/clan';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  runeClanMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(`${this.baseUrl}/clanname/nivel 3`);
  }
}
