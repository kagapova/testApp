import {Component} from '@angular/core';
import {TaskService} from '../../api/task.service';
import {CreateTask} from '../../models/create-task';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.template.html'
})

export class CreateComponent {
    public name: string;
    public email: string;
    public text: string;
    public image: File;
    public task: CreateTask;
    public preview: boolean;

    constructor(private http: TaskService, private router: Router){
        this.preview = false;
    }

    public create_task (){
        this.set_data();
        this.http.create(this.task).subscribe(
            () => {this.router.navigateByUrl('/')}
        );
    }

    private set_data(){
        this.task = {
            username: this.name,
            email: this.email,
            text: this.text,
            image: this.image
        };
    }
    handleFileInput(files: FileList) {
        this.image = files.item(0);
    }

    public preview_task(): void {
        this.preview = true;
        this.set_data();
    }
}