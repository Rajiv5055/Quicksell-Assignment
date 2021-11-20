import React , { Component } from 'react';
import './styles.css';
import './App.css';
class App extends Component {
	constructor(){
		super();
		this.state = {
			counter: 1,
			Max: 1000,
			loading:false,
			input: true
		}
	}
    
	increaseFunction(){
		if (this.state.counter < this.state.Max){
          this.setState({counter:this.state.counter+1})
		}
		fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				Rajiv : this.state.counter
			})
		})
	 	this.setState({loading:!this.state.loading})

	    setTimeout(() => {
              this.setState({loading: false })
         }, 500)
	}
	
	decreaseFunction(){
          this.setState({counter:this.state.counter-1})
		fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				Rajiv : this.state.counter
			})
		})
		this.setState({loading:!this.state.loading})
		setTimeout(() => {
              this.setState({loading: false })
         }, 500)
	}
	getFunction(){
		fetch(' https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json',{
			method:'get'
		})
		.then(response =>{
			if(response)
			this.setState({counter: response})
		})
	}
	render(){
		return (
        <div className="app">
  
          <div classsName="box">   
             <div class="btn-group"> 
                 <div className="load">
                {
                   this.state.loading===true ?
                   	  <p><div class="loader"></div> <p className="text1">Saving counter value </p></p>
                   	  :
                   	  <p></p>
                } 
                 </div> 
			  <button className="button1" onClick = {() => this.decreaseFunction()} style={{width:"60px"}}> - </button>
			  <button className="button2" style={{width:"60px"}}>{this.state.counter}</button>
			  <button className="button3" onClick = {() => this.increaseFunction()} style={{width:"60px"}}> + </button>
			  <div className="load">
                 <p className="text2">Counter Value = {this.state.counter} </p>
              </div>
			</div>
          
          </div>
        </div> 
      );
	}  
}

export default App;
