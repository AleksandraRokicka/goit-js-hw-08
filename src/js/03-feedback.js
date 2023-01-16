import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const formEmail = document.querySelector('input[name=email]');
const formMessage = document.querySelector('textarea[name=message]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

window.addEventListener('load', () => {
  //automatyczne wypelnianie formualrza po wejsciu na stronę(zapamietanie danych). Zapamiętuje NIE WYSŁANE dane, tylko wpisane//
  const prevVal = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localStorage.getItem('feedback-form-state') !== null) {
    formEmail.value = prevVal.email;
    formMessage.value = prevVal.message;
  }
});

form.addEventListener(
  'input', //listener na input, czyli to co wpisuje//
  throttle(() => {
    let someData = {
      email: formEmail.value,
      message: formMessage.value,
    }; //zdarzenie input - po uzupelnieniu formularza, ale NIE WYSLANIU, dane sa zapisane w localstorage i po przeladowaniu strony nadal tam beda - automatycznie sie uzupelnia
    localStorage.setItem('feedback-form-state', JSON.stringify(someData)); //do local storage wrzucamy feedback-form-state i string wpisanych danych//
  }, 500)
);

form.addEventListener('submit', e => {
  //jak klikne submit, to wyczysci sie formularz i localstorage, po przeladowaniu strony bede miec pusty formularz, bo localstorage zostalo wyczyszczone
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state')); //wrzucam na konsolę obiekt wpisanych daych//
  form.reset(); //zresetowanie danych formularza po wysłaniu-submit//
  localStorage.clear(); //wyczyczczenie local storage po wysłaniu-submit//
});
