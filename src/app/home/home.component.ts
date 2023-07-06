import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.show();
  }
}
