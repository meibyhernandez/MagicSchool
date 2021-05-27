import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {SearchingService} from "../../services/searching.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  char: any[] =[];
  SortbyParam = '';
  SortDirection = 'asc';
  name='';
  search='';

  

  constructor(private route:ActivatedRoute,
              private searchService: SearchingService, 
              private http: HttpClient) { }

  ngOnInit(): void {
    this.searchService.getCharacters().subscribe(
      data=>{this.char=data}
    );
     

//changes the direction in the sroting 
}
onSortDirection() {
  if (this.SortDirection === 'desc') {
    this.SortDirection = 'asc';
  } else {
    this.SortDirection = 'desc';
  }
}

//get a member by the full name 


}

