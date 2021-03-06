import React, {Component} from 'react';
import Navbar from "./components/Navbar"
import Counters from "./components/counters"

class App extends Component {

  state = { 
    counters: [
        {"id":1, "value": 3},
        {"id":2, "value": 0},
        {"id":3, "value": 6},
        {"id":4, "value": 7},
        {"id":5, "value": 16}
    ]
 };

 handleIncrement = (counter) =>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
        
        this.setState({counters})
 }
 handleDecrement = (counter) =>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value--
        
        this.setState({counters})
}


 handleReset = () =>{
     const counters = this.state.counters.map(c => {
        c.value = 0
        return c;
    });
        
        this.setState({counters}); 
 }

 handleDelete = counterId => {
    const counters = this .state.counters.filter(c => c.id != counterId)
    this.setState({counters});
 }
     

  render(){
    return(
      <React.Fragment>
      <Navbar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
      <main className= "container">
      <Counters
      counters = {this.state.counters}
      onReset = {this.handleReset}
       onDelete = {this.handleDelete}
       onIncrement = {this.handleIncrement} 
       onDecrement = {this.handleDecrement}
       />
      </main>
      
    </React.Fragment>
    )
  }
  }
  
  
 
export default App;


