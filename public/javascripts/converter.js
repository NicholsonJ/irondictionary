$('.text-convert').click(e => {
  e.preventDefault();
  //console.log($('textarea[name=received-text]').val());
  let text = $('textarea[name=received-text]').val();
  console.log(text);
  let entries = dictionaryApi.get('');
  for (i = 0; i < text.length; i++) {
    // if (textArray[i] === dictionaryApi)
  }
});
