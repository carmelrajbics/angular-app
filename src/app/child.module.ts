import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StardemoComponent } from './stardemo/stardemo.component';
import { LikedemoComponent } from './likedemo/likedemo.component';
//Importing the http client
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { FooterComponent } from './footer/footer.component';
import { ColorChanger } from './app.color-changer';


@NgModule({
    declarations: [
        StardemoComponent,
        LikedemoComponent,
        FooterComponent,
        ColorChanger
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        StardemoComponent,
        LikedemoComponent,
        FooterComponent,
        ColorChanger
    ]
})
export class ChildModule { }
