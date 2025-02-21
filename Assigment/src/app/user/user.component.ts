import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title='Nitish Prajapati'
  role='User '
  author='Nitish Prajapati'
  content=`The Bharat Ratna, along with other personal civil honours, was briefly suspended from July 1977 to January 1980, during the change in the national government; and for a second time from August 1992 to December 1995, when several public-interest litigations challenged the constitutional validity of the awards. In 1992, the government's decision to confer the award posthumously on Subhas Chandra Bose was opposed by those who had refused to accept the fact of his death, including some members of his extended family. Following a 1997 Supreme Court decision, the press communique announcing Bose's award was cancelled; it is the only time when the award was announced but not conferred.`
}
