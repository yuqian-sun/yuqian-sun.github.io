document.addEventListener("DOMContentLoaded", function () {
    new fullpage("#fullpage", {
        autoScrolling: true,
        navigation: true,
        fitToSection: true,
        navigationPosition: "right",
        scrollingSpeed: 700,

        anchors: ['about', 'works', 'personalWorks', 'contact'],
        menu: 'header nav ul',
        normalScrollElements: '.hero-details',
        scrollOverflow: true,
        
        // 控制滚动敏感度，防止滚动过快
        touchSensitivity: 10,
        
        // 这个选项可以防止快速滚动跳过页面
        continuousVertical: false
    });

    // 获取英雄区域容器
    const heroWrapper = document.querySelector('.hero-wrapper');
    heroWrapper.addEventListener('mouseenter', function () {
        heroWrapper.classList.add('hovered');
    });
    heroWrapper.addEventListener('mouseleave', function () {
        heroWrapper.classList.remove('hovered');
    });
});



