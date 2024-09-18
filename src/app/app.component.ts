import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularYandexMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  map: any;
  ngOnInit(): void {

    
  }
  title = 'hack';
}
