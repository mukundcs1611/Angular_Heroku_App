import {Component} from 'angular2/core';

@Component({
    selector:'subscribe',
    templateUrl:'app/subscribe-form.component.html'
}
)
export class SubscribeFormComponent{
    onSubmit(form){
        console.log(form);
    }
}