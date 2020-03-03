import { Component, OnInit } from '@angular/core';
import { AlertsService } from './alerts.service';
import { Alert, Answer } from './alert';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DefaultDialogComponent } from './default-dialog/default-dialog.component';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.less']
})
export class AlertsComponent implements OnInit {
  alerts:Alert[]
  ref:MatDialogRef<DefaultDialogComponent>

  constructor(private alertsService:AlertsService,
              private matDialog:MatDialog) { }

  ngOnInit() { 
    this.alertsService.alerts.subscribe((alerts) => {
      this.alerts = alerts;
      if (this.ref) {
        this.ref.close()
      }
      for (var i = 0; i < this.alerts.length; i++) {
        if (this.alerts[i].disabled == false) {
          break;
        }
      }
      if (i < this.alerts.length) {
        this.ref = this.matDialog.open(DefaultDialogComponent, { 
          data: this.alerts[i]
        })
        this.ref.afterClosed().subscribe(answer => {
          this.alertsService.dismiss(i, parseInt(answer));
        })
      }
    })
    this.alertsService.update()
  }
}
