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

  constructor(private activatedRoute:ActivatedRoute , public _DomSanitizationService: DomSanitizer) { 
    
  }
  

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.blogHtml=params.body;
      this.blogTopic=params.blogTopic;   
      console.log(params);      
      this.videoUrl=this._DomSanitizationService.bypassSecurityTrustResourceUrl(params.videoURL);
      console.log('videoUrl',this.videoUrl);
    })
  }

}
