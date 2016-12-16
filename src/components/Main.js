import React from 'react';

import List from './List'

class StaggeredList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (e) {
    this.setState({ query: e.target.value });
  }

  render () {
    let data = {
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    }
    let {query } = this.state;

    let dataLists = data.list.map((i, index) => <li key={i.msg}>{i.msg}</li>)
    //let dataLists = data.list.map((i,index) => <div key={i.msg}> <span>名人名称：</span>{i.msg}</div>)

    return (
      <div>
        <input onChange={this.handleInputChange} value={query}></input>
          <List query={query}>
            {dataLists}
          </List>
      </div>
    )
  }

}

export default StaggeredList;

