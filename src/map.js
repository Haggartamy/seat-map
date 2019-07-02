import React, {Component} from 'react';

const rows = [
    { id: 'AA', label: 'AA', numberOfSeats: 31 },
    { id: 'BB', label: 'BB', numberOfSeats: 36 },
    { id: 'CC', label: 'CC', numberOfSeats: 38 },
    { id: 'A', label: 'A', numberOfSeats: 42 },
    { id: 'B', label: 'B', numberOfSeats: 45 },
    { id: 'C', label: 'C', numberOfSeats: 43 },
    { id: 'D', label: 'D', numberOfSeats: 38 },
    { id: 'E', label: 'E', numberOfSeats: 49 },
    { id: 'F', label: 'F', numberOfSeats: 52 },
    { id: 'G', label: 'G', numberOfSeats: 53 },
    { id: 'H', label: 'H', numberOfSeats: 57 },
    { id: 'I', label: 'I', numberOfSeats: 50 },
    { id: 'J', label: 'J', numberOfSeats: 44 },
    { id: 'K', label: 'K', numberOfSeats: 58 },
    { id: 'L', label: 'L', numberOfSeats: 61 },
    { id: 'M', label: 'M', numberOfSeats: 60 },
    { id: 'N', label: 'N', numberOfSeats: 60 },
    { id: 'O', label: 'O', numberOfSeats: 62 },
    { id: 'P', label: 'P', numberOfSeats: 64 },
    { id: 'Q', label: 'Q', numberOfSeats: 62 },
    { id: 'R', label: 'R', numberOfSeats: 62 },
    { id: 'S', label: 'S', numberOfSeats: 64 },
    { id: 'T', label: 'T', numberOfSeats: 66 },
    { id: 'U', label: 'U', numberOfSeats: 66 },
    { id: 'V', label: 'V', numberOfSeats: 64 },
    { id: 'W', label: 'W', numberOfSeats: 65 },
    { id: 'X', label: 'X', numberOfSeats: 65 },
    { id: 'Y', label: 'Y', numberOfSeats: 59 },
    { id: 'Z', label: 'Z', numberOfSeats: 44 },
    { id: 'TA', label: 'A', numberOfSeats: 64 },
    { id: 'TB', label: 'B', numberOfSeats: 65 },
    { id: 'TC', label: 'C', numberOfSeats: 66 },
    { id: 'TD', label: 'D', numberOfSeats: 67 },
    { id: 'TE', label: 'E', numberOfSeats: 66 },
    { id: 'TF', label: 'F', numberOfSeats: 71 },
    { id: 'TG', label: 'G', numberOfSeats: 66 },
    { id: 'TH', label: 'H', numberOfSeats: 65 },
    { id: 'TI', label: 'I', numberOfSeats: 66 },
    { id: 'TJ', label: 'J', numberOfSeats: 67 },
    { id: 'TK', label: 'K', numberOfSeats: 70 },
]

