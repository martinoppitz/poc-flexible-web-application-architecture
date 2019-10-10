import { Component } from '@angular/core';
import { CreateSerieController } from './controller';

@Component({
  selector: 'create-serie',
  template: `
    <form (ngSubmit)="this.onSubmit()">
      <h5>Create a new measuring serie</h5>
      <editor-serie [editorForm]="this.editorForm"></editor-serie>
      <button class="btn btn-primary">Add</button>
    </form>
  `
})
export class CreateSerieComponent extends CreateSerieController {}
