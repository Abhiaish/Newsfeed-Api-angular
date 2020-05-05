import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-techcrunch',
  templateUrl: './techcrunch.component.html',
  styleUrls: ['./techcrunch.component.css']
})
export class TechcrunchComponent implements OnInit {
  techcrunch;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getTechcrunch().subscribe((data)=>{
      //console.log(data);
      this.techcrunch = data['articles'];
      console.log(this.techcrunch)
    });
  }
}
