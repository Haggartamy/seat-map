import React, {Component} from 'react';
import ZoneSelector from './zones'
import Map from './map'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zoneChoice: 1
    }
    this.updateZone = this.updateZone.bind(this);
  }

  updateZone(zone) {
    this.setState({ zoneChoice: zone })
  }

  render() {
    return (
      <div>

        <ZoneSelector getUpdatedZone={this.updateZone} />
        <Map zoneChoice={this.state.zoneChoice} />
        <h1 className="title">Cobb Great Hall
          <span>Wharton Center for Performing Arts</span>
        </h1>        <p className="stage">Stage</p>
        <p className="orchLeft">Ochestra Left</p>
        <p className="orchRight">Ochestra Right</p>
        <p className="orch">Ochestra</p>
        <p className="sound">Sound Mix Position</p>
        <p className="tier">Grand Tier</p>
        <p className="wheelchair">Wheelchair</p>
        <p className="companion">Companion Seats</p>
        <p className="ada">ADA Swing Arm Seats</p>
      </div>
    )
  }
}

export default App;