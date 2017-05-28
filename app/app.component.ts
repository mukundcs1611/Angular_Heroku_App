import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'
import {SummaryPipe} from './summary.pipe';
import {ZippyComponent} from './zippy.component';
import {ZipContentService} from './zipcontent.service';
import {SubscribeFormComponent} from './subscribe-form.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
            Open All 
        <i class="pull-right glyphicon"
        [ngClass]="{
            'glyphicon-chevron-down':hideU,
            'glyphicon-chevron-up':!hideU
            }"
        (click)="hide()"></i>
        </div>    
        <div *ngIf="!hideU">
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
        {{post.body|summary}}
        <div *ngFor="#content of zipContents">
            <zippy [title]="content.title">
                {{content.content}}
            </zippy>
        </div>
        </div>
        <div class="form-elem">
        <subscribe></subscribe>
        </div>
        
        
    `,
    directives: [TweetComponent,ZippyComponent,SubscribeFormComponent],
    providers: [TweetService,ZipContentService],
    pipes:[SummaryPipe]
})
export class AppComponent {
    hideU=true;
    tweets: any[];
    zipContents: any[];
    
    constructor(tweetService: TweetService,zipcontentservice:ZipContentService){
        this.tweets = tweetService.getTweets();

        this.zipContents=zipcontentservice.getZipContents();
    }
    post={
        title:"Tutorial for beginners like me",
        body:`after 50 characters it is trimmed down 
        you will probably dont see this line.....`
    }
    hide(){
        this.hideU=!this.hideU;
    }
}