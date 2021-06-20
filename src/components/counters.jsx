import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = { 
        counters: [
            {"id":1, "value": 3},
            {"id":2, "value": 0},
            {"id":3, "value": 6}
        ]
     };
     handleDelete = countersId => {
        console.log('Delete a counter', countersId);
     }
         
     
    render() { 
        return ( 
            <div>
            {this.state.counters.map(counter=>
                <Counter key ={counter.id}
                value = {counter.value}
                selected = {true}
                onDelete = {this.handleDelete}
                />
                
                )}
            </div>
         );
    }
}
 
export default Counters;