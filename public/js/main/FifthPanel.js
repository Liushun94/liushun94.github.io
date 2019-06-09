class FifthPanel extends ModuleWidget {
  constructor(name) {
    super(name)
    this.borderEnd = true;
    this.flag = true;
  }
  createContent(parent) {
    this._parent = parent
    let div = $("<div></div>")
      .appendTo(parent)
      .addClass("fifth_div")

    this.timer = setInterval(e => {
      if (this.flag) {
        div.animate({
          opacity: 0
        }, 'fast', event => {
          div.addClass('img').animate({
            opacity: 1
          });
        })
        this.flag = !this.flag;
      } else {
        div.animate({
          opacity: 0
        }, 'fast', event => {
          div.removeClass('img').animate({
            opacity: 1
          });
        })
        this.flag = !this.flag;
      }
    }, 2000)

    let border = $('<div class="border animated slideInLeft"></div>')
      .appendTo(parent)
      .on("webkitAnimationEnd", e => {
        if (this.borderEnd) {
          this.showText()
          this.text1End = true
          this.borderEnd = false
        }
      })
  }
  showText() {
    this.textAnimate("text1", "HAPPY", {
      left: "20px"
    }, e => {
      this.textAnimate("text2", "BIRTHDAY", {
        left: "20px"
      }, e => {
        $('<div class="flower"></div>').appendTo(this._parent)
          .animate({
            left: '118px'
          })
        this.textAnimate("text3", "TO", {
          left: "20px"
        }, e => {
          this.textAnimate("text4", "YOU", {
            left: "20px"
          }, e => {
            this.textAnimate("text5", "生", {
              left: "30px",
            }, e => {
              this.textAnimate("text5 text6", "日", {
                left: "30px",
              }, e => {
                this.textAnimate("text5 text7", "快", {
                  left: "30px",
                }, e => {
                  this.textAnimate("text5 text8", "樂", {
                    left: "30px",
                  }, e => {

                  })
                })
              })
            })
          })
        })
      })
    })
  }
  textAnimate(className, text, animateObj, animateCB) {
    $(`<span class="text">${text}</span>`)
      .appendTo(this._parent)
      .addClass(className)
      .animate(animateObj, "slow", animateCB)
  }
}

birthday.main = birthday.main || {}
birthday.main.FifthPanel = FifthPanel