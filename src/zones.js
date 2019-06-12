import React, {Component} from 'react';

const zoneSelect = [
    {id: 1, zoneChoice: "Zone 1", style: "zoneOne" },
    {id: 2, zoneChoice: "Zone 2", style: "zoneTwo" },
    {id: 3, zoneChoice: "Zone 3", style: "zoneThree" },
    {id: 4, zoneChoice: "Zone 4", style: "zoneFour" },
    {id: 5, zoneChoice: "Zone 5", style: "zoneFive" },
    {id: 6, zoneChoice: "Zone 6", style: "zoneSix" }  
]

function Zones(props) {  
    return (
        <li className={props.zone.style} onClick={props.onClick}>{props.zone.zoneChoice}</li>
    )
}

class ZoneSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zones: zoneSelect,
            zoneClicked: "Zone 1",
            zoneClass: "zoneOne"
        }
        this.handleZoneClick = this.handleZoneClick.bind(this)
    }

    handleZoneClick(zone) {
        this.setState({ zoneClicked : zone.zoneChoice });
        this.setState({ zoneClass : zone.style });
    }
    
  render() {
    const zoneList = this.state.zones.map(zone => 
        <Zones key={zone.id} zone={zone} onClick={() => this.handleZoneClick(zone)} />
    )
    return (
        <div>
            <p className={this.state.zoneClass}>You have selected {this.state.zoneClicked}</p>
            <ul className="zoneSelector">
                {zoneList}
            </ul>
        </div>
    )
  } 
}

export default ZoneSelector