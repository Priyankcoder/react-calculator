import React, {Component} from 'react';
import './Calculator.css';
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {val:0, stack: []};
        this.msg =  this.msg.bind(this);
        this.operation = this.operation.bind(this);


    }
    operation = (init,sign,final) => {
            if(sign === "*"){
                return (init)*(final);
            }
            else if (sign === "/") {
              return init / final;
            }
            else if (sign === "-") {
              return init - final;
            }
            else if (sign === "+") {
              return (+init)+(+final);
            }
            else if (sign === "%") {
              return (init * final)/100;
            }
            // if (sign === "*") {
            //   return init * final;
            // }
    }


    msg = (e) => {
        e.stopPropagation();
        let txt = e.target.textContent;
        if(txt === "AC"){
            this.setState({val:0, stack: []});
        }
        else if(txt === "*"){
            this.setState({stack:["*"]});
        }
        else if(txt === "/"){
            this.setState({stack:["/"]});
        }
        else if(txt === "%"){
            this.setState({stack:["%"]});
        }
        else if(txt === "+"){
            this.setState({stack:["+"]});
        }
        else if(txt === "-"){
            this.setState({stack:["-"]});
        }
        else if(txt === "del"){
            this.setState((state)=>({val:Math.floor(state.val/10)}));
        }
        else if(txt === "+/-"){
            this.setState({val: -this.state.val})
        }
        else if(txt === "="){
            this.setState({val: this.state.val, stack: []})
        }
       
        else{
            console.log(this.state.stack.length);
            if(this.state.stack.length){
                this.setState({val: this.operation(this.state.val,this.state.stack[0],txt)});
                this.setState({stack:[]})
                
            }
            else{
                this.setState({val:this.state.val === 0?txt:this.state.val+""+txt});
            }
        
        }
    }
        

    componentDidMount(){
        this.setState({val:0, stack:[]});
    }

    render(){
        return (
          <div className="vp">
            <div className="calculator">
              <div className="screen">
                <p>{this.state.val}</p>
              </div>
              <div className="keypad">
                <div className="row">
                  <div onClick={this.msg} className="col-3" id="b">
                    <p>AC</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>del</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>+/-</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>/</p>
                  </div>
                </div>
                <div className="row">
                  <div onClick={this.msg} className="col-3 num">
                    <p>7</p>
                  </div>
                  <div onClick={this.msg} className="col-3 num">
                    <p>8</p>
                  </div>
                  <div onClick={this.msg} className="col-3 num">
                    <p>9</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>*</p>
                  </div>
                </div>
                <div className="row">
                  <div onClick={this.msg} className="col-3 num">
                    <p>4</p>
                  </div>
                  <div onClick={this.msg} className="col-3 num">
                    <p>5</p>
                  </div>
                  <div onClick={this.msg} className="col-3 num">
                    <p>6</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>-</p>
                  </div>
                </div>
                <div className="row">
                  <div onClick={this.msg} className="col-3">
                    <p>1</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>2</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>3</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>+</p>
                  </div>
                </div>
                <div className="row">
                  <div onClick={this.msg} className="col-3">
                    <p>%</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>0</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>.</p>
                  </div>
                  <div onClick={this.msg} className="col-3">
                    <p>=</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Calculator;