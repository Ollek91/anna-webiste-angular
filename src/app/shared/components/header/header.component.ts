import {Component} from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faBars = faBars;

  $showMenu: boolean = false;
  $showNavbar: boolean = false;

  constructor() {
    document.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || this.$showMenu) {
        this.$showNavbar = true;
      } else {
        this.$showNavbar = false;
      }
    })
  }

  toggleMenu() {
    this.$showMenu = !this.$showMenu;
    if (document.body.scrollTop < 20 && document.documentElement.scrollTop < 20 && !this.$showMenu) {
      this.$showNavbar = false;
    } else {
      this.$showNavbar = true;
    }
  }

}
