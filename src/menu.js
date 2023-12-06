export const renderMenuPage = () => {
    const content = document.querySelector('#content');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const menuBody = document.createElement('div');
    menuBody.classList.add('menu-body');

    const imageOne = document.createElement('img');
    imageOne.src = './src/assets/cordon-bleu.png';
    const imageTwo = document.createElement('img');
    imageTwo.src = './src/assets/mojos.png';
    const imageThree = document.createElement('img');
    imageThree.src = './src/assets/pizza.png';
    const imageFour = document.createElement('img');
    imageFour.src = './src/assets/bakedmac.png';
    const imageFive = document.createElement('img');
    imageFive.src = './src/assets/sausage.png';
    const imageSix = document.createElement('img');
    imageSix.src = './src/assets/wings.png';

    const foodCardOne = document.createElement('div');
    foodCardOne.classList.add('food-card');
    const foodCardTwo = document.createElement('div');
    foodCardTwo.classList.add('food-card');
    const foodCardThree = document.createElement('div');
    foodCardThree.classList.add('food-card');
    const foodCardFour = document.createElement('div');
    foodCardFour.classList.add('food-card');
    const foodCardFive = document.createElement('div');
    foodCardFive.classList.add('food-card');
    const foodCardSix = document.createElement('div');
    foodCardSix.classList.add('food-card');

    const foodTextOne = document.createElement('p');
    const foodTextTwo = document.createElement('p');
    const foodTextThree = document.createElement('p');
    const foodTextFour = document.createElement('p');
    const foodTextFive = document.createElement('p');
    const foodTextSix = document.createElement('p');

    foodTextOne.textContent = ('Cordon Blue --- $20');
    foodTextTwo.textContent = ('Mojos --- $20');
    foodTextThree.textContent = ('Pizza --- $20');
    foodTextFour.textContent = ('Baked Mac --- $20');
    foodTextFive.textContent = ('Sausage --- $20');
    foodTextSix.textContent = ('Chicken Wings --- $20');


    content.appendChild(pageContent);
    pageContent.appendChild(menuBody);
    menuBody.appendChild(foodCardOne);
    menuBody.appendChild(foodCardTwo);
    menuBody.appendChild(foodCardThree);
    menuBody.appendChild(foodCardFour);
    menuBody.appendChild(foodCardFive);
    menuBody.appendChild(foodCardSix);
    foodCardOne.appendChild(imageOne);
    foodCardTwo.appendChild(imageTwo);
    foodCardThree.appendChild(imageThree);
    foodCardFour.appendChild(imageFour);
    foodCardFive.appendChild(imageFive);
    foodCardSix.appendChild(imageSix);
    foodCardOne.appendChild(foodTextOne);
    foodCardTwo.appendChild(foodTextTwo);
    foodCardThree.appendChild(foodTextThree);
    foodCardFour.appendChild(foodTextFour);
    foodCardFive.appendChild(foodTextFive);
    foodCardSix.appendChild(foodTextSix);
}