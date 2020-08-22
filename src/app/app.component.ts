import { Component } from '@angular/core';
import {CardService} from './services/card.service';
import {Card} from './dto/Card';
import {HitCount} from './dto/HitCount';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'verify-card-ui';
  cardNumber: string;
  cardDetails: Card;
  // Hit count
  start = 1;
  limit = 5;

  constructor(private cardService: CardService) {}

  submitCardForVerification(): void {
    $('.btn-verify').attr('disabled', 'disabled').html('Please wait...');
    this.cardDetails = null;
    this.cardService.verifyCard(this.cardNumber).subscribe(data => {
      if (data.success) {
        this.cardDetails = data.payload;
      } else {
        alert(data.message);
      }
      $('.btn-verify').removeAttr('disabled').html('Verify');
    });
  }

  getHitCount(): void {
    $('.btn-hit').attr('disabled', 'disabled').html('Please wait...');
    this.cardService.getHitCount(this.start, this.limit).subscribe(data => {
      if (data.success) {
        // Todo: populate table
      } else {
        alert(data.message);
      }
      $('.btn-hit').removeAttr('disabled').html('Get Hits');
    });
  }

}

