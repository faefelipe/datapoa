import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusLinesComponent } from './bus-lines/bus-lines.component';
import { ItinerarioComponent } from './itinerario/itinerario.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'buslines',
        pathMatch: 'full'
    },

    {
        path: 'buslines',
        component: BusLinesComponent
    },

    {
        path: 'itinerario/:id',
        component: ItinerarioComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { useHash: true }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
