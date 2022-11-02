import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';


@Component({
  selector: 'eductional',
  templateUrl: './eductional.component.html'
})

export class EductionalComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void { }
}