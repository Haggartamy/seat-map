import React, {Component} from 'react';

const zoneSelect = [
    { id: 1, zoneChoice: 1, name: 'Zone 1', style: 'zoneOne' },
    { id: 2, zoneChoice: 2, name: 'Zone 2', style: 'zoneTwo' },
    { id: 3, zoneChoice: 3, name: 'Zone 3', style: 'zoneThree' },
    { id: 4, zoneChoice: 4, name: 'Lottery', style: 'zoneFour' },
    { id: 5, zoneChoice: 5, name: 'Premium', style: 'zoneFive' },
    { id: 6, zoneChoice: 6, name: 'Not Sold', style: 'zoneSix' }
]

function Zones(props) {  
    return (
        <li className={props.zone.style}>
            <span onClick={props.onClick} className='zone'>{props.zone.zoneChoice}</span>
            <input defaultValue={props.zone.name} type='text' 
            onChange={props.onChange} size="17" ></input>
            <span className='totalSeats'></span>
        </li>
    )
}

class ZoneSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zones: zoneSelect
        }
        this.handleZoneClick = this.handleZoneClick.bind(this)
    }

    handleZoneClick(zone) {
        this.props.getUpdatedZone(zone.zoneChoice)
    }

    render() {
        const zoneList = this.state.zones.map(zone => 
            <Zones key={zone.id} zone={zone} 
                onClick={() => this.handleZoneClick(zone)}
                onChange={this.handleChange}
            />
        )
        return (
            <div>
                <ul className='zoneSelector'>
                    {zoneList}
                </ul>
            </div>
        )
    } 
}

export default ZoneSelector