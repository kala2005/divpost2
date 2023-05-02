
console.log('hello')
const ctx = document.getElementById('xp-chart');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sept 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022', 'Jan 2023', 'Feb 2023'],
        datasets: [{
            data: [250, 320, 350, 420, 410, 450],
            borderWidth: 2,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                gridLines: {
                    borderDash: [],
                    color: '#FFF',
                    lineWidth: 1,
                    zeroLineColor: '#FFF',
            }
            }],
            xAxes: [{
                gridLines: {
                    borderDash: [],
                    color: '#FFF',
                    lineWidth: 1,
                    zeroLineColor: '#FFF',
                    borderColor: '#E0282E', 
                }
            }]
        },
        legend: {
            display: false 
        }
    }
});
  