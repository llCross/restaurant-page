export const clearPage = () => {
    const content = document.querySelector('#content'); 
    const pageContent = document.querySelector('.page-content')
    if (pageContent) {
        content.removeChild(pageContent);
    }
}