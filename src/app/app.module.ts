import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { GmapComponent } from './home/gmap/gmap.component';
import { ContactComponent } from './home/contact/contact.component';
import { OurserviceComponent } from './home/ourservice/ourservice.component';
import { CommentsComponent } from './home/comments/comments.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    AboutComponent,
    GmapComponent,
    ContactComponent,
    OurserviceComponent,
    CommentsComponent,
    GalleryComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
