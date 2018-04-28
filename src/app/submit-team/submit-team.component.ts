import { Component, OnInit } from '@angular/core';
import { Team } from '../models/Models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-submit-team',
  templateUrl: './submit-team.component.html',
  styleUrls: ['./submit-team.component.css']
})
export class SubmitTeamComponent implements OnInit {

  constructor(private service: DataService) { }
  private counter = 0;
  model: Team = new Team('', this.counter );
  ngOnInit() {
  }

  addTeam(form) {
    const team: Team = new Team(form.value.name, ++this.counter );
    this.service.addTeam(team);
  }
}
