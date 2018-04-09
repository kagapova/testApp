import {Component} from '@angular/core';
import {Task} from 'protractor/built/taskScheduler';
import {TaskInfoService} from '../../services/task-info.service';
import {TaskService} from '../../api/task.service';
import {OneTask} from '../../models/one-task';
import {Router} from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.template.html'
})

export class EditComponent{

    public task: OneTask;

    constructor(private service: TaskInfoService, private http: TaskService,
                private router: Router){
        this.get_task();
    }

    private get_task(): void{
        this.task = this.service.get_task();
    }

    public change(): void {
        this.http.edit(this.task).subscribe(
            () => { this.router.navigateByUrl('/')}
        )
    }
}