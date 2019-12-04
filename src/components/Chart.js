import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import chartOptions from '../chartOptions';
import 'chartjs-plugin-annotation';


class Chart extends Component {
    state = {
        chartData: {
            labels: ['CALM', 'ANGER', 'JOY', 'SORROW', 'ENGERGY'],
              datasets: [
                {
                  label: 'Emotions',
                  data: [25, 12, 11, 35, 29],
                  backgroundColor:['#37CCF2', '#37CCF2', '#FB6568', '#37CCF2' ,'#37CCF2' ,'#37CCF2']
                }
              ]
        },
        chartOptions: chartOptions,
        moods: [],
        threshold: {},
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if(nextProps.moods !== prevState.moods) {
            if(nextProps.moods[2] > prevState.threshold){
                return {
                    moods: nextProps.moods,
                    chartData: {
                        labels: ['CALM', 'ANGER', 'JOY', 'SORROW', 'ENGERGY'],
                          datasets: [
                            {
                              label: 'Emotions',
                              data: nextProps.moods,
                              backgroundColor:['#37CCF2', '#37CCF2', '#FB6568', '#37CCF2' ,'#37CCF2']
                            }
                          ]
                    },
                }
            }
            else {
                return {
                    moods: nextProps.moods,
                    chartData: {
                        labels: ['CALM', 'ANGER', 'JOY', 'SORROW', 'ENGERGY'],
                          datasets: [
                            {
                              label: 'Emotions',
                              data: nextProps.moods,
                              backgroundColor:['#37CCF2', '#37CCF2', '#37CCF2', '#37CCF2' ,'#37CCF2']
                            }
                          ]
                    },
                }
            }
        }
        else if(nextProps.threshold !== prevState.threshold) {
            let tempOptions = chartOptions;
            // tempOptions.annotation.annotations[0].value = nextProps.threshold;
            prevState.threshold = nextProps.threshold;
            return {
                chartOptions: tempOptions,
            }
        }
        return null;
    }


    // componentDidMount = () => {
    //     let tempOptions = this.state.chartOptions;
    //     tempOptions.annotation.annotations[0].value = this.props.threshold;
    //     this.setState({chartOptions: tempOptions});
    // }


    render() {
        
        return (
            <div className='chartContainer'>
                <div style={{margin: '12px', fontSize:'26px', fontWeight:'bold', color:'#747474'}}>EMOTION</div>
                <Bar
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                    height={240}
                />
            </div>
        )
    }
}

Chart.propTypes = {
    threshold: PropTypes.any.isRequired,
    chartOptions: PropTypes.object.isRequired
}

export default Chart
