import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '../../_services/account.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService
            ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            correo: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        //Llamamos al método login del servicio accountService y le enviamos los datos del
        //formulario
        this.accountService.login(this.f['correo'].value, this.f['password'].value).subscribe({
          next:(resp)=>{
            this.router.navigate([''])
          },
          error:(err)=>{
            console.log(this.f['correo'].value);
            console.log(this.f['password'].value);

            console.log(err);
          }
        })
        //Falta suscribirnos y redirigir al dashboard si es correcto

    }
}
