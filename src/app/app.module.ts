import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { provideHttpClient, withFetch, withInterceptorsFromDi } from "@angular/common/http";

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
    ],
    providers: [
        provideHttpClient(withFetch())
    ],
    bootstrap: [AppComponent]
})
export class AppModule{ }