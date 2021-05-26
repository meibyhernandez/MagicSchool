import { Component, OnInit } from '@angular/core';
import {Character} from '../../character.model';
import { ActivatedRoute } from "@angular/router";
import {SearchingService} from "../../services/searching.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  char: Character[] =[];
  charHouse:any []=[];
  houseName: string;
  lastNa:string;
  name='';
  search='';

  //these icons are called every time the user search each house 
  icons: any[]=[
    {house: 'gryffindor',
    image: 'assets/images/gryffindorIcon.png'
    },
    {house: 'hufflepuff',
    image: 'assets/images/huffeIcon.png'
    },
    {house: 'ravenclaw',
    image: 'assets/images/ravenclawicon.png'
    },
    {house: 'slytherin',
    image: 'assets/images/slytheicon.png'
    },
  ]

  constructor(private route:ActivatedRoute,
    private searchService: SearchingService,
    private router:Router) { }

    ngOnInit(): void {
      this.route.params.subscribe( params => {
        this.houseName=params['house'];
        
//checks each house in the service to get the members
        if (params['house'] == "slytherin") {

          this.searchService.getHouse(params['house']).subscribe(
            data => {this.char = data});            
        }
        if (params['house'] == "gryffindor") {
          this.searchService.getHouse(params['house']).subscribe(
            data => {this.char = data});   
                    
        }
        if (params['house'] == "ravenclaw") {
          this.searchService.getHouse(params['house']).subscribe(
            data => {this.char = data});            
        }

        if (params['house'] == "hufflepuff") {
          this.searchService.getHouse(params['house']).subscribe(
            data => {this.char = data});            
        }
        
      });

      
}
filter(){
  
  this.searchService.getCharacters().subscribe(
    data=>{
      this.char=data.filter(x=>x.name.includes(this.search))
    }
  )
  this.search=this.name ;
}
}