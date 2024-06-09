import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
/* import {MediaMatcher} from '@angular/cdk/layout';
import {LayoutModule} from '@angular/cdk/layout'; */
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public total = 3;

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper) {
    /* console.log(swiper) */
  }
  onSlideChange() {
    /* console.log('slide change') */
  }
  

}
