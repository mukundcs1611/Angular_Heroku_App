import {Component,Input} from 'angular2/core'


@Component({
    selector:'zippy',
    template:`<div class="panel panel-default">
    <div class="panel-heading">
    {{title}}
    
    <i class="glyphicon" [class.glyphicon-chevron-down]="!isExpanded"
        [class.glyphicon-chevron-up]="isExpanded" (click)="toggle()"
    ></i>
    </div>    
    
    
    <div *ngIf="isExpanded" class="panel-body" >
    <ng-content></ng-content>
    </div>
    </div>
    `
})
export class ZippyComponent{
@Input() title:string;
isExpanded=false;

toggle(){
    this.isExpanded=!this.isExpanded;
}
}