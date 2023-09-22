import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   public heroNames: string[] = ['Spiderman','Ironman','Wonder Woman','Hulk','Gatubela','Thor','Black widow'];
   public deletedHero?: string='';

   removeLastHero(): void {
       this.deletedHero = this.heroNames.pop();
   }
}
