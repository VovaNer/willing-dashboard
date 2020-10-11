const screenCategory = document.querySelector('.screen__option-category'),
    screenFilter = document.querySelector('.screen__option-filter'),
    optionSelectCategory = document.querySelector('.option__select-category'),
    optionSelectFilter = document.querySelector('.option__select-filter'),
    categoryDropdown = document.querySelector('.option__dropdown-category'),
    filterDropdown = document.querySelector('.option__dropdown-filter'),
    searchBtn = document.querySelector('.screen_controls-search');


document.addEventListener('click', (event) => {
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
    } else if (screenFilter.contains(event.target)) {
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
    } else if (searchBtn.contains(event.target)) {
        if (!searchBtn.classList.contains('search-active')) {
            searchBtn.classList.add('search-active');
        }
    } else {
        console.log(event.target);
        optionSelectCategory.style.borderRadius = '15px';
        optionSelectCategory.classList.remove('option__select-active');
        categoryDropdown.classList.remove('option__select-active');
        categoryDropdown.style.opacity = '0';

        optionSelectFilter.style.borderRadius = '15px';
        optionSelectFilter.classList.remove('option__select-active');
        filterDropdown.classList.remove('option__select-active');
        filterDropdown.style.opacity = '0';

        searchBtn.classList.remove('search-active');
    }   
});

// searchBtn.addEventListener('click', () => {
//     if (!searchBtn.classList.contains('search-active')) {
//         searchBtn.classList.add('search-active');
//     }
// });