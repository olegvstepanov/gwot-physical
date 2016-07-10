import React from 'react'
import ReactDOM from 'react-dom'

const IntervalAverages = React.createClass({
  toggle() {
    console.log('toggle')
    this.setState({asc: !this.state.asc})
  },
  getInitialState() {
    return {asc: true}
  },
  render() {
    const data = this.props.data
    const keys = Object.keys(data)
    const sort = xs => this.state.asc ? xs : xs.reverse()
    const averages = sort(keys).map((name) => {
      return <li key={name}>{name}: {data[name]}</li>
    });
    return <div>
      Averages:
      <ol>
        {averages}
      </ol>
      <button onClick={() => this.toggle()}>Toggle order</button>
    </div>
  }
});


ReactDOM.render(
  <IntervalAverages data={window.jsonData}/>,
  document.getElementById('app')
);
