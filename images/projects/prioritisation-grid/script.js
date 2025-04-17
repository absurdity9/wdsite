document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const numItemsInput = document.getElementById('num-items-input'); // New input
    const itemInputsContainer = document.getElementById('item-inputs');
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const inputCard = document.getElementById('input-card');
    const comparisonCard = document.getElementById('comparison-card');
    const resultsCard = document.getElementById('results-card');
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const itemButton1 = document.getElementById('item-button-1');
    const itemButton2 = document.getElementById('item-button-2');
    const resultsList = document.getElementById('results-list');
    const instructionsCard = document.getElementById('instructions-card');

    // --- State ---
    let items = []; // Array of { id: number, name: string, score: number }
    let pairsToCompare = []; // Array of [index1, index2]
    let currentPairIndex = 0;
    let numberOfItems = 10; // Default, will be updated from input

    // --- Initialization ---
    function init() {
        // 1. Check URL parameter and update the number input if valid
        const urlParams = new URLSearchParams(window.location.search);
        const itemsParam = urlParams.get('items');
        const minItems = parseInt(numItemsInput.min) || 2;
        const maxItems = parseInt(numItemsInput.max) || 50; // Use max from input attribute

        if (itemsParam) {
            const numFromParam = parseInt(itemsParam);
            if (!isNaN(numFromParam) && numFromParam >= minItems && numFromParam <= maxItems) {
                 numItemsInput.value = numFromParam; // Set the input value
            } else {
                console.warn(`URL parameter 'items=${itemsParam}' is invalid or out of range (${minItems}-${maxItems}). Using default.`);
            }
        }

        // 2. Read the initial number of items FROM the input field
        updateNumberOfItems(); // Read value and clamp if necessary

        // 3. Create initial input fields based on the number
        createInputFields();

        // 4. Reset internal state
        resetState();

        // 5. Show the starting section
        showSection('input');

        // 6. Add event listener for changes to the number of items input
        numItemsInput.addEventListener('change', handleNumItemsChange);
        numItemsInput.addEventListener('input', handleNumItemsInput); // Optional: for immediate feedback while typing/spinning
    }

    function handleNumItemsInput() {
        // Provides basic validation feedback while user interacts
        if (!numItemsInput.validity.valid) {
             numItemsInput.style.borderColor = 'red'; // Basic invalid indicator
        } else {
             numItemsInput.style.borderColor = ''; // Reset border
        }
    }

    function handleNumItemsChange() {
        if (!numItemsInput.validity.valid) {
            // Handle invalid final input (e.g., user typed letters, then clicked away)
            console.error("Invalid number of items entered.");
            numItemsInput.reportValidity(); // Show browser's validation message
            // Optionally reset to previous valid value or default
            numItemsInput.value = numberOfItems; // Revert to last known valid number
            numItemsInput.style.borderColor = ''; // Reset border
            return; // Don't proceed if invalid
        }
        numItemsInput.style.borderColor = ''; // Reset border if valid
        updateNumberOfItems(); // Update the variable
        createInputFields(); // Regenerate the text fields
        resetState(); // Reset scores etc. when item count changes
    }

    function updateNumberOfItems() {
        const min = parseInt(numItemsInput.min) || 2;
        const max = parseInt(numItemsInput.max) || 50;
        let value = parseInt(numItemsInput.value);

        // Clamp value to min/max if user somehow bypassed input constraints
        if (isNaN(value)) {
            value = 10; // Default fallback
        }
        value = Math.max(min, Math.min(max, value));

        numberOfItems = value;
        numItemsInput.value = numberOfItems; // Ensure input reflects clamped value
        // console.log(`Number of items set to: ${numberOfItems}`);
    }


    function createInputFields() {
        itemInputsContainer.innerHTML = ''; // Clear previous fields
        items = []; // Clear the logical items array too
        // console.log(`Creating ${numberOfItems} input fields.`);
        for (let i = 0; i < numberOfItems; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'textfield item-input';
            input.placeholder = `Item ${i + 1} Name`;
            input.id = `item-input-${i}`;
            // input.value = `Item ${i + 1}`; // Optional: Pre-fill with default names
            itemInputsContainer.appendChild(input);
            // Don't pre-populate logical 'items' array here, do it in startComparison
        }
    }

    function resetState() {
        // Don't reset items array here as it's tied to createInputFields now
        if (items.length > 0) {
             items.forEach(item => item.score = 0); // Reset scores if items exist
        }
        pairsToCompare = [];
        currentPairIndex = 0;
        resultsList.innerHTML = '';
        progressBar.style.width = '0%';
        progressText.textContent = '';
        // Do NOT call createInputFields() here, it's handled by init and change listener
    }


    // --- State Management ---
    function showSection(section) {
        inputCard.classList.add('card--hidden');
        comparisonCard.classList.add('card--hidden');
        resultsCard.classList.add('card--hidden');
        instructionsCard.classList.add('card--hidden'); // Hide instructions during comparison/results

        if (section === 'input') {
            inputCard.classList.remove('card--hidden');
            instructionsCard.classList.remove('card--hidden');
        } else if (section === 'comparison') {
            comparisonCard.classList.remove('card--hidden');
        } else if (section === 'results') {
            resultsCard.classList.remove('card--hidden');
        }
    }


    // --- Comparison Logic ---
    function startComparison() {
        // 1. Read item names from CURRENT inputs
        const inputElements = itemInputsContainer.querySelectorAll('.item-input');
        if (inputElements.length !== numberOfItems) {
             console.error("Mismatch between expected and actual input fields. Reinitializing.");
             init(); // Something went wrong, try to reset
             return;
        }

        items = Array.from(inputElements).map((input, index) => ({
            id: index,
            name: input.value.trim() || `Item ${index + 1}`, // Use placeholder if empty
            score: 0
        }));

        // Check if we actually have enough items to compare
        if (items.length < 2) {
            alert("Please enter at least 2 items to compare.");
            showSection('input'); // Stay on input section
            return;
        }

        // 2. Generate unique pairs
        pairsToCompare = [];
        for (let i = 0; i < items.length; i++) {
            for (let j = i + 1; j < items.length; j++) {
                pairsToCompare.push([i, j]);
            }
        }

        // Handle case with 0 pairs (shouldn't happen with >= 2 items)
        if (pairsToCompare.length === 0) {
             console.log("No pairs to compare, showing results immediately.");
             showResults();
             return;
        }

        // 3. Shuffle pairs for randomness
        shuffleArray(pairsToCompare);

        // 4. Reset comparison state and start
        currentPairIndex = 0;
        showSection('comparison');
        displayCurrentPair();
    }

    function displayCurrentPair() {
        if (currentPairIndex >= pairsToCompare.length) {
            showResults();
            return;
        }

        const [index1, index2] = pairsToCompare[currentPairIndex];
        const item1 = items[index1];
        const item2 = items[index2];

        // Check for undefined items (safety)
        if (!item1 || !item2) {
            console.error("Error finding items for comparison pair:", index1, index2);
            // Maybe skip pair or show error
            currentPairIndex++;
            displayCurrentPair(); // Try next pair
            return;
        }

        // Update progress text
        progressText.textContent = `Comparing ${currentPairIndex + 1} of ${pairsToCompare.length}`;

        // Update progress bar
        const progressPercentage = ((currentPairIndex + 1) / pairsToCompare.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Update buttons
        itemButton1.textContent = item1.name;
        itemButton1.dataset.index = index1;
        itemButton1.dataset.otherIndex = index2; // Retained, though not used in scoring

        itemButton2.textContent = item2.name;
        itemButton2.dataset.index = index2;
        itemButton2.dataset.otherIndex = index1; // Retained
    }

    function handleChoice(event) {
        const chosenButton = event.target.closest('button'); // Handle clicks inside button text
        if (!chosenButton || !chosenButton.dataset.index) return; // Exit if click wasn't on a valid button

        const chosenIndex = parseInt(chosenButton.dataset.index);

        if (!isNaN(chosenIndex) && items[chosenIndex]) {
            items[chosenIndex].score++;
            currentPairIndex++;
            displayCurrentPair();
        } else {
             console.error("Invalid index chosen:", chosenButton.dataset.index);
        }
    }


    // --- Results Logic ---
    function showResults() {
         // Sort items by score descending
        const sortedItems = [...items].sort((a, b) => b.score - a.score);

        // Display sorted items in the list
        resultsList.innerHTML = ''; // Clear previous results
        if (sortedItems.length === 0) {
            const listItem = document.createElement('li');
            listItem.className = 'list-item typography-body1';
            listItem.textContent = "No items were entered or compared.";
            resultsList.appendChild(listItem);
        } else {
            sortedItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'list-item';

                const textSpan = document.createElement('span');
                textSpan.className = 'list-item__text';
                textSpan.textContent = item.name;

                const scoreSpan = document.createElement('span');
                scoreSpan.className = 'list-item__score';
                scoreSpan.textContent = item.score;

                listItem.appendChild(textSpan);
                listItem.appendChild(scoreSpan);
                resultsList.appendChild(listItem);
            });
        }

        showSection('results');
    }


    // --- Event Listeners ---
    startButton.addEventListener('click', startComparison);
    restartButton.addEventListener('click', () => {
         // Go back to input, keeping the number of items and entered text
         resetState(); // Clear scores, pairs, results
         showSection('input');
    });
    itemButton1.addEventListener('click', handleChoice);
    itemButton2.addEventListener('click', handleChoice);


    // --- Helper Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    // --- Run Initialization ---
    init();

});