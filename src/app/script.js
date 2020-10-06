function commit_db(){
  const form = document.forms['sentiment_analyser']
const scriptURL = "https://script.google.com/macros/s/AKfycbwUqKeoBErbpt9--odqjQwEZPSGfnc6jf6dHVJ9_OquiUR-ZSk/exec";
form.addEventListener('submit', e => {
    e.preventDefault();  
    fetch(scriptURL);
})
    alert ('Data added to database'); 
}
