/** help */

function log(message) {
  console.log(` >  ${message}`)
}



/** app */
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/** our cards */
cards.forEach((card) => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
});

function dragstart() {
  // this = card
  // log('> CARD: Start dragging')
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

  this.classList.add('is-dragging')
}

function drag() {
  // log('> CARD: Is dragging')
}

function dragend() {
  // this = card
  // log('> CARD: Stop drag!')
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('is-dragging')
}

/** place where i will drop the cards */
dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
});

function dragenter() {
  // log('DROPZONE: Enter is zone')
}

function dragover() {
  // this = dropzone
  // log('DROPZONE: over')
  this.classList.add('over')

  // get dragging card  
  const cardBeinDragged = document.querySelector('.is-dragging');

  this.appendChild(cardBeinDragged);
}

function dragleave() {
  // this = dropzone
  // log('DROPZONE: leave')
  this.classList.remove('over')
}

function drop() {
  // log('DROPZONE: dropped')
  this.classList.remove('over')
}
