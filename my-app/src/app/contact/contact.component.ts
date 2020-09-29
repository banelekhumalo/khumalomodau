import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: 'contact.component.html' })
export class ContactComponent implements OnInit {
    contactForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            surn: ['', Validators.required],
            numb: ['', Validators.required],
            email: ['', Validators.required],
            messege: ['', Validators.required],
            
        }, );
    }

    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.contactForm.reset();
    }
}
