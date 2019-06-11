$(function () {
    let _birthday = window.birthday;
    _birthday.page = 0;
    let music = new MusicPanel();

    let notyf = new Notyf()
    let notyf1 = new Notyf({
        delay: 4000
    })

    let instanceName, instance, name, module;
    instanceModule();
    notyf1.confirm('由于网络原因，初始加载时各个页面的图片都无法加载完毕，会出现空白情况，可以多滑动几次，让浏览器将图片资源都加载缓存出来后，将有更好的观赏体验！')

    $(this).on('keydown', (e) => {
        if (e.keyCode === 38 && module.getView()) { // 上页
            if (_birthday.page > 0) {
                module.getView().remove();
                module.timer && clearInterval(module.timer);
                _birthday.page -= 1;
                instanceModule();
            } else {
                notyf.alert('已是首页');
            }
        } else if (e.keyCode === 40 && module.getView()) { // 下页
            if (_birthday.page < _birthday.config.panel.length - 1) {
                module.getView().remove();
                module.timer && clearInterval(module.timer);
                _birthday.page += 1;
                instanceModule();
            } else {
                notyf.alert('目前为v1.0.0版本展示内容，敬请期待！');
            }
        }
    });

    let startX, startY, X, Y, moveEndX, moveEndY;
    $(this).on('touchstart', (e) => {
        // console.log(e)
        startX = e.originalEvent.changedTouches[0].pageX,
            startY = e.originalEvent.changedTouches[0].pageY;
    })
    $(this).on('touchend', (e) => {
        moveEndX = e.originalEvent.changedTouches[0].pageX,
            moveEndY = e.originalEvent.changedTouches[0].pageY,
            X = moveEndX - startX,
            Y = moveEndY - startY;
        //下滑
        if (Y > 0 && module.getView()) {
            if (_birthday.page > 0) {
                module.getView().remove();
                module.timer && clearInterval(module.timer);
                _birthday.page -= 1;
                instanceModule();
            } else {
                notyf.alert('已是首页');
            }
        }
        //上滑
        else if (Y < 0 && module.getView()) {
            if (_birthday.page < _birthday.config.panel.length - 1) {
                module.getView().remove();
                module.timer && clearInterval(module.timer);
                _birthday.page += 1;
                instanceModule();
            } else {
                notyf.alert('目前为v1.0.0版本展示内容，敬请期待！');
            }
        }
    })

    function instanceModule() {
        instanceName = _birthday.config.panel[_birthday.page];
        instance = _birthday.main[instanceName];
        name = _birthday.config.panelName[_birthday.page];
        if (instance) {
            module = new instance(name);
        }
    }
})