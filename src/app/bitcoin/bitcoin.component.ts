import { Component, OnInit } from '@angular/core';
import { ApiService } from  './../api.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
bitcoin;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getBitcoin().subscribe((data)=>{
      //console.log(data);
      this.bitcoin = data['articles'];
      console.log(this.bitcoin)
    });
  }

}
