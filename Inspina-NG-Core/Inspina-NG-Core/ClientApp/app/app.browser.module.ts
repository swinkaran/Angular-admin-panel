import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.shared.module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from "./app.routes";
import { AppComponent } from './components/app/app.component';

// App views
import { DashboardsModule } from './views/dashboards/dashboards.module';
import { AppviewsModule } from './views/appviews/appviews.module';

// App modules/components
import { LayoutsModule } from './components/common/layouts/layouts.module';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared,
        FormsModule,
        HttpModule,
        DashboardsModule,
        LayoutsModule,
        AppviewsModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
