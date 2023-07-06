import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-contact-add-edit',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.scss']
})
export class ContactAddEditComponent implements OnInit{
  contactForm!: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _contactService: ContactService, 
    private _dialogRef: MatDialogRef<ContactAddEditComponent>,
    //err
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
    ) {
    this.contactForm = this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
    });
  }

ngOnInit(): void {
  this.contactForm.patchValue(this.data);
}

  onFormSubmit() {
    if (this.contactForm.valid) {
      if (this.data){
        this._contactService
        .updateContact(this.data.id, this.contactForm.value)
        .subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Contact detail updated!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        });
      } else {
        this._contactService.addContact(this.contactForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Contact added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        });
      }
    }
  }
}
