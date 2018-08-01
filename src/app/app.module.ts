import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { PortadaComponent } from './portada/portada.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DocsComponent,
    ResourcesComponent,
    EventsComponent,
    BlogComponent,
    PortadaComponent,
    FooterComponent,
    HeaderComponent,
    ContenidoComponent,
    AnuncioComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
