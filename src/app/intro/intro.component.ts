import { Component } from '@angular/core';


import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink, MatRippleModule],
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  greeting: string = `HELLO, I'M LEEMO`;
  description: string = `<p>Frontend Developer.</p>
    <p>I am a frontend developer, focused on frontend framework technologies, developing web pages, user interface experiences, and designs. Also skilled in multimedia design and cross-functional collaboration.</p>`;
  section1Title: string = 'About';
  section1Description: string = `<p>
  I am a frontend developer. Also skilled in multimedia design and cross-functional collaboration, I ran my own studio years ago, taking on roles such as graphic designer, product designer, and project manager.
  </p>`;
  section1Img: string = `intro/Snipaste_2024-12-12_22-41-06.webp`;
  section1Description2: string = `I believe that whether it's a product or a technology, the ultimate goal is always Human-Centered Design. To achieve this, I often observe people and situations from different perspectives in daily life, trying to understand and ensure products are realized with greater precision.`;
  img1: string = 'intro/Snipaste_2024-12-12_22-33-52.webp';
  img2: string = 'intro/Snipaste_2024-12-12_22-11-25.webp';
  img3: string = 'intro/Snipaste_2024-12-12_22-29-04.webp';
  img4: string = 'intro/Snipaste_2024-12-12_22-34-51.webp';

  rippleColor: string = 'rgba(255, 255, 255, 0.5)';
}   
