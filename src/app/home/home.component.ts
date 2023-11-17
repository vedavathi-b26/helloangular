import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from '../sample/sample.component';
import { SampleInterface } from '../sample.interface/sampleinterface';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    CommonModule,
    SampleComponent ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button"(click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
      <!-- <section class="property-binding">
        <app-sample [sampleInterface]= "sampleInterface"></app-sample>
      </section> -->
      <!-- Add a property binding to the component template -->
      <section class="results">
        <!-- <app-sample
        *ngFor= "let sampleInterface of sampleInterfaceList" 
        [sampleInterface]="sampleInterface">
        </app-sample> -->
        <app-sample
        *ngFor="let sampleInterface of filteredLocationList" [sampleInterface]= "sampleInterface"></app-sample>
      </section>`,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  //readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa'; //

  /* sampleInterface: SampleInterface = {
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
  }; */  //to create sample values for interface like teshome, test city//

  /* sampleInterfaceList: SampleInterface[] = [
    {
      
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
    },
    {
      
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
    }
  ]; */ //use (ngFor) to list objects in components //
    
  sampleInterfaceList: SampleInterface[] =[];
     housingService: HousingService = inject(HousingService);
     filteredLocationList: SampleInterface[] = [];

     constructor() {
      /* this.sampleInterfaceList = this.housingService.getAllSampleInterfaces();
      this.filteredLocationList = this.sampleInterfaceList; */ //search feature to the app
      this.housingService.getAllSampleInterfaces().then((sampleInterfaceList:SampleInterface[])=>{
        this.sampleInterfaceList = sampleInterfaceList;
        this.filteredLocationList = sampleInterfaceList;
      });
     }
     filterResults(text: string) {
      if (!text) {
        this.filteredLocationList = this.sampleInterfaceList;
        return;
      }
      this.filteredLocationList = this.sampleInterfaceList.filter(
        (sampleInterface) =>
        sampleInterface?.city.toLowerCase().includes(text.toLowerCase())
      );
     }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
