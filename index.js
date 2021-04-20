function createList() {
  var ul = document.createElement('ul');
  ul.setAttribute("id", "list");
	for (var i = 0; i<3; i++)
  {
    var li = document.createElement('li');
    li.innerHTML = "text";
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
  return ul;
};

module.exports = createList;
