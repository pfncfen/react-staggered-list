require('normalize.css');
require('styles/App.css');

import React from 'react';

import {VelocityComponent } from 'velocity-react'

class StaggeredList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      query: '',
      list: [
        { msg: 'Bruce Lee', show: 1 },
        { msg: 'Jackie Chan', show: 1 },
        { msg: 'Chuck Norris', show: 1 },
        { msg: 'Jet Li', show: 1 },
        { msg: 'Kung Fury', show: 1 }
      ]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (e) {
    this.setState({ query: e.target.value });
  }

  render () {
    let {query , list} = this.state;
    list.forEach((i) => i.msg.toLowerCase().indexOf(query) > -1 ? i.show = 1 : i.show = 0)
    console.log(list)
    let listRender = list.map((i, index) => <VelocityComponent key={`component${index}`}
                                                                       animation={ {opacity: i.show ,height: i.show?'20px':0} }
                                                                       delay={150 * index} duration={500}>
      <li>{i.msg}</li>
    </VelocityComponent>)

    return (
      <div>
        <input onChange={this.handleInputChange} value={this.state.query}></input>
        <ul>
          {listRender}
        </ul>
      </div>
    )

  }

}

export default StaggeredList;

