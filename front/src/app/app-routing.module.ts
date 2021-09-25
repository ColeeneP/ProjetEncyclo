import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowArticleComponent } from './components/articles/show-article/show-article.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'headerComponent', component: HeaderComponent},
  {path: 'registerComponent', component: RegisterComponent},
  {path: 'loginComponent', component: LoginComponent},
  {path: 'showArticleComponent', component: ShowArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
