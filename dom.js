// document.title = 122
var headerTitle = document.getElementById("header-title");
var header = document.getElementById('main-header');
var items = document.getElementsByClassName('list-group-item');
var addItemHeading = document.querySelector('#main h2.title');

headerTitle.innerHTML = '<h2>This is my Item Lister</h2>';
header.style.borderBottom = 'solid 4px #000';

addItemHeading.style.fontWeight = 'bold';
addItemHeading.style.color = 'green';
