import { Component, OnInit } from '@angular/core';
import { List, Single } from 'src/app/Shared/Models/HomeModel';
import { UserHomeService } from '../user-home.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  constructor(private userHome:UserHomeService) { }

  ngOnInit(): void {
  }

  
  num:number=0;
  single:Single=null;
  showCard:boolean=true;
  value(){
    this.userHome.getSingleUser(this.num).subscribe(
      res=>{
        this.single=res;
        this.showCard=false;
      },
      error=>{
        alert(error.error.error);
      }
    )
  }

  reset(){
    this.showCard=true;
    this.single=null;
    this.num=0;
  }
}
