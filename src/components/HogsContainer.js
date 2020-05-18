import React from 'react'
import HogTile from './HogTile'

class HogsContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            showDetails: false
        }
    }


    render(){
        return(
            <div>
                {console.log(this.props.hogs)}
                
                {this.props.hogs.map(hog => 
                                            <HogTile hog={hog} key={hog.name}/> )}
            </div>
        )
    }
}

export default HogsContainer