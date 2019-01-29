import { Component, OnInit } from '@angular/core';

import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})

export class StudentListComponent implements OnInit 
{
  constructor(private studentService: StudentService) 
  { }
  
  studentArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() 
  {
    this.studentService.getStudents().subscribe(
      list => {
        this.studentArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) 
  {
    if (confirm('Marvellous : Are you sure to cancel this Addmission ?')) 
    {
      this.studentService.deleteStudent($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(student) 
  {
    return student.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
