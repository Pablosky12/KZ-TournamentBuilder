import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Fixture } from '../models/Models';

@Component({
  selector: 'app-fixture-grid',
  templateUrl: './fixture-grid.component.html',
  styleUrls: ['./fixture-grid.component.css']
})
export class FixtureGridComponent implements OnInit {

  grid: Fixture;
  defaultMessage = 'Click on generate to build a fixture based on current teams';
  constructor(private service: DataService) { }

  ngOnInit() {
  }

  show() {
    this.grid = this.service.gerateFixture();
  }

}
