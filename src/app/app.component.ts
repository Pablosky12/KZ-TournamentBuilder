import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnInit,
  Output} from '@angular/core';


import {FixtureGridComponent} from './fixture-grid/fixture-grid.component';
import { DataService } from './services/data.service';
import { Team } from './models/Models';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  teams;
  showPlaceHolder: Boolean = true;

  constructor (private cfr: ComponentFactoryResolver, private svc: DataService) {}

  @ViewChild('dynamicTable', {
    read: ViewContainerRef
  }) tableContainer: ViewContainerRef;

  ngOnInit() {
    this.svc.TeamNumber.subscribe(data => this.teams = data);
    this.svc.getNumberOfTeams();
  }

  // Method to dynamically load the grid with the fixture
  generateGrid(element) {
    // Delete the previous instance of the table if it exists
    this.tableContainer.clear();
    this.showPlaceHolder = false;
    let grid =  this.cfr.resolveComponentFactory(FixtureGridComponent);
    let exportedGrid = this.tableContainer.createComponent(grid);

    // This will pass the reference of the object to itself, so we can erase it
    exportedGrid.instance.reference = exportedGrid;
  }
}
