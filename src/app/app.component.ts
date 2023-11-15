import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'quiz-app';

  question = [
    {
      que: 'What is the largest internal organ in the human body?',
      option : [ 'Lungs', 'Heart', 'Kidneys', 'Liver' ],
      ans: 'Liver'
    },

    {
      que: 'What is the percentage of the Earth covered by water?',
      option: ['51%', '61%', '71%', '81% ' ],
      ans: '71%'
    },

    {
      que: 'What was the name of Drake`s 2023 album?',
      option: ['Take Care', 'Scorpion','For All the Dogs', 'Views' ],
      ans: 'For All the Dogs'
    },

    {
      que: 'Which of the following British presenters never presented ‘Strictly Comes Dancing’?',
      option: ['Claudia Winkleman', 'Tess Daly ', 'Andrea Hamilton', 'Stacey Dooley'],
      ans: 'Stacey Dooley'
    },

    {
      que: 'Which country is the band AC/DC from?',
      option: ['New Zealand','UK', 'USA', 'Australia '],
      ans: 'Australia'
    },

    {
      que: 'What is the atomic number of Hydrogen?',
      option: ['1', '2', '3','4'] ,
      ans: '1'
    },
  ]

  userAnswers = new Array(this.question.length);
  quizSubmitted = false;

  submitQuiz() {
    this.quizSubmitted = true;
  }
}







