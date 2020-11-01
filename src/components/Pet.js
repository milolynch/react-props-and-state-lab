import React from 'react'

class Pet extends React.Component {
  render() {
    const isAdopted = this.props.pet.isAdopted
    let buttons;
    if (!isAdopted) {
      buttons = 
    <div className="extra content">
      <button className="ui disabled button">Already adopted</button>
      <button className="ui primary button" onClick = {() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    </div>
    } else {
      buttons =
    <div className="extra content">
      <button className="ui primary button">Already adopted</button>
      <button className="ui disabled button">Too Late!</button>
    </div>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name+" "}
            {this.props.pet.gender}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>{"Age: "+this.props.pet.age}</p>
            <p>{"Weight: "+this.props.pet.weight}</p>
          </div>
        </div>
      {/* <div className="extra content">
        <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button" onClick = {() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
      </div> */}
        {buttons}
      </div>
    )
  }
}

export default Pet
