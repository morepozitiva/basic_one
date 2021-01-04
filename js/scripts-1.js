(function(){
  'use strict';
  let age = prompt('Сколько Вам лет?', 0);
    if (age >= 0 && age < 12)
    {
        document.write('<p>Вы еще ребенок!)</p>');
    }
    else if (age >= 12 && age < 18)
    {
        document.write('<p>Вы подросток</p>');
    }
    else if (age >= 18 && age < 60)
    {
        document.write('<p>Вы взрослый))</p>)');
    }
    else if (age >= 60)
    {
        document.write('<p>Вы пенсионер</p>');
    }
  
})();