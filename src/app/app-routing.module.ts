import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechcrunchComponent } from './techcrunch/techcrunch.component';



const routes:Routes=[
  {
    path:'apple',component:AppleComponent
  },
  {
    path:'bitcoin',component:BitcoinComponent
  },
  {
    path:'headlines',component:HeadlinesComponent
  },
  {
    path:'techcrunch',component:TechcrunchComponent
  }
];





@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  
  exports:[RouterModule],
})
export class AppRoutingModule { }
