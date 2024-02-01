function check(){

  const val = document.getElementById('text-input').value

  if( !val ){ alert( 'Please input a value' )}

  const regex = new RegExp(/[0-9A-Za-z]+/g);

  const cleanedVal = val.match(regex).join('').toLowerCase()

  const pal = cleanedVal === cleanedVal.split('').reverse().join('')

  const result = document.getElementById('result')

  result.innerText = pal ? `${val} is a palindrome.` : `${val} is not a palindrome.`

  result.classList.remove('hide')  
}
