import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY :string ='fcd2ef7cce6e4330854226f1c8013d90';

  constructor(private httpClient : HttpClient) { }

  public getTechcrunch(){
  return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
  public getApple(){
    return this.httpClient.get(`http://newsapi.org/v2/everything?q=apple&from=2020-05-04&to=2020-05-04&sortBy=popularity&apiKey=${this.API_KEY}`)
  }
  public getBitcoin(){
    return this.httpClient.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-05&sortBy=publishedAt&apiKey=${this.API_KEY}`)
  }
  public getHeadlines(){
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.API_KEY}`)
  }
}
