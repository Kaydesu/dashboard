import React, { Component } from 'react'

class Counter extends Component {
    state = {
        candiesDropped: this.props.candiesDropped
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if(nextProps.candiesDropped !== prevState.candiesDropped) {
            return {
                candiesDropped: nextProps.candiesDropped
            }
        }
        return null;
    }

    render() {
        return (
            <div className='cd-count'>
                <div style={{fontSize: '25px', fontWeight:'bold', color:'#747474'}}>
                    CANDY DROPPED
                </div>
                <div style={{display: 'flex'}}>
                    <div style={counter}>{this.state.candiesDropped}</div>
                    <div style={{flex:'2', fontSize:'18px', fontWeight:'900', alignSelf:'center', color:'#747474'}}>
                        Candies <br/> Dropped
                    </div>
                </div>
            </div>  
        )
    }
}

const counter = {
    flex:'1',
    fontSize:'75px',
    marginLeft:'25px',
    alignSelf:'center',
    color: '#37CCF2',
    fontWeight: 'bold'
}


export default Counter
