function setLike(e) {
  if (e.target.tagName == 'svg') {
    e.target.children[0].classList.toggle('active')
  } else if(e.target.tagName == 'path') {
    e.target.classList.toggle('active')
  }
}

function getRandomDate(start, end) {
  let newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  let data = `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
  return data
}



export { getRandomDate, setLike}