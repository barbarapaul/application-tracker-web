import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../shared/application/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  applications: Array<any>;

  constructor(private applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.applicationService.getAll().subscribe(data => {
      this.applications = data;
    });
  }

}
