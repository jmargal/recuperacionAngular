import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/_interfaces/medico.interface';
import { MedicosService } from '../../_services/medicos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor(private medicosSvc:MedicosService) { }

  medicosList:Medico[]=[]

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.medicosSvc.getMedicos().subscribe({
      next:(resp)=>{
        this.medicosList=resp.medicos
      },
      error:(err)=>{
      }
    })
  }

}
