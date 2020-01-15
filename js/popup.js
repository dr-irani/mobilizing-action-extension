//Pure JS code with jQuery implementation

document.addEventListener (
  'DOMContentLoaded',
  function () {
    var Button = document.getElementById ('pressme');
    Button.addEventListener ('click', function () {
      alert ('IT works!');
    });
  },
  false
);
