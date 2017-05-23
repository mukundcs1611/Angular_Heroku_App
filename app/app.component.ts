import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'
import {SummaryPipe} from './summary.pipe';
import {ZippyComponent} from './zippy.component';
import {ZipContentService} from './zipcontent.service';
@Component({
    selector: 'my-app',
    template: `
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
        {{post.title}}
        <br/>
        {{post.body|summary}}
        <div *ngFor="#content of zipContents">
            <zippy [title]="content.title">
                {{content.content}}
            </zippy>
        </div>
        
    `,
    directives: [TweetComponent,ZippyComponent],
    providers: [TweetService,ZipContentService],
    pipes:[SummaryPipe]
})
export class AppComponent {

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
}