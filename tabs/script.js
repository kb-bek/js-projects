 const tabButtons = document.querySelectorAll('.tablink');


 for (const i in tabButtons) {
    tabButtons[i].addEventListener('click', () => {
        let tabName = tabButtons[i].dataset.id;
        let tabContent = document.getElementById(tabName);

        let allTabContent = document.querySelectorAll('.tabcontent');
        let allTabButtons = document.querySelectorAll('.tablink');
         
        for (let j = 0; j < allTabContent.length; j++) {
            allTabContent[j].style.display = 'none';
        }

        for(let k = 0; k < allTabButtons.length; k++) {
            allTabButtons[k].classList.remove('active');
        }

        console.log(tabContent);
        tabContent.style.display = "block";
        tabButtons[i].classList.add('active');
    })
 }