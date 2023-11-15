document.addEventListener('DOMContentLoaded', function () {
    var pizzaPrices = {
        'Margarita': { 'M': 680, 'L': 850, 'XL': 1070, 'XXL': 1370 },
        'Kaprićoza': { 'M': 830, 'L': 1060, 'XL': 1330, 'XXL': 1740 },
        'Vesuvio': { 'M': 710, 'L': 880, 'XL': 1210, 'XXL': 1410 },
        'Vegetarijana (posno)': { 'M': 710, 'L': 880, 'XL': 1210, 'XXL': 1410 },
        'Tonno (posno)': { 'M': 750, 'L': 940, 'XL': 1490, 'XXL': 1500 },
        'Paragina': { 'M': 860, 'L': 1120, 'XL': 1420, 'XXL': 1800 },
        'Grčka': { 'M': 830, 'L': 1060, 'XL': 1330, 'XXL': 1740 },
        'Romana': { 'M': 840, 'L': 1070, 'XL': 1360, 'XXL': 1770 },
        'Quattro formaggio': { 'M': 840, 'L': 1070, 'XL': 1360, 'XXL': 1770 },
        'Speciale': { 'M': 860, 'L': 1120, 'XL': 1420, 'XXL': 1800 },

    };
    var selectedSize = 'M'; // Podrazumevana veličina
    var pizzaSelect = document.getElementById('pizza');
    var selectedPizzasDiv = document.getElementById('selectedPizzas');
    var addPizzaBtn = document.getElementById('addPizzaBtn');
    var orderBtn = document.getElementById('orderBtn');

    // Logika za dodavanje pice na spisak
    addPizzaBtn.addEventListener('click', function() {
        var pizzaName = pizzaSelect.value;
        var size = selectedSize;
        if (pizzaName) {
            addPizza(pizzaName, size);
        }
    });

    // Logika za poručivanje
    orderBtn.addEventListener('click', function() {
        selectedPizzasDiv.innerHTML = ''; // Očisti listu odabranih pizza
        // Resetujte sve druge delove forme ako je potrebno
    });

    function addPizza(pizza, size) {
        var price = pizzaPrices[pizza][size];
        var pizzaDiv = document.createElement('div');
        pizzaDiv.className = 'selected-pizza-item';
        pizzaDiv.innerHTML = `${pizza} - ${size} - ${price} RSD <button onclick="removePizza(this)">X</button>`;
        selectedPizzasDiv.appendChild(pizzaDiv);
    }

    window.removePizza = function(button) {
        var pizzaItem = button.parentNode;
        pizzaItem.remove();
    };

    // Funkcija za odabir veličine pice
    window.selectSize = function(size) {
        selectedSize = size;
        // Opcionalno: Istaknite selektovano dugme
        var sizeButtons = document.querySelectorAll('.size-option');
        sizeButtons.forEach(function(button) {
            if (button.textContent === size) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });
    };
});


