const localStorageKey = 'to-do-list-gn';
function newTask() {
    let input = document.getElementById('input-new-task');
    
    if (!input.value) {
        alert('Digite algo para inserir em sua lista');
    }
    else {
        let values = JSON.parse(localStorage.getItem('to-do-list-gn') || "[]");
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values));
        showValues();
    }
}

function showValues() {
    let values = JSON.parse(localStorage.getItem('to-do-list-gn') || "[]");
    let list = document.getElementById('to-do-list');
    list.innerHTML = '';
    for (let i = 1; i <= values.length; i++) {
        list.innerHTML += `<li>${values[values[i]]['name']}</li>`;
    }
    
}