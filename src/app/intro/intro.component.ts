import { Component } from '@angular/core';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { FormComponent} from '../form/form.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CarouselComponent, FormComponent],
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  content = [{
    title: 'Welcome to our site',
    description: 'lorem ipsum dolor sit amet',
    image: ''
  },]

}
