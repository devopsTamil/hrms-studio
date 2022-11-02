import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';


@Component({
  selector: 'nominee',
  templateUrl: './nominee.component.html'
})

export class NomineeComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void { }
}