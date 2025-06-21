const a_library = {
    character: {
        name: 'Coco',
        path: 'assets/character/cat_purple.gif'
    },
    beanbag: {
        name: 'Beanbag',
        path: 'assets/beanbag/beanbag_purple_l.png'
    },
    crown: {
        name: 'Crown',
        path: 'assets/crown.png'
    },
    heart: {
        name: 'Heart',
        path: 'assets/heart.png'
    },
    star: {
        name: 'Star',  
        path: 'assets/star.png'
    },
    mushroom: {
        name: 'Mushroom',
        path: 'assets/mushroom.png'
    },
    pixieLight: {
        name: 'Pixie Light',
        path: 'assets/pixie_light.gif'
    },
    sunglasses: {
        name: 'Sunglasses',
        path: 'assets/sunglasses.png'
    },
};

function displayItem(itemName) {
    const itemData = a_library[itemName];
    if (!itemData) {
        console.error('Item not found:', itemName);
        return;
    }

    const imgElement = document.createElement('img');
    imgElement.id = itemName;
    imgElement.src = itemData.path;
    imgElement.alt = itemData.name;

    const room = document.querySelector('#character-room');
    room.appendChild(imgElement);
};

displayItem('character');
displayItem('beanbag');

const completedCountSpan = document.querySelector('#completedCount');
const totalCountSpan = document.querySelector('#totalCount');

function updateCounter() {
    const totalItems = list.querySelectorAll('li').length;
    const completedItems = list.querySelectorAll('.completed').length;
    totalCountSpan.textContent = `Total: ${totalItems}`;
    completedCountSpan.textContent = `Completed: ${completedItems}`;
}

const input = document.querySelector('#todoInput');
const addButton = document.querySelector('#addButton');
const list = document.querySelector('#todoList');
const hideButton = document.querySelector('#hideButton');
const showButton = document.querySelector('#showButton');

addButton.addEventListener('click', () => {
    const todoText = input.value.trim();
    if (todoText) {
        const listItem = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        listItem.appendChild(textSpan);
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
            updateCounter();
        });

        list.appendChild(listItem);
        updateCounter();
        input.value = '';
    } else {
        alert('Please enter a todo item.');
    }
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addButton.click();
    }
});

hideButton.addEventListener('click', () => {
    const completedItems = list.querySelectorAll('.completed');
    completedItems.forEach(item => {
       item.style.display = 'none';
        }
    );
});

showButton.addEventListener('click', () => {
    const allItems = list.querySelectorAll('li');
    allItems.forEach(item => {
        item.style.display = '';
    });
});
