import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltInDirectiveComponent } from './BuiltInDirectives/built-in-directive/built-in-directive.component';
import { HighlightDirective } from './AttributeDirective/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInDirectiveComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
