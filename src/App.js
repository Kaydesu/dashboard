import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart';
import Counter from './components/Counter';
import Threshold from './components/Threshold';
import chartOptions from './chartOptions';
import io from 'socket.io-client';




class App extends Component {
  state = {
    sData:{},
    socket:{},
    moods: [26,37,15,2,22,17],
    chartOptions,
    candiesDropped: 0,
    threshold: 25,
    connected: false    
  }

  

  getChartData = (ndata) => {
    this.setState({moods: ndata.map(data => data)});
  }

  updateThreshold = (threshold) => {
    this.setState({threshold});
    this.state.socket.emit('change_thresh', threshold);
  }

  changeThreshold = (threshold) => {
    this.setState({threshold});
  }

  componentWillMount = () => {

    const socket = io('http://localhost:5000/');
    socket.on('connect', () => {
      console.log('Connected');
      this.setState({socket: socket});
    });
    socket.on('update', ndata => {
      this.getChartData(ndata);
    });
    socket.on('candy_drop', data => {
      let candies = this.state.candiesDropped;
      candies += 1;
      this.setState({candiesDropped: candies});
    });
  }

  componentDidMount = () => {
    fetch('/api/data/')
    .then(res => res.json())
    .then(data => this.setState({threshold: data['JOY_THRESHOLD'], candiesDropped: data['CANDY_DROP']}))
  }


  render() {

    return (
      <div className="App">
        <div className="container">
          <Chart 
          moods={this.state.moods}
          chartOptions={this.state.chartOptions}
          threshold={this.state.threshold}
          />
          <div className='control'>
            <Counter
              candiesDropped={this.state.candiesDropped}/>
            <Threshold 
              threshold={this.state.threshold}
              changeThreshold={this.changeThreshold}
              updateThreshold={this.updateThreshold}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App

