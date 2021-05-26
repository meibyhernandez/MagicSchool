import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  countStd: any[] = [];
 
  
  constructor( private http: HttpClient,
               private router:Router ) { 
  }

  ngOnInit(): void {
  }

  SearchHouse(house:string){
    this.router.navigate( ['/members',house] )
  }

  SortLastName(word:string){
    this.router.navigate(['/search', word])
  }
  

}
