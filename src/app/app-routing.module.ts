import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MotivationalLayoutComponent} from "./store/motivational-layout.component";
import {HomeLayoutComponent} from "./store/home-layout.component";
import {KidsLayoutComponent} from "./store/kids-layout.component";
import {ArtistsLayoutComponent} from "./store/artists-layout.component";
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
import {BundlesLayoutComponent} from "./store/bundles-layout.component";
import {PeanutsLayoutComponent} from "./store/peanuts-layout.component";
import {AuthenticationComponent} from "./auth/authentication/authentication.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Motivational', component: MotivationalLayoutComponent},
  {path: 'Artists', component: ArtistsLayoutComponent},
  {path: 'Kids', component: KidsLayoutComponent},
  {path: 'Women-Artists', component: WomenArtistsLayoutComponent},
  {path: 'Monopoly', component: MonopolyLayoutComponent},
  {path: 'NBA-Legends', component: NBALegendsLayoutComponent},
  {path: 'All-Collections', component: AllCollectionsLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'Explore', component: ExploreLayoutComponent},
  {path: 'Muhammad-Ali', component: MuhammadAliLayoutComponent},
  {path: 'Smiley', component: SmileyLayoutComponent},
  {path: 'Popeye', component: PopeyeLayoutComponent},
  {path: 'Scrabble', component: ScrabbleLayoutComponent},
  {path: 'Best-Sellers', component: BestSellersLayoutComponent},
  {path: 'Bundles', component: BundlesLayoutComponent},
  {path: 'Peanuts', component: PeanutsLayoutComponent},
  {
    path: '', component: HomeLayoutComponent
  },
  {
    path: 'admin', component: AddProductComponent
  },
  {
    path: 'auth', component: AuthenticationComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
