import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';


@Component({
  selector: 'personal',
  templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void { }
}