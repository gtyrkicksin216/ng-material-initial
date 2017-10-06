import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ff-form',
  templateUrl: './ff-form.component.html',
  styleUrls: ['./ff-form.component.css'],
})
export class FfFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  inputOne = 'Label';
  inputTwo = 'Input With border';
  helperText = "This is where Helper text goes";
  radioLabel = "Radio Button";
  checkboxLabel = "Checkbox";
}
