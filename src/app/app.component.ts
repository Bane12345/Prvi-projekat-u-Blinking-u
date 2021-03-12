import { Component, ViewChild , ElementRef } from '@angular/core';

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

  allEmployees:{
    name:string,
    position:string,
    department:string,
    status:string
  }[]=
    [{
      "name": "Hall Khomich",
      "position": "Physical Therapy Assistant",
      "department": "Support",
      "status": "Busy"
    }, {
      "name": "Sher Heggman",
      "position": "Quality Control Specialist",
      "department": "Training",
      "status": "Out of office"
    }, {
      "name": "Augustine Landrieu",
      "position": "Social Worker",
      "department": "Training",
      "status": "Busy"
    }, {
      "name": "Uri Fieller",
      "position": "Tax Accountant",
      "department": "Business Development",
      "status": "Busy"
    }, {
      "name": "Gage Bearcock",
      "position": "Budget/Accounting Analyst IV",
      "department": "Services",
      "status": "Out of office"
    }, {
      "name": "Caro Margarson",
      "position": "Assistant Media Planner",
      "department": "Research and Development",
      "status": "Available"
    }, {
      "name": "Gertie Penreth",
      "position": "Senior Quality Engineer",
      "department": "Sales",
      "status": "Busy"
    }, {
      "name": "Aloise Casarini",
      "position": "Social Worker",
      "department": "Human Resources",
      "status": "Busy"
    }, {
      "name": "Madella Brudenell",
      "position": "Analog Circuit Design manager",
      "department": "Engineering",
      "status": "Busy"
    }, {
      "name": "Bryanty Frontczak",
      "position": "Nurse",
      "department": "Business Development",
      "status": "Out of office"
    }, {
      "name": "Adelaida Magister",
      "position": "Account Coordinator",
      "department": "Accounting",
      "status": "Available"
    }, {
      "name": "Kristine Dunstan",
      "position": "VP Sales",
      "department": "Engineering",
      "status": "Busy"
    }, {
      "name": "Viviyan Harvatt",
      "position": "Assistant Manager",
      "department": "Training",
      "status": "Out of office"
    }, {
      "name": "Dori Brogini",
      "position": "Graphic Designer",
      "department": "Research and Development",
      "status": "Out of office"
    }, {
      "name": "Nataniel Ilive",
      "position": "Analog Circuit Design manager",
      "department": "Research and Development",
      "status": "Available"
    }, {
      "name": "Hinda Bernardotte",
      "position": "Mechanical Systems Engineer",
      "department": "Engineering",
      "status": "Busy"
    }, {
      "name": "Vassili Jendricke",
      "position": "Health Coach II",
      "department": "Engineering",
      "status": "Out of office"
    }, {
      "name": "Zuzana Burrell",
      "position": "Programmer II",
      "department": "Sales",
      "status": "Out of office"
    }, {
      "name": "Adeline Dearl",
      "position": "Engineer II",
      "department": "Human Resources",
      "status": "Out of office"
    }, {
      "name": "Clara Simnel",
      "position": "Occupational Therapist",
      "department": "Accounting",
      "status": "Busy"
    }, {
      "name": "Bowie Finnemore",
      "position": "Structural Engineer",
      "department": "Business Development",
      "status": "Available"
    }, {
      "name": "Bondy Geelan",
      "position": "Software Consultant",
      "department": "Services",
      "status": "Available"
    }, {
      "name": "Quinn Cowing",
      "position": "Pharmacist",
      "department": "Human Resources",
      "status": "Out of office"
    }, {
      "name": "Aubry Wipfler",
      "position": "Editor",
      "department": "Research and Development",
      "status": "Busy"
    }, {
      "name": "Amelita Tams",
      "position": "Analyst Programmer",
      "department": "Sales",
      "status": "Busy"
    }, {
      "name": "Maure Camel",
      "position": "Nurse",
      "department": "Human Resources",
      "status": "Busy"
    }, {
      "name": "Lorraine Menhenitt",
      "position": "Administrative Assistant IV",
      "department": "Product Management",
      "status": "Available"
    }, {
      "name": "Ambrosio McMurtyr",
      "position": "Software Engineer II",
      "department": "Training",
      "status": "Available"
    }, {
      "name": "Martino Maisey",
      "position": "Internal Auditor",
      "department": "Business Development",
      "status": "Out of office"
    }, {
      "name": "Jerri Wornum",
      "position": "Media Manager II",
      "department": "Human Resources",
      "status": "Busy"
    }, {
      "name": "Kimbra Linney",
      "position": "Structural Analysis Engineer",
      "department": "Training",
      "status": "Busy"
    }, {
      "name": "Anitra Orrice",
      "position": "Assistant Manager",
      "department": "Engineering",
      "status": "Out of office"
    }, {
      "name": "Darcy Cayford",
      "position": "Help Desk Technician",
      "department": "Sales",
      "status": "Available"
    }, {
      "name": "Zacharias Magor",
      "position": "Research Assistant IV",
      "department": "Training",
      "status": "Out of office"
    }, {
      "name": "Stanfield Dorn",
      "position": "Information Systems Manager",
      "department": "Services",
      "status": "Out of office"
    }, {
      "name": "Holly-anne Dummigan",
      "position": "Nurse",
      "department": "Product Management",
      "status": "Available"
    }, {
      "name": "Alix Dalinder",
      "position": "Account Executive",
      "department": "Engineering",
      "status": "Out of office"
    }, {
      "name": "Daile Maccaig",
      "position": "Systems Administrator III",
      "department": "Research and Development",
      "status": "Available"
    }, {
      "name": "Brianna Handslip",
      "position": "Research Assistant IV",
      "department": "Sales",
      "status": "Busy"
    }, {
      "name": "Elaina Wisdish",
      "position": "Geologist III",
      "department": "Human Resources",
      "status": "Busy"
    }, {
      "name": "Aylmer Flower",
      "position": "Staff Accountant III",
      "department": "Legal",
      "status": "Busy"
    }, {
      "name": "Towney Byham",
      "position": "Information Systems Manager",
      "department": "Training",
      "status": "Busy"
    }, {
      "name": "Trey Feitosa",
      "position": "Senior Sales Associate",
      "department": "Sales",
      "status": "Available"
    }, {
      "name": "Ritchie Schenfisch",
      "position": "Research Nurse",
      "department": "Business Development",
      "status": "Out of office"
    }, {
      "name": "Zabrina Schimpke",
      "position": "Geological Engineer",
      "department": "Services",
      "status": "Available"
    }, {
      "name": "Jacques Nolot",
      "position": "Civil Engineer",
      "department": "Marketing",
      "status": "Available"
    }, {
      "name": "Jorie Grundon",
      "position": "Software Consultant",
      "department": "Business Development",
      "status": "Available"
    }, {
      "name": "Debor Scranedge",
      "position": "Payment Adjustment Coordinator",
      "department": "Research and Development",
      "status": "Available"
    }, {
      "name": "Doyle Dahlman",
      "position": "Junior Executive",
      "department": "Business Development",
      "status": "Available"
    }, {
      "name": "Perri Harradence",
      "position": "Senior Financial Analyst",
      "department": "Legal",
      "status": "Busy"
    }]

    addNewEmployee(){
      this.allEmployees.unshift({
        name: this.mainEmployeeData[0].data,
        position: this.mainEmployeeData[1].data,
        department: this.mainEmployeeData[2].data,
        status: this.status
      })
    }


  tempArray:{
    name:string,
    position:string,
    department:string,
    status:string
  }[]=this.allEmployees;

  selectedStatus:string[]=[];

  status:string="Undefined";

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

  setStatus(status:string){
    this.status=status;
  }

  filterEmployees(status:string, btn: HTMLDivElement){
    if(this.selectedStatus.includes(status)){
      btn.classList.remove('selectedBtn');
      this.selectedStatus = this.selectedStatus.filter(el=>el!==status);
    }else{
      btn.classList.add('selectedBtn');
      this.selectedStatus.push(status);
    }

    if(this.selectedStatus.length===0){
      this.tempArray=this.allEmployees;
    }else{
      this.tempArray=this.allEmployees.filter(employee => this.selectedStatus.includes(employee.status))
    }
  }

}
