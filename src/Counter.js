import { Component } from "react";
import React  from "react"
import Result from "./Result";
import Actions from "./Actions";
class Counter extends React.Component {
    state={
        count:0,
    };


    handleMinusCount = (SEvent)=>{
        this.setState({
            count:this.state.count-1
        })  
    }

    handlePlusCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render () {
        const {count}=this.state
        return (
            <div>
                
                <Result count={count} />
                <Actions 
                handleMinusCount={this.handleMinusCount}
                handlePlusCount={this.handlePlusCount} />
                
                
            </div>
          
        )
      
    }
    
    
}


export default Counter