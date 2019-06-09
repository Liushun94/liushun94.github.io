class FirstPanel extends ModuleWidget {
  constructor(name) {
    super(name);
    this.carouseImg = true;
    this.imgFalg = true;
    this.createTextFalg = true;
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

        clearInterval(this.timer);
        this.timer = setInterval(() => {
          img1.removeClass('animated slideInRight')
            .addClass('animated fadeOut')
            .on('webkitAnimationEnd', () => {
              if (this.imgFalg) {
                if (this.carouseImg) {
                  img1.removeClass('img1 animated fadeOut').addClass('img2');
                  this.carouseImg = !this.carouseImg;
                } else {
                  img1.removeClass('img2 animated fadeOut').addClass('img1');
                  this.carouseImg = !this.carouseImg;
                }
                this.imgFalg = !this.imgFalg;
              }

            })
        }, 1000);
        this.imgFalg = !this.imgFalg;
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