function Rows(props) {  
    const number = props.row.numberOfSeats
    const seats = Array.from({length: number}, (v, k) => k+1).reverse()
    const listSeats = seats.map((seat) => 
        <li 
            style={{top: 0 + 'px'}} 
            className={'s' + seat + ' seat ' + props.row.id + seat} 
            key={props.row.id + seat} 
            onMouseOver={props.onMouseOver}
        >
            {seat}
        </li>
    )   

    function updateRow(rowName) {
        const seats = Array.from(rowName.target.parentElement.children[1].children)
        const zoneChoice = props.zoneChoice
        seats.forEach(
            function(seat){
                const classList = seat.classList
                if(zoneChoice === 1) {
                    classList.remove('zoneTwo', 'zoneThree', 'zoneFour', 'zoneFive', 'zoneSix')
                } else if(zoneChoice === 2) {
                    classList.add('zoneTwo')
                    classList.remove('zoneThree', 'zoneFour', 'zoneFive', 'zoneSix')
                } else if(zoneChoice === 3) {
                    classList.add('zoneThree')
                    classList.remove('zoneTwo', 'zoneFour', 'zoneFive', 'zoneSix')
                } 
                else if(zoneChoice === 4) {
                    classList.add('zoneFour')
                    classList.remove('zoneTwo', 'zoneThree', 'zoneFive', 'zoneSix')
                }
                else if(zoneChoice === 5) {
                    classList.add('zoneFive')
                    classList.remove('zoneTwo', 'zoneThree', 'zoneFour', 'zoneSix')
                }
                else if(zoneChoice === 6) {
                    classList.add('zoneSix')
                    classList.remove('zoneTwo', 'zoneThree', 'zoneFour', 'zoneFive')
                }
            }
        )
    }
    
    return (
        <li className={'row ' + props.row.id}>
            <span className='rowName' onClick={updateRow} >{props.row.label}</span>
            <ul>
                {listSeats}
            </ul>
            <span className='rowName' onClick={updateRow}>{props.row.label}</span>
        </li>
    )
    
}

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: rows,
            zoneChoice: this.props.zoneChoice
        }
        this.handleSeatChange = this.handleSeatChange.bind(this)
    }

    componentDidMount() {
        
        document.querySelectorAll('.X26, .X27, .X39, .X40, .Y9, .Y10, .Y11, .Y12, .Y13, .Y14, .Y30, .Y31, .Y32, .Y33, .Y34, .Y35, .Y36, .Y37, .Y38, .Z37, .Z1, .Z2, .Z3, .Z4, .Z5, .Z6, .Z7, .Z8, .Z9, .Z36, .Z35, .Z34, .Z33, .Z32, .Z31, .Z30, .Z29, .Z28, .Z27').forEach(
            function(removeSeat){
                removeSeat.parentNode.removeChild(removeSeat);
            }
        )

        document.querySelectorAll('.C38, .C41, .C42, .I50, .I43, .I46, .I47, .Y58, .Y57, .Y54, .Y53, .Y49, .Y50, .Y46, .Y7, .Y6, .Y3, .Y2').forEach(
            function(wheelchair){
                wheelchair.classList.add('wheelchair');
            }
        )

        document.querySelectorAll('.Y1, .Y4, .Y5, .Y8, .Y47, .Y48, .Y51, .Y52, .Y55, .Y56, .Y59, .I44, .I45, .I48, .I49, .C39, .C40, .C43').forEach(
            function(companion){
                companion.classList.add('companion');
            }
        )

        document.querySelectorAll('.seat').forEach(
            function(seat){
                let distance
                const left = (seat.offsetLeft + 11)
                const right = (1635 - left)
                if( left >= right ) {
                    distance = (Math.pow((.0045 * left), 5))/100;
                } else {
                    distance = (Math.pow((.0045 * right), 5))/100;
                }        
                const top = distance
                const printStyleTop = '-' + top + 'px'
                const styleTop = seat.style.top
                if(styleTop !== 0 + 'px' ) {
                    seat.style.top = 0 + 'px' 
                } else {
                    seat.style.top = printStyleTop
                }
            }
        )
        document.querySelectorAll('.rowName').forEach(
            function(rowName){
                const ul = rowName.parentElement.children[1]
                const firstSeat = ul.firstChild
                const lastSeat = ul.lastChild
                const fromLeft = firstSeat.offsetLeft - 20
                const fromRight = 1595 - lastSeat.offsetLeft 
                const fromTopLeft = ul.firstChild.offsetTop -3
                const fromTopRight = ul.lastChild.offsetTop - 3
                const firstName = rowName.parentElement.firstChild
                const lastName = rowName.parentElement.lastChild

                firstName.style.left = fromLeft + 'px'
                lastName.style.right = fromRight + 'px'
                firstName.style.top = fromTopLeft + 'px'
                lastName.style.top = fromTopRight + 'px'
            }
        )
        document.querySelectorAll('.AA, .BB, .CC').forEach(
            function(firstRows){
                const margin = '-8px'
                firstRows.firstChild.style.marginLeft = margin
                firstRows.lastChild.style.marginRight = margin
            }
        )
    }

    handleSeatChange(seat) { 
            const classList = seat.target.classList
            const updateZone = this.props.zoneChoice
            let shift = false
            if (seat.shiftKey) {
                shift = true
            }
            if(updateZone === 1 && shift === true) {
                classList.remove('zoneTwo', 'zoneThree', 'zoneFour', 'zoneFive', 'zoneSix')
            } else if(updateZone === 2 && shift === true) {
                classList.add('zoneTwo')
                classList.remove('zoneThree', 'zoneFour', 'zoneFive', 'zoneSix')
            } else if(updateZone === 3 && shift === true) {
                classList.add('zoneThree')
                classList.remove('zoneTwo', 'zoneFour', 'zoneFive', 'zoneSix')
            } 
            else if(updateZone === 4 && shift === true) {
                classList.add('zoneFour')
                classList.remove('zoneTwo', 'zoneThree', 'zoneFive', 'zoneSix')
            }
            else if(updateZone === 5 && shift === true) {
                classList.add('zoneFive')
                classList.remove('zoneTwo', 'zoneThree', 'zoneFour', 'zoneSix')
            }
            else if(updateZone === 6 && shift === true) {
                classList.add('zoneSix')
                classList.remove('zoneTwo', 'zoneThree', 'zoneFour', 'zoneFive')
            }
    }

    render() {
        const rows = this.state.row.map(row => 
            <Rows key={row.id} row={row} 
                onMouseOver={this.handleSeatChange} 
                {...this.props}
            />
        )
        return (
            <div>
                <ul>
                    {rows}
                </ul>
            </div>
        )
    } 
}

export default Map