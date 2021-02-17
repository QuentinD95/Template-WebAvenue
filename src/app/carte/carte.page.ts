import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})
export class CartePage implements OnInit {

  constructor() { }

  options = {
    loop : true,
    centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 15,
  };


  ngOnInit() {
  }

}
