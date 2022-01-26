import { Component, HostBinding, OnInit } from '@angular/core';
import { ChollosService } from '../../services/chollos.service';
import { Chollo } from "src/app/models/Chollo";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chollo-list',
  templateUrl: './chollo-list.component.html',
  styleUrls: ['./chollo-list.component.css']
})
export class CholloListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  chollos : any = [];


  constructor(private cholloService : ChollosService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getChollos();
    const params = this.activatedRoute.snapshot.params;
    if(params['id']){
      this.cholloService.getChollo(params['id']).subscribe(
        res=>{
          console.log(res);
          this.chollos = res;
        },
        err => console.log(err)
      )
    }
  }

  getChollos(){
    this.cholloService.getChollos().subscribe(
      res => {
        this.chollos = res;
      },

      err => console.error(err)
    )
  }

  deleteChollo(id : string){
    this.cholloService.deleteChollo(id).subscribe(
      res => {
        console.log(res);
        this.getChollos();
      },
      err => console.error(err)

    )
  }

}
