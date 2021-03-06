import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";
import {ImprintComponent} from "./routes/imprint/imprint.component";
import {DatenschutzComponent} from "./routes/datenschutz/datenschutz.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'impressum',
    component: ImprintComponent,
  },
  {
    path: 'datenschutzerklaerung',
    component: DatenschutzComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
