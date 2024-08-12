import { Component } from '@angular/core';
import { RecommendedGalleryComponent } from '../recommended-gallery/recommended-gallery.component';


interface Meal
{
mName:string;
mPrice:number;
mImg:string;
}
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedGalleryComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
mealList : Meal[] =[
  {mName:'koshari',mPrice:100,mImg:'../../assets/img/4er7mj1598733193.jpg'},
  {mName:'sushi',mPrice:200,mImg:'../../assets/img/g046bb1663960946.jpg'},
  {mName:'shakshuka',mPrice:150,mImg:'../../assets/img/g373701551450225.jpg'},
  {mName:'Kafteji',mPrice:300,mImg:'../../assets/img/1bsv1q1560459826.jpg'},
  {mName:'Corba',mPrice:200,mImg:'../../assets/img/58oia61564916529.jpg'},
  {mName:'koshari',mPrice:100,mImg:'../../assets/img/4er7mj1598733193.jpg'},
  {mName:'sushi',mPrice:200,mImg:'../../assets/img/g046bb1663960946.jpg'},
  {mName:'shakshuka',mPrice:150,mImg:'../../assets/img/g373701551450225.jpg'},
  {mName:'Kafteji',mPrice:300,mImg:'../../assets/img/1bsv1q1560459826.jpg'},
  {mName:'Corba',mPrice:200,mImg:'../../assets/img/58oia61564916529.jpg'},
  {mName:'koshari',mPrice:100,mImg:'../../assets/img/4er7mj1598733193.jpg'},
  {mName:'sushi',mPrice:200,mImg:'../../assets/img/g046bb1663960946.jpg'},
  {mName:'shakshuka',mPrice:150,mImg:'../../assets/img/g373701551450225.jpg'},
  {mName:'Kafteji',mPrice:300,mImg:'../../assets/img/1bsv1q1560459826.jpg'},
  {mName:'Corba',mPrice:200,mImg:'../../assets/img/58oia61564916529.jpg'},
  {mName:'koshari',mPrice:100,mImg:'../../assets/img/4er7mj1598733193.jpg'},
  {mName:'sushi',mPrice:200,mImg:'../../assets/img/g046bb1663960946.jpg'},
  {mName:'shakshuka',mPrice:150,mImg:'../../assets/img/g373701551450225.jpg'},
  {mName:'Kafteji',mPrice:300,mImg:'../../assets/img/1bsv1q1560459826.jpg'},
  {mName:'Corba',mPrice:200,mImg:'../../assets/img/58oia61564916529.jpg'},

]



}
