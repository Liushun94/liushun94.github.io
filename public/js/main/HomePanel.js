class HomePanel extends ModuleWidget {
  constructor(name) {
    super(name);
    this.textSpanFlag = true;
    this.textSpanFlag1 = true;
    this.bottomImg = true;
    this.bottomDiv = true;
  }
  createContent(parent) {
    this._parent = parent;
    let topdiv = this.topdiv = $('<div></div>').appendTo(parent).addClass('home_topDiv');
    let topImg = $('<img/>')
      .appendTo(topdiv)
      .attr('src', this.getImgSrc('4.jpg'))
      .addClass('animated slideInLeft')
      .on('webkitAnimationEnd', () => {
        this.createTextDiv(parent);
      });
  }
  createTopSpan() {
    $('<div></div>').appendTo(this.topdiv).addClass('topSpan animated rotateIn').on('webkitAnimationEnd', () => {
      // if(this.)
      this.createBottomDiv(this._parent);
    });
  }
  createTextDiv(parent) {
    let textDiv = this.textDiv = $('<div></div>').appendTo(parent).addClass('home_textDiv animated rotateInDownRight')
      .on('webkitAnimationEnd', () => {
        if (this.textSpanFlag) {
          this.createBottomImg(this._parent);
        }
      });
    $('<img/>').appendTo(textDiv)
      .attr('src', this.getImgSrc('web/home1.png'))
      .addClass('textDivImg');
  }
  createTextSpan(parent) {
    this.textSpanFlag = false;
    var array = ['生', '日', '快', '乐', '/', ','];
    array.forEach((element, i) => {
      if (element === '/') {
        $('<img class="animated slideInDown"/>').appendTo(parent).attr('src', this.getImgSrc('web/home2.png')).addClass('textImg2');
      } else if (element === ',') {
        $('<span class="animated slideInDown"></span>').appendTo(parent).text(element).addClass('textSymbol').on('webkitAnimationEnd', () => {
          this.createTopSpan();
        });
      } else {
        $('<span class="animated slideInDown"></span>').appendTo(parent).text(element).addClass('textSpan' + i);
      }
    });
  }
  createBottomImg(parent) {
    this.bottomImg = false;
    $('<img/>').appendTo(parent).attr('src', this.getImgSrc('5.jpg')).addClass('bottomImg animated flipInX').on('webkitAnimationEnd', () => {
      this.createTextSpan(this.textDiv);
    });
  }
  createBottomDiv(parent) {
    this.bottomDiv = false;
    let div = $('<div class="bottomDiv"></div>').appendTo(parent);
    let first = $('<div></div>').appendTo(div).addClass('first').addClass('animated zoomOut').on('webkitAnimationEnd', () => {
      first.removeClass('zoomOut');
      first.addClass('rotateIn');

      p2.removeClass('animated slideInLeft');
      b.addClass('animated flash');
    });
    let firstSpan = $('<span></span>').appendTo(first).text('愿');
    let p1 = $('<p>你比别人更不怕一个人独处</p>').appendTo(div).addClass('animated slideInRight');
    let p2 = $('<p>愿日后想起时你会被自己</p>').appendTo(div).addClass('animated slideInLeft');
    let b = $('<b>&nbsp;&nbsp感动</b>').appendTo(p2);
  }
}

birthday.main = birthday.main || {};
birthday.main.HomePanel = HomePanel;