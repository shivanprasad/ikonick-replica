import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerbarComponent} from "./navigation/header/customerbar.component";
import {MainMenuComponent} from "./navigation/header/main-menu.component";
import {VideoComponent} from "./pages/video.component";
import {BottomNavBarComponent} from "./navigation/footer/bottomnavbar.component";
import {CarouselComponent} from "./pages/carousel.component";
import {MotivationalLayoutComponent} from "./pages/motivational-layout.component";
import {HomeLayoutComponent} from "./pages/home-layout.component";
import {ArtistsLayoutComponent} from "./pages/artists-layout.component";
import {KidsLayoutComponent} from "./pages/kids-layout.component";
import {WomenArtistsLayoutComponent} from "./pages/women-artists-layout.component";
import {MonopolyLayoutComponent} from "./pages/monopoly-layout.component";
import {NBALegendsLayoutComponent} from "./pages/nba-legends-layout.component";
import {AllCollectionsLayoutComponent} from "./pages/all-collections-layout.component";
import {ExploreLayoutComponent} from "./pages/explore-layout.component";
import {MuhammadAliLayoutComponent} from "./pages/muhammad-ali-layout.component";
import {SmileyLayoutComponent} from "./pages/smiley-layout.component";
import {PopeyeLayoutComponent} from "./pages/popeye-layout.component";
import {ScrabbleLayoutComponent} from "./pages/scrabble-layout.component";
import {BestSellersLayoutComponent} from "./pages/best-sellers-layout.component";
import {PeanutsLayoutComponent} from "./pages/peanuts-layout.component";


@NgModule({
  declarations: [
    AppComponent,
    CustomerbarComponent,
    MainMenuComponent,
    VideoComponent,
    CarouselComponent,
    BottomNavBarComponent,
    MotivationalLayoutComponent,
    HomeLayoutComponent,
    ArtistsLayoutComponent,
    KidsLayoutComponent,
    WomenArtistsLayoutComponent,
    MonopolyLayoutComponent,
    NBALegendsLayoutComponent,
    AllCollectionsLayoutComponent,
    ExploreLayoutComponent,
    MuhammadAliLayoutComponent,
    SmileyLayoutComponent,
    PopeyeLayoutComponent,
    ExploreLayoutComponent,
    ScrabbleLayoutComponent,
    PeanutsLayoutComponent,
    BestSellersLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
