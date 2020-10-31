import { Component, OnInit } from '@angular/core';
import {LandingPageService} from './landing-page.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private landingPageService:LandingPageService) { }

  showAnswer1=false;
  showAnswer2=false;
  showAnswer3=false;
  showAnswer4=false;
  showAnswer5=false;

  flipVisiblity=false;
  showPopup=false;

  blogInfo:any[]=[];

  
  ngOnInit(): void {

    this.landingPageService.getBlog().subscribe((data:any[])=>{
      this.blogInfo=data;
      console.log(data);
    });

    this.highlightHeading=this.arrayofThree[0].heading;
    this.highlightDescription=this.arrayofThree[0].description.text;
    this.bulletsToRender=this.arrayofThree[0].description.bullets;
  }

  on() {
    document.getElementById("main").style.display = "block";
    this.showPopup=!this.showPopup;
  }

  off() {
    document.getElementById("main").style.display = "none";
    this.showPopup=!this.showPopup;
  }

  
  arrayofThree=[
    {
        heading:'Pre Application',
        description:
        {
          text:'This is something that I am writing on Tuesday because we have a meeting tomorrow and we will be changing this with catchy content folks.This is something that I am writing on Tuesday because we have a meeting tomorrow and we will be changing this with catchy content folks.',
          bullets:['Scheduling','Online Consultations','Application','Visa']
        },
        highlight:true
    },
    {
        heading:'Post Application',
        description:
        {
          text:'mock Post Application description.',
          bullets:['Scheduling1','Online Consultations1','Application1','Visa1']
        },
        highlight:false
    },
    {
        heading:'Life in US',
        description:
        {
          text:'not ready',
          bullets:['Scheduling2','Online Consultations2','Application2','Visa2']
        },
        highlight:false
    }
  ]
  
  highlight(ele){
    this.highlightHeading=ele.heading;
    this.highlightDescription=ele.description.text;
    for(let element of this.arrayofThree){
      if(element.heading===ele.heading) element.highlight=true;
      else element.highlight=false;
    }
    
  }

  highlightHeading='';
  highlightDescription='';
  bulletsToRender=[];

}
