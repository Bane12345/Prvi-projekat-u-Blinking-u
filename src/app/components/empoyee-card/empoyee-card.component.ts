import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empoyee-card',
  templateUrl: './empoyee-card.component.html',
  styleUrls: ['./empoyee-card.component.scss']
})
export class EmpoyeeCardComponent implements OnInit {
  @Input() employeeData;

  statusColor:string;
  constructor() { }

  ngOnInit(): void {
    switch(this.employeeData.status){
      case "Busy":
        this.statusColor="red"
      break;
      case "Available":
        this.statusColor="green"
      break;
      case "Out of office":
        this.statusColor="yellow"
      break;
      default:
        this.statusColor="gray"
        break;
    }
  }

}
