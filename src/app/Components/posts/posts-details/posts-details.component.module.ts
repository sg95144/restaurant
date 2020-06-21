import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PostsDetailsComponent } from './posts-details.component';
import { PostsDetailsRoutingModule } from './posts-details.component-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PostsDetailsRoutingModule,

    ],
    declarations: [PostsDetailsComponent],
    exports: [],
})
export class PostsDetailsModule { }
