document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault()

    let day = parseInt(document.getElementById('day').value)
    let month = parseInt(document.getElementById('month').value) - 1
    let year = parseInt(document.getElementById('year').value)

    let birthDate = new Date(year, month, day)
    let today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()
    let monthDiff = today.getMonth() - birthDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    document.getElementById('result').innerText = `You are ${age} years old.`
})

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('ageForm').reset()
    document.getElementById('result').innerText = ''
    document.body.style.background = 'linear-gradient(135deg, #f5f7fa, #c3cfe2)'
})

document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        let color = this.getAttribute('data-color')
        document.body.style.background = `linear-gradient(135deg, ${color})`
    })
})
