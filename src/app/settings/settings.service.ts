import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { Settings, Theme } from './settings'

import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  subject:Subject<Settings> = new Subject<Settings>();
  settings:Observable<Settings> = this.subject.asObservable();
  list:Settings = new Settings();

  constructor(private storageService:StorageService) {
    //this.storageService.set(this.list.settingsId, '');
    this.load()
  }

  load () {
    let str = this.storageService.get(this.list.settingsId),
        json:any;
    if (str !== null && str !== undefined && str !== '') {
      json = JSON.parse(str);
      if (json !== null && json !== undefined) {
        this.list = { ...this.list, ...json };
      }
    }
    this.update();
  }

  set (key:string, value:any) {
    if (key === 'settingsId') {
      return
    }
    if (this.list[key] && typeof(this.list[key]) === typeof(value)) {
      this.list[key] = value;
      this.update();
    }
  }

  update () {
    this.subject.next(this.list);
    this.storageService.set(this.list.settingsId, JSON.stringify(this.list));
  }

  getThemesKeys():string[] {
    let keys = Object.keys(Theme)
    let upper = keys.slice(keys.length / 2)
    return upper
  }

  getThemesSpaces():string[] {
    let keys = Object.keys(Theme)
    let upper = keys.slice(keys.length / 2)
    let cap = upper.map(v => v.replace(/_/g, ' '))
    return cap
  }
}
