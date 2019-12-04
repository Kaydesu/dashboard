import React, { Component } from 'react';
import InputRange from 'react-input-range';
import '../inputRange.css'
import PropTypes from 'prop-types';

class Threshold extends Component {
    state = {
        sliderVal: this.props.threshold,
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if(nextProps.threshold !== prevState.sliderVal) {
            return {
                sliderVal: nextProps.threshold
            }
        }
        return null;
    }



    render() {
        return (
            <div className='cd-slide'>
                <div style={{fontSize: '25px', fontWeight:'bold', color:'#747474'}}>THRESHOLD</div>
                <InputRange
                    minValue={0}
                    maxValue={50}
                    value={this.state.sliderVal}
                    step={1}
                    onChange={value => {
                        this.setState({sliderVal:value});
                        this.props.changeThreshold(value);
                    }}
                    onChangeComplete={value => this.props.updateThreshold(value)}
                />
            </div>
        )
    }
}

Threshold.propTypes = {
    threshold: PropTypes.any.isRequired,
    updateThreshold: PropTypes.func.isRequired,
    changeThreshold: PropTypes.func.isRequired
}


export default Threshold
