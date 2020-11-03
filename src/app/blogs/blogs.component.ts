import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogHtml:any;
  blogImg:any;
  videoUrl:any;
  blogTopic:any;
  safeURL : any ; 

  constructor(private activatedRoute:ActivatedRoute , public _DomSanitizationService: DomSanitizer) { 
    
    
  }
  

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.blogHtml=params.body;
      this.blogTopic=params.blogTopic;   
      this.blogImg = params.image;
      console.log(params);      
      this.safeURL=params.videoURL;
    })
    this.videoUrl = this._DomSanitizationService.bypassSecurityTrustResourceUrl(this.safeURL)
  }

}
