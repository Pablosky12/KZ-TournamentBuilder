import { Injectable, Output, EventEmitter } from '@angular/core';
import { Team } from '../models/team';


@Injectable()
export class DataService {
  teams: Team[] = [];

  @Output() TeamList: EventEmitter<Team[]> = new EventEmitter();

  getTeams() {
    return this.TeamList.emit(this.teams);
  }
  addTeam(team: Team) {
    this.teams.push(team);
  }
  deleteTeam(id: Number) {
    this.teams.forEach((element, index, object)  => {
      if (element.Id === id) {
        console.log(element.Name);
        console.log(element.Id);
        object.splice(index, 1);
      }
    });
  }
}
