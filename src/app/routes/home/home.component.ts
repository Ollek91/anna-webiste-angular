import { Component, OnInit } from '@angular/core';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faSeedling, faDumbbell, faStreetView, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faAddressCard = faAddressCard;
  faSeedling = faSeedling;
  faDumbbell = faDumbbell;
  faStreetView = faStreetView;
  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
