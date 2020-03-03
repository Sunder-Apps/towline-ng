import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  enabled:boolean = false;

  constructor() { 
    if (typeof(Storage) !== undefined) {
      this.enabled = true;
    }
  }

  set (key:string, value:string) {
    if (this.enabled) {
      window.localStorage.setItem(key, value)
    }
  }

  get (key:string) {
    if (this.enabled) {
      return window.localStorage.getItem(key);
    } else {
      return undefined;
    }
  }

  remove (key:string) {
    if (this.enabled) {
      window.localStorage.removeItem(key);
    }
  }

  clear () {
    if (this.enabled) {
      window.localStorage.clear();
    }
  }
}