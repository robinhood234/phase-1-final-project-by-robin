const accessKey = '3FA5NpfDVoOKPcZs5Sq4FySILoiD1QLPZ20zurby8gk';

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');
const refreshBtn = document.getElementById('refresh');

let keyWord = '';
let page = 1;

async function ImageSearch () {
  keyWord = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;




  results.map((result) =>{
    const image = document.createElement('img');
    image.src = result.urls.small;

    const imageLink = document.createElement('a'); 
    imageLink.href = result.links.html;
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);

    imageLink.target = '_blank';
    showMoreBtn.style.display = 'block';
    refreshBtn.style.display = 'block';
      })
    }

    searchForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      page=1
      ImageSearch();
    });