const articles = [];
const blogSection = document.getElementById('blog-section');
const blogItem = document.getElementById('blog-item');
const addBlogForm = document.getElementById('add-blog-form');
const addBlogTitle = document.getElementById('add-blog-title');
const addBlogBody = document.getElementById('add-blog-body');

// Fetch Articles from API
const fetchArticles = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        return new Error(error);
    }
};

// Generate Blog Element from Sample Article Data and return it as a clone of the original blog item element with the data added to it as well as the event listener for the delete button
const generateBlogElement = (article) => {
    const blogItemClone = blogItem.cloneNode(true);
    blogItemClone.id = `${article.id}`;
    blogItemClone.children[1].children[0].textContent = article.title;
    blogItemClone.children[1].children[1].textContent = article.body;
    blogItemClone.children[1].children[2].href = `article.html?id=${article.id}`;
    blogItemClone.children[1].children[3].id = `${article.id}`;
    blogItemClone.children[1].children[3].addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.id;
        const article = document.getElementById(id);
        article.remove();
        alert('Article Deleted');
    });
    return blogItemClone
};

// Generate all blog elements from the articles fetched from the API
const generateAllBlogElements = async () => {
    const posts = await fetchArticles();
    posts.map((post) => {
        const data = generateBlogElement(post);
        articles.push(data);
    });
};

// Render all articles to the DOM by appending them to the blog section
const renderArticles = () => {
    articles.map((article) => {
        blogSection.appendChild(article);
    });
};

// Add Article to the DOM and the articles array when the form is submitted and alert the user that the article was added
addBlogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const article = {
        id: articles.length,
        title: addBlogTitle.value,
        body: addBlogBody.value
    };
    const data = generateBlogElement(article);
    articles.push(data);
    blogSection.appendChild(data);
    alert('Article Added');
    addBlogTitle.value = '';
    addBlogBody.value = '';
});

// Initialize the app by generating all blog elements and rendering them to the DOM
const init = async () => {
    await generateAllBlogElements();
    if (articles.length <= 0) {
        alert('No Articles Found');
    } else {
        renderArticles();
    }
}

init();