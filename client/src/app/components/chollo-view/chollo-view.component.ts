import { Component, OnInit } from '@angular/core';
import { ChollosService } from 'src/app/services/chollos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chollo-view',
  templateUrl: './chollo-view.component.html',
  styleUrls: ['./chollo-view.component.css']
})
export class CholloViewComponent implements OnInit {

  chollo : any

  constructor(private cholloService : ChollosService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    if(params['id']){
      this.cholloService.getChollo(params['id']).subscribe(
        res=>{
          console.log(res);
          this.chollo = res;
        },
        err => console.log(err)
      )
    }
  }



}
