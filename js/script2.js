class BeforeAfter1 {
    constructor(enteryObject) {

        const beforeAfterContainer1 = document.querySelector(enteryObject.id);
        const before1 = beforeAfterContainer1.querySelector('.bal-before1');
        const beforeText1 = beforeAfterContainer1.querySelector('.bal-beforePosition1');
        const afterText1 = beforeAfterContainer1.querySelector('.bal-afterPosition1');
        const handle1 = beforeAfterContainer1.querySelector('.bal-handle1');
        var widthChange = 0;

        beforeAfterContainer1.querySelector('.bal-before-inset1').setAttribute("style", "width: " + beforeAfterContainer1.offsetWidth + "px;")
        window.onresize = function () {
            beforeAfterContainer1.querySelector('.bal-before-inset1').setAttribute("style", "width: " + beforeAfterContainer1.offsetWidth + "px;")
        }
        before1.setAttribute('style', "width: 50%;");
        handle1.setAttribute('style', "left: 50%;");

        //touch screen event listener
        beforeAfterContainer1.addEventListener("touchstart", (e) => {

            beforeAfterContainer1.addEventListener("touchmove", (e2) => {
                let containerWidth = beforeAfterContainer1.offsetWidth;
                let currentPoint = e2.changedTouches[0].clientX;

                let startOfDiv = beforeAfterContainer1.offsetLeft;

                let modifiedCurrentPoint = currentPoint - startOfDiv;

                if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < beforeAfterContainer1.offsetWidth - 10) {
                    let newWidth = modifiedCurrentPoint * 100 / containerWidth;

                    before1.setAttribute('style', "width:" + newWidth + "%;");
                    afterText1.setAttribute('style', "z-index: 1;");
                    handle.setAttribute('style', "left:" + newWidth + "%;");
                }
            });
        });

        //mouse move event listener
        beforeAfterContainer1.addEventListener('mousemove', (e) => {
            let containerWidth = beforeAfterContainer1.offsetWidth;
            widthChange = e.offsetX;
            let newWidth = widthChange * 100 / containerWidth;

            if (e.offsetX > 10 && e.offsetX < beforeAfterContainer1.offsetWidth - 10) {
                before1.setAttribute('style', "width:" + newWidth + "%;");
                afterText1.setAttribute('style', "z-index:" + "1;");
                handle1.setAttribute('style', "left:" + newWidth + "%;");
            }
        })

    }
}