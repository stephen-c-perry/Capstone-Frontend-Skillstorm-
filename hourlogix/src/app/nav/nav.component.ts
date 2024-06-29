import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Timesheets', icon: 'pi pi-clock', },
          { label: 'Log Hours', routerLink: '/logHours', icon: 'pi pi-hourglass', title: 'Log Hours'},
          { label: 'Pay Stubs', routerLink: '/paystubs', icon: 'pi pi-receipt', title: 'Pay Stubs'},
          { label: 'Request Time Off', routerLink: '/requesttimeoff',  icon: 'pi pi-calendar-times', title: 'Request Time Off' },
          { label: 'Approve Time Off',routerLink: '/approvetimeoff',  icon: 'pi pi-calendar-clock', title: 'Approve Leave Request' },
          
      ]
  }
}