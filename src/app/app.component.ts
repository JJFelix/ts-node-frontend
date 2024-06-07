import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientService } from './service/patient.service';

import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { CustomHttpResponse } from './interface/httpResponse';
import { Patient } from './interface/patient';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  httpResponse: CustomHttpResponse | undefined;
  patients: Patient[] | undefined;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe({
      next: (response) => {
        (this.httpResponse = response);
        (this.patients = response.data)
      },
      error: (error) => console.log(error),
    });
  }
}
