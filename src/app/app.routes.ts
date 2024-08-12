import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"portfolio",component:PortfolioComponent},
    {path:"gallery",component:GalleryComponent},
    {path:"contact",component:ContactComponent},
    
];
