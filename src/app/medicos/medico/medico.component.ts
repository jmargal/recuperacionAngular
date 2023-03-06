import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/_interfaces/medico.interface';
import { MedicosService } from '../../_services/medicos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html'
})
export class MedicoComponent implements OnInit {

  constructor(private medicosSvc:MedicosService,private actualRoute:ActivatedRoute) { }

  medico!:Medico;

  ngOnInit(): void {
    let id=this.actualRoute.snapshot.params['id']
    this.medicosSvc.getMedico(id).subscribe({
      next:(resp)=>{
        this.medico = resp.medico
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
