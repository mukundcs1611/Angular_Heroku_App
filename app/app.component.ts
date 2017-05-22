import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'
import {SummaryPipe} from './summary.pipe';

@Component({
    selector: 'my-app',
    template: `
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
        {{post.title}}
        <br/>
        {{post.body|summary}}
    `,
    directives: [TweetComponent],
    providers: [TweetService],
    pipes:[SummaryPipe]
})
export class AppComponent {

    tweets: any[];
    
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
    post={
        title:"Tutorial for beginners like me",
        body:`This is a multilined text and after 50 characters it is trimmed down 
        you will probably dont see this line.....`
    }
}