import { DataServiceService } from './serv/data-service.service';
import { Component } from '@angular/core';
import { Hotel } from './models/hotel.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hotels: Hotel[];

  constructor( private hotelService: DataServiceService ) {
    this.hotelService.getHotelData()
      .subscribe( (data: Hotel[]) => {
        this.hotels = data;
    });
  }
}
