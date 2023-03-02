const menuBtn = document.getElementById('collapseBtnId');
const mobileMenu = document.getElementById('menuId');

menuBtn.onclick = () => {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('open');
    } else {
        mobileMenu.classList.add('active');
        menuBtn.classList.add('open');
    }
}

// slick carousel configuration
$('.members-items').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true            
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1            
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1            
            }
        }
    ]
});