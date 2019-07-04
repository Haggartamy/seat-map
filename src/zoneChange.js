function zoneChange(classList, zoneChoice) {
    if(zoneChoice === 1) {
        classList.add('zoneOne')
        classList.remove('zoneTwo', 'zoneThree', 'zoneFour', 'zoneFive', 'zoneSix')
    } else if(zoneChoice === 2) {
        classList.add('zoneTwo')
        classList.remove('zoneOne', 'zoneThree', 'zoneFour', 'zoneFive', 'zoneSix')
    } else if(zoneChoice === 3) {
        classList.add('zoneThree')
        classList.remove('zoneOne', 'zoneTwo', 'zoneFour', 'zoneFive', 'zoneSix')
    } else if(zoneChoice === 4) {
        classList.add('zoneFour')
        classList.remove('zoneOne', 'zoneTwo', 'zoneThree', 'zoneFive', 'zoneSix')
    } else if(zoneChoice === 5) {
        classList.add('zoneFive')
        classList.remove('zoneOne', 'zoneTwo', 'zoneThree', 'zoneFour', 'zoneSix')
    } else if(zoneChoice === 6) {
        classList.add('zoneSix')
        classList.remove('zoneOne', 'zoneTwo', 'zoneThree', 'zoneFour', 'zoneFive')
    }
}

export default zoneChange