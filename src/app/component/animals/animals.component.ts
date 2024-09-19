import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent implements OnInit {
  ngOnInit(): void {
    
  }
  data: any = {};
}
