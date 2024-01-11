import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterUnitsService } from 'src/app/services/filter-units.service';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterUnits: FilterUnitsService
  ) {}
  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });

    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });
  }

  onSubmit(): void {
    const { hour, showClosed } = this.formGroup.value;
    this.filteredResults = this.filterUnits.filter(
      this.results,
      showClosed,
      hour
    );
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
