class ThirdPanel extends ModuleWidget {
  constructor(name) {
    super(name);
    this.imgEnd = true;
    this.showBordered = true;
    this.showBordered1 = true;
    this.titleBorderEnd = false;
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
      })
  }
  showBorder() {
    // let text1 = $('<span class="text">HAPPY BIRTHDAY</span>').appendTo(this._img)
    let right = $('<div class="border right"></div>').appendTo(this._img)
      .on('webkitAnimationEnd', e => {
        if (this.showBordered) {
          right.css('height', '100%');
          left.css('height', '100%');
          this.showBordered = false;

          text2.css('color', '#000').addClass('text2')
          // .addClass('animated slideInLeft');
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
    let text1 = $('<span class="text">HAPPY BIRTHDAY</span>').appendTo(this._img);
    let text2 = $('<span class="text">HAPPY BIRTHDAY</span>').appendTo(this._img);
  }
}

birthday.main = birthday.main || {};
birthday.main.ThirdPanel = ThirdPanel;