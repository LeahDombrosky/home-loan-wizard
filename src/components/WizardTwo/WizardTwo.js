import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCity } from '../../ducks/reducer';
import { connect } from 'react-redux';


class WizardTwo extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
            
                <p>In what city will the property be located?</p><br />
                    
                        <input placeholder="city name" type="text" onChange={this.props.updateCity}/>
                
                    <Link to="/wThree"><button className="wTwo-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps( state ) {
    const { city } = state;
    console.log(city);
  
    return {
      city
    };
  }
  
  export default connect( mapStateToProps, { updateCity } )( WizardTwo );
