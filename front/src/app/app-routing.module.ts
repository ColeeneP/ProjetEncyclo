import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ShowArticleComponent } from './components/articles/show-article/show-article.component';
import { AddClassificationComponent } from './components/bio-classification/add-classification/add-classification.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'headerComponent', component: HeaderComponent},
  {path: 'registerComponent', component: RegisterComponent},
  {path: 'loginComponent', component: LoginComponent},
  {path: 'showArticleComponent', component: ShowArticleComponent},
  {path: 'addClassificationComponent', component: AddClassificationComponent},
  {path: '', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
