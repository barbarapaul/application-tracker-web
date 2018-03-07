import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplicationService} from '../shared/application/application.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-application-submit',
  templateUrl: './application-submit.component.html',
  styleUrls: ['./application-submit.component.css']
})
export class ApplicationSubmitComponent {

  application: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private applicationService: ApplicationService) {
  }

  gotoList() {
    this.router.navigate(['/application-list']);
  }

  save(form: NgForm) {
    form["answers"] = JSON.parse(form["answers"]);
    this.applicationService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
