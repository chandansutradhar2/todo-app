import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-merchant-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './merchant-signup.component.html',
  styleUrl: './merchant-signup.component.css'
})
export class MerchantSignupComponent {

  frmgrp: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmgrp = this.fb.group({
      'personalInfo': this.fb.group({
        'fullname': this.fb.control('', Validators.required),
        'mobile': this.fb.control('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
        'email': this.fb.control('', [Validators.required, Validators.email]),
        'password': this.fb.control('', Validators.required),
      }),
      'businessInfo': this.fb.group({
        'businessName': this.fb.control('', Validators.required),
        'businessType': this.fb.control(''),
        'businessCategory': this.fb.control(''),
        'businessAddress': this.fb.control(''),
        'businessCity': this.fb.control(''),
        'businessState': this.fb.control(''),
        'businessPincode': this.fb.control(''),
      }),
      'bankInfo': this.fb.group({
        'accountHolderName': this.fb.control(''),
        'accountNumber': this.fb.control('', Validators.required),
        'ifscCode': this.fb.control(''),
        'bankName': this.fb.control(''),
        'branchName': this.fb.control(''),
      }),
      'signaturies': this.fb.array([])  // FormArray initialized
    });
  }

  // Getter for signaturies FormArray
  get signaturies(): FormArray {
    return this.frmgrp.get('signaturies') as FormArray;
  }

  // Method to create a new signatory form group
  createSignatory(): FormGroup {
    return this.fb.group({
      name: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  // Method to add a signatory
  addSignatory(): void {
    this.signaturies.push(this.createSignatory());
  }

  // Method to remove a signatory
  removeSignatory(index: number): void {
    this.signaturies.removeAt(index);
  }
}
