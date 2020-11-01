import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  getSelectValue = (event) => {
    this.setState({
      filters:{
        type: event.target.value
      }
    })
    // console.log(this.state)
    // console.log(event.target.value)

  }

  fetchAnimals = () => {
    let url = ""
    console.log(this.state.filters.type)
    if (this.state.filters.type === "all"){
      url = "/api/pets"
    } 
    else {
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(url).then(res => res.json())
      .then(pets => {
        this.setState({
          pets
        })
      })
  }

  onAdoptPet = (id) => {
    let currentPetsArray = this.state.pets
    let toChange = currentPetsArray.find(pet => pet.id === id)
    toChange.isAdopted = true

    let newPetsArray = currentPetsArray.map(pet => {
      if (pet.id === toChange.id){
        return toChange
      } else {
        return pet
      }
    })
    
    this.setState({

      pets: newPetsArray
      
    }) 
    // Why is the state already changing without useing setState? 
    // console.log(newPetsArray)

  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onTypeChange={this.getSelectValue} onFindPetsClick={this.fetchAnimals}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
