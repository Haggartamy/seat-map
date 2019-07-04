import React, {Component} from 'react';
import ZoneSelector from './zones'
import Map from './map'
import zoneCounter from './zoneCounter';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zoneChoice: 1
    }
    this.updateZone = this.updateZone.bind(this);
    this.printClass = this.printClass.bind(this)
  }

  updateZone(zone) {
    this.setState({ zoneChoice: zone })
  }

  standardMap() {
    document.querySelectorAll(
      '.A ul :nth-child(-n+4), .A ul :nth-child(n+39), .B ul :nth-child(-n+4), .B ul :nth-child(n+42), .C ul :nth-child(-n+2), .C ul :nth-child(n+38), .D ul :nth-child(n+35), .E ul :nth-child(-n+4), .E ul :nth-child(n+46), .F ul :nth-child(-n+4), .F ul :nth-child(n+49), .G ul :nth-child(-n+4), .G ul :nth-child(n+50), .H ul :nth-child(-n+6), .H ul :nth-child(n+52), .I ul :nth-child(-n+4), .I ul :nth-child(n+47), .J ul :nth-child(n+41), .K ul :nth-child(-n+4), .K ul :nth-child(n+55), .L ul :nth-child(-n+4), .L ul :nth-child(n+58), .M ul :nth-child(-n+2), .M ul :nth-child(n+59), .U li, .V li, .W li, .TE li, .TF li, .TG li, .TH li'
      ).forEach (
      function(seats) {
        seats.classList.add('zoneTwo')
        seats.classList.remove('zoneOne')
      }
    )
    document.querySelectorAll(
      '.AA ul :nth-child(-n+6), .AA ul :nth-child(n+26), .BB ul :nth-child(-n+6), .BB ul :nth-child(n+31), .CC ul :nth-child(-n+6), .CC ul :nth-child(n+33), .X li, .Y li, .Z li, .TI li, .TJ li, .TK li '
      ).forEach (
      function(seats) {
        seats.classList.add('zoneThree')
        seats.classList.remove('zoneOne')
      }
    )  
    zoneCounter()
  }

  printClass() {
    document.body.classList.toggle('print')
    document.querySelectorAll('.zoneSelector li').forEach (
        function(zone) {
            if(zone.children[2].innerHTML === '0') {
                zone.style.display = 'none'
            }
            if(zone.className === "zoneOne" && zone.children[2].innerHTML === '2254') {
              zone.style.display = 'none'
            }
            if(document.body.className !== 'print') {
                zone.style.display = 'block'
            }
        }
    )
  }

  render() {
    return (
      <div>
        <ZoneSelector getUpdatedZone={this.updateZone} />
        <Map zoneChoice={this.state.zoneChoice} />
        <h1 className='title'>Cobb Great Hall
          <span>Wharton Center for Performing Arts</span>
        </h1>        
        <p className='stage'>Stage</p>
        <p className='orchLeft'>Ochestra Left</p>
        <p className='orchRight'>Ochestra Right</p>
        <p className='orch'>Ochestra</p>
        <p className='sound'>Sound Mix Position</p>
        <p className='tier'>Grand Tier</p>
        <p className='wheelchair'>Wheelchair</p>
        <p className='companion'>Companion Seats</p>
        <p className='ada'>ADA Swing Arm Seats</p>
        <p className="standard" onClick={this.standardMap}>Standard Map</p>
        <p className='printBTN' onClick={this.printClass}>Print</p>

      </div>
    )
  }
}

export default App;