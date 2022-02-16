import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MotivationalLayoutComponent} from "./pages/motivational-layout.component";
import {HomeLayoutComponent} from "./pages/home-layout.component";
import {KidsLayoutComponent} from "./pages/kids-layout.component";
import {ArtistsLayoutComponent} from "./pages/artists-layout.component";
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
import {BundlesLayoutComponent} from "./pages/bundles-layout.component";
import {PeanutsLayoutComponent} from "./pages/peanuts-layout.component";

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
  {path: 'Peanuts', component: PeanutsLayoutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
