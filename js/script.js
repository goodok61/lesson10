'use strict';
/*
Используя только файл скрипта (html руками не трогать) выполнить такие действия:

1)Восстановить порядок книг.
2)Заменить картинку заднего фона на другую из папки image
3)Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
4)Удалить рекламу со страницы
5)Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
6)в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
*/
let collectBook = document.querySelectorAll('.books'),
  elemBook = document.querySelectorAll('.book'),
  bodyImage = document.body,
  TitleBook = document.querySelectorAll('a'),
  addBlock = document.querySelector('.adv'),
  chaptersList = document.querySelectorAll('ul'),
  chapters = document.querySelectorAll('li'),
  newChapter = document.createElement('li');

//1
collectBook[0].insertBefore(elemBook[1], elemBook[0]);
collectBook[0].insertBefore(elemBook[4], elemBook[2]);
collectBook[0].insertBefore(elemBook[2], null);

//2
bodyImage.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');

//3
TitleBook[4].textContent = "Книга 3. this и Прототипы Объектов";

//4
addBlock.parentNode.removeChild(addBlock);

//5
chaptersList[0].insertBefore(chapters[2], chapters[10]);
chaptersList[0].insertBefore(chapters[7], chapters[9]);
chaptersList[0].insertBefore(chapters[6], chapters[4]);
chaptersList[0].insertBefore(chapters[8], chapters[4]);

chaptersList[5].insertBefore(chapters[55], chapters[48]);
chaptersList[5].insertBefore(chapters[48], chapters[52]);
chaptersList[5].insertBefore(chapters[51], chapters[54]);

//6
newChapter.textContent = 'Глава 8: За пределами ES6';
chaptersList[2].appendChild(newChapter);
chaptersList[2].insertBefore(chapters[26], null);
console.log(chaptersList[5]);
console.log(chapters);