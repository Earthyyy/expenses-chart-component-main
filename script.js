

fetch('./data.json')
    .then((response) => response.json())
    .then((monthlyExpenses) => {
        let maxAmount = Math.max(...monthlyExpenses.map(d => d.amount))
        monthlyExpenses.forEach(data => {
            let dayBar = document.getElementById(data.day);
            let label = dayBar.nextElementSibling;

            if (data.amount === maxAmount) dayBar.style.backgroundColor = "#76B5BC";
            

            dayBar.style.height = ((150 * data.amount ) / maxAmount) + 'px';
            label.textContent = '$' + data.amount;

        })
    });