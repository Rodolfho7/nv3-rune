import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setItem(itemName: string, itemValue: string): void {
    localStorage.setItem(itemName, itemValue);
  }

  getItem(itemName: string): string | null {
    return localStorage.getItem(itemName);
  }

  removeItem(itemName: string): void {
    localStorage.removeItem(itemName);
  }
}
