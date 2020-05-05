import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  apple;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getApple().subscribe((data)=>{
      //console.log(data);
      this.apple = data['articles'];
      console.log(this.apple)
    });
  }


}
