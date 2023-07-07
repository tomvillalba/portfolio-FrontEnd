import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormsModule } from '@angular/forms';
import { HardComponent } from './skills/hard/hard.component';
import { SoftComponent } from './skills/soft/soft.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacionPersonalComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    HardComponent,
    SoftComponent,
    IdiomasComponent,
    ProyectosComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
