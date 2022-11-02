import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';


@Component({
  selector: 'reference',
  templateUrl: './reference.component.html'
})

export class ReferenceComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void { }
}