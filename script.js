document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('randomButton');
    const displayText = document.getElementById('displayText');

    button.addEventListener('click', function() {
        fetch('lines.txt')
            .then(response => response.text())
            .then(text => {
                const lines = text.split('\n').filter(line => line.trim() !== '');
                const randomIndex = Math.floor(Math.random() * lines.length);
                displayText.textContent = lines[randomIndex];
            })
            .catch(error => console.error('Error fetching or processing data:', error));
    });
});