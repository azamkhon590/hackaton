import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Feature, YMap } from '@yandex/ymaps3-types';
import { YMapDefaultMarkerProps } from '@yandex/ymaps3-types/packages/markers';
import {
  YMapComponent,
  YMapDefaultFeaturesLayerDirective,
  YMapDefaultMarkerDirective,
  YMapDefaultSchemeLayerDirective,
  YReadyEvent,
} from 'angular-yandex-maps-v3';
import { LOCATION, PARKS_SEARCH_LIMIT, PARKS_SEARCH_TEXT } from '../constants';
import { emptyPoint } from '../factories/empty';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    RouterOutlet,
    RouterLink,
    RouterModule,
    YMapComponent,
    YMapDefaultFeaturesLayerDirective,
    YMapDefaultSchemeLayerDirective,
    YMapDefaultMarkerDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  map: any;
  title = 'hack';
  parkMarkers: YMapDefaultMarkerProps[] = [];
  selectedPark: Feature | null = null;
  location = LOCATION;
  test = 'a';
  data: any = {};
  fileToUpload: File | null = null;
  placemark = {
    coordinate: {
      0: 0,
      1: 0
    }
  };

  constructor() {}

  ngOnInit(): void {

  }
  async onMapReady(event: YReadyEvent<YMap>) {
    const { ymaps3, entity } = event;
    const parks = await ymaps3.search({
      text: PARKS_SEARCH_TEXT,
      limit: PARKS_SEARCH_LIMIT,
      type: ['businesses'],
    });
    if (parks.length) {
      this.location.center = parks[0].geometry?.coordinates || [0, 0];
    }

    this.parkMarkers = parks.map((park): YMapDefaultMarkerProps => {
      const { geometry = emptyPoint(), properties } = park;
      return {
        coordinates: geometry.coordinates,
        title: properties.name,
        subtitle: properties.description,
        onClick: () => this.handleSelectPark(park),
      };
    });
    this.test = 'b';
    for(let p of this.parkMarkers){
      this.placemark.coordinate[0] = p.coordinates[0];
      this.placemark.coordinate[1] = p.coordinates[1];
    };
    console.log(this.placemark);
  }

  click() {
    this.test = 't';
  }

  handleSelectPark(park: Feature) {
    this.selectedPark = park;
  }

}
