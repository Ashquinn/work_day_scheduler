let today = moment()
$('#currentDay').text(today.format('dddd, MMMM Do, h a'));

let containerDiv = $('.container')
let times = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm']
let plannerEl = $('<div>')

function buildRow() {
    for (let i = 0; i <= 8; i++){
        
        let rowEl = $('<div>')
        let timeEl = $('<div>')
        let inputEl = $('<textarea>')
        let saveEl = $('<div>')
        let rowTime = i+9

        rowEl.addClass('row time-block')

        timeEl.text(times[i]);
        timeEl.attr('class', 'hour col-md-1')

        inputEl.attr('class', 'col-md-10')
        inputEl.attr('id', i+9)

        saveEl.attr('class', 'saveBtn col-md-1')
        
        rowEl.append(timeEl)
        rowEl.append(inputEl)
        rowEl.append(saveEl)

        containerDiv.append(rowEl)


    }
}

buildRow()
$('.saveBtn').on('click', function(event){
    event.preventDefault()
    let userInput = $(this).siblings('textarea').val()
    let hour = $(this).siblings('textarea').attr('id')

    localStorage.setItem(hour, userInput)
})


for (let i = 9; i <= 17; i++){
    $('#' + i).val(localStorage.getItem(i))
}

let time = moment().format('H')
console.log(time)

//Change color for input field based on time

//Functionality for saving users input
