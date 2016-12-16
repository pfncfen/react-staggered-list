/**
 * Created by Dionysus on 2016/12/16.
 */

import React from 'react';

import {VelocityComponent } from 'velocity-react'

class StaggeredList extends React.Component {

  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.query !== undefined) return true;
    else return false;
  }

  isArrayFn (value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    } else {
      return Object.prototype.toString.call(value) === "[object Array]";
    }
  }

  validateChildren (children) {
    if (this.isArrayFn(children)) {
      if (children.length !== 0) {
        let type = children[ 0 ].type || null;
        if (type === null) {
          console.warn('No type defined in Array Object');
          return false
        }
        for (var i in children) {
          if (children[ i ].type !== type) return false
        }
        return true
      } else {
        console.warn('The children of List component is an empty array!')
        return false
      }
    } else {
      console.warn('The children of List component must be an array!')
      return false
    }
  }

  render () {
    let {query, children , delay=150,duration=500} = this.props;

    if (!this.validateChildren(children)) return <div>Error</div>;

    var showArray = []

    if (typeof children[ 0 ].props.children === 'String') {
      children.forEach((i) => i.props.children.toLowerCase().indexOf(query) > -1 ? showArray.push(1) : showArray.push(0))
    } else {
      children.forEach((i) => i.key.toLowerCase().indexOf(query) > -1 ? showArray.push(1) : showArray.push(0))
    }

    let listRender = children.map((i, index) => {
        return <VelocityComponent key={`VelocityComponent${index}`}
                                  animation={ {opacity: showArray[index] ,height: showArray[index]?'100%':0} }
                                  delay={delay * index} duration={duration}>
          {i}
        </VelocityComponent>
      }
    )

    return (
      <div>
          {listRender}
      </div>
    )

  }

}



export default StaggeredList;

