import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserData } from './userdata.myservice';
import { Department } from './app.department';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StardemoComponent } from './stardemo/stardemo.component';
import { LikedemoComponent } from './likedemo/likedemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component'
import { Summary } from './pipedemo/summary.pipe';

//For InMemory
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserDataFromDB } from './app.usermodel-data';

//Importing the http client
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { UsersService } from './app.usersdata.service';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ColorChanger } from './app.color-changer';
import { ChildModule } from './child.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MyRouting } from './app.routing'
import { MyChildRouting } from './app.child.routing';
import { StatemanagementComponent } from './statemanagement/statemanagement.component';
import { StoreModule } from '@ngrx/store';
import { addCoinReducer } from './blockchain.reducer';
import { DisplaystatemanagementComponent } from './displaystatemanagement/displaystatemanagement.component';



@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    HeaderComponent,
    // FooterComponent,
    // StardemoComponent,
    // LikedemoComponent,
    PipedemoComponent,
    Summary,
    FormbuilderComponent,
    LoginComponent,
    RegistrationComponent,
    UserdetailsComponent,
    PortfolioComponent,
    LandingpageComponent,
    StatemanagementComponent,
    DisplaystatemanagementComponent,
    // ColorChanger
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // InMemoryWebApiModule.forRoot(UserDataFromDB),
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    ChildModule,
    MyRouting,
    MyChildRouting,
    StoreModule.forRoot({ blockchain: addCoinReducer })
  ],
  providers: [UserData, Department, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
