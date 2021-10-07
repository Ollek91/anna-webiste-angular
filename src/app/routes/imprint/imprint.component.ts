import {Component, OnInit} from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  faInstagram = faInstagram;
  faEnvelope = faEnvelope;

  constructor() {
  }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
