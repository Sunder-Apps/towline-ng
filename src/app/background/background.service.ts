import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { Background } from './background'

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private active:number = 1
  private subject0:Subject<boolean> = new Subject<boolean>()
  private subject1:Subject<Background> = new Subject<Background>()
  private subject2:Subject<Background> = new Subject<Background>()
  private subject3:Subject<Background> = new Subject<Background>()
  private subject4:Subject<Background> = new Subject<Background>()
  activate:Observable<boolean> = this.subject0.asObservable()
  background1:Observable<Background> = this.subject1.asObservable()
  background2:Observable<Background> = this.subject2.asObservable()
  background3:Observable<Background> = this.subject3.asObservable()
  background4:Observable<Background> = this.subject4.asObservable()
  bg1:Background = new Background('', '')
  bg2:Background = new Background('', '')
  bg3:Background = new Background('', '')
  bg4:Background = new Background('', '')

  constructor () { }

  update (bg:Background) {
    if (bg.src.endsWith('.mp4')) {
      if (this.active == 3) {
        if (this.bg3.src != bg.src) {
          this.bg4 = bg
          this.subject4.next(this.bg4)
          this.active = 4
        }
      } else {
        if (this.bg4.src != bg.src) {
          this.bg3 = bg
          this.subject3.next(this.bg3)
          this.active = 3
        }
      }
    } else {
      if (this.active == 1) {
        if (this.bg1.src != bg.src) {
          this.bg2 = bg
          this.subject2.next(this.bg2)
          this.active = 2
        }
      } else {
        if (this.bg2.src != bg.src) {
          this.bg1 = bg
          this.subject1.next(this.bg1)
          this.active = 1
        }
      }
    }
  }

  updateString (src:string, pos:string) {
    this.update(new Background(src, pos))
  }

  trigger () {
    this.subject0.next(true)
  }
}
