import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerbarComponent} from "./navigation/header/customerbar.component";
import {MainMenuComponent} from "./navigation/header/main-menu.component";
import {VideoComponent} from "./store/video.component";
import {BottomNavBarComponent} from "./navigation/footer/bottomnavbar.component";
import {CarouselComponent} from "./store/carousel.component";
import {MotivationalLayoutComponent} from "./store/motivational-layout.component";
import {HomeLayoutComponent} from "./store/home-layout.component";
import {ArtistsLayoutComponent} from "./store/artists-layout.component";
import {KidsLayoutComponent} from "./store/kids-layout.component";
import {WomenArtistsLayoutComponent} from "./store/women-artists-layout.component";
import {MonopolyLayoutComponent} from "./store/monopoly-layout.component";
import {NBALegendsLayoutComponent} from "./store/nba-legends-layout.component";
import {AllCollectionsLayoutComponent} from "./store/all-collections-layout.component";
import {ExploreLayoutComponent} from "./store/explore-layout.component";
import {MuhammadAliLayoutComponent} from "./store/muhammad-ali-layout.component";
import {SmileyLayoutComponent} from "./store/smiley-layout.component";
import {PopeyeLayoutComponent} from "./store/popeye-layout.component";
import {ScrabbleLayoutComponent} from "./store/scrabble-layout.component";
import {BestSellersLayoutComponent} from "./store/best-sellers-layout.component";
import {PeanutsLayoutComponent} from "./store/peanuts-layout.component";
import {ProductCardComponent} from "./store/product-card.component";
import {BundlesLayoutComponent} from "./store/bundles-layout.component";
import {ProductGridComponent, ProductGridComponentBundles} from "./store/product-grid.component";
import {HttpClientModule} from "@angular/common/http";
import { UserInfoComponent } from './user-info/user-info.component';
import { AddProductComponent } from './add-product/add-product.component';


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
        BestSellersLayoutComponent,
        BundlesLayoutComponent,
        ProductCardComponent,
        ProductGridComponent,
        ProductGridComponentBundles,
        UserInfoComponent,
        AddProductComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
