import {ApplicationService} from './shared/application/application.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ApplicationListComponent} from './application-list/application-list.component';

import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApplicationSubmitComponent} from './application-submit/application-submit.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/application-list',
    pathMatch: 'full'
  },
  {
    path: 'application-list',
    component: ApplicationListComponent
  },
  {
    path: 'application-submit',
    component: ApplicationSubmitComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    ApplicationSubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
