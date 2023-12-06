
export const renderHomePage = () => {
    const content = document.querySelector('#content');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const body = document.createElement('div');
    body.classList.add('body');

    const bodyText = document.createElement('p');
    bodyText.textContent = ('"Where Every Dish is a Culinary Masterpiece – Savor the Flavor, Indulge in Excellence, and Revel in Unforgettable Dining Moments."');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const orderButton = document.createElement('button');
    orderButton.textContent = ('Order Now');

    content.appendChild(pageContent);
    pageContent.appendChild(body);
    pageContent.appendChild(buttonContainer);
    body.appendChild(bodyText);
    buttonContainer.appendChild(orderButton);
}
