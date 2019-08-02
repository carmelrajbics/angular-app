import { RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const MyChildRouting = RouterModule.forChild([
    { path: 'userdetails/:id/:name', component: UserdetailsComponent },
    { path: 'portfolio', component: PortfolioComponent },
])