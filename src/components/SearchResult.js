import React, { Component } from 'react';

class SearchResult extends Component {
    

    render() {
        const { items, term } = this.props
        let filtedEmployee = items.filter((employee) => {
            return employee.preferredFullName.toLowerCase().indexOf(term.toLowerCase()) !== -1
        })
        return (
            <div className="row m-2 ">
                {
                    filtedEmployee.map((employee, index) => {
                        return (
                            <div className="card col-3 m-2 p-1" key={index}>
                                <div className="card-body p-2">
                                    <h4 className="card-title text-center text-primary">
                                        {employee.preferredFullName}
                                    </h4>
                                    <p className="card-text">Region :{employee.region}</p>
                                    <p className="card-text">Job name: {employee.jobTitleName}</p>
                                    <p className="card-text">Phone: {employee.phoneNumber}</p>
                                    <p className="card-text">Email: {employee.emailAddress}</p>
                                </div>
                            </div>
                        );
                    })
                }   
            </div>
        );
    }
}

export default SearchResult;