import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThoughtsCreateComponent } from './components/thoughts/create/create.component';
import { FormsModule } from '@angular/forms';
import { ThoughtsListComponent } from './components/thoughts/list/list.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThoughtsCreateComponent,
    ThoughtsListComponent,
    ThoughtComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
