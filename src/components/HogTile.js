import React from 'react'
import HogDetails from './HogDetails'

class HogTile extends React.Component{
    constructor(){
        super()
        this.state = {
            showDetails: false
        }
    }

    handleClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render(){
        let hogFile = this.props.hog.name.toLowerCase().split(" ").join("_")
        let hogImage = require(`../hog-imgs/${hogFile}.jpg`)


        return(
            <div onClick={this.handleClick}>
                <img src={hogImage} alt={this.props.hog.name} />
                <h3>Hog Name: {this.props.hog.name}
                    <br></br>

                </h3>
                <br></br>
                <div>
                    {this.state.showDetails ? < HogDetails hog={this.props.hog}/> : null}
                </div>
                <br></br>
            </div>
            


        )
    }
}

export default HogTile