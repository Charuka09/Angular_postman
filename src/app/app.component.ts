import { DataServiceService } from './serv/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Hotel } from './models/hotel.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  hotels: Hotel[];

  constructor( private hotelService: DataServiceService ) {
  }

  ngOnInit() {
    this.hotelService.getHotelData()
      .subscribe( (data: Hotel[]) => {
        this.hotels = data;
    });
  }
}
