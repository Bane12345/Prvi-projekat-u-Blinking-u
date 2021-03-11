import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  mainEmployeeData:{
    title:string,
    data:string
    required?:boolean,
    disabledTitle?:boolean,
    disabledData?:boolean
  }[]=[
    {
      title:"Name",
      data:"Branislav",
      required:true
    },
    {
      title:"Position",
      data:"Full Stack Developer",
      required:true
    },
    {
      title:"Department",
      data:"Web app development",
      required:true
    }
  ]

  @ViewChild('dataFieldsContainer') dataFieldsContainer:ElementRef;

  addNewDataField(){
    this.mainEmployeeData.push({
      title:"Title",
      data:"Data",
      disabledData:false,
      disabledTitle:false,
    })

    let div:HTMLDivElement = (this.dataFieldsContainer.nativeElement as HTMLDivElement);
    div.scrollTop=div.scrollHeight;

  }

  deleteDataField(index:number){
    this.mainEmployeeData.splice(index,1);
  }

  updateEmployeeData(data){
    let index=data.index;
    let newData=data.data;
    this.mainEmployeeData[index]=newData;
  }
}
