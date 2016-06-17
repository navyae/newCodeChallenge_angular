/**
 * Created by navyaeetaram on 6/17/16.
 */
import {Component} from '@angular/core';
import{GetService} from './services/getService.service';

@Component({
    selector:'bottom-list',
    template:`
        <div class="blist">
            <div class="blist_each" *ngFor="#item of bottomLists">
               <div class="blist_each_img">
                 <div class="blist_each_img_ic">
                    <img src="{{item.imageU}} ">
                 </div>
               </div>
               <div class="blist_each_t-box">
                    <div class="blist_each_t-box_1">{{item.store}}</div> 
                    <div class="blist_each_t-box_2">{{item.count}} near this listing</div>
                    
               </div>
               <div class="blist_each_see-all"> See All <i class="fa fa-angle-right" style="float: right" aria-hidden="true"></i>
</div>
            </div>
        </div>
    `,
    styleUrls:['src/css/bottom-list.css'],
})

export class BottomList {
    restaurantCount:number;
    groceryCount:number;
    bankCount:number;

    constructor(private gettingLength:GetService) {
    };

    bottomLists = [{
        store: 'Restaurants',
        imageU: '../images/rest_black.png',
        count: this.restaurantCount,
    },
        {
            store: 'Grocery Stores',
            imageU: '../images/groc_black.png',
            count: this.groceryCount,
        },
        {
            store: 'Banks',
            imageU: '../images/bank_black.png',
            count: this.bankCount,
        },
        {
            store: 'Other Amenities',
            imageU: '../images/other_black.png',
            count: '##',
        }
    ];
}