import React, {Component} from 'react'

const postStyle2={
    image:{
      maxWidth:'640px',
      maxHeight:'360px'
    },
    text:{
      maxWidth:'600px'
    },
    display: 'flex',
    maxWidth:'800px',
    margin:'50px auto',
    alignItems: 'center',
    flexDirection: 'column',
    border:'solid black 2px'
}

let today = new Date().toISOString().slice(0, 10);

export default class Ccomponent extends Component{
    render(){
        return (
            <div style={postStyle2}>
                <img classname='img' src={this.props.image2} style={postStyle2.image} alt='universe2'/>
                {this.props.description}<br></br>
                {this.props.path}<br></br>
                <h2>Сегодня {today}</h2>
            </div>
        )
    }
}