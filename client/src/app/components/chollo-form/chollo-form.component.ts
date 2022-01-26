import { Component, HostBinding, OnInit } from '@angular/core';
import { Chollo } from 'src/app/models/Chollo';

import { ChollosService } from 'src/app/services/chollos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chollo-form',
  templateUrl: './chollo-form.component.html',
  styleUrls: ['./chollo-form.component.css']
})
export class CholloFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';


  chollo: Chollo = {
    id: 0,
    title: '',
    description: '',
    image: '',
    url : '',
    create_at: new Date()
  };

  edit: boolean = false;

  constructor(private cholloService: ChollosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params['id']){
      this.cholloService.getChollo(params['id']).subscribe(
        res=>{
          console.log(res);
          this.chollo = res;
          this.edit  = true;
        },
        err => console.log(err)
      )
    }

  }

  saveNewChollo() {
    delete this.chollo.create_at;
    delete this.chollo.id;
    this.cholloService.saveChollo(this.chollo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/chollos']);
        },
        err => console.error(err)
      )
  }

   updateChollo() {
    delete this.chollo.create_at;
    this.cholloService.updateChollo(this.chollo.id, this.chollo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/chollos']);
        },
        err => console.error(err)
      )
  }

}
