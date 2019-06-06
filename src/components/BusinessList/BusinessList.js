import React from 'react';
import './BusinessList.css'; //in same directory
import Business from '../Business/Business';//to parent directory and into sibling directory Business

class BusinessList extends React.Component {
    render(){
        return(
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
}

export default BusinessList;