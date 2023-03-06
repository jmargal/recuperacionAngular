import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from '../../_services/medicos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {



  constructor(private formBld: FormBuilder,private medicosScv:MedicosService) { }

  myForm:FormGroup=this.formBld.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    especialidad: ['', [Validators.required, Validators.minLength(5)]],
    telefono: ['', [Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
    aceptaNuevos:['']
  })

  ngOnInit(): void {
  }

  isValidName(){
    return this.myForm.controls['nombre'].errors && this.myForm.controls['nombre'].touched
  }

  isValidEspecialidad(){
    return this.myForm.controls['especialidad'].errors && this.myForm.controls['especialidad'].touched
  }

  isValidTelefono(){
    return this.myForm.controls['telefono'].errors && this.myForm.controls['telefono'].touched
  }

  add(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
    }
    else{
      let nombre=this.myForm.controls['nombre'].value
      let especialidad=this.myForm.controls['especialidad'].value
      let telefono=this.myForm.controls['telefono'].value
      let aceptaNuevos=this.myForm.controls['aceptaNuevos'].value
      this.medicosScv.addMedico(nombre,especialidad,telefono,aceptaNuevos).subscribe({
        next:(resp)=>{
          alert("Añadido")
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }


  }
}
