import React, { Component } from 'react';

import SingleMovie from '../components/SingleMovie';
import SingleShow from '../components/SingleShow';

export default class SingleItem extends Component<any, any>
{

  constructor(props: {} | Readonly<{}>)
  {
    super(props);
  }

  render()
  {
    const Item = (this.props.type === 'movie') ? <SingleMovie /> : <SingleShow />;

    return (
      <main className="SingleItem">
        {Item}
      </main>
    )
  }
}