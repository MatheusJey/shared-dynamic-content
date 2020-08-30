import { Component } from '@angular/core';
import { CustomHeaderContentService } from 'src/app/service/custom-header-content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly headerContent$ = this.contentService.getDynamicContent();
  
  constructor(private readonly contentService: CustomHeaderContentService) {}
}
