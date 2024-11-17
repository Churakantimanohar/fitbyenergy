


let electricityGenerated = 0;
const maxEnergy = 1000;  // Maximum energy limit

// Function to update the meter
function updateMeter(value) {
    const circleFg = document.querySelector('.circle-fg');
    const meterValue = document.getElementById('meterValue');

    // Calculate the stroke-dasharray for the progress
    const radius = 54;  // radius of the circle
    const circumference = 2 * Math.PI * radius;
    const dashArray = (value / maxEnergy) * circumference;

    circleFg.style.strokeDasharray = `${dashArray} ${circumference}`;
    meterValue.textContent = `${value} W`; // Display current energy value
}

// Simulate energy generation
setInterval(() => {
    if (electricityGenerated < maxEnergy) {
        electricityGenerated += Math.floor(Math.random() * 10) + 1;  // Simulate energy increase
        updateMeter(electricityGenerated);
    }
}, 2000);





document.getElementById('totalEnergyMeter').textContent = '150 W';
document.getElementById('treesPlantedMeter').textContent = '25 Trees';
document.getElementById('wattsGeneratedMeter').textContent = '100 W';



const ctx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Watts Generated',
            data: [100, 200, 300, 400, 500, 600, 700],
            borderColor: '#6e8efb',
            backgroundColor: 'rgba(110, 142, 251, 0.2)',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true },
        }
    }
});
