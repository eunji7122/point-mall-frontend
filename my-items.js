const userID = 1

$(document).ready(() => {
    indexItems();
    getUser();
});


function getUser() {
    $.get('http://localhost:8000/users/' + userID + '/')
        .done((user) => {
            $('#container > h2').text('잔고: ' + user.point);
        });
}

function indexItems() {
    $.get('http://localhost:8000/users/' + userID + '/items/')
        .done((userItems) => {
            for (userItem of userItems) {
                const item = userItem.item;
                const $itemContainer = $(`<div class="item-container" 
            onClick="location.href = '/item-detail.html?id=${item.id}'">
            <img src = http://localhost:8000${item.image} alt = "" >
            <p class="item-title">${item.title}</p>
            <p class="item-price">수량: ${userItem.count} 개</p>
            </div>`);
                const itemListContainer = $('#item-list-container');
                $itemContainer.appendTo(itemListContainer);
            }
        });
}