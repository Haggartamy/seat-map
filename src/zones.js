import React, {Component} from 'react';

const zoneSelect = [
    { id: 1, zoneChoice: 1, style: "zoneOne" },
    { id: 2, zoneChoice: 2, style: "zoneTwo" },
    { id: 3, zoneChoice: 3, style: "zoneThree" },
    { id: 4, zoneChoice: 4, style: "zoneFour" },
    { id: 5, zoneChoice: 5, style: "zoneFive" },
    { id: 6, zoneChoice: 6, style: "zoneSix" }
]

function Zones(props) {  
    return (
        <li className={props.zone.style} onClick={props.onClick}>{props.zone.zoneChoice}</li>
    )
}

class ZoneSelector extends Component {
    constructor(props, zone) {
        super(props)
        this.state = {
            zones: zoneSelect,
            zoneClicked: zone.zoneChoice
        }
        this.handleZoneClick = this.handleZoneClick.bind(this)
    }

    handleZoneClick(zone) {
        this.setState({ zoneClicked : zone.zoneChoice });
    }
        
    render() {
        const zoneList = this.state.zones.map(zone => 
            <Zones key={zone.id} zone={zone} onClick={() => this.handleZoneClick(zone)} />
        )
        return (
            <div>
                <ul className="zoneSelector">
                    {zoneList}
                    {this.state.zoneClicked}
                </ul>
            </div>
        )
    } 
}

export default ZoneSelector