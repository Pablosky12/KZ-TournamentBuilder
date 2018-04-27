import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubmitTeamComponent } from './submit-team/submit-team.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { TeamsComponent } from './teams/teams.component';
import { FixtureGridComponent } from './fixture-grid/fixture-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    SubmitTeamComponent,
    TeamsComponent,
    FixtureGridComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
