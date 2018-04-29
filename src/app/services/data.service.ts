import { Injectable, Output, EventEmitter } from '@angular/core';
import { Team, Match, Date, Fixture } from '../models/Models';

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
  gerateFixture() {
    let fixtureIds = 0;
    // Create a copy of the teams
    const fxTeams = this.teams.map(team => {
      fixtureIds++;
      return new Team(team.Name, team.Id, fixtureIds);
    });
    let lastTeam = this.getSpecificTeam(fxTeams.length, fxTeams);
    const _teams = this.teams.length;
    const dates  = this.teams.length - 1;
    const matchesByDate = (this.teams.length / 2);
    // The full fixture is nothing more than an array of dates
    let datesArr: Date[] = []; // new Array<Date>(dates);
    datesArr.fill(new Date(undefined, undefined));
    let currTeamIncrease = 1;
    let currTeamDecrease = _teams - 1;

    // First let's populate the fixture with the consecutive values until n-1 and repeat until complete;
    for (let currDate = 0; currDate < dates; currDate++) {
      // Each date is just an array of matches
      datesArr[currDate] = new Date( new Array<Match>(), currDate + 1);

      // For each match that should be in that date
      for (let match = 0; match < matchesByDate; match++) {
        if (currTeamIncrease === _teams) {
          currTeamIncrease = 1;
        }
        let team1 = this.getSpecificTeam(currTeamIncrease, fxTeams);
        datesArr[currDate].Matches[match] = new Match(team1, undefined);
        if (match > 0) {
          if (currTeamDecrease === 0) {
            currTeamDecrease = _teams - 1;
          }
          let team2 = this.getSpecificTeam(currTeamDecrease, fxTeams);
          datesArr[currDate].Matches[match].Team2 = team2;
          currTeamDecrease--;
        }
        currTeamIncrease++;
      }
      for (let match = 1; match < matchesByDate; match++) {
      }
    }

    // Add the last pair team to the first match in each date;
    for (let date = 0; date < dates; date++) {
      let currMatch =  datesArr[date].Matches[0];
      currMatch.Team2 = lastTeam;
      if ((date + 1) % 2 === 0) {
        datesArr[date].Matches[0] = this.switchTeams(currMatch);
      }
    }

    return new Fixture(datesArr, matchesByDate);

  }

  private getSpecificTeam(teamId: Number, teams: Team[]) {
    return teams.find(team => team.FixtureId === teamId);
  }
  private switchTeams(match: Match) {
    return new Match(match.Team2, match.Team1);
  }
}
