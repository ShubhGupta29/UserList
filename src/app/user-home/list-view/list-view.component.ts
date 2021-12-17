import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/Shared/Models/HomeModel';
import { UserHomeService } from '../user-home.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(private userHome:UserHomeService) { }

  ngOnInit(): void {
  }

  
  num:number;
  cardShow:boolean=true;
  list:List=null;
  value(){
    if(this.num!=0){
      this.cardShow=false;
    }
    this.userHome.getListUsers(this.num).subscribe(
      res=>{
        this.list=res;
      },
      error=>{
        alert(error.error.error);
        
      }
    )
  }

  reset(){
    this.cardShow=true;
    this.num=0;
  }
}
