import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent extends BaseCtl {

  constructor(
    public locator: ServiceLocatorService,
    public route: ActivatedRoute
  ) {
    super(locator.endpoints.REVIEW, locator, route);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.reviewerName = data.reviewerName;
    form.rating = data.rating;
    form.reviewText = data.reviewText;
    form.reviewDate = this.parseDate(data.reviewDate);
    form.status = data.status;

    console.log('Populated Review Form', form);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
}
