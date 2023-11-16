import { Injectable } from '@angular/core';
import { SampleInterface } from './sample.interface/sampleinterface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

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
      ];

      getAllSampleInterfaces(): SampleInterface[] {
        return this.sampleInterfaceList;
      }
      getSampleInterfaceById(id: number): SampleInterface | undefined{
        return this.sampleInterfaceList.find(sampleInterface => sampleInterface.id === id);
      }
}
