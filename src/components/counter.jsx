import React, { Component } from 'react';

class Counter extends Component {
    
    
    // constructor(){
      //   super()
        //this.handleIncrement = this.handleIncrement.bind(this)
         
     //}
     
    render() { 

        return (
            <div>
            
            <span className={this.updateClasses()} style= {{fontSize: 20}}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-md mr-4" onClick= {() => this.props.onIncrement(this.props.counter)}>Add to cart</button>
            <button className="btn btn-secondary btn-md" onClick= {() => this.props.onDecrement(this.props.counter)}>Remove item from cart</button>
            <button className = "btn btn-danger btn-sm m-2" onClick= {() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        )
        

    }
    
    formatCount(){
        let {value } = this.props.counter;
        return(value ===0 ? "Zero": value )
    }
    updateClasses(){
        let classes = 'badge m-3 badge-'
        
            return classes+= (this.props.counter.value  === 0? "warning": "primary")
        
    }
    
}
 
export default Counter;