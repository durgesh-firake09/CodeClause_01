// var b = document.getElementsByClassName('input-box')[0]
// b.style.display = 'none'
$('#input-box').hide()
let cat;
$(document).ready(function () {
    $('#go-btn').click(function () {
        cat = $('#type').val()
        if (cat != 'default') {
            $('#input-box').show()
        }
        else {
            alert("Please Select Conversion Category")
        }
        if (cat == "Temperature") {
            let from = document.getElementById('from')
            let to = document.getElementById('to')
            from.innerHTML = '<option value="Celcius">Celcius</option><option value="Fahrenheit">Fahrenheit</option><option value="Kelvin">Kelvin</option>'
            to.innerHTML = '<option value="Celcius">Celcius</option><option value="Fahrenheit">Fahrenheit</option><option value="Kelvin">Kelvin</option>'
        }
        else if (cat == "Length") {
            let from = document.getElementById('from')
            let to = document.getElementById('to')
            from.innerHTML = '<option value="Meter">Meter</option><option value="Kilometer">Kilometer</option><option value="Centimeter">Centimeter</option><option value="Millimeter">Millimeter</option>'
            to.innerHTML = '<option value="Meter">Meter</option><option value="Kilometer">Kilometer</option><option value="Centimeter">Centimeter</option><option value="Millimeter">Millimeter</option>'
        }
        else if (cat == "Time") {
            let from = document.getElementById('from')
            let to = document.getElementById('to')
            from.innerHTML = '<option value="Second">Second</option><option value="Minute">Minute</option><option value="Hour">Hour</option><option value="Day">Day</option>'
            to.innerHTML = '<option value="Second">Second</option><option value="Minute">Minute</option><option value="Hour">Hour</option><option value="Day">Day</option>'
        }
        else if (cat == "Weight") {
            let from = document.getElementById('from')
            let to = document.getElementById('to')
            from.innerHTML = '<option value="Gram">Gram</option><option value="Kilogram">Kilogram</option><option value="Pound">Pound</option><option value="Ounce">Ounce</option><option value="Milligram">Milligram</option>'
            to.innerHTML = '<option value="Gram">Gram</option><option value="Kilogram">Kilogram</option><option value="Pound">Pound</option><option value="Ounce">Ounce</option><option value="Milligram">Milligram</option>'
        }
        else if (cat == "Volume") {
            let from = document.getElementById('from')
            let to = document.getElementById('to')
            from.innerHTML = '<option value="Liter">Liter</option><option value="Milliliter">Milliliter</option><option value="Gallon">Gallon</option><option value="Pint">Pint</option>'
            to.innerHTML = '<option value="Liter">Liter</option><option value="Milliliter">Milliliter</option><option value="Gallon">Gallon</option><option value="Pint">Pint</option>'
        }
        else if (cat == "Area") {
            let from = document.getElementById('from')
            let to = document.getElementById('to')
            from.innerHTML = '<option value="Square Meter">Square Meter</option><option value="Square Kilometer">Square Kilometer</option><option value="Square Centimeter">Square Centimeter</option><option value="Square Millimeter">Square Millimeter</option>'
            to.innerHTML = '<option value="Square Meter">Square Meter</option><option value="Square Kilometer">Square Kilometer</option><option value="Square Centimeter">Square Centimeter</option><option value="Square Millimeter">Square Millimeter</option>'
        }

    })
})
$('#result').hide()

$('#convert').click(function () {
    let value = Number(document.getElementById('value').value)
    let from = $('#from').val()
    let to = $('#to').val()
    let result = value;
    if (cat == "Temperature") {
        result = convertTemp(value, from, to)
    } else if (cat == "Length") {
        result = convertLength(value, from, to)
    }
    else if (cat == "Time") {
        result = convertTime(value, from, to)
    }
    else if (cat == "Weight") {
        result = convertWeight(value, from, to)
    }
    else if (cat == "Volume") {
        result = convertVolume(value, from, to)
    }
    else if (cat == "Area") {
        result = convertArea(value, from, to)
    }

    $('#result').show()

    // result = Math.round((result * 100)) / 100
    $('#res').text(value + " " + from + " = " + result + " " + to)
})




