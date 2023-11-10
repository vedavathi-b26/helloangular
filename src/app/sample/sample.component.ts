import { Component, Input } from '@angular/core'; /*related add Input parameter to the component*/
import { CommonModule } from '@angular/common';
import {SampleInterface } from '../sample.interface/sampleinterface';


@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <section class="result">
        <img src="/assets/angular.jpg" alt="">
        <p> Second Component here </p>
  </section>
  <section class="listing">
    <img class="listing-photo" [src]="sampleInterface.photo" alt="Exterior photo of {{sampleInterface.name}}">
    <h2 class="listing-heading">{{ sampleInterface.name }}</h2>
    <p class="listing-location">{{ sampleInterface.city}}, {{sampleInterface.state }}</p>
  </section> `,  /* Add interpolation to a component to a template*/
  
  styleUrls: ['./sample.component.css'],
})

export class SampleComponent {
    @Input() sampleInterface!: SampleInterface; /*related input parameter to the component*/
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/