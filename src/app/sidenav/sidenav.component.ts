import { Component, OnInit } from '@angular/core';
import { faHouse, faTableColumns, faListCheck, faDiagramProject,faUsers , faCalendarDays, faBook} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  faHouse = faHouse
  faTableColumns = faTableColumns
  faListCheck = faListCheck
  faDiagramProject = faDiagramProject
  faCalendarDays = faCalendarDays
  faBook = faBook
  faUsers = faUsers
  
  constructor() { }

  ngOnInit(): void {
  }

}
