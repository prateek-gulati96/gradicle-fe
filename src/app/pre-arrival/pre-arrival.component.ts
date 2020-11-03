import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pre-arrival',
  templateUrl: './pre-arrival.component.html',
  styleUrls: ['./pre-arrival.component.css']
})
export class PreArrivalComponent implements OnInit {
  blogDetails  : details[]
  subcategory : String;
  constructor(private http : HttpClient, private router:Router, private _Activatedroute: ActivatedRoute) { }
  features = [
    { 
      "one": "Ideation",
      "two":"This is something that I am writing on Tuesday because we have a meeting tomorrow and we will be changing this with catchy content folks."
    },
    { 
      "one": "Ideation1",
      "two":"This is something that I am writing on Tuesday because we have a meeting tomorrow and we will be changing this with catchy content folks."
    },
    { 
      "one": "Ideation2",
      "two":"This is something that I am writing on Tuesday because we have a meeting tomorrow and we will be changing this with catchy content folks."
    },
    { 
      "one": "Ideation3",
      "two":"This is something that I am writing on Tuesday because we have a meeting tomorrow and we will be changing this with catchy content folks."
    },
  ]

  getBlogListBasedCategory(input)
  {
    
    let url = 'http://localhost:3000/app/blog/category/'+input;
    this.blogDetails = []
    this.http.get(url).subscribe((data: any[]) => {
        
        data.forEach(res => {
          
          let detail : details = { id: res._id , body: res.body, blogTopic:res.blogTopic, image: "http://localhost:3000/"+res.image , subCategory : res.subcategory, videoURL : res.videoURL};
          this.blogDetails.push(detail)
        });
          this.blogDetails=this.blogDetails.reverse()
          console.log(this.blogDetails)
        });
  }

  openBlog(input)
  {
    this.router.navigate(["/blogs"],{ queryParams: input})
  }

  ngOnInit(): void {
    this.subcategory =  this._Activatedroute.snapshot.paramMap.get("subCategory");
    this.getBlogListBasedCategory(this.subcategory);
  }

}
interface details{
  id : String,
  body : String,
  blogTopic:String,
  subCategory : String,
  image : String,
  videoURL : String
}