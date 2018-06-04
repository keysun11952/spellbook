console.log('testing')

const heading1 = document.getElementById("heading1")
const heading2 = document.getElementById("heading2")
const heading3 = document.getElementById("heading3")
const heading4 = document.getElementById("heading4")

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")

const text1 = heading1.textContent
const text2 = heading2.textContent
const text3 = heading3.textContent
const text4 = heading4.textContent

function changeheading1() {
    heading1.textContent = "heading 1 changed"
}

function changeheading2() {
    heading2.textContent = "heading 2 changed"
}

function changeheading3() {
    heading3.textContent = "heading 3 changed"
}

function changeheading4() {
    heading4.textContent = "heading 4 changed"
}

function changeheadings() {
    heading1.textContent = text1
    heading2.textContent = text2
    heading3.textContent = text3
    heading4.textContent = text4
}

function update() {
    const newtext = document.getElementById("input1").value
    alert("change heading 1 to: " + newtext)
    heading1.textContent = newtext
}

button1.onclick = changeheading1
button2.onclick = changeheading2
button3.addEventListener("click", changeheading3)
button3.addEventListener("click", changeheading4)
button4.onclick = changeheadings
button5.onclick = update