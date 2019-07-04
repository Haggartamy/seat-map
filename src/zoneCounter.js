function zoneCounter() {
    document.querySelectorAll('.zoneSelector li').forEach (
        function(zone) {
            const totalSeats = document.getElementsByClassName(zone.classList).length -1
            zone.children[2].innerHTML = totalSeats
        }
    )        
}

export default zoneCounter