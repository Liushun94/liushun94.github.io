// 音乐组件
class MusicPanel {
  constructor() {
    this.create();

    $('audio').attr('autoplay', true);
  }
  create() {
    let audio = $('audio').on('canplay', function () {
      $('#musicIcon').addClass('rotateCircle');
    });
    $('#musicIcon').on('click', function () {
      if (!audio.get(0).paused) {
        audio.get(0).pause();
        $('#musicIcon').removeClass('rotateCircle');
      } else {
        audio.get(0).play();
        $('#musicIcon').addClass('rotateCircle');
      }

    })
  }
}

birthday.view = birthday.view || {};
birthday.view.MusicPanel = MusicPanel;