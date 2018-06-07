const app = {
  spells: [],

  init: function () {
    const form = document.querySelector('form')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  },

  renderProperty: function (name, value) {
    const el = document.createElement('span')
    el.classList.add(name)
    el.textContent = value
    el.setAttribute('title', value)
    return el
  },

  renderItem: function (spell) {
    // ['name', 'level']
    const properties = Object.keys(spell)

    // collect an array of <span> elements
    const childElements = properties.map((prop) => {
      return this.renderProperty(prop, spell[prop])
    })

    const item = document.createElement('li')
    item.classList.add('spell')

    const button = document.createElement('button')
    button.classList.add('remove')
    button.textContent = 'remove'
    button.title = 'remove'

    // append each <span> to the <li>
    childElements.forEach(function (el) {
      item.appendChild(el)
      item.appendChild(button)
    })

    button.onclick = () => {
      const toRemove = button.parentElement
      toRemove.parentElement.removeChild(toRemove)
      const i = this.spells.indexOf(spell)
      this.spells.splice(i, 1)
    }

    return item
  },

  handleSubmit: function (ev) {
    const f = ev.target

    const spell = {
      name: f.spellName.value,
      level: f.level.value,
    }

    this.spells.push(spell)

    const item = this.renderItem(spell)

    const list = document.querySelector('#spells')
    list.appendChild(item)

    f.reset()
  },
}

app.init()