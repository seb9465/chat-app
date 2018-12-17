import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { SidenavMenuComponent } from './common/sidenav-menu/sidenav-menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuUnComponent } from './menu-un/menu-un.component';
import { MenuDeuxComponent } from './menu-deux/menu-deux.component';
import { HomeComponent } from './authentication/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './authentication/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './authentication/_helpers/error.interceptor';
import { fakeBackendProvider } from './authentication/_helpers/fake-backend';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export let config: any = JSON.stringify({
    apiUrl: 'http://localhost:4000'
})

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        SidenavMenuComponent,
        FooterComponent,
        MenuUnComponent,
        MenuDeuxComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        fakeBackendProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
