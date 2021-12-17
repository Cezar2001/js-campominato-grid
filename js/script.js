const containerBoxesOne = document.querySelector('.container-box-1');
const containerBoxesTwo = document.querySelector('.container-box-2');
const containerBoxesThree = document.querySelector('.container-box-3');
const buttonOne = document.getElementById('level-1');
const buttonTwo = document.getElementById('level-2');
const buttonThree = document.getElementById('level-3');

function createNewBox(container) {
    const boxCreated = document.createElement('div');
    boxCreated.className = 'box'; 
    container.append(boxCreated);

    boxCreated.addEventListener('click', function() {
        this.classList.toggle('box-blue');
    });
}

// function hideContainerBoxes() {
//     // let hideBoxes = document.hideContainerBoxes('hide');
//     // hideBoxes.className = 'hide';
//     // hide.append(hideBoxes);

//     hideBoxes.addEventListener('click', function() {
//         this.classList.toggle('hide');
//     })
// }

// for (let i = 0; i < 100; i++) {
//     createNewBox(containerBoxes);
// }

buttonOne.addEventListener('click', function() {
    this.classList.toggle('box-grey');

    // this.classList.toggle('hide');
    for (let i = 0; i < 100; i++) {
        createNewBox(containerBoxesOne);
    }
})


buttonTwo.addEventListener('click', function() {
    this.classList.toggle('box-grey');
    for (let i = 0; i < 81; i++) {
        createNewBox(containerBoxesTwo);
    }
})

buttonThree.addEventListener('click', function() {
    this.classList.toggle('box-grey');
    for (let i = 0; i < 49; i++) {
        createNewBox(containerBoxesThree);
    }
})