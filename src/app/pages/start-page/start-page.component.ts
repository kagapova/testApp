import {Component} from '@angular/core';
import {AllTasksResponse} from '../../models/all-tasks-response';
import {TaskService} from '../../api/task.service';
import {GetTask} from '../../models/get-task';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.template.html'
})

export class StartPageComponent{
    public response_with_task: AllTasksResponse;
    private data_for_request: GetTask;
    private developer = 'KGustova';
    public admin_flag: boolean;
    private key = 'admin';
    public page: number;
    public is_next_page: boolean;
    public is_previos_page: boolean;
    public next_page: number;
    public previos_page: number;
    public sort: string;
    public sort_direction: string;

    constructor(private http: TaskService){
        this.sort_direction = 'asc';
        this.sort = 'id';
        this.page = 1;
        this.get_tasks();
        if(localStorage.getItem(this.key)){
            this.admin_flag = true;
        }
    }

    private set_data(data): AllTasksResponse{
        return data;
    }

    private get_tasks(): void {
        this.data_for_request = {
            developer : this.developer,
            sort_field: this.sort,
            sort_direction: this.sort_direction,
            page: this.page
        };
        this.http.get(this.data_for_request).subscribe(
            resp => {
                this.response_with_task = this.set_data(resp);
                this.pagination();
            }
        );
    }

    public get_task_on_change(): void{
        this.get_tasks();
    }

    private pagination(){
        if(this.page !== 1){
            this.is_previos_page = true;
        } else {
            this.is_previos_page = false;
        }
        if((this.response_with_task.message.total_task_count/3 - this.page) > 0){
            this.is_next_page = true;
        }else {
            this.is_next_page = false;
        }
    }

    public change_page(flag: string){
        if (flag === 'next'){
            this.page = this.page + 1;
            this.get_tasks();
        } else if (flag === 'prev'){
            this.page = this.page - 1;
            this.get_tasks();
        }
    }
}