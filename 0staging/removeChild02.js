// Remove the third child of an element with the ID "wrapper".

const wrapper = document.querySelector('#wrapper')
wrapper.removeChild(wrapper.querySelector(':nth-child(3)'))
