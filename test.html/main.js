
const noteInput = document.getElementById('noteInput');
  const addNoteButton = document.querySelector('.add-note');
  const noteList = document.getElementById('noteList');
  const levelButtons = document.querySelectorAll('.level-selector button');
  let selectedLevel = '';

const toggleLevel = document.querySelector("#toggle-level"); 
const levelOptions = document.querySelector(".level-options"); 
const levelBtn = document.querySelector(".level-btn"); 

const toggletick = document.querySelector("#toggle-tick"); 
const tickOptions = document.querySelector(".tick-options"); 
const tickBtn = document.querySelector(".tick-btn"); 

const toggleCustoms = document.querySelector("#toggle-customs"); 
const customsOptions = document.querySelector(".customs-options"); 
const customsBtn = document.querySelector(".customs-btn"); 


const Svgstar=
`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.79 3.09998C11.29 2.09998 12.71 2.09998 13.21 3.09998L15.57 7.87998L20.84 8.64998C21.94 8.80998 22.39 10.17 21.59 10.95L17.77 14.67L18.67 19.92C18.712 20.1682 18.6838 20.4232 18.5886 20.6562C18.4933 20.8892 18.3348 21.091 18.131 21.2387C17.9271 21.3864 17.686 21.4741 17.4349 21.492C17.1838 21.5099 16.9327 21.4573 16.71 21.34L12 18.86L7.27996 21.34C7.05722 21.4573 6.80611 21.5099 6.55501 21.492C6.30391 21.4741 6.06282 21.3864 5.85896 21.2387C5.6551 21.091 5.4966 20.8892 5.40136 20.6562C5.30611 20.4232 5.27792 20.1682 5.31996 19.92L6.21996 14.67L2.40996 10.95C1.60996 10.17 2.04996 8.80998 3.15996 8.64998L8.42996 7.87998L10.79 3.09998Z" fill="#007BFF"/>
</svg>
`;
const svgStar=
`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.79 3.09998C11.29 2.09998 12.71 2.09998 13.21 3.09998L15.57 7.87998L20.84 8.64998C21.94 8.80998 22.39 10.17 21.59 10.95L17.77 14.67L18.67 19.92C18.712 20.1682 18.6838 20.4232 18.5886 20.6562C18.4933 20.8892 18.3348 21.091 18.131 21.2387C17.9271 21.3864 17.686 21.4741 17.4349 21.492C17.1838 21.5099 16.9327 21.4573 16.71 21.34L12 18.86L7.27996 21.34C7.05722 21.4573 6.80611 21.5099 6.55501 21.492C6.30391 21.4741 6.06282 21.3864 5.85896 21.2387C5.6551 21.091 5.4966 20.8892 5.40136 20.6562C5.30611 20.4232 5.27792 20.1682 5.31996 19.92L6.21996 14.67L2.40996 10.95C1.60996 10.17 2.04996 8.80998 3.15996 8.64998L8.42996 7.87998L10.79 3.09998ZM11.99 4.03998L9.74996 8.59998C9.54996 8.99998 9.16996 9.27998 8.72996 9.33998L3.67996 10.08L7.33996 13.64C7.65996 13.94 7.79996 14.4 7.72996 14.84L6.85996 19.86L11.38 17.49C11.78 17.29 12.24 17.29 12.64 17.49L17.15 19.86L16.29 14.83C16.22 14.4 16.36 13.95 16.68 13.63L20.33 10.08L15.28 9.33998C15.0644 9.30737 14.8599 9.22302 14.684 9.09415C14.5081 8.96528 14.366 8.79572 14.27 8.59998L12 4.03998H11.99Z" fill="#007BFF"/>
</svg>

`;

  levelButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedLevel = button.className;
      levelButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
    });
  });

  
  addNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    
    if (noteText && selectedLevel) {
      
    
      const noteItem = document.createElement('div');
      noteItem.classList.add('note-item', selectedLevel);

      const noteContent = document.createElement('span');
      noteContent.classList.add('note-text');
      noteContent.textContent = noteText;
      const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        noteContent.style.textDecoration = 'line-through'; // Gạch ngang nếu được chọn
      } else {
        noteContent.style.textDecoration = 'none'; // Bỏ gạch ngang nếu bỏ chọn
      }
      
    });
       noteItem.appendChild(checkbox);
      noteItem.appendChild(noteContent);
     
      
      const noteStar = document.createElement('span');
