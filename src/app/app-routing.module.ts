import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from "./promise/promise.component";
import { ObservableComponent } from "./observable/observable.component";
import { ListComponent } from "./observable/list/list.component";
import { FromEventComponent } from "./observable/from-event/from-event.component";
import { IntervalComponent } from "./observable/interval/interval.component";
import { OfFromComponent } from "./observable/of-from/of-from.component";
import { ToArrayComponent } from "./observable/to-array/to-array.component";
import { CustomComponent } from "./observable/custom/custom.component";
import { MapComponent } from "./observable/map/map.component";
import { PluckComponent } from "./observable/pluck/pluck.component";
import { FilterComponent } from "./observable/filter/filter.component";
import { SubjectComponent } from "./observable/subject/subject.component";
import { ReplySubjectComponent } from "./observable/reply-subject/reply-subject.component";
import { AsyncSubjectComponent } from "./observable/async-subject/async-subject.component";
import { MergeComponent } from "./observable/merge/merge.component";
import { ConcatComponent } from "./observable/concat/concat.component";
import { MergeMapComponent } from "./observable/merge-map/merge-map.component";


const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent, children:[
    {path: '', component: ListComponent},
    {path: 'from-event', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of-from', component: OfFromComponent},
    {path: 'toArray', component: ToArrayComponent},
    {path: 'custom', component: CustomComponent},
    {path: 'map', component: MapComponent},
    {path: 'pluck', component: PluckComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'replay-subject', component: ReplySubjectComponent},
    {path: 'async-subject', component: AsyncSubjectComponent},
    {path: 'merge', component: MergeComponent},
    {path: 'concat', component: ConcatComponent},
    {path: 'merge-map', component: MergeMapComponent},
  ]},
  { path: '**', redirectTo: 'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
