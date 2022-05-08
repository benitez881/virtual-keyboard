window.onload = function vKeyboard() {
  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', 'en');
  }
  let lang = localStorage.getItem('language');
  // Create h1
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Virtual Keyboard';
  h1.classList.add('vk');
  document.body.append(h1);
  // Create textarea in div
  const div = document.createElement('div');
  div.classList.add('textarea');
  const textarea = document.createElement('textarea');
  textarea.cols = 90;
  textarea.rows = 15;
  div.append(textarea);
  document.body.append(div);
  // Create keyboard
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.body.append(keyboard);
  const explanation = document.createElement('div');
  explanation.classList.add('explanation');
  explanation.innerHTML =
    'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: ctrl + alt';
  document.body.append(explanation);
  const row1 = [
    ['Backquote', '`', '~', 'ё', 'Ё'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '@', '2', '"'],
    ['Digit3', '3', '#', '3', '№'],
    ['Digit4', '4', '$', '4', ';'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', '^', '6', ':'],
    ['Digit7', '7', '&', '7', '?'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ];
  const row2 = [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'q', 'Q', 'й', 'Й'],
    ['KeyW', 'w', 'W', 'ц', 'Ц'],
    ['KeyE', 'e', 'E', 'у', 'У'],
    ['KeyR', 'r', 'R', 'к', 'К'],
    ['KeyT', 't', 'T', 'е', 'Е'],
    ['KeyY', 'y', 'Y', 'н', 'Н'],
    ['KeyU', 'u', 'U', 'г', 'Г'],
    ['KeyI', 'i', 'I', 'ш', 'Ш'],
    ['KeyO', 'o', 'O', 'щ', 'Щ'],
    ['KeyP', 'p', 'P', 'з', 'З'],
    ['BracketLeft', '[', '{', 'х', 'Х'],
    ['BracketRight', ']', '}', 'ъ', 'Ъ'],
    ['Delete', 'Delete', 'Delete', 'Delete', 'Delete'],
  ];
  const row3 = [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'a', 'A', 'ф', 'Ф'],
    ['KeyS', 's', 'S', 'ы', 'Ы'],
    ['KeyD', 'd', 'D', 'в', 'В'],
    ['KeyF', 'f', 'F', 'а', 'А'],
    ['KeyG', 'g', 'G', 'п', 'П'],
    ['KeyH', 'h', 'H', 'р', 'Р'],
    ['KeyJ', 'j', 'J', 'о', 'О'],
    ['KeyK', 'k', 'K', 'л', 'Л'],
    ['KeyL', 'l', 'L', 'д', 'Д'],
    ['Semicolon', ';', ':', 'ж', 'Ж'],
    ['Quote', "'", '"', 'э', 'Э'],
    ['Backslash', '\\', '|', '\\', '/'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ];
  const row4 = [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'z', 'Z', 'я', 'Я'],
    ['KeyX', 'x', 'X', 'ч', 'Ч'],
    ['KeyC', 'c', 'C', 'с', 'С'],
    ['KeyV', 'v', 'V', 'м', 'М'],
    ['KeyB', 'b', 'B', 'и', 'И'],
    ['KeyN', 'n', 'N', 'т', 'Т'],
    ['KeyM', 'm', 'M', 'ь', 'Ь'],
    ['Comma', ',', '<', 'б', 'Б'],
    ['Period', '.', '>', 'ю', 'Ю'],
    ['Slash', '/', '?', '.', ','],
    ['ArrowUp', '↑', '↑', '↑', '↑'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ];
  const row5 = [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['Win', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['ArrowLeft', '←', '←', '←', '←'],
    ['ArrowDown', '↓', '↓', '↓', '↓'],
    ['ArrowRight', '→', '→', '→', '→'],
  ];
  const row = [];
  for (let i = 0; i < 5; i += 1) {
    row[i] = document.createElement('div');
    row[i].classList.add('row');
    keyboard.append(row[i]);
  }
  class Key {
    constructor(name, engChar, engShiftChar, ruChar, ruShiftChar, place) {
      this.name = name;
      this.place = place;
      this.engCharValue = engChar;
      this.engShiftCharValue = engShiftChar;
      this.ruCharValue = ruChar;
      this.ruShiftCharValue = ruShiftChar;
      this.createKey = () => {
        this.div = document.createElement('div');
        this.div.className = 'key';
        this.div.id = name;
        this.place.append(this.div);
        this.engChar = document.createElement('span');
        this.engChar.innerHTML = this.engCharValue;
        if (lang === 'en') {
          this.engChar.className = 'show';
          this.curSpan = engChar;
        } else {
          this.engChar.className = 'hide';
        }
        this.div.append(this.engChar);
        this.engShiftChar = document.createElement('span');
        this.engShiftChar.innerHTML = this.engShiftCharValue;
        this.engShiftChar.className = 'hide';
        this.div.append(this.engShiftChar);
        this.ruChar = document.createElement('span');
        this.ruChar.innerHTML = this.ruCharValue;
        if (lang === 'ru') {
          this.ruChar.className = 'show';
          this.curSpan = ruChar;
        } else {
          this.ruChar.className = 'hide';
        }
        this.div.append(this.ruChar);
        this.ruShiftChar = document.createElement('span');
        this.ruShiftChar.innerHTML = this.ruShiftCharValue;
        this.ruShiftChar.className = 'hide';
        this.div.append(this.ruShiftChar);
        this.spans = this.div.children;
      };
      this.switchLanguage = () => {
        if (this.engChar.className === 'show') {
          this.engChar.className = 'hide';
          this.ruChar.className = 'show';
          this.curSpan = ruChar;
          localStorage.setItem('language', 'ru');
          lang = 'ru';
        } else if (this.ruChar.className === 'show') {
          this.ruChar.className = 'hide';
          this.engChar.className = 'show';
          this.curSpan = engChar;
          localStorage.setItem('language', 'en');
          lang = 'en';
        } else if (this.engShiftChar.className === 'show') {
          this.engShiftChar.className = 'hide';
          this.ruShiftChar.className = 'show';
          this.curSpan = ruShiftChar;
          localStorage.setItem('language', 'ru');
          lang = 'ru';
        } else if (this.ruShiftChar.className === 'show') {
          this.ruShiftChar.className = 'hide';
          this.engShiftChar.className = 'show';
          this.curSpan = engShiftChar;
          localStorage.setItem('language', 'en');
          lang = 'en';
        }
      };
      this.switchCase = () => {
        if (lang === 'en') {
          if (this.engChar.className === 'show') {
            this.engChar.className = 'hide';
            this.engShiftChar.className = 'show';
            this.curSpan = engShiftChar;
          } else {
            this.engChar.className = 'show';
            this.curSpan = engChar;
            this.engShiftChar.className = 'hide';
          }
        }
        if (lang === 'ru') {
          if (this.ruChar.className === 'show') {
            this.ruChar.className = 'hide';
            this.ruShiftChar.className = 'show';
            this.curSpan = ruShiftChar;
          } else {
            this.ruChar.className = 'show';
            this.curSpan = ruChar;
            this.ruShiftChar.className = 'hide';
          }
        }
      };
    }
  }
  const keys1 = [];
  const keys2 = [];
  const keys3 = [];
  const keys4 = [];
  const keys5 = [];
  const rows = [row1, row2, row3, row4, row5];
  const rowKeys = [keys1, keys2, keys3, keys4, keys5];
  const allKeys = [];
  for (let i = 0; i < 5; i += 1) {
    const keyboardRow = rows[i];
    const key = [...rowKeys[i]];
    for (let j = 0; j < keyboardRow.length; j += 1) {
      key[j] = new Key(...keyboardRow[j], row[i]);
      key[j].createKey();
      allKeys.push(key[j]);
    }
  }
  function typeInTextarea(newText) {
    if (newText === 'Delete') {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const before = text.substring(0, start);
      const after = text.substring(end + 1, text.length);
      textarea.value = before + after;
      textarea.selectionStart = start + newText.length;
      textarea.selectionEnd = start + newText.length;
      textarea.setSelectionRange(start, start);
    } else if (newText === 'Backspace') {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const before = text.substring(0, start - 1);
      const after = text.substring(end, text.length);
      textarea.value = before + after;
      textarea.selectionStart = start + newText.length;
      textarea.selectionEnd = start + newText.length;
      textarea.setSelectionRange(start - 1, start - 1);
    } else {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const before = text.substring(0, start);
      const after = text.substring(end, text.length);
      textarea.value = before + newText + after;
      textarea.selectionStart = start + newText.length;
      textarea.selectionEnd = start + newText.length;
      textarea.focus();
    }
  }
  let shiftDown = false;
  let capsOn = false;
  document.addEventListener('keydown', (e) => {
    allKeys.forEach((x) => {
      const el = x;
      if (e.code === x.name) {
        if (e.code === 'CapsLock') {
          if (!capsOn) {
            el.div.style.background = 'blue';
            el.div.style.transform = 'scale(0.9)';
            capsOn = true;
            for (let i = 13; i < allKeys.length; i += 1) {
              allKeys[i].switchCase();
            }
          } else if (capsOn) {
            el.div.style.background = 'black';
            el.div.style.transform = 'scale(1)';
            capsOn = false;
            for (let i = 13; i < allKeys.length; i += 1) {
              allKeys[i].switchCase();
            }
          }
          return;
        }
        el.div.style.background = 'blue';
        el.div.style.transform = 'scale(0.9)';
        if (e.altKey && (e.metaKey || e.ctrlKey)) {
          allKeys.forEach((item) => {
            item.switchLanguage();
          });
        }
        if (e.code === 'Tab') {
          e.preventDefault();
          typeInTextarea('\t');
        } else if (e.code === 'Enter') {
          e.preventDefault();
          typeInTextarea('\n');
        } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          if (!shiftDown) {
            shiftDown = true;
            allKeys.forEach((item) => {
              item.switchCase();
            });
          }
        } else if (e.code === 'Delete') {
          e.preventDefault();
          typeInTextarea('Delete');
        } else if (e.code === 'Backspace') {
          e.preventDefault();
          typeInTextarea('Backspace');
        } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
          e.preventDefault();
        } else if (e.code === 'AltLeft' || e.code === 'AltRight') {
          e.preventDefault();
        } else {
          e.preventDefault();
          typeInTextarea(x.curSpan);
        }
      }
    });
  });
  document.addEventListener('keyup', (e) => {
    allKeys.forEach((x) => {
      const el = x;
      if (e.code === x.name) {
        if (e.code !== 'CapsLock') {
          el.div.style.background = 'black';
          el.div.style.transform = 'scale(1)';
          if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            shiftDown = false;
            allKeys.forEach((item) => {
              item.switchCase();
            });
          }
        }
      }
    });
  });
  let clickTarget = '';
  document.addEventListener('mousedown', (e) => {
    const event = new Event('keydown');
    event.code = e.target.id;
    clickTarget = e.target.id;
    document.dispatchEvent(event);
  });
  document.addEventListener('mouseup', () => {
    const event = new Event('keyup');
    event.code = clickTarget;
    document.dispatchEvent(event);
  });
};
