import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { PerguntasComponent } from './perguntas/perguntas.component';

const appRoutes: Routes = [
  { path: 'pergunta', component: PerguntasComponent },
  { path: 'cozinha', component: CozinhaComponent },  
  { path: '',  redirectTo: 'cozinha',   pathMatch: 'full'}
];
(window as any).global = window;
@NgModule({
  declarations: [
    AppComponent,
    CozinhaComponent,
    PerguntasComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true ,useHash:true}, // <-- debugging purposes only
    ),
    BrowserModule,    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
