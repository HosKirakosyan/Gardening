
const search_btn = document.querySelector('.search_btn')
const search = document.querySelector('.search')
const mobile_search_btn = document.querySelector('.mobile_search_btn')
const search_mobile = document.querySelector('.search_mobile')
const menu_burger = document.querySelector('.menu_burger')
const mobile_nav = document.querySelector('.mobile_nav')
const header_mobile = document.querySelector('.header_mobile')
const header_bottom = document.querySelector('.header_bottom')
const dropdown_btn = document.querySelector('.dropdown_btn')
const mobile_dropdown = document.querySelector('.mobile_dropdown')
const mobile_dropdown_icon = document.querySelector('.mobile_dropdown_icon')
const dropdown_txt = document.querySelector('.dropdown_txt')




search_btn.addEventListener('click',function () {
    search_btn.classList.toggle('is-active');
    search.classList.toggle('is-active');
});
mobile_search_btn.addEventListener('click',function () {
    mobile_search_btn.classList.toggle('is-active');
    search_mobile.classList.toggle('is-active');
});
menu_burger.addEventListener('click',function () {
    mobile_nav.classList.toggle('is-active');

});
dropdown_btn.addEventListener('click',function () {
    mobile_dropdown.classList.toggle('is-active');
    mobile_dropdown_icon.classList.toggle('is-active');
    dropdown_txt.classList.toggle('is-active');
});

window.onscroll = function(){
    if(window.scrollY > 300){
        header_mobile.classList.add("sticky")
        header_bottom.classList.add("sticky")
    }else{
        header_mobile.classList.remove("sticky")
        header_bottom.classList.remove("sticky")
    }
}

