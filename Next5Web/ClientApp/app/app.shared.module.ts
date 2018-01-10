import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { Next5Component } from './components/next5/next5.component';
import { RaceComponent } from './components/race/race.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        Next5Component,
        RaceComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'next5', pathMatch: 'full' },
            { path: 'next5/race/:id', component: RaceComponent },
            { path: 'next5', component: Next5Component },
            { path: '**', redirectTo: 'next5' }
        ])
    ]
})
export class AppModuleShared {
}