noteStar.classList.add('task-star');
noteStar.innerHTML = svgStar; 
let isDefault= true;

noteStar.addEventListener('click', () => {
  console.log("Note Star Clicked!"); 
  if (isDefault) {
    noteStar.innerHTML = svgStar; 
  } else {
    noteStar.innerHTML = Svgstar; 
  }
  isDefault =!isDefault;
});
     
       
      
      // Thêm nội dung vào ghi chú
      noteItem.appendChild(checkbox);
      noteItem.appendChild(noteContent);
      noteItem.appendChild(noteStar);
      
      // Thêm ghi chú vào danh sách
      noteList.appendChild(noteItem);
      
      
      noteInput.value = '';
      selectedLevel = ''; 
      levelButtons.forEach(b => b.classList.remove('active')); 
    }
  });
  

toggleLevel.addEventListener("change", () => {
  if (toggleLevel.checked) {
    levelOptions.style.display = "block"; 
  } else {
    levelOptions.style.display = "none"; 
  }
});


document.addEventListener("click", (event) => {
  const levelContainer = document.querySelector(".level"); 
  if (!levelContainer.contains(event.target)) { 
    toggleLevel.checked = false; 
    levelOptions.style.display = "none"; 
  }
});


document.querySelectorAll(".level-options button").forEach((button) => {
  button.addEventListener("click", () => {
    
    const selectedText = button.textContent.trim();

    
    levelBtn.querySelector("svg").nextSibling.textContent = ` ${selectedText} `;

    
    toggleLevel.checked = false;
    levelOptions.style.display = "none";
  });
});




toggletick.addEventListener("change", () => {
  if (toggletick.checked) {
    tickOptions.style.display = "block"; 
} else{
    tickOptions.style.display = "none"; 
  }
});


document.addEventListener("click", (event) => {
  const tickContainer = document.querySelector(".tick"); 
  if (!tickContainer.contains(event.target)) { 
    toggletick.checked = false; 
    tickOptions.style.display = "none";
  }
});


document.querySelectorAll(".tick-options button").forEach((button) => {
  button.addEventListener("click", () => {

    const selectedText = button.textContent.trim();

    tickBtn.querySelector("svg").nextSibling.textContent = ` ${selectedText} `;

   
    toggletick.checked = false;
    tickOptions.style.display = "none";
  });
});


toggleCustoms.addEventListener("change", () => {
  if (toggleCustoms.checked) {
    customsOptions.style.display = "block"; 
  } else {
    customsOptions.style.display = "none"; 
  }
});


document.addEventListener("click", (event) => {
  const levelContainer = document.querySelector(".customs"); 
  if (!levelContainer.contains(event.target)) { 
    toggleCustoms.checked = false; 
    customsOptions.style.display = "none"; 
  }
});


document.querySelectorAll(".customs-options button").forEach((button) => {
  button.addEventListener("click", () => {
    
    const selectedText = button.textContent.trim();

    
    customsBtn.querySelector("svg").nextSibling.textContent = ` ${selectedText} `;

    
    toggleCustoms.checked = false;
    customsOptions.style.display = "none";
  });
});

function sortNotesByLevel() {
  const notes = Array.from(noteList.children);
  const levelOrder = ['DE', 'BT', 'KHO'];

  notes.sort((a, b) => {
    const levelA = a.classList.contains('DE') ? 'DE' : a.classList.contains('BT') ? 'BT' : 'KHO';
    const levelB = b.classList.contains('DE') ? 'DE' : b.classList.contains('BT') ? 'BT' : 'KHO';

    return levelOrder.indexOf(levelA) - levelOrder.indexOf(levelB);
  });

  notes.forEach(note => noteList.appendChild(note));
}

document.querySelector('.sort-level').addEventListener('click', () => {
  sortNotesByLevel();
});

toggleLevel.addEventListener("change", () => {
  if (toggleLevel.checked) {
    levelOptions.style.display = "block"; 
  } else {
    levelOptions.style.display = "none"; 
  }
});

document.addEventListener("click", (event) => {
  const levelContainer = document.querySelector(".level"); 
  if (!levelContainer.contains(event.target)) { 
    toggleLevel.checked = false; 
    levelOptions.style.display = "none"; 
  }
});

document.querySelectorAll(".level-options button").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedText = button.textContent.trim();
    levelBtn.querySelector("svg").nextSibling.textContent = ` ${selectedText} `;
    toggleLevel.checked = false;
    levelOptions.style.display = "none";
  });
});