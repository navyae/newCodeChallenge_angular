import {Component} from '@angular/core';
import {GetService} from './services/getService.service';
import {NearByComponent} from "./NearByBlocks.component";
import {TitleComponent} from "./Title.component";
import {TopRanking} from "./TopRanking.component";

@Component({
    selector: 'my-app',
    template: `
        
        <div class="amenities">
        <top-title></top-title>
        <ranking [type]="type"></ranking>
        <near-by (clickBlock)="onClickTile($event)">loading....</near-by>
        
       
    `,
    providers:[GetService],
    directives:[NearByComponent,TitleComponent,TopRanking],
})
export class AppComponent {
    type={name:'',title:'',imageUrl:''};
    onClickTile(type:{name: string, title: string, imageUrl: string}){
        this.type =type;

    }


}