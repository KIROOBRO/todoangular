import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public value = '';


  @Input() formControl: FormControl = new FormControl('');
  @Input() label: string = '';
  @Input() isBlack = false;

  constructor() { }

  public ngOnInit(): void {
  }

}
