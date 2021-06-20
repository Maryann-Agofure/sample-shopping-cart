import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value,
        items: ['watch', 'earrings']
        
     }
     handleIncrement =()=>{
        this.setState({value: this.state.value + 1})
        
    }
    // constructor(){
      //   super()
        //this.handleIncrement = this.handleIncrement.bind(this)
         
     //}
     renderList(){
         if(this.state.items.length === 0)
         return <p>oops! there are no items in your cart. Start shopping to add items</p>
         return <ul>
         {this.state.items.map(item=><li key={item}>{item}</li>)}
         </ul>
     }
    render() { 

        return (
            <div>
            {this.state.items.length ===0 && 'Go to home page and start shopping!'}
            {this.renderList()}
            <span className={this.updateClasses()} style= {{fontSize: 20}}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-md" onClick= {() => this.handleIncrement()}>Increment</button>
            <button className = "btn btn-danger btn-sm m-2" onClick= {() => this.props.onDelete(this.props.id)}>Delete</button>
            </div>
        )
        

    }
    
    formatCount(){
        let {value } = this.state;
        return(value ===0 ? "Zero": value )
    }
    updateClasses(){
        let classes = 'badge m-3 badge-'
        
            return classes+= (this.state.value  === 0? "warning": "primary")
        
    }
    
}
 
export default Counter;