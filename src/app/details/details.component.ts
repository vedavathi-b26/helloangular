import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import {SampleInterface } from '../sample.interface/sampleinterface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="sampleInterface?.photo" alt="Exterior photo of {{ sampleInterface?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{sampleInterface?.name}}</h2>
        <p class="listing-location">{{sampleInterface?.city}}, {{sampleInterface?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units Available: {{sampleInterface?.availableUnits}}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  sampleInterface: SampleInterface | undefined;
  constructor(){
    const sampleInterfaceId = Number(this.route.snapshot.params['id']);
    this.sampleInterface = this.housingService.getSampleInterfaceById(sampleInterfaceId);
  }
}
