import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProvaSocialComponent } from './pages/prova-social/prova-social.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrimeiroElementosComponent } from './components/primeiro-elementos/primeiro-elementos.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BigTextComponent } from './components/big-text/big-text.component';
import { MiniCardPortfolioComponent } from './pages/portfolio/mini-card-portfolio/mini-card-portfolio.component';
import { SubComponentResumoComponent } from './pages/resume/sub-component-resumo/sub-component-resumo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfolioComponent,
    ProvaSocialComponent,
    ContactComponent,
    PrimeiroElementosComponent,
    FotoPerfilComponent,
    MenuComponent,
    SidebarComponent,
    BigTextComponent,
    MiniCardPortfolioComponent,
    SubComponentResumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
