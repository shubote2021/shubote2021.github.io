// ==UserScript==
// @name         Temu Auto Expand
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  自动展开Temu产品页面的"See all details"和"See more"按钮，并平滑滚动
// @author       YourName
// @match        https://www.temu.com/*
// @icon         https://www.google.com/s2/favicons?domain=temu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 自动点击"See all details"按钮
    function clickSeeAllDetails() {
        const seeAllDetailsBtn = document.querySelector('div._2oF7hNvC div._3xcJKtRB[role="button"]');
        if (seeAllDetailsBtn) {
            seeAllDetailsBtn.click();
            console.log('已点击"See all details"按钮');
        }
    }

    // 自动点击"See more"按钮
    function clickSeeMore() {
        const seeMoreBtn = document.querySelector('div.A0xWLYEC div.NZxx3AXl[role="button"]');
        if (seeMoreBtn) {
            seeMoreBtn.click();
            console.log('已点击"See more"按钮');
        }
    }

    // 平滑滚动到指定元素
    function smoothScrollToElement(element) {
        if (!element) return;
        
        const targetPos = element.getBoundingClientRect().top + window.pageYOffset;
        const startPos = window.pageYOffset;
        const distance = targetPos - startPos;
        const duration = 3000; // 3秒完成滚动
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeProgress = progress < 0.5 
                ? 2 * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 2) / 2; // 缓动函数
            
            window.scrollTo(0, startPos + distance * easeProgress);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }

    // 执行所有操作
    function executeAll() {
        clickSeeAllDetails();
        clickSeeMore();
        
        const exploreSection = document.querySelector('h2.MgLdDewB');
        if (exploreSection) {
            setTimeout(() => {
                smoothScrollToElement(exploreSection);
                console.log('开始平滑滚动到"Explore your interests"区域');
            }, 1000); // 1秒延迟后开始滚动
        }
    }

    // 等待页面加载完成后执行
    if (document.readyState === 'complete') {
        executeAll();
    } else {
        window.addEventListener('load', executeAll);
    }

    // 监听动态加载的内容
    const observer = new MutationObserver(function(mutations) {
        clickSeeAllDetails();
        clickSeeMore();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
