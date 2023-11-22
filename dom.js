// document.title = 122
var headerTitle = document.getElementById("header-title");
var header = document.getElementById('main-header');
var items = document.getElementsByClassName('list-group-item');
var addItemHeading = document.querySelector('#main h2.title');
var thirdItem = document.getElementsByClassName('list-group-item')[2];
var allItems = document.getElementsByClassName('list-group-item');

headerTitle.innerHTML = '<h2>This is my Item Lister</h2>';
header.style.borderBottom = 'solid 4px #000';

addItemHeading.style.fontWeight = 'bold';
addItemHeading.style.color = 'green';
thirdItem.style.backgroundColor = 'green';

// Make all the elements in the list have bold font
for (var i = 0; i < allItems.length; i++) {
  allItems[i].style.fontWeight = 'bold';
}
