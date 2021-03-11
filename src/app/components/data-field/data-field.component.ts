import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-field',
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.scss']
})
export class DataFieldComponent implements OnInit {
  @Input() required:boolean;//if true only data input can be edited, and component cant be deleted

  @Input() title:string;
  @Input() data:string;
  @Input() disabledTitle:boolean;
  @Input() disabledData:boolean;
  @Input() index:number;

  @Output() deleteDataFieldEmiter = new EventEmitter<number>();
  @Output() dataChangedEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(dataInputRef:HTMLInputElement){
    this.disabledData=!this.disabledData;

    //If filed is not required - data editing is allowd
    if(!this.required){
      this.disabledTitle=!this.disabledTitle;
    }

    dataInputRef.focus();
  }

  deleteDataField(){
    this.deleteDataFieldEmiter.emit(this.index);
  }

  updateEmployeeData(newTitleValue:string,newDataValue:string){
    let objekat={
      data:{
        title:newTitleValue,
        data:newDataValue,
        required:this.required,
        disabledTitle:this.disabledTitle,
        disabledData:this.disabledData
      },
      index:this.index
    }
    this.dataChangedEvent.emit(objekat);
  }
}
