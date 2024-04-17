import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ReferencesComponent } from './components/references/references.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NaviComponent } from './components/navi/navi.component';
import { CertsComponent } from './components/certs/certs.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, ClientsComponent, PricingComponent, ReferencesComponent, GalleryComponent, NaviComponent, CertsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular17-site';
}
