//==========================================================================================================//
/*
REACT SNIPPETS

Full Expansions
imr - Import React
import React from 'react';
imrc - Import React, Component
import React, { Component } from 'react';
imrs - Import React, useState
import React, { useState } from 'react';
imrse - Import React, useState, useEffect
import React, { useState, useEffect } from 'react';
impt - Import PropTypes
import PropTypes from 'prop-types';
impc - Import PureComponent
import React, { PureComponent } from 'react';
*/

//==========================================================================================================//
//cc - Class Component
class | extends Component {
  state = { | },
  render() {
    return ( | );
  }
}

export default |;

//==========================================================================================================//
//ccc - Class Component With Constructor
class | extends Component {
  constructor(props) {
    super(props);
    this.state = { | };
  }
  render() {
    return ( | );
  }
}

export default |;

//==========================================================================================================//
//ccc - Class Component With Constructor
class | extends PureComponent {
  state = { | },
  render() {
    return ( | );
  }
}

export default |;

//==========================================================================================================//
//sfc - Stateless Function Component
const | = props => {
  return ( | );
};

export default |;

//==========================================================================================================//
//cdm - componentDidMount
componentDidMount() {
  |
}

//==========================================================================================================//
//uef - useEffect Hook
useEffect(() => {
  |
}, []);

//==========================================================================================================//
//cwm - componentWillMount
//WARNING! To be deprecated in React v17. Use componentDidMount instead.
componentWillMount() {
  |
}

//==========================================================================================================//
//cwrp - componentWillReceiveProps
//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
componentWillReceiveProps(nextProps) {
  |
}

//==========================================================================================================//
//gds - getDerivedStateFromProps
static getDerivedStateFromProps(nextProps, prevState) {
  |
}

//==========================================================================================================//
//scu - shouldComponentUpdate
shouldComponentUpdate(nextProps, nextState) {
  |
}

//==========================================================================================================//
//cwu - componentWillUpdate
//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
componentWillUpdate(nextProps, nextState) {
  |
}

//==========================================================================================================//
//cdu - componentDidUpdate
componentDidUpdate(prevProps, prevState) {
  |
}

//==========================================================================================================//
//cwun - componentWillUnmount
componentWillUnmount() {
  |
}

//==========================================================================================================//
//cdc - componentDidCatch
componentDidCatch(error, info) {
  |
}

//==========================================================================================================//
//gsbu - getSnapshotBeforeUpdate
getSnapshotBeforeUpdate(prevProps, prevState) {
  |
}

//==========================================================================================================//
//ss - setState
this.setState({ | : | });

//==========================================================================================================//
//ssf - Functional setState
this.setState(prevState => {
  return { | : prevState.| }
});

//==========================================================================================================//
//usf - Declare a new state variable using State Hook
const [|, set|] = useState();
Hit Tab to apply CamelCase to function. e.g. [count, setCount]

//==========================================================================================================//
//ren - render
render() {
  return (
    |
  );
}

//==========================================================================================================//
//rprop - Render Prop
class | extends Component {
  state = { | },
  render() {
    return this.props.render({
      |: this.state.|
    });
  }
}

export default |;

//==========================================================================================================//
//hoc - Higher Order Component
function | (|) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return < | {...this.props} />;
    }
  };
}