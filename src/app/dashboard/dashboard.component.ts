import { Component, OnInit } from '@angular/core';
import { faTruck, faBagShopping, faFileInvoice, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { FaDuotoneIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faLeaf, faClock, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  FaDuotoneIconComponent = FaDuotoneIconComponent;
  faClock = faClock;
  faUser = faUser;
  faLeaf = faLeaf;
  faCheck = faCheck;
  faHeadset = faHeadset;
  faTruck = faTruck;
  faBagShopping = faBagShopping; 
  faFileInvoice = faFileInvoice; 
  faLocationDot = faLocationDot;
  constructor() { }

  ngOnInit(): void {
  }

}
