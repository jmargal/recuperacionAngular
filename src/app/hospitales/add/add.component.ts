import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../../_services/hospital.service';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;


  constructor(private hospSvc:HospitalService,private acctSvc:AccountService) { }

  isAdmin:boolean=false;

  ngOnInit(): void {
    if(this.acctSvc.userValue?.role==='ADMIN_ROLE'){
      this.isAdmin=true;
    }
  }

  isValidName(){
    return this.myForm?.controls['nombre']?.errors && this.myForm?.controls['nombre']?.touched
  }

  isValidDireccion(){
    return this.myForm?.controls['direccion']?.errors && this.myForm?.controls['direccion']?.touched
  }

  add(){
    let nombre=this.myForm?.controls['nombre']?.value;
    let direccion=this.myForm?.controls['direccion']?.value;
    let tipo=this.myForm?.controls['tipo']?.value;
    this.hospSvc.addHospital(nombre,direccion,tipo).subscribe({
      next:(resp)=>{
        alert("Añadido")
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }

}
