const init = () => {
  //Accessing the value via the event object

  // const inputForm = document.querySelector('form');
  // inputForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   e.target.children[1].value;   //Accessing the value via the event object

  // });

  //Accessing input value directly

  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input#searchByID');
    const inputValue = input.value;
    console.log(inputValue);

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener('DOMContentLoaded', init);
