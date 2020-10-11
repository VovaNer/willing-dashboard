const screenCategory = document.querySelector('.screen__option-category'),
    screenFilter = document.querySelector('.screen__option-filter'),
    optionSelectCategory = document.querySelector('.option__select-category'),
    optionSelectFilter = document.querySelector('.option__select-filter'),
    categoryDropdown = document.querySelector('.option__dropdown-category'),
    filterDropdown = document.querySelector('.option__dropdown-filter');


screenCategory.addEventListener('click', (event) => {
    if (screenCategory.contains(event.target)) {
        if (!optionSelectCategory.classList.contains('option__select-active')) {
            optionSelectCategory.style.borderRadius = '15px 15px 0 0';
            optionSelectCategory.classList.add('option__select-active');
            categoryDropdown.classList.add('option__select-active');
            categoryDropdown.style.opacity = '1';
        } else {
            optionSelectCategory.style.borderRadius = '15px';
            optionSelectCategory.classList.remove('option__select-active');
            categoryDropdown.classList.remove('option__select-active');
            categoryDropdown.style.opacity = '0';
        }
    }    
});

screenFilter.addEventListener('click', (event) => {
    console.log('yes2');
    if (screenFilter.contains(event.target)) {
        if (!optionSelectFilter.classList.contains('option__select-active')) {
            optionSelectFilter.style.borderRadius = '15px 15px 0 0';
            optionSelectFilter.classList.add('option__select-active');
            filterDropdown.classList.add('option__select-active');
            filterDropdown.style.opacity = '1';
        } else {
            optionSelectFilter.style.borderRadius = '15px';
            optionSelectFilter.classList.remove('option__select-active');
            filterDropdown.classList.remove('option__select-active');
            filterDropdown.style.opacity = '0';
        }
    }    
});