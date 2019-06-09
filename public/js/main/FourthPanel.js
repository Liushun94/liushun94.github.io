class FourthPanel extends ModuleWidget {
  constructor(name) {
    super(name);
    this.imgEnd = true;
  }
  createContent(parent) {
    this._parent = parent;
    let div = $('<div></div>').appendTo(parent).addClass('fourth_div');
    let top = $('<div class="img top animated slideInLeft"></div>').appendTo(div)
    let bottom = $('<div class="img bottom animated slideInRight"></div>').appendTo(div)
      .on('webkitAnimationEnd', e => {
        if (this.imgEnd) {
          this.showtext(div);
          this.imgEnd = false;
          this.contentEnd = true;
        }
      })
  }
  showtext(parent) {
    let content = $('<div class="content animated zoomIn"></div>').appendTo(parent)
      .on('webkitAnimationEnd', e => {
        if (this.contentEnd) {
          $('<p class="text animated zoomIn">只愿你能被这世界温柔以待</p>').appendTo(content);

          $('<div class="flag flag_top animated slideInLeft"></div>').appendTo(parent);
          $('<div class="flag flag_right animated slideInDown"></div>').appendTo(parent);

          this.contentEnd = false;
        }
      })

  }

}

birthday.main = birthday.main || {};
birthday.main.FourthPanel = FourthPanel;