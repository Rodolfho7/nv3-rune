import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../core/interfaces/clan';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  private baseUrl = 'https://runepixels.com:5000/clans/2449/list?playertype=0&playersubtype=0';

  constructor(private httpClient: HttpClient) { }

  runeClanMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(`${this.baseUrl}`);
  }
}
