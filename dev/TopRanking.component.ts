/**
 * Created by navyaeetaram on 6/16/16.
 */
import {Component} from '@angular/core';
import {GetService} from './services/getService.service';
import {BottomList} from "./bottomList.component";

@Component({
    selector:'ranking',
    template:`
        <div class="left-block">
            <div class="left-block_top-rectangle">
                <div class="left-block_top-rectangle_title">What's the highest rated {{type.title||initial.title}} in this area?</div>
                
                <div class="left-block_top-rectangle_location">
                    <span class="left-block_top-rectangle_map">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </span>{{city}}</div>
                <div class="left-block_top-rectangle_img">
                    <div class="left-block_top-rectangle_img_left-arc" (click)="decrementCount()">
                        <div class="left-block_top-rectangle_img_left-arc_arrow">
                            <i class="fa fa-angle-left" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="left-block_top-rectangle_img_circle"><img src="{{amenity_image}}" width="100%" height="100%"></div>
                    
                    <div class="left-block_top-rectangle_img_right-arc" (click)="incrementCount()">
                        <div class="left-block_top-rectangle_img_right-arc_arrow">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="left-block_top-rectangle_establishment">{{address}}</div>
                <div class="left-block_top-rectangle_est-loc">{{state}}</div>
                <div class="left-block_top-rectangle_stl-button">
                    <div class="left-block_top-rectangle_stl-button_scircle">
                        <div class="left-block_top-rectangle_stl-button_scircle_home">
                            <i class="fa fa-home" aria-hidden="true"></i>
                         </div>
                    </div>See The Lists
                     <div class="left-block_top-rectangle_stl-button_angle">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
                    
            </div>
            <div class="left-block_caret"></div>
            <bottom-list></bottom-list>
        </div>
        
    `,
    styleUrls:['src/css/ranking.css'],
    inputs:['type'],
    directives:[BottomList],
})

export class TopRanking{
    initial={name:'restaurant', title:'Restaurant'}
    type={name:'', title:'', imageUrl:''};
    amenity_image: string;
    city: string;
    address: string;
    state: string;
    initial_value: number =0;
    list_length: number;

    constructor(private gettingService: GetService){}

    ngOnInit(){

        this.gettingService.getData()
            .subscribe(
                data=>{

                    this.amenity_image= data[this.type.name||this.initial.name].businesses[this.initial_value].image_url;
                    this.city=data[this.type.name||this.initial.name].businesses[this.initial_value].location.city;
                    this.address=data[this.type.name||this.initial.name].businesses[this.initial_value].location.display_address[0];
                    this.state=data[this.type.name||this.initial.name].businesses[this.initial_value].location.display_address[1];
                    this.list_length= data[this.type.name||this.initial.name].businesses.length;
                },
                error=> console.error(error)
            )

    }

    newData(){

        this.gettingService.getData()

            .subscribe(
                data=>{

                    this.amenity_image= data[this.type.name||this.initial.name].businesses[this.initial_value].image_url;
                    this.city=data[this.type.name||this.initial.name].businesses[this.initial_value].location.city;
                    this.address=data[this.type.name||this.initial.name].businesses[this.initial_value].location.display_address[0];
                    this.state=data[this.type.name||this.initial.name].businesses[this.initial_value].location.display_address[1];
                },
                error=> console.error(error)
            )
    }
    decrementCount(){
        if(this.initial_value>0){
            this.initial_value--;
            this.newData();
        }



    }
    incrementCount(){
        if(this.initial_value<this.list_length-1) {
            ++this.initial_value;
            this.newData();
        }

    }
}