import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeDeliveryRoutingModule } from './homedelivery.component-routing.module';
import { HomedeliveryComponent } from './homedelivery.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeDeliveryRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [HomedeliveryComponent],
    exports: [],
})
export class HomeDeliveryModule { }
