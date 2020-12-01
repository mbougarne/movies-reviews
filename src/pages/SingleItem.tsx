import React, { Component } from 'react';

import SingleMovie from '../components/SingleMovie';

export default class SingleItem extends Component<any, any>
{

  constructor(props: {} | Readonly<{}>)
  {
    super(props);
  }

  render()
  {
    const Item = (this.props.type === 'movie') ? <SingleMovie /> : 'Show';

    return (
      <main className="SingleItem">
        {Item}
      </main>
    )
  }
}