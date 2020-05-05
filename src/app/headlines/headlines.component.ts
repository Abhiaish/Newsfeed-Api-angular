import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
  headlines;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getHeadlines().subscribe((data)=>{
      //console.log(data);
      this.headlines = data['articles'];
      console.log(this.headlines)
    });
  }

}
