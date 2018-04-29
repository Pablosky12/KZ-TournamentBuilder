import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef } from '@angular/core';


import {FixtureGridComponent} from './fixture-grid/fixture-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('dynamicTable', {
    read: ViewContainerRef
  }) tableContainer: ViewContainerRef;

  constructor (private cfr: ComponentFactoryResolver) {}

  // Method to dynamically load the grid with the fixture
  generateGrid(element) {
    // Delete the previous instance of the table if it exists
    this.tableContainer.detach();
    let grid =  this.cfr.resolveComponentFactory(FixtureGridComponent);
    let exportedGrid = this.tableContainer.createComponent(grid);
    // This will pass the reference of the object to itself, so we can erase it
    exportedGrid.instance.reference = exportedGrid;
  }
}
