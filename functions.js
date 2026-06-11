//2
function list (clients) {
    return clients.map(clients => `
    <li class="list-group-item d-flex justify-content-between" data-index="${clients.index}
        ${clients.name}
        <strong>${clients.balance}</strong>
    </li>`).join('');
}

//3
function order (clients, property) {
    return clients.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1
        } else if (a[property] > b[property]) {
            return 1
        } else {
            return 0
        }
    })
}

//4
function total (clients) {
    return clients.reduce((sum, client) => {
        return sum + client.balance
    }, 0)
}

//5
function info (clients, index) {
    return clients.find((client) => client.index === index)
}

//6
function search (clients) {
    return clients.filter()
}