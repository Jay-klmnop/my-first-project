document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 라이브러리 및 전역 변수 ---
    const a_library = {
        cat: { name: 'Cat', path: 'assets/p_lofi/cat_purple_oiia.gif', nativeSize: 32 },
        desk_cat: { name: 'Desk Cat', path: 'assets/p_lofi/cat_purple_l.gif' },
        final_cat: { name: 'Final Cat', path: 'assets/p_lofi/cat_final.gif' },
        background: { name: 'Background', path: 'assets/p_lofi/background.png' },
        window: { name: 'Sunset Window', path: 'assets/p_lofi/window_sunset.png' },
        curtain: { name: 'Curtain', path: 'assets/p_lofi/curtain_purple_l.gif' },
        turntable: { name: 'Turntable', path: 'assets/p_lofi/turntable.png' },
        plants: { name: 'Potted Plants', path: 'assets/p_lofi/potted_plants.png' },
        coffee_mug: { name: 'Coffee Mug', path: 'assets/p_lofi/coffee_cup.gif' },
        mp3: { name: 'MP3', path: 'assets/p_lofi/mp3.png' },
    };
    let todos = [];
    const rewardList = ['background', 'window', 'curtain', 'turntable', 'plants', 'coffee_mug', 'mp3'];
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

    function saveTodos() {
        localStorage.setItem('todo-app-data', JSON.stringify(todos));
    }

    function loadTodos() {
        const savedData = localStorage.getItem('todo-app-data');
        if (savedData) {
            todos = JSON.parse(savedData);
        }
    }

    function render() {
        const list = document.querySelector('#todoList');
        list.innerHTML = '';
        todos.forEach((todo, index) => {
            const listItem = document.createElement('li');
            const textSpan = document.createElement('span');
            textSpan.textContent = todo.text;
            listItem.appendChild(textSpan);
            if (todo.completed) {
                listItem.classList.add('completed');
            }
            listItem.dataset.index = index;
            listItem.addEventListener('click', toggleTodo);
            list.appendChild(listItem);
        });
        updateCounter();
        checkAndGiveReward();
    }

    function addTodo(text) {
        if (text) {
            todos.push({ text: text, completed: false });
            render();
            saveTodos();
        }
    }

    function toggleTodo(event) {
        const index = event.target.dataset.index;
        todos[index].completed = !todos[index].completed;
        render();
        saveTodos();
    }

    addButton.addEventListener('click', () => {
        const todoText = input.value.trim();
        addTodo(todoText);
        input.value = '';
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const todoText = input.value.trim();
            addTodo(todoText);
            input.value = '';
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

    function init() {
        const savedData = localStorage.getItem('my-todos');
        if (savedData) {
            todos = JSON.parse(savedData);
        }
        render();
    }

    init();

    displayItem('character');
    updateCounter();
    loadTodos();
    render();
});