const form = document.querySelector('form')

const addElements = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const spellEffect = f.spellEffect.value
  const spellsDiv = document.querySelector('#spells')

  var linode = document.createElement("LI");
  var textnode = document.createTextNode(spellName + " :  " + spellEffect);
  linode.appendChild(textnode);
  spellsDiv.appendChild(linode);

  f.reset()
}

form.addEventListener('submit', addElements)
