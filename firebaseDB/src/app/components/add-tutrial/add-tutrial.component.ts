import { Component, OnInit } from '@angular/core';
import { TutorailService } from './../../services/tutorail.service';
import { Tutorial } from './../../models/tutorial';

@Component({
  selector: 'app-add-tutrial',
  templateUrl: './add-tutrial.component.html',
  styleUrls: ['./add-tutrial.component.css']
})
export class AddTutrialComponent implements OnInit {

  tutorial:Tutorial = new Tutorial();
  submitted = false;

  constructor(private TutorailService:TutorailService) { }

  ngOnInit(): void {
  }

  saveTutorial():void{
    this.TutorailService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial():void{
    this.submitted = false;
    this.tutorial = new Tutorial();
  }

}
