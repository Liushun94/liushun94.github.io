$(function () {
    let _birthday = window.birthday;
    _birthday.page = 0;
    let music = new MusicPanel();

    let notyf = new Notyf()

    let instanceName, instance, name, module;
    instanceModule();

    $(this).on('keydown', (e) => {
        if (e.keyCode === 38) { // 上页
            if (_birthday.page > 0 && module.getView()) {
                module.getView().remove();
                _birthday.page -= 1;
                instanceModule();
            } else {
                notyf.alert('已是首页');
            }
        } else if (e.keyCode === 40 && module.getView()) { // 下页
            if (_birthday.page < _birthday.config.panel.length - 1) {
                module.getView().remove();
                _birthday.page += 1;
                instanceModule();
            } else {
                notyf.alert('正在火速制作中，敬请期待！！！');
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
        if (Y > 0) {
            if (_birthday.page > 0 && module.getView()) {
                module.getView().remove();
                _birthday.page -= 1;
                instanceModule();
            } else {
                notyf.alert('已是首页');
            }
        }
        //上滑
        else if (Y < 0) {
            if (_birthday.page < _birthday.config.panel.length - 1 && module.getView()) {
                module.getView().remove();
                _birthday.page += 1;
                instanceModule();
            } else {
                notyf.alert('正在火速制作中，敬请期待！！！');
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