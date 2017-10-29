import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetListComponent } from "./tweet-list/tweet-list.component";
import { FolderComponent } from "./folder/folder.component";

const routes: Routes = [
  { path: '', redirectTo: '/tweets', pathMatch: 'full' },
  { path: 'tweets', component: TweetListComponent },
  { path: 'infolder', component: FolderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}