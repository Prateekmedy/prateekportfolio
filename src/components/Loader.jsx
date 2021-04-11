import React, { Component } from 'react';

class Loader extends Component {
    
    constructor(props){
        super(props);
    }

    render() { 
        return ( 
            <div className='loader-container'>
                <div className="loader"></div>
            </div>
         );
    }
}
 
export default Loader;