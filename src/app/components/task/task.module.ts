import {NgModule} from '@angular/core';
import {TaskComponent} from './task.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [TaskComponent],
    imports: [CommonModule,
        RouterModule
    ],
    exports: [TaskComponent]
})

export class TaskModule { }