import React from 'react';
import './BusinessList.css'; //in same directory
import Business from '../Business/Business';//to parent directory and into sibling directory Business

class BusinessList extends React.Component {
    render(){
        return(
            <div className="BusinessList">
            {this.props.businesses.map(business => {
                return <Business business={business} key={business.id}/>;
            })}
            </div>
        );
    }
}

export default BusinessList;