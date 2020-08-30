import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { CustomHeaderContentService } from './service/custom-header-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'shared-dynamic-content';

  @ViewChild('headerContent') readonly headerContent: TemplateRef<unknown>;

  constructor(private readonly headerService: CustomHeaderContentService) {}

  ngAfterViewInit(): void {
    this.headerService.setDynamicContent(this.headerContent);
  }
}
