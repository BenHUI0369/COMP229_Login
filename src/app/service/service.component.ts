import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.show();
  }
}
