import React from 'react';

import { ReactComponent } from '../../react.component';
import { EditorSerieComponent } from '../editor/component.react';
import { CreateSerieController } from './controller';

export class CreateSerieComponent extends ReactComponent {
  public constructor(props: any) {
    super(props, new CreateSerieController());
  }

  public render() {
    return (
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
          this.$ctrl.onSubmit();
        }}
      >
        <h5>Create a new measuring serie</h5>
        <EditorSerieComponent editorForm={this.$ctrl.editorForm} />
        <button className="btn btn-primary">Add</button>
      </form>
    );
  }
}