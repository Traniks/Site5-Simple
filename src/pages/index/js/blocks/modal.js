export function modal() {
    const modal = document.querySelector(".modal");
    const hamburger = document.querySelector(".header__hamburger");
    const hamburgerClose = document.querySelector(".hamburger-menu__cross");
    const body = document.querySelector("body");
    
    hamburger.addEventListener("click", () => {
        modal.classList.add("modal_active");
        body.style.overflow = "hidden";
    });
    
    hamburgerClose.addEventListener("click", () => {
        modal.classList.remove("modal_active");
        body.style.overflow = "visible";
    });

}