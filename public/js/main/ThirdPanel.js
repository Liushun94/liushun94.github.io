class ThirdPanel extends ModuleWidget {
  constructor(name) {
    super(name);
    this.imgEnd = true;
    this.showBordered = true;
    this.showBordered1 = true;
    this.flagEnd = true;
  }
  createContent(parent) {
    this._parent = parent;
    let div = $('<div></div>').appendTo(parent).addClass('third_div');
    let img = this._img = $('<div class="img animated slideInRight"></div>').appendTo(div)
      .on('webkitAnimationEnd', e => {
        if (this.imgEnd) {
          this.showBorder();
          this.imgEnd = false;
        }

        if(this.heartEnd){
          img.removeClass('img1');

          // this.text3.css('animation', '1s ease 0s infinite normal both running puffOut')
          $('<span class="text4 puffOut">生日快乐</span>').appendTo(this.flag)

          this.heartEnd = false;
        }
      })
  }
  showBorder() {
    let right = $('<div class="border right"></div>').appendTo(this._img)
      .on('webkitAnimationEnd', e => {
        if (this.showBordered) {
          right.css('height', '100%');
          left.css('height', '100%');
          this.showBordered = false;

          text2.css('color', '#000').animate({
            'left': '-80px'
          });

          this._img.animate({
            'opacity': 0
          }, 'fast', event => {
            this._img.addClass('img1').animate({
              'opacity': 1
            }, 'fast', event1 => {
              this.showflag();
              // this.flagEnd = true;
            });
          })
        }
      })
    let left = $('<div class="border left"></div>').appendTo(this._img);
    let top = $('<div class="border1 top"></div>').appendTo(this._img)
      .on('webkitAnimationEnd', e => {
        if (this.showBordered1) {
          top.css('width', '100%');
          bottom.css('width', '100%');
          this.showBordered1 = false;
        }

      });
    let bottom = $('<div class="border1 bottom"></div>').appendTo(this._img);
    // let text1 = $('<span class="text">HAPPY BIRTHDAY</span>').appendTo(this._img);
    let text2 = this.text2 = $('<span class="text">HAPPY BIRTHDAY</span>').appendTo(this._img);
  }
  showflag() {
    let flag = this.flag = $('<div class="flag animated rollIn"></div>').appendTo(this._img)
      .on('webkitAnimationEnd', e => {
        if (this.flagEnd) {
          this.showText3(flag);
          this.flagEnd = false;
          this.text3End = true;

          // this.text2.animate({
          //   'transform': 'rotate(360deg)'
          // })
          // this.text2.addClass('textAnimate');
          this.text2.remove();
          $('<span class="text">HAPPY BIRTHDAY</span>').appendTo(this._img).css('color','#000').addClass('textAnimate')
          // .addClass('animated rotateIn');
        }
      });

  }
  showText3(parent) {
    let text3 = this.text3 = $('<span class="text3 animated rollIn">生日快乐</span>').appendTo(parent)
      .on('webkitAnimationEnd', e => {
        if (this.text3End) {
          this._img.removeClass('animated slideInRight').addClass('animated bounceIn');
          this.heartEnd = true;
        }
      });
  }
}

birthday.main = birthday.main || {};
birthday.main.ThirdPanel = ThirdPanel;