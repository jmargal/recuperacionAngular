import { Component, OnInit } from '@angular/core';
import { Hospitale } from '../../_interfaces/hospital.interface';
import { HospitalService } from '../../_services/hospital.service';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor(private hospSvc:HospitalService) { }

  hospitalesList:Hospitale[]=[]
  ngOnInit(): void {
    this.hospSvc.getHospitales().subscribe({
      next:(resp)=>{
        this.hospitalesList=resp.hospitales;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
