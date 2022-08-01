import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { EnvelopeModalComponent } from './modals/envelope-modal/envelope-modal.component';
import { DiamondModalComponent } from './modals/diamond-modal/diamond-modal.component';
import { ConfigModalComponent } from './modals/config-modal/config-modal.component';
import { LoremIpsumComponent } from './utils/lorem-ipsum/lorem-ipsum.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EnvelopeModalComponent,
    DiamondModalComponent,
    ConfigModalComponent,
    LoremIpsumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
