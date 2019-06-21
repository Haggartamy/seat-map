import React, {Component} from 'react';
import ZoneSelector from './zones'
import Map from './map'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        zoneClicked: 1
    }
  }

  render() {
    return (
      <div>
        <ZoneSelector zoneClicked={this.state.zoneClicked} onClick={this.handleZoneClick} />
        <Map zoneClicked={this.state.zoneClicked} />
      </div>
    )
  }
}

export default App;