import { Injectable } from '@angular/core';
import { SampleInterface } from './sample.interface/sampleinterface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  /* readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

      protected sampleInterfaceList: SampleInterface[]= [
        {
          id: 0,
          name: 'Acme Fresh Start Housing',
          city: 'Chicago',
          state: 'IL',
          photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
          availableUnits: 4,
        },
        {
          id: 1,
          name: 'A113 Transitional Housing',
          city: 'Santa Monica',
          state: 'CA',
          photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
          availableUnits: 3,
        },
        {
          id: 2,
          name: 'Warm Beds Housing Support',
          city: 'Juneau',
          state: 'AK',
          photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
          availableUnits: 0,
        }
      ]; */

      url ='http://localhost:3000/locations';

      /*getAllSampleInterfaces(): SampleInterface[] {
        return this.sampleInterfaceList;
      }
      getSampleInterfaceById(id: number): SampleInterface | undefined{
        return this.sampleInterfaceList.find(sampleInterface => sampleInterface.id === id);
      }*/ //add static data to the housing service

      async getAllSampleInterfaces(): Promise<SampleInterface[]>
      {
        const data = await fetch(this.url);
        return await data.json() ?? [];
      }
      async getSampleInterfaceById(id: number):
      Promise<SampleInterface | undefined> {
        const data = await fetch('${this.url}/${id}');
        return await data.json() ?? {};
      }
      submitApplication(firstName: string, lastName: string, email: string)
      {
        console.log(firstName, lastName, email);
        // /* housing service */ console.log('Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`');
      }
      
    }
        
