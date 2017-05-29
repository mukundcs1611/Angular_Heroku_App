import {Component,Input} from 'angular2/core'


@Component({
    selector:'zippy',
    template:`<div class="zippy panel panel-default">
    <div class="zippy-title panel-heading">
    {{title}}
    
    <i class="pull-right glyphicon"
        [ngClass]="{
            'glyphicon-chevron-down':!isExpanded,
            'glyphicon-chevron-up':isExpanded
        }"
     (click)="toggle()"
    ></i>
    </div>    
    
    
    <div class="zippy-content panel-body" *ngIf="isExpanded" >
    <ng-content></ng-content>
    </div>
    </div>
    `,
      styles: [`
        .zippy {
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        
        .zippy .zippy-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .zippy .zippy-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        
        .zippy .zippy-content {
            padding: 20px;
        }
    `]

})
export class ZippyComponent{
@Input() title:string;
isExpanded=false;

toggle(){
    this.isExpanded=!this.isExpanded;
}
}