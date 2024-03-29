import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormsModule } from '@angular/forms';
import { HardComponent } from './skills/hard/hard.component';
import { SoftComponent } from './skills/soft/soft.component';
import { LoginComponent } from './login/login.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    InformacionPersonalComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    HardComponent,
    SoftComponent,
    IdiomasComponent,
    ProyectosComponent,
    LoaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularToastifyModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
