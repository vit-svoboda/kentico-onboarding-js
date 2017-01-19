import * as React from 'react';

interface ITsComponentProps {
  name: string;
}

class TsComponent extends React.Component<ITsComponentProps, undefined> {
  render() {
    return (
      <h1 style={{color: 'red'}}>
        Hello from <b>{this.props.name}</b> TypeScript TypeScript component.
      </h1>
    );
  }
}

export default TsComponent;
