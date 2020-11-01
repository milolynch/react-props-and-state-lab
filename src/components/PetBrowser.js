import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  ReptileListItems = () => {
    const reptiles = this.props.petData
  
    return reptiles.map((pet) => <Pet pet={pet} onAdoptPet = {this.props.onAdoptPet}/>);
  }
  render() {
    return (
    <div className="ui cards">
      {this.ReptileListItems()}

    </div>
    )
  }
}

export default PetBrowser
