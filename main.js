const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea")
const originalText = outputTag.value

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const fontsizeTag = document.querySelector("span")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector(".lineheight-output")

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