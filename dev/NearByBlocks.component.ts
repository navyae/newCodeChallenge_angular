/**
 * Created by navyaeetaram on 6/16/16.
 */
import {Component, EventEmitter} from '@angular/core'

@Component({
    selector:'near-by',
    template:`
       <div class="right-block">
            <div class="green-b"><i class="fa fa-angle-up" aria-hidden="true"></i>
</div>
            <div class="nb-block" *ngFor="#item of amenities_list" (click)="onClickTile(item)">
                <div class="nb-block_icon"><img src={{item.imageUrl}}></div>
                <div class="nb-block_text">Nearby {{item.title}}</div>
            </div>
            <div class="green-b" style="margin-top: 10px"><i class="fa fa-angle-down"  aria-hidden="true"></i>
</div>
        </div>
    `,
    styleUrls:['src/css/near-by.css'],
    outputs:['clickBlock'],
})

export class NearByComponent{
    type={name:'',title:'',imageUrl:''};
    amenities_list=[
                    {
                        name:'restaurant',
                        title:'Restaurants',
                        imageUrl:"../images/restaurants.png",
                     },
                    {
                         name:'grocers',
                         title:'Groceries',
                         imageUrl:"../images/groceries.png"
                     },
                     {
                         name:'banks',
                         title:'Banks',
                         imageUrl:"../images/Banks.png"
                    },
                    ];
    clickBlock= new EventEmitter<{name: string, title: string, imageUrl: string}>();
    onClickTile(id){
        this.type=id;
        console.log(this.type);
        this.clickBlock.emit(this.type);
    }

}