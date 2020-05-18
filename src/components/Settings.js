import React from 'react'

class Settings extends React.Component{

    render(){
        return(
            <div>
                <h3>
                    Show Greased Pigs Only
                    <input
                        type="checkbox"
                        name="greased"
                        onChange={this.props.changeFilter}
                    />
                </h3>
                <br></br>
                <div>
                    <label>Sort By Name</label>
                    <input
                        type="radio"
                        name="sortbyname"
                        checked={this.props.sortBy === "sortbyname"}
                        onChange={this.props.changeSort}
                    />
                </div>
                <br></br>
                <div>
                    <label>Sort By Weight</label>
                    <input
                        type="radio"
                        name="sortbyweight"
                        checked={this.props.sortBy === 'sortbyweight'}
                        onChange={this.props.changeSort}
                    />
                </div>

            </div>
        )
    }
}
export default Settings 