function convertTemp(value, from, to) {
    let result = value;
    if (from == 'Celcius') {
        if (to == "Fahrenheit") {
            result = 32 + (value * 9 / 5)
        }
        else if (to == "Kelvin") {
            result = 273.15 + value
        }
    }
    else if (from == 'Fahrenheit') {
        if (to == "Celcius") {
            result = (value - 32) * 5 / 9
        }
        else if (to == "Kelvin") {
            result = (value - 32) * 5 / 9 + 273.15
        }
    }
    else if (from == 'Kelvin') {
        if (to == "Celcius") {
            result = value - 273.15
        }
        else if (to == "Fahrenheit") {
            result = (value - 273.15) * 9 / 5 + 32
        }
    }
    return result;
}
function convertLength(val, from, to) {
    let result = val;
    if (from == 'Meter') {
        if (to == "Kilometer") {
            result = val / 1000
        }
        else if (to == "Centimeter") {
            result = val * 100
        }
        else if (to == "Millimeter") {
            result = val * 1000
        }
    }
    else if (from == 'Kilometer') {
        if (to == "Meter") {
            result = val * 1000
        }
        else if (to == "Centimeter") {
            result = val * 100000
        }
        else if (to == "Millimeter") {
            result = val * 1000000
        }
    }
    else if (from == 'Centimeter') {
        if (to == "Meter") {
            result = val / 100
        }
        else if (to == "Kilometer") {
            result = val / 100000
        }
        else if (to == "Millimeter") {
            result = val * 10
        }
    }
    else if (from == 'Millimeter') {
        if (to == "Meter") {
            result = val / 1000
        }
        else if (to == "Kilometer") {
            result = val / 1000000
        }
        else if (to == "Centimeter") {
            result = val / 10
        }
    }
    return result;
}
function convertTime(val, from, to) {
    let result = val;
    if (from == 'Second') {
        if (to == "Minute") {
            result = val / 60
        }
        else if (to == "Hour") {
            result = val / 3600
        }
        else if (to == "Day") {
            result = val / 86400
        }
    }
    else if (from == 'Minute') {
        if (to == "Second") {
            result = val * 60
        }
        else if (to == "Hour") {
            result = val / 60
        }
        else if (to == "Day") {
            result = val / 1440
        }
    }
    else if (from == 'Hour') {
        if (to == "Second") {
            result = val * 3600
        }
        else if (to == "Minute") {
            result = val * 60
        }
        else if (to == "Day") {
            result = val / 24
        }
    }
    else if (from == 'Day') {
        if (to == "Second") {
            result = val * 86400
        }
        else if (to == "Minute") {
            result = val * 1440
        }
        else if (to == "Hour") {
            result = val * 24
        }
    }
    return result;
}
function convertVolume(val, from, to) {
    let result = val;
    if (from == 'Liter') {
        if (to == "Milliliter") {
            result = val * 1000
        }
        else if (to == "Gallon") {
            result = val / 3.785
        }
        else if (to == "Pint") {
            result = val * 2.113
        }


    }
    else if (from == 'Milliliter') {
        if (to == "Liter") {
            result = val / 1000
        }
        else if (to == "Gallon") {
            result = val / 3785
        }
        else if (to == "Pint") {
            result = val / 473
        }
    }
    else if (from == 'Gallon') {
        if (to == "Liter") {
            result = val * 3.785
        }
        else if (to == "Milliliter") {
            result = val * 3785
        }
        else if (to == "Pint") {
            result = val * 8
        }
    }
    else if (from == 'Pint') {
        if (to == "Liter") {
            result = val / 2.113
        }
        else if (to == "Milliliter") {
            result = val * 473
        }
        else if (to == "Gallon") {
            result = val / 8
        }
    }
    return result;
}
function convertWeight(val, from, to) {
    let result = val;
    if (from == 'Kilogram') {
        if (to == "Gram") {
            result = val * 1000
        }
        else if (to == "Milligram") {
            result = val * 1000000
        }
        else if (to == "Pound") {
            result = val * 2.205
        }
        else if (to == "Ounce") {
            result = val * 35.274
        }
    }
    else if (from == 'Gram') {
        if (to == "Kilogram") {
            result = val / 1000
        }
        else if (to == "Milligram") {
            result = val * 1000
        }
        else if (to == "Pound") {
            result = val / 454
        }
        else if (to == "Ounce") {
            result = val / 28.35
        }

    }
    else if (from == 'Milligram') {
        if (to == "Kilogram") {
            result = val / 1000000
        }
        else if (to == "Gram") {
            result = val / 1000
        }
        else if (to == "Pound") {
            result = val / 453592
        }
        else if (to == "Ounce") {
            result = val / 28350
        }
    }
    else if (from == 'Pound') {
        if (to == "Kilogram") {
            result = val / 2.205
        }
        else if (to == "Gram") {
            result = val * 454
        }
        else if (to == "Milligram") {
            result = val * 453592
        }
        else if (to == "Ounce") {
            result = val * 16
        }
    }
    else if (from == 'Ounce') {
        if (to == "Kilogram") {
            result = val / 35.274
        }
        else if (to == "Gram") {
            result = val * 28.35
        }
        else if (to == "Milligram") {
            result = val * 28350
        }
        else if (to == "Pound") {
            result = val / 16
        }
    }

    return result;
}
function convertArea(val, from, to) {
    let result = val;
    if (from == 'Square Meter') {
        if (to == "Square Kilometer") {
            result = val / 1000000
        }
        else if (to == "Square Centimeter") {
            result = val * 10000
        }
        else if (to == "Square Millimeter") {
            result = val * 1000000
        }
    }
    else if (from == 'Square Kilometer') {
        if (to == "Square Meter") {
            result = val * 1000000
        }
        else if (to == "Square Centimeter") {
            result = val * 10000000000
        }
        else if (to == "Square Millimeter") {
            result = val * 1000000000000
        }
    }
    else if (from == 'Square Centimeter') {
        if (to == "Square Meter") {
            result = val / 10000
        }
        else if (to == "Square Kilometer") {
            result = val / 10000000000
        }
        else if (to == "Square Millimeter") {
            result = val * 100
        }
    }
    else if (from == 'Square Millimeter') {
        if (to == "Square Meter") {
            result = val / 1000000
        }
        else if (to == "Square Kilometer") {
            result = val / 1000000000000
        }
        else if (to == "Square Centimeter") {
            result = val / 100
        }
    }
    return result;
}
