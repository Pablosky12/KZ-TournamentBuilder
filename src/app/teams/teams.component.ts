import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Team } from '../models/Models';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})

export class TeamsComponent implements OnInit {

  teams: Team[];
  toDelete = -1;
  constructor (private svc: DataService) {}
  ngOnInit() {
    this.svc.TeamList.subscribe(data => this.teams = data);
    this.svc.getTeams();
  }

  setDelete(id) {
    if (this.toDelete === id) {
      this.toDelete = -1;
    } else {
      this.toDelete = id;
    }
  }
  executeDelete() {
    this.svc.deleteTeam(this.toDelete);
    this.toDelete = -1;
  }

}
