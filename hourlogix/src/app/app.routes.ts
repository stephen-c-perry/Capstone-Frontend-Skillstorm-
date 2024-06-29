import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TimeOffComponent} from './timeoff/timeoff.component';
import { ApproveTimeComponent } from './approve-time/approve-time.component';
import { PaystubComponent } from './paystub/paystub.component';
import { LoginComponent } from './login/login.component';
import { TimesheetsViewallComponent } from './timesheets-viewall/timesheets-viewall.component';
import { EmptimesheetviewComponent } from './emptimesheetview/emptimesheetview.component';
import { LogHoursComponent } from './log-hours/log-hours.component';

export const routes: Routes = [
    { path: 'requesttimeoff', component: TimeOffComponent },
    { path: 'approvetimeoff', component: ApproveTimeComponent },
    { path: 'paystubs', component: PaystubComponent },
    { path: 'logHours', component: LogHoursComponent}
];