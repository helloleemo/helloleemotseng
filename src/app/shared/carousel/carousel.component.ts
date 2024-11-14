import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';



interface ImageItems {
  id: number;
  name: string;
  description: string;
  src: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styles: [`
.carousel-container {
        position: relative;
        overflow: hidden;
      }
      .carousel-content {
        will-change: transform;
        animation: scroll 20s linear infinite;
      }
      @keyframes scroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }`]
})
export class CarouselComponent implements OnInit, AfterViewInit {
  images: ImageItems[] = [
    {
      id: 1,
      name: 'image1',
      description: 'image1',
      src: 'https://picsum.photos/200/200'
    },{
      id: 2,
      name: 'image1',
      description: 'image1',
      src: 'https://picsum.photos/400/200'
    },
    {
      id: 3,
      name: 'image1',
      description: 'image1',
      src: 'https://picsum.photos/500/200'
    },
    {
      id: 4,
      name: 'image1',
      description: 'image1',
      src: 'https://picsum.photos/100/200'
    },
  ]
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.fixInfiniteScroll();
  }

  fixInfiniteScroll(): void {
    const carousel = this.elementRef.nativeElement.querySelector('.carousel-content');
    const firstChild = carousel.firstElementChild;

    if (firstChild) {
      const totalWidth = carousel.scrollWidth / 2; // 原始圖片列表的寬度
      const duration = 20; // 動畫的總時間，單位：秒

      // 設置動畫速度，使圖片以等速滾動
      carousel.style.animationDuration = `${duration}s`;

      // 循環檢查並重置滾動
      const resetScroll = () => {
        const transform = getComputedStyle(carousel).transform;
        const matrix = new WebKitCSSMatrix(transform);
        if (Math.abs(matrix.m41) >= totalWidth) {
          carousel.style.transform = 'translateX(0)'; // 重置位置
        }
        requestAnimationFrame(resetScroll);
      };
      requestAnimationFrame(resetScroll);
    }
  }
}