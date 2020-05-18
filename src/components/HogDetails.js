import React from 'react'

class HogDetails extends React.Component{
    render(){
        return(
            <div>
                <h3>Hog Details</h3>
                <p>
                    Greased: {this.props.hog.greased ? "Yes" : "No"}
                    <br></br>
                    Highest Medal Achieved: {this.props.hog['highest medal achieved']}
                    <br></br>
                    Specialty: {this.props.hog.specialty}
                    <br></br>
                    Weight: {this.props.hog.weight} lb
                    <br></br>
                </p>
            </div>
        )
    }
}

export default HogDetails