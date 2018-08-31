$('.text-convert').click(e => {
  e.preventDefault();
  dictionaryApi.get('').then(response => {
    let text = $('textarea[name=received-text]').val();
    for (let i = 0; i < response.data.length; i++) {
      var originalWord = response.data[i].originalWord;
      var convertedWord = response.data[i].convertedWord;
      var regex = new RegExp(originalWord, 'gi');
      var convertedText = text.replace(regex, convertedWord);
      text = convertedText;
    }
    $('.converted-header').html('Fixed it!');
    $('.converted-text').html(text);
  });
});
