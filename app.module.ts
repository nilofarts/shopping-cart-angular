import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSortModule, MatMenuModule, MatSelectModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, MatToolbarModule, MatSlideToggleModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CdkTableModule} from '@angular/cdk/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ShiftMasterModule } from './shiftMaster/components/shift-master.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShiftMasterService } from './shiftMaster/services/shift-master.service';
import { ShiftMasterComponent } from './shiftMaster/components/shift-master.component';
import { ResizableModule } from 'angular-resizable-element';
import { ShiftMasterTableModule } from './shiftMasterTable/shift-master-table.module';
import { ShiftMasterTableComponent } from './shiftMasterTable/shift-master-table.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicComponent } from './basic/basic.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './shopping-cart/login/login.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MaterialTableStickyComponent } from './material-table-sticky/material-table-sticky.component';
import { ExpandableTableComponent } from './expandable-table/expandable-table.component';
import { ScheduleAndProductionChargingComponent } from './schedule-and-production-charging/schedule-and-production-charging.component';
import { SpecificationMasterCrudComponent } from './specification-master-crud/specification-master-crud.component';




@NgModule({
  declarations: [
    AppComponent,
    ShiftMasterComponent,
    ShiftMasterTableComponent,
    DirectivesComponent,
    BasicComponent,
    ShoppingCartComponent,
    LoginComponent,
    MaterialTableComponent,
    MaterialTableStickyComponent,
    ExpandableTableComponent,
    ScheduleAndProductionChargingComponent,
    SpecificationMasterCrudComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    ShiftMasterModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    ResizableModule,
    MatSlideToggleModule,
    ShiftMasterTableModule
  ],
  providers: [ShiftMasterService],
  exports: [ShiftMasterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
