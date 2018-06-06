const form = document.querySelector('form')

const buildli = function() {
  return document.createElement("LI")
}

const buildspells = function(f) {
  const spellName = f.spellName.value
  const spells = document.querySelector('#spells')
  return document.createTextNode(spellName)
}

const buildeffect = function(f) {
  const spellEffect = f.spellEffect.value
  const effect = document.querySelector('#effect')
  return document.createTextNode(spellEffect)
}


const addElements = function(ev) {
  ev.preventDefault()
  const f = ev.target

  var linode1 = buildli()
  var textnode1 = buildspells(f)
  linode1.appendChild(textnode1)
  spells.appendChild(linode1)

  var linode2 = buildli()
  var textnode2 = buildeffect(f)
  linode2.appendChild(textnode2)
  effect.appendChild(textnode2)

  f.reset()
}

form.addEventListener('submit', addElements)
