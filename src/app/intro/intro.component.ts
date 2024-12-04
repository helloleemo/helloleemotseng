import { Component } from '@angular/core';

import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [FormComponent, CommonModule, HeaderComponent],
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  greeting: string = `Quick Start`;
  description: string = `<p>Frontend Developer.</p>
    <p>I'm responsible for</p>`;
  image: string = '';
  section1Title: string = 'Less is more';
  section1Description: string = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sequi ab voluptatum nostrum pariatur veniam laboriosam in nam, eum officia?</p>';
  section1Img: string = '';
  section1Description2: string = 'My goal is to make the web a better place.';
  img1: string = '';
  img2: string = '';
  img3: string = '';
  img4: string = '';
  img5: string = '';
  img6: string = '';
  img7: string = '';

  section2Title: string = 'My Skills';
  section2Description: string = 'I have experience with the following technologies:';
  section2feature1Title: string = 'section2feature1Title';
  section2feature1Description: string = 'I have experience with the following technologies:';
  section2feature1Img: string = 'section2feature1Img';
  section2feature2Title: string = 'section2feature2Title';
  section2feature2Description: string = 'I have experience with the following technologies:';
  section2feature2Img: string = 'section2feature2Img';
  section2feature3Title: string = 'section2feature3Title';
  section2feature3Description: string = 'I have experience with the following technologies:';
  section2feature3Img: string = 'section2feature3Img';

  section3Title: string = 'Inquirement';
  section3Description: string = 'I have experience with the following technologies:';

}   
