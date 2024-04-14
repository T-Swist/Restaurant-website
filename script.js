
const firstSection = document.getElementById("first_section")

const secondSection = document.getElementById("second_section")

const thirdSection = document.getElementById("third_section")

const fourthSection = document.getElementById("forth_section")

const fifthSection = document.getElementById("fifth_section")

const sixthSection = document.getElementById("sixth_section")



function callbackFunction(enteries) {
    console.log(enteries)
}


const options = {}


const observer = new IntersectionObserver(
    callbackFunction,
    options
)

observer.observer(firstSection)
observer.observer(secondSection)
observer.observer(thirdSection)
observer.observer(fourthSection)
observer.observer(fifthSection)
observer.observer(sixthSection)
