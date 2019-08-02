import { RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RegistrationComponent } from './registration/registration.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingpageComponent } from './landingpage/landingpage.component';



export const MyRouting = RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent }
    // { path: 'userdetails', component: UserdetailsComponent },
    // { path: 'portfolio', component: PortfolioComponent },
    
])