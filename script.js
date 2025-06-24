document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. 라이브러리 및 전역 변수 ---
    const a_library = {
        character: { name: 'Cat', path: 'assets/character/cat_purple_ee.gif', nativeSize: 32 },
        beanbag: { name: 'Beanbag', path: 'assets/beanbag/beanbag_purple_v3.png', nativeSize: 32 },
        crown: { name: 'Crown', path: 'assets/crown.png' },
        heart: { name: 'Heart', path: 'assets/heart/heart_purple_16px.png', nativeSize: 16 },
        star: { name: 'Star', path: 'assets/star.png' },
        mushroom: { name: 'Mushroom', path: 'assets/mushroom.png' },
        pixieLight: { name: 'Pixie Light', path: 'assets/pixie_light.gif' },
        sunglasses: { name: 'Sunglasses', path: 'assets/sunglasses/sunglasses_purple.png' },
    };
    const rewardList = ['sunglasses', 'heart', 'star', 'mushroom', 'pixieLight', 'crown'];
    let rewardIndex = 0;

    // --- 2. HTML 요소 선택 ---
    const input = document.querySelector('#todoInput');
    const addButton = document.querySelector('#addButton'); 
    const list = document.querySelector('#todoList');
    const hideButton = document.querySelector('#hideButton');
    const showButton = document.querySelector('#showButton');
    const completedCountSpan = document.querySelector('#completedCount');
    const totalCountSpan = document.querySelector('#totalCount');
    const characterRoom = document.querySelector('#character-room');
    const mainElement = document.querySelector('main');

    if (!characterRoom || !mainElement) {
        console.error("CRITICAL ERROR: 필수 요소를 찾을 수 없습니다.");
        return;
    }

    function displayItem(itemName) {
        const itemData = a_library[itemName];
        if (!itemData) return;

        const imgElement = document.createElement('img');
        imgElement.id = itemName;
        imgElement.src = itemData.path;
        imgElement.alt = itemData.name;
        
        if (rewardList.includes(itemName)) {
            imgElement.classList.add('reward-item');
            if (itemName === 'heart' || itemName === 'star') {
                imgElement.classList.add('float');
            }
        } else {
            imgElement.classList.add('character-item');
        }
        characterRoom.appendChild(imgElement);
    }

     function updateCounter() {
        const totalItems = list.querySelectorAll('li').length;
        const completedItems = list.querySelectorAll('.completed').length;
        totalCountSpan.textContent = `Total: ${totalItems}`;
        completedCountSpan.textContent = `Completed: ${completedItems}`;
    }

    function checkAndGiveReward() {
        const completedCount = list.querySelectorAll('li.completed').length;
        if (completedCount > 0 && completedCount % 3 === 0) {
            if (rewardIndex < rewardList.length) {
                const itemToGive = rewardList[rewardIndex];
                if (!document.querySelector(`#${itemToGive}`)) {
                    displayItem(itemToGive);
                    alert(`Congratulations! You've earned a ${a_library[itemToGive].name}! Great job!`);
                    rewardIndex++;
                }
            }
        }
    }

    function addTodoItem() {
        const todoText = input.value.trim();
        if (todoText) {
            const listItem = document.createElement('li');
            const textSpan = document.createElement('span');
            textSpan.textContent = todoText;
            listItem.appendChild(textSpan);
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('completed');
                updateCounter();
                if (listItem.classList.contains('completed')) {
                    checkAndGiveReward();
                }
            });
            list.appendChild(listItem);
            updateCounter();
            input.value = '';
        } else {
            alert('Please enter a todo item.');
        }
    }

    addButton.addEventListener('click', addTodoItem);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            addTodoItem();
        }
    });

    hideButton.addEventListener('click', () => {
        const completedItems = list.querySelectorAll('.completed');
        completedItems.forEach(item => { item.style.display = 'none'; });
    });

    showButton.addEventListener('click', () => {
        const allItems = list.querySelectorAll('li');
        allItems.forEach(item => { item.style.display = ''; });
    });

    displayItem('character');
    displayItem('beanbag');
    updateCounter();
});