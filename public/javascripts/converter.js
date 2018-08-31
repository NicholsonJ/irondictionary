$('.text-convert').click(e => {
  e.preventDefault();
  //console.log($('textarea[name=received-text]').val());
  dictionaryApi.get('').then(response => {
    let text = $('textarea[name=received-text]').val();
    for (let i = 0; i < response.data.length; i++) {
      var originalWord = response.data[i].originalWord;
      var convertedWord = response.data[i].convertedWord;
      var convertedText = text.replace(originalWord, convertedWord);
      text = convertedText;
    }
    console.log('new text:', text);
    $('.converted-header').html('Fixed it!');
    $('.converted-text').html(text);
  });
});
