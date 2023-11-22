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

var secondItem = document.getElementsByClassName('list-group-item')[1];
secondItem.style.backgroundColor = 'green';

// Make the 3rd item invisible
var thirdItem = document.getElementsByClassName('list-group-item')[2];
thirdItem.style.display = 'none';

// Using querySelectorAll, change the font color to green for the 2nd item
var secondItemQS = document.querySelectorAll('#items li')[1];
secondItemQS.style.color = '#006541';

// Choose all odd elements and make their background green using querySelectorAll
var oddItems = document.querySelectorAll('#items li:nth-child(odd)');
for (var i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = 'green';
}
