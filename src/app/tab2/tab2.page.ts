import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }


  options = {
    loop : true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };


}
