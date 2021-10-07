import { Component } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  $smallFooter = false;

  constructor(private router: Router) {
    router.events.subscribe(value => {
      const url = this.router.url;
      if(url.includes('impressum') || url.includes('datenschutzerklaerung')) {
        this.$smallFooter = true;
      } else {
        this.$smallFooter = false;
      }
    });
  }


}
