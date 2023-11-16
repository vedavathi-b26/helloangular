import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import {SampleInterface } from '../sample.interface/sampleinterface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,
  ReactiveFormsModule],
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
      <section class="listing-apply">
        <h2 class="section-heading">Apply Now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">

        <button type="submit" class="primary">Apply now</button>
      </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  sampleInterface: SampleInterface | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  constructor(){
    const sampleInterfaceId = Number(this.route.snapshot.params['id']);
    this.sampleInterface = this.housingService.getSampleInterfaceById(sampleInterfaceId);
  }

  submitApplication(){
    this.housingService.submitApplication(
    this.applyForm.value.firstName ??'',
    this.applyForm.value.lastName ??'',
    this.applyForm.value.email ??''
    )
  }
}
