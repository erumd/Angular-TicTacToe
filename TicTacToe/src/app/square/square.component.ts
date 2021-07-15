import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      square works!
    </p>
    
    <button> {{ value }}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent  {

  @Input() value: 'X' | "O" | undefined ;

  constructor() { 
    
  }

  // ngOnInit(): void {
  // }

}
