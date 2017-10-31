import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCost } from '../../ducks/reducer';
import { connect } from 'react-redux';

class WizardSix extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={this.props.updateCost}/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={this.props.updateDownPayment}/>                    
                        
                    
                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { cost } = state;
  
    return {
        cost
    };
  }
  
  export default connect( mapStateToProps, { updateCost } )( WizardSix ); 