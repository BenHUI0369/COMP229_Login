import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactAddEditComponent } from '../contact-add-edit/contact-add-edit.component';
import { ContactService } from '../contact.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreService } from '../core/core.service';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-business-contact',
  templateUrl: './business-contact.component.html',
  styleUrls: ['./business-contact.component.scss']
})
export class BusinessContactComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'lastname',
    'firstname',
    'email',
    'phone',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog, 
    private _contactService: ContactService,
    private _coreService: CoreService,
    private navbarService: NavbarService
    ) { }
  ngOnInit() {
    this.getContactList();
    this.navbarService.show();
  }
  openAddContact() {
    const diaglogRef = this._dialog.open(ContactAddEditComponent);
    diaglogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getContactList();
        }
      }
    });
  }
  getContactList() {
    this._contactService.getContactList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteContact(id: number) {
    this._contactService.deleteContact(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Contact Deleted', 'done');
        this.getContactList();
      },
      error: console.log,
    })
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ContactAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getContactList();
        }
      }
    });
  }
}
