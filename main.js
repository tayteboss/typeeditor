const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea")
const originalText = outputTag.value

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const fontsizeTag = document.querySelector("span")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector(".lineheight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector(".fontweight-output")

const colorTags = document.querySelectorAll(".colors div")


// when type in sentence tag, update the output tag
sentenceTag.addEventListener("keyup", function() {
    if (this.value) {
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

// when type in output tag, update the sentence tag
outputTag.addEventListener("keyup", function() {
    sentenceTag.value = this.value
})

// when typesize slider is updated change the text next to it and update outputtag font size
typesizeTag.addEventListener("input", function() {
    outputTag.style.fontSize = this.value + "px"
    fontsizeTag.innerHTML = this.value + "px"
    
})

lineheightTag.addEventListener("input", function() {
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})

// when italic checkbox is checked update to italic
italicTag.addEventListener("change", function() {
    if(this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})

// when change select typeface update fontfamily
typefaceTag.addEventListener("input", function() {
    outputTag.style.fontFamily = this.value
})

fontweightTag.addEventListener("input", function() {
    outputTag.style.fontWeight = this.value
    fontweightOutput.innerHTML = this.value
})

// go through all color tags
// when clicked one of them, change the bg color

colorTags.forEach(tag => {
    tag.addEventListener("click", function() {
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color


        colorTags.forEach(tag => {
            tag.classList.remove("selected")
        })

        this.classList.add("selected")
    })
})