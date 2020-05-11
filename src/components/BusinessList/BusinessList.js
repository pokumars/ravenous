import React from 'react';
import './BusinessList.css'; //in same directory
import Business from '../Business/Business';//to parent directory and into sibling directory Business

class BusinessList extends React.Component {
    constructor(props){
        super(props);

        this.renderBusinessList= this.renderBusinessList.bind(this)
    }

    renderBusinessList=()=>{
        if(this.props.businesses === undefined){
            return <h2>returned 0 results</h2>
        }
        
        return this.props.businesses.map(business => {
            return <Business business={business} key={business.id}/>;
        })
    }


    render(){
        return(
            <div className="BusinessList">
            {this.renderBusinessList()}
            </div>
        );
    }
}

export default BusinessList;