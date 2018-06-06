const form = document.querySelector('form')

const buildspells = function(f) {
  var spell = document.createElement("span")
  spell.setAttribute("class", "spell")
  const spellName = f.spellName.value
  var textnode = document.createTextNode(spellName)
  spell.appendChild(textnode)
  return spell
}

const buildeffect = function(f) {
  var effect = document.createElement("span")
  effect.setAttribute("class", "effect")
  const spellEffect = f.spellEffect.value
  var textnode = document.createTextNode(spellEffect)
  effect.appendChild(textnode)
  return effect
}

const addElements = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spells = document.querySelector('#spells')

  var linode = document.createElement("li")
  var spell = buildspells(f)
  var effect = buildeffect(f)

  linode.appendChild(spell)
  linode.appendChild(effect)
  spells.appendChild(linode)

  f.reset()
}

form.addEventListener('submit', addElements)