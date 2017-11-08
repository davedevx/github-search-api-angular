import { Component, Input } from '@angular/core';

import { Issue } from '../../../models/issue';

@Component({
  selector: 'repository-issue-list',
  templateUrl: './issue-list.component.html',
})
export class IssueListComponent {
  @Input() hasFetched: boolean;
  @Input() repositoryIssueList: Issue[];
}
