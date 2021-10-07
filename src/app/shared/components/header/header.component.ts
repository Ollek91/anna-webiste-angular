import {Component} from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faBars = faBars;
  faLongArrowAltLeft = faLongArrowAltLeft;

  $showMenu = false;
  $showNavbar = false;
  $activeNavLink = [false, false, false, false];
  $smallHeader = false;

  constructor(private router: Router) {
    document.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || this.$showMenu) {
        this.$showNavbar = true;
      } else {
        this.$showNavbar = false;
      }
    })

    router.events.subscribe(value => {
      const url = this.router.url;
      this.$activeNavLink = [false, false, false, false];
      if(url.includes('about')) {
        this.$activeNavLink[0] = true;
      } else if(url.includes('skills')) {
        this.$activeNavLink[1] = true;
      } else if(url.includes('child')) {
        this.$activeNavLink[2] = true;
      } else if(url.includes('price')) {
        this.$activeNavLink[3] = true;
      }

      if(url.includes('impressum') || url.includes('datenschutzerklaerung')) {
        this.$smallHeader = true;
      } else {
        this.$smallHeader = false;
      }
    });
  }

  toggleMenu() {
    this.$showMenu = !this.$showMenu;
    if (document.body.scrollTop < 20 && document.documentElement.scrollTop < 20 && !this.$showMenu) {
      this.$showNavbar = false;
    } else {
      this.$showNavbar = true;
    }
  }

  onFocusOutEvent(event: Event) {
    console.log("focus out");
    this.toggleMenu();
  }

}
