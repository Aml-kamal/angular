import { Component } from '@angular/core';
interface Meal
{
mName:string;
mPrice:number;
mImg:string;
}
@Component({
  selector: 'app-recommended-gallery',
  standalone: true,
  imports: [],
  templateUrl: './recommended-gallery.component.html',
  styleUrl: './recommended-gallery.component.css'
})
export class RecommendedGalleryComponent {
  recommendedList : Meal[] =[
    {mName:'bread',mPrice:100,mImg:'../../assets/img/ben-garratt.jpg'},
    {mName:'bread',mPrice:200,mImg:'../../assets/img/clem-onojeghuo.jpg'},

    {mName:'bread',mPrice:300,mImg:'../../assets/img/stas-ovsky.jpg'},
    {mName:'bread',mPrice:100,mImg:'../../assets/img/ben-garratt.jpg'},
    {mName:'bread',mPrice:200,mImg:'../../assets/img/clem-onojeghuo.jpg'},

    {mName:'bread',mPrice:300,mImg:'../../assets/img/stas-ovsky.jpg'},
    {mName:'bread',mPrice:100,mImg:'../../assets/img/ben-garratt.jpg'},
    {mName:'bread',mPrice:200,mImg:'../../assets/img/clem-onojeghuo.jpg'},

    {mName:'bread',mPrice:300,mImg:'../../assets/img/stas-ovsky.jpg'},
    {mName:'bread',mPrice:100,mImg:'../../assets/img/ben-garratt.jpg'},
    {mName:'bread',mPrice:200,mImg:'../../assets/img/clem-onojeghuo.jpg'},

    {mName:'bread',mPrice:300,mImg:'../../assets/img/stas-ovsky.jpg'},
    {mName:'bread',mPrice:100,mImg:'../../assets/img/ben-garratt.jpg'},
    {mName:'bread',mPrice:200,mImg:'../../assets/img/clem-onojeghuo.jpg'},

    {mName:'bread',mPrice:300,mImg:'../../assets/img/stas-ovsky.jpg'},

  ]
}
