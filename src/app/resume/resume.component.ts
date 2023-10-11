import { Component } from '@angular/core';
import { resumeData } from './resumeData';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resume = resumeData;
}
