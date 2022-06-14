import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTruck, faBagShopping, faFileInvoice, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { FaDuotoneIconComponent } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  FaDuotoneIconComponent = FaDuotoneIconComponent;
  faMagnifyingGlass = faMagnifyingGlass;
  faTruck = faTruck;
  faBagShopping = faBagShopping; 
  faFileInvoice = faFileInvoice; 
  faLocationDot = faLocationDot;
  @Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
}
