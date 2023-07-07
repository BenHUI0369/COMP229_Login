import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.show();
  }
}
