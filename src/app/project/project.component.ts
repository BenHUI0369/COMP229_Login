import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.show();
  }
  /*
  onclick() {
    const click = Array.from(document.querySelectorAll('.detail')) as HTMLElement[];
    for (let i = 0; i < click.length; i++)
    {
      if (click[i].style.display == 'block')
      {
        click[i].style.display = 'none';
        return;
      }
      click[i].style.display = 'block';
    }

    console.log("12300");
  }
  */

onclick(index: number) {
  const details = Array.from(document.querySelectorAll('.detail')) as HTMLElement[];
  const buttons = Array.from(document.querySelectorAll('button')) as HTMLElement[];

  if (details[index].style.display == 'none'|| details[index].style.display == '') {
    details[index].style.display = 'block';
    buttons[index].textContent = '-';
  } else {
    details[index].style.display = 'none';
    buttons[index].textContent = '+';
  }
  
}


}







