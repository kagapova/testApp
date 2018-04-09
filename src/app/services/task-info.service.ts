import {Injectable} from '@angular/core';
import {Task} from 'protractor/built/taskScheduler';
import {OneTask} from '../models/one-task';

@Injectable()
export class TaskInfoService {
    private current_task: OneTask;

    public set_task (task: OneTask){
        this.current_task = task;
    }

    public get_task (): OneTask{
        return this.current_task;
    }
}