import { Component, OnInit } from '@angular/core';
import { Background } from './background';
import { BackgroundService } from './background.service';
import { fromEvent } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.less']
})
export class BackgroundComponent implements OnInit {
  scrollTop = 0
  bg1 = new Background('', '')
  bg2 = new Background('', '')
  bg3 = new Background('', '')
  bg4 = new Background('', '')
  active = 0
  subscription = fromEvent(window, 'scroll')
                 .pipe(throttleTime(200))
                 .subscribe(() => this.onScrollEvent())
  constructor(private backgroundService:BackgroundService) { }

  ngOnInit() {
    this.backgroundService.background1.subscribe(bg => {
      this.bg1.src = bg.src;
      this.bg1.position = bg.position;
      this.active = 1;
    })
    this.backgroundService.background2.subscribe(bg => {
      this.bg2.src = bg.src;
      this.bg2.position = bg.position;
      this.active = 2;
    })
    this.backgroundService.background3.subscribe(bg => {
      this.bg3.src = bg.src;
      this.bg3.position = bg.position;
      this.bg4.poster = bg.poster;
      this.active = 3;
    })
    this.backgroundService.background4.subscribe(bg => {
      this.bg4.src = bg.src;
      this.bg4.position = bg.position;
      this.bg4.poster = bg.poster;
      this.active = 4;
    })
    this.backgroundService.activate.subscribe(a => {
      this.onScrollEvent()
    })
  }
  
  onScrollEvent() {
    if (this.bg1) {
      this.scrollTop = window.pageYOffset 
        || document.documentElement.scrollTop 
        || document.body.scrollTop || 0
      let images = document.getElementsByClassName('bg')
      if (images.length > 0) {
        let closestIndex = 0,
          closest = Math.abs(images[0].getBoundingClientRect().top - window.innerHeight / 4)
        for (let i = 1; i < images.length; i++) {
          let top = Math.abs(images[i].getBoundingClientRect().top - window.innerHeight / 4)
          if (top < closest) {
            closestIndex = i;
            closest = top
          }
        }
        
        let src = images[closestIndex].getAttribute('src'),
            position = images[closestIndex].getAttribute('position'),
            transform = images[closestIndex].getAttribute('transform'),
            poster = images[closestIndex].getAttribute('poster')
        this.backgroundService.update(new Background(src, position, transform, poster))
      }
    }
  } 
}
