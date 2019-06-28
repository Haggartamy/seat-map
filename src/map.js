import React, {Component} from 'react';

const rows = [
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
    { id: "Z", label: "Z", numberOfSeats: 44 },
    { id: "TA", label: "A", numberOfSeats: 64 },
    { id: "TB", label: "B", numberOfSeats: 65 },
    { id: "TC", label: "C", numberOfSeats: 66 },
    { id: "TD", label: "D", numberOfSeats: 67 },
    { id: "TE", label: "E", numberOfSeats: 66 },
    { id: "TF", label: "F", numberOfSeats: 71 },
    { id: "TG", label: "G", numberOfSeats: 66 },
    { id: "TH", label: "H", numberOfSeats: 65 },
    { id: "TI", label: "I", numberOfSeats: 66 },
    { id: "TJ", label: "J", numberOfSeats: 67 },
    { id: "TK", label: "K", numberOfSeats: 70 },
]

function Rows(props) {  
    const number = props.row.numberOfSeats
    const seats = Array.from({length: number}, (v, k) => k+1).reverse()
    const listSeats = seats.map((seat) => 
        <li style={{top: 0 + "px"}} className={"s" + seat + " seat " + props.row.id + seat} key={props.row.id + seat} onClick={props.onClick}
        >
            {seat}
        </li>
    )    
    return (
        <li className={"row " + props.row.id}>
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
            row: rows
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        document.querySelectorAll(".X28, .X29, .X42, .X43, .Y9, .Y10, .Y11, .Y12, .Y13, .Y14, .Y30, .Y31, .Y32, .Y33, .Y34, .Y35, .Y36, .Y37, .Y38, .Z37, .Z1, .Z2, .Z3, .Z4, .Z5, .Z6, .Z7, .Z8, .Z9, .Z36, .Z35, .Z34, .Z33, .Z32, .Z31, .Z30, .Z29, .Z28, .Z27").forEach(
            function(removeSeat){
                removeSeat.parentNode.removeChild(removeSeat);
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
                const printStyleTop = "-" + top + "px"
                const styleTop = seat.style.top
                if(styleTop !== 0 + "px" ) {
                    seat.style.top = 0 + "px" 
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

                firstName.style.left = fromLeft + "px"
                lastName.style.right = fromRight + "px"
                firstName.style.top = fromTopLeft + "px"
                lastName.style.top = fromTopRight + "px"
            }
        )
        document.querySelectorAll('.AA, .BB, .CC').forEach(
            function(firstRows){
                const margin = "-8px"
                firstRows.firstChild.style.marginLeft = margin
                firstRows.lastChild.style.marginRight = margin
            }

        )
    }

    handleClick() {
        const root = document.getElementById("root")
        const print = "print"
        const notPrint = "notPrint"
        if( root.className == notPrint ){
            root.classList.remove(notPrint);
            root.classList.add(print);
        } else {
            root.classList.remove(print);
            root.classList.add(notPrint);
        }
    }

    handleClickSeat() {
        document.querySelectorAll('.seat').forEach(
            function(seat) {
            console.log(seat.offsetLeft)
            }
        )
    }

    render() {
        const rows = this.state.row.map(row => 
            <Rows key={row.id} row={row} onClick={() => this.handleClickSeat()} />
        )
        return (
            <div>
                 <a href="#" onClick={() => this.handleClick()} className="printBTN">Print</a>
                <ul>
                    {rows}
                </ul>
            </div>
        )
    } 
}

export default Map