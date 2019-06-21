import React, {Component} from 'react';

const orchestraRows = [
    { id: "AA", label: "AA", numberOfSeats: 31 },
    { id: "BB", label: "BB", numberOfSeats: 36 },
    { id: "CC", label: "CC", numberOfSeats: 38 },
    { id: "A", label: "A", numberOfSeats: 42 },
    { id: "B", label: "B", numberOfSeats: 45 },
    { id: "C", label: "C", numberOfSeats: 43 },
    { id: "D", label: "D", numberOfSeats: 38 },
    { id: "E", label: "E", numberOfSeats: 49 },
    { id: "F", label: "F", numberOfSeats: 52 },
    { id: "G", label: "G", numberOfSeats: 53 },
    { id: "H", label: "H", numberOfSeats: 57 },
    { id: "I", label: "I", numberOfSeats: 50 },
    { id: "J", label: "J", numberOfSeats: 44 },
    { id: "K", label: "K", numberOfSeats: 58 },
    { id: "L", label: "L", numberOfSeats: 61 },
    { id: "M", label: "M", numberOfSeats: 60 },
    { id: "N", label: "N", numberOfSeats: 60 },
    { id: "O", label: "O", numberOfSeats: 62 },
    { id: "P", label: "P", numberOfSeats: 64 },
    { id: "Q", label: "Q", numberOfSeats: 62 },
    { id: "R", label: "R", numberOfSeats: 62 },
    { id: "S", label: "S", numberOfSeats: 64 },
    { id: "T", label: "T", numberOfSeats: 66 },
    { id: "U", label: "U", numberOfSeats: 66 },
    { id: "V", label: "V", numberOfSeats: 64 },
    { id: "W", label: "W", numberOfSeats: 65 },
    { id: "X", label: "X", numberOfSeats: 65 },
    { id: "Y", label: "Y", numberOfSeats: 59 },
    { id: "Z", label: "Z", numberOfSeats: 44 }
]

function Rows(props) {  
    const number = props.row.numberOfSeats
    const seats = Array.from({length: number}, (v, k) => k+1).reverse()
    const listSeats = seats.map((seat) =>
        <li className={"seat n" + seat} key={"seat" + props.row.label + seat}
        onClick={props.onClick}
        >
            {seat}
        </li>
    )
    return (
        <li className={"row " + props.row.label}>
            <span className="rowName">{props.row.label}</span>
            <ul>
                {listSeats}
            </ul>
            <span className="rowName">{props.row.label}</span>
        </li>
    )
}

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: orchestraRows
        }
        this.handleSeatClick = this.handleSeatClick.bind(this)
    }

    handleSeatClick() {
        console.log(this.state.zoneClicked)
    }

    render() {
        const rows = this.state.row.map(row => 
            <Rows key={row.id} row={row} onClick={() => this.handleSeatClick()} />
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