document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!');
  },
  false
);

let dictionaryApi = axios.create({
  baseURL: 'http://localhost:8000/wordAdjustments'
});

dictionaryApi.get('').then(response => {
  console.log(response.data);
  $('.word-list').html(`<ul></ul>`);
  for (let i = 0; i < response.data.length; i++) {
    createListItem({
      originalWord: response.data[i].originalWord,
      convertedWord: response.data[i].convertedWord,
      id: response.data[i].id
    });
  }
});

$('.create-word').click(e => {
  e.preventDefault();
  let originalWord = $('input[name=originalWord]')
    .val()
    .toLowerCase();
  let convertedWord = $('input[name=convertedWord]').val();

  dictionaryApi
    .post('', {
      originalWord,
      convertedWord
    })
    .then(response => {
      console.log('Word created', response.data);
      createListItem(response.data);
    });
});

function createListItem(word) {
  $('.word-list ul').append(`
    <li>
      ${word.originalWord} => ${word.convertedWord} -
      <button class="delete" data-id="${word.id}" >Delete</button>
    </li>
  `);
  $('.word-list ul button:last').click(function() {
    // let id = $(this).attr('data-id') // Same
    let id = $(this).data('id');
    dictionaryApi.delete('/' + id).then(response => {
      console.log(response.data);
      $(this)
        .parent()
        .remove();
      $(this)
        .parent()
        .css('color', 'red');
    });
  });
}
