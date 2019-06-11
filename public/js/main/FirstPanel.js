class FirstPanel extends ModuleWidget {
  constructor(name) {
    super(name);
    this.carouseImg = true;
    this.imgFalg = true;
    this.createTextFalg = true;
    this.flag = true;
  }
  createContent(parent) {
    this._parent = parent;
    let div = $('<div></div>').appendTo(parent).addClass('first_div');
    let content = $('<div></div>').appendTo(div).addClass('first_content');
    this.createContentImg(content);
  }
  createContentImg(parent) {
    let img1;
    img1 = $('<div></div>').appendTo(parent).addClass('img img1 animated slideInRight')
      .on('webkitAnimationEnd', (e) => {
        if (this.createTextFalg) {
          this.createTextDiv(parent);
          this.createTextFalg = false;
        }

        this.timer = setInterval(e => {
          if (this.flag) {
            img1.animate({
              opacity: 0.3
            }, 'fast', event => {
              img1.addClass('img2').animate({
                opacity: 1
              });
            })
            this.flag = !this.flag;
          } else {
            img1.animate({
              opacity: 0.3
            }, 'fast', event => {
              img1.removeClass('img2').animate({
                opacity: 1
              });
            })
            this.flag = !this.flag;
          }
        }, 2000)
      });
  }
  createTextDiv(parent) {
    let div1, link1, div2, link2;
    div1 = $('<div></div>').appendTo(parent).addClass('first_textDiv1');
    link1 = $('<span></span>').appendTo(div1).addClass('link animated slideInRight')
      .on('webkitAnimationEnd', () => {
        $('<span>Happy Birthday</span>').appendTo(div1).addClass('text animated rotateInDownLeft');
        $('<span>To You</span>').appendTo(div1).addClass('text animated rotateInDownLeft');
      });

    div2 = $('<div></div>').appendTo(parent).addClass('first_textDiv2');
    link1 = $('<span></span>').appendTo(div2).addClass('link animated slideInLeft')
      .on('webkitAnimationEnd', () => {
        $('<span>你若安好，便是晴天</span>').appendTo(div2).addClass('text animated rotateInDownLeft');
      });

  }
}

birthday.main = birthday.main || {};
birthday.main.FirstPanel = FirstPanel;