import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { CustomHeaderContentService } from 'src/app/service/custom-header-content.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements AfterViewInit {
  @ViewChild('headerContent') readonly headerContent: TemplateRef<unknown>;

  constructor(private readonly headerService: CustomHeaderContentService) {}

  ngAfterViewInit(): void {
    this.headerService.setDynamicContent(this.headerContent);
  }
}
