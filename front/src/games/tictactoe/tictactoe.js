export let FIELD = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]
window.GLOBAL_FIELD = FIELD
export let TOGGLE = false

const emptyField = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]
let changedFields = 0;
let isGameEnded = false

export function test() {
    drawFieldToConsole()
}

export function getField() {
    return FIELD;
}

export function getValueByIndexes(i, j) {
    return FIELD.at(i).at(j);
}

export function setValue(value, i, j) {
    if (isGameEnded) {
        return;
    }
    console.log("set value call with args : i = " + i + "; j = " + j + "; value = " + value)
    if (FIELD.at(i).at(j) !== -1) {
        console.log("cell is changed")
        return
    }
    FIELD[i].splice(j, 1, value)
    TOGGLE = !TOGGLE
    changedFields++;
    if (checkIfGameEnded(value, i, j) !== 2) {
        isGameEnded = true
        console.log("game has ended")
    }
}

function checkIfGameEnded(lastValue, i, j) {
    if (changedFields === 9) {
        console.log("tie")
        return -1
    }

    if (checkRow(i, lastValue)) {
        console.log("win with val = " + lastValue + " by row")
        return lastValue
    }

    if (checkCol(j, lastValue)) {
        console.log("win with val = " + lastValue + " by col")
        return lastValue
    }
    if (checkMainDiag(lastValue)) {
        console.log("win with val = " + lastValue + " by MainDiag")
        return lastValue
    }

    if (checkSecondaryDiag(lastValue)) {
        console.log("win with val = " + lastValue + " by SecondDiag")
        return lastValue
    }

    return 2
}

function checkRow(i, value) {
    for (let k = 0; k < FIELD[0].length; k++) {
        if (FIELD.at(i).at(k) !== value) {
            return false
        }
    }
    return true;
}

function checkCol(j, value) {
    for (let k = 0; k < FIELD.length; k++) {
        if (FIELD[k].at(j) !== value) {
            return false
        }
    }
    return true
}

function checkMainDiag(value) {
    let z = 0
    for (let i = 0; i < FIELD.length; i++) {
        if (FIELD.at(i).at(z) !== value) {
            return false
        }
        z++
    }
    return true
}

function checkSecondaryDiag(value) {
    let z = 0
    for (let i = FIELD.length - 1; i > -1; i--) {
        if (FIELD.at(z).at(i) !== value) {
            return false
        }
        z++
    }
    return true
}

export function drawFieldToConsole() {
    let str = ""
    for (let i = 0; i < FIELD.length; i++) {
        for (let j = 0; j < FIELD[0].length; j++) {
            str = str + FIELD[i][j]
            str = str + " "
        }
        str = str + '\n'
    }
    console.log(str)
}