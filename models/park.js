const Park = function (name, entryFee, dinosaurs) {
    this.name = name
    this.entryFee = entryFee
    this.dinosaurs = dinosaurs
}

Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeFirstDinosaur = function () {
    this.dinosaurs.shift()
}

Park.prototype.removeLastDinosaur = function () {
    this.dinosaurs.pop()
}

// Park.prototype.findBestDinosaur = function () {
//     let highestVisitorsNo = 0
//     for (const dinosaur of this.dinosaurs){
//         if (dinosaur.guestsAttractedPerDay = dinosaur)
//     }
// }








module.exports = Park;