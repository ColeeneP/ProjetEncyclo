import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ShowArticleComponent } from './components/articles/show-article/show-article.component';
import { AddClassificationComponent } from './components/bio-classification/add-classification/add-classification.component';
import { ModifyClassificationComponent } from './components/bio-classification/modify-classification/modify-classification.component';
import { ShowLexiqueComponent } from './components/lexique/show-lexique/show-lexique.component';
import { AddLexiqueWordComponent } from './components/lexique/add-lexique-word/add-lexique-word.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShowArticleComponent,
    AddClassificationComponent,
    ModifyClassificationComponent,
    ShowLexiqueComponent,
    AddLexiqueWordComponent,
    AccueilComponent,
    CreateArticleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
