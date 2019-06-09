class SecondPanel extends ModuleWidget {
  constructor(name) {
    super(name);
    this.textEnd = false;
    this.circleEnd = false;
    this.titleBorderEnd = false;
  }
  createContent(parent) {
    this._parent = parent;
    let div = $('<div></div>').appendTo(parent).addClass('second_div clearfix');
    let left = $('<div class="img_content fl"></div>').appendTo(div).addClass('imgleft animated slideInDown');
    let right = $('<div class="img_content fr"></div>').appendTo(div).addClass('imgright animated slideInUp')
      .on('webkitAnimationEnd', (e) => {
        this.showText();
        this.textEnd = true;
      })
  }
  showText() {
    let text = $('<span>最好的爱</span>').appendTo(this._parent).addClass('text animated zoomIn')
      .on('webkitAnimationEnd', (e) => {
        if (this.textEnd) {
          this.showCircle();
          this.circleEnd = true;
        }
      })
  }
  showCircle() {
    let circle = $('<div class="circle"></div>').appendTo(this._parent)
      .on('webkitAnimationEnd', e => {
        if (this.circleEnd) {
          this.titleBorder();
          this.titleBorderEnd = true;
        }
      })
  }
  titleBorder() {
    let title = $('<span class="title">THE BEST LOVE</span>').appendTo(this._parent).addClass('animated');
    let border = $('<span class="border"></span>').appendTo(this._parent).addClass('animated bounceInRight')
      .on('webkitAnimationEnd', e => {
        if (this.titleBorderEnd) {
          title.css('visibility', 'visible').addClass('rotateInUpLeft');
          content.css('visibility', 'visible').addClass('animated rotateInUpLeft');
        }
      });
    let content = $('<p class="content">所谓爱 就是相爱的两个人相互去迁就和改变 相互懂得珍惜 懂得包容的两个人 而且两个人朝着相同的方向努力 这才是能够携手一生的爱</p>').appendTo(this._parent)
  }
}

birthday.main = birthday.main || {};
birthday.main.SecondPanel = SecondPanel;