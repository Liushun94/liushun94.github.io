class ModuleWidget {
  constructor(name) {
    this.id = birthday.page;
    this.name = name;

    // 在创建主界面前先做一个创建前的动画，在动画结束的回调中创建模块。
    let transform = new TransformWidget(this);
  }

  create() {
    let div = this.$view = $('<div></div>').appendTo('#main').fadeIn('slow');
    let className = this.getMouldClass();
    if (className) {
      div.addClass(className);
    }
    if (this.name) {
      div.prop('id', this.name);
      div.attr('index', this.id);
    }

    this.createContent(div);
  }
  getMouldClass() {
    return 'moduleWidget'
  }
  getView() {
    return this.$view;
  }
  createContent(parent) {

  }
  show() {
    this.$view().show;
  }
  getImgSrc(src) {
    return `./image/1/${src}`;
  }
}

birthday.component = birthday.component || {};
birthday.component.ModuleWidget = ModuleWidget;