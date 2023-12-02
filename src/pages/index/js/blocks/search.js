export function search() {
    const search = document.querySelectorAll(".header__btn-search");

    const searchForm = document.querySelectorAll(".header__search-form");
    const searchForm1 = document.querySelector("#form_1");
    const searchForm2 = document.querySelector("#form_1");
    
    const btns = document.querySelectorAll(".header__btns");
    const searchInput = document.querySelectorAll(".header__search-input");
    const searchClose = document.querySelectorAll(".header__search-close");

    search.forEach(elemSearch => {
        elemSearch.addEventListener("click", () => {
            searchForm1.classList.add("header__search-form_active");
            btns.forEach(btn => {
                btn.classList.add("header__btns_active"); 
            });
        });
    });

    searchClose.forEach(elemClose => {
        elemClose.addEventListener("click", () => {
            searchForm1.classList.remove("header__search-form_active")
            btns.forEach(btn => {
                btn.classList.remove("header__btns_active"); 
            });
        });
    });

}