import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-create-tourist',
  templateUrl: './create-tourist.component.html',
  styleUrls: ['./create-tourist.component.css']
})
export class CreateTouristComponent implements OnInit {

  tourist: Tourist = new Tourist(); 
  constructor(private touristService:TouristService){}
 
  ngOnInit(): void {
  }
  saveTourist(){
    this.touristService.createTourist(this.tourist).subscribe(data=>{
      console.log(data);
      
    },
    error =>console.log(error));
    
  }
  alert() {
    alert("Form submitted successfully");
  }
  
onSubmit(){
  console.log(this.tourist);
  this.saveTourist();
  this.alert();

}
}
