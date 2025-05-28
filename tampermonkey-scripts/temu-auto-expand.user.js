// ==UserScript==
// @name         Temu Auto Expand
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  自动展开Temu产品页面的"See all details"和"See more"按钮，可调节滚动次数
// @author       YourName
// @match        https://www.temu.com/*
// @icon         https://www.google.com/s2/favicons?domain=temu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 配置参数
    const config = {
        scrollCycles: 2, // 滚动来回次数，可调节
        scrollDuration: 2000, // 单程滚动时间(毫秒)
        pauseDuration: 500 // 滚动间停顿时间(毫秒)
    };

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

    // 平滑滚动控制
    function startAutoScroll() {
        const exploreSection = document.querySelector('h2.MgLdDewB');
        if (!exploreSection) {
            console.log('未找到"Explore your interests"元素');
            return;
        }

        const targetPos = exploreSection.getBoundingClientRect().top + window.pageYOffset;
        let cyclesCompleted = 0;

        function scrollDown() {
            window.scrollTo({
                top: targetPos,
                behavior: 'smooth'
            });
            console.log(`向下滚动到目标区域 (${cyclesCompleted + 1}/${config.scrollCycles})`);

            setTimeout(() => {
                scrollUp();
            }, config.scrollDuration + config.pauseDuration);
        }

        function scrollUp() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log(`向上滚动回顶端 (${cyclesCompleted + 1}/${config.scrollCycles})`);

            cyclesCompleted++;
            if (cyclesCompleted < config.scrollCycles) {
                setTimeout(() => {
                    scrollDown();
                }, config.scrollDuration + config.pauseDuration);
            } else {
                console.log('滚动完成，最终停留在顶部');
            }
        }

        scrollDown();
    }

    // 立即执行点击操作
    clickSeeAllDetails();
    clickSeeMore();

    // 延迟启动滚动以确保页面稳定
    setTimeout(startAutoScroll, 1000);

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
