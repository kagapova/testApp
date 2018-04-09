import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {TaskInfoService} from '../../services/task-info.service';
import {OneTask} from '../../models/one-task';

@Component({
    selector: 'app-task',
    templateUrl: './task.template.html'
})
export class TaskComponent{
    @Input()task: OneTask;

    public admin_flag: boolean;
    private key = 'admin';

    constructor(private service: TaskInfoService){
        if(localStorage.getItem(this.key)){
            this.admin_flag = true;
        }
    }
    public set_task(){
        this.service.set_task(this.task);
    }
}

