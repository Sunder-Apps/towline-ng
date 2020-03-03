import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log(window.location.pathname)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let element:HTMLElement, element2:HTMLElement
        element = document.getElementById('chance') as HTMLElement
        element2 = document.getElementById('chance2') as HTMLElement
        if (element && window) {
          if (window.location.pathname == '/timeline') { //window.location.pathname == '/' || 
            element.classList.add('timeline')
          } else {
            element.classList.remove('timeline')
            if (window.location.pathname == '/') {
              element2.classList.add('hidden');
            } else {
              element2.classList.remove('hidden');
            }
          }
        }
      }
    })
  }

}
