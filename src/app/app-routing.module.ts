import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-issue'},
  { path: 'add-issue', component: AddIssueComponent},
  { path: 'edit-issue/:id', component: EditIssueComponent},
  { path: 'add-issue', component: IssueListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
