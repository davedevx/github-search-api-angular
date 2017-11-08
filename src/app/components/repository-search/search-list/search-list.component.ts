import { Component, Input } from '@angular/core';

import { Repository } from '../../../models/repository';

@Component({
  selector: 'repository-search-list',
  templateUrl: './search-list.component.html',
})
export class SearchListComponent {
  @Input() searchSubmitted: boolean;
  @Input() repositoryList: Repository[];
}
