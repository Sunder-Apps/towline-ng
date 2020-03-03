import { Component, OnInit } from '@angular/core'
import { SettingsService } from './settings.service'

import { Settings, Theme } from './settings'
import { StorageService } from '../storage/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  settings:Settings
  themes:string[]
  constructor(private settingsService:SettingsService,
    private storageService:StorageService) {
    this.settingsService.settings.subscribe((settings) => {
      this.settings = settings
    })
    this.settingsService.update()
  }
  
  ngOnInit() {
    this.settingsService.getThemesSpaces()
  }

  update () {
    this.settingsService.update()
  }

  clear () {
    this.storageService.clear()
  }
}
