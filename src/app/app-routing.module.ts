import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatRootComponent } from './components/cat-root/cat-root.component';
import { breedResolver } from './resolvers/breed.resolver';

const appRoutes: Routes = [
  {
    path: '',
    component: CatRootComponent,
    resolve: { breeds: breedResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
