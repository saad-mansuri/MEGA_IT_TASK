$(document).ready(function() {
    console.log('jquery loaded');

    let sidebar = $('.custom-sidebar').width()
    let mainContent = $('.main-content')
    mainContent.css('padding-left', sidebar)

    let searchInputBox = $('.search-box')       
    let searchIcon = $('.search-box__icon')
    let closeIcon = $('.close-icon')
    
    $(searchIcon).on('click', ()=>{
        searchInputBox.addClass('open')
    })
    $(closeIcon).on('click', ()=>{
        searchInputBox.removeClass('open')
    })
});

 