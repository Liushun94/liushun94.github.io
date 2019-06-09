// 切换moduleWidget 时显示的过渡动画
class TransformWidget {
  constructor(module) {
    this.module = module;
    this.createBg();
  }
  createBg() {
    let transitionFlag = true;
    let div = this.$bgView = $('<div class="transformWidget"></div>').appendTo($('#main')).on('webkitAnimationEnd', (e) => {
      if (e.target === e.currentTarget && transitionFlag) {
        transitionFlag = false;
        this.createContent();
      }
    });
  }
  createContent() {
    let topdiv = $('<div class="transformBgContent"></div>').appendTo(this.$bgView);
    let bottomdiv = $('<div class="transformBgContent"></div>').appendTo(this.$bgView);
    this.createContentAnimate(topdiv, bottomdiv);
  }
  createContentAnimate(topdiv, bottomdiv) {
    $('<div class="bgContentAnimate bgTop"></div>').appendTo(topdiv);

    $('<div class="bgContentAnimate bgBottom"></div>').appendTo(bottomdiv).on('webkitAnimationEnd', () => {
      this.$bgView.fadeOut('fast', (e) => {

        this.$bgView.remove();

        // 创建主页面模块
        this.module.create();
      });
    });
  }
}

birthday.component = birthday.component || {};
birthday.component.TransformWidget = TransformWidget;