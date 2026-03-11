/* =====================================================
     JavaScript（純功能性）
     注意：所有 hover 特效全用純 CSS 完成，此段 JS 僅處理：
     1. 漢堡選單展開/收起
     2. 篩選按鈕 active 切換
     3. 輪播指示點互動與自動輪播恢復
     ===================================================== */

  /* ── 漢堡選單：點擊展開或收起導覽列 ── */
  function toggleNav() {
    document.getElementById('mainNav').classList.toggle('open');
  }

  /* ── 篩選選單按鈕：點擊切換 active 狀態 ── */
  function setActive(btn) {
    var parent = btn.closest('.section-menu');
    parent.querySelectorAll('button').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');
  }

  /* ── 輪播指示點：點擊跳至指定幻燈片 ── */
  var slidesEl  = document.getElementById('slides');
  var dots      = document.querySelectorAll('.dot');
  var autoTimer;

  function goSlide(index) {
    /* 暫停 CSS 自動 animation，改用手動 transition */
    slidesEl.style.animation  = 'none';
    slidesEl.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1)';
    slidesEl.style.transform  = 'translateX(-' + (index * 33.333) + '%)';

    /* 更新指示點樣式 */
    dots.forEach(function(d, i) {
      d.classList.toggle('active', i === index);
    });

    /* 8 秒後恢復 CSS 自動輪播 */
    clearTimeout(autoTimer);
    autoTimer = setTimeout(function() {
      slidesEl.style.transition = '';
      slidesEl.style.transform  = '';
      slidesEl.style.animation  = 'slideAuto 18s infinite';
    }, 8000);
  }

  /* ── 自動同步指示點與 CSS 輪播進度 ── */
  setInterval(function() {
    if (slidesEl.style.animation !== 'none') {
      var matrix = getComputedStyle(slidesEl).transform;
      if (matrix && matrix !== 'none') {
        var vals = matrix.match(/matrix.*\((.+)\)/);
        if (vals) {
          var tx  = parseFloat(vals[1].split(', ')[4]);
          var w   = slidesEl.offsetWidth / 3;
          var idx = Math.round(Math.abs(tx) / w) % 3;
          dots.forEach(function(d, i) {
            d.classList.toggle('active', i === idx);
          });
        }
      }
    }
  }, 500);

                        /*============================================================
                                                電影 種類資料 (最新) 
                          ============================================================*/
    const movieLatest = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "moviePics/lovePic/lovePic12.png", title: "愛的力量", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/lovePic/lovePic4.png", title: "擁抱星空", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/lovePic/lovePic3.png", title: "最後一封情書", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "moviePics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/horrorPic/horrorPic5.png", title: "血色森林", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "moviePics/susPic/susPic12.png", title: "最終的線索", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/susPic/susPic10.png", title: "獵殺潛伏", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/susPic/susPic9.png", title: "影子城市", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/susPic/susPic8.png", title: "深淵的訊號", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/susPic/susPic7.png", title: "記憶裂痕", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/susPic/susPic6.png", title: "密室遺言", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/susPic/susPic5.png", title: "時光編碼", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/susPic/susPic4.png", title: "謊言的碎片", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後的晚餐", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "moviePics/funPic/funPic12.png", title: "金牌大廚", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/funPic/funPic11.png", title: "狗狗特工", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/funPic/funPic9.png", title: "老闆不在家", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/funPic/funPic8.png", title: "我的機器人女友", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/funPic/funPic6.png", title: "重返十七歲", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/funPic/funPic5.png", title: "荒島大逃殺", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/funPic/funPic3.png", title: "烏龍特警", rating: "6.2", duration: "2h03m"}
      ]
    }
                        /*============================================================
                                            動漫 種類資料 (最新) 
                          ============================================================*/
      /* ── 浪漫分類 ── */
    const animaneLatest = {
      '浪漫': [
        {img: "animanePics/lovePic/lovePic12.png", title: "愛的力量", rating: "7.6", duration: "2h08m"},
        {img: "animanePics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.3", duration: "1h37m"},
        {img: "animanePics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "9.1", duration: "1h19m"},
        {img: "animanePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "6.5", duration: "1h31m"},
        {img: "animanePics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "5.2", duration: "1h24m"},
        {img: "animanePics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "6.4", duration: "2h22m"},
        {img: "animanePics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "8.2", duration: "1h23m"},
        {img: "animanePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "7.7", duration: "1h45m"},
        {img: "animanePics/lovePic/lovePic4.png", title: "擁抱星空", rating: "9.4", duration: "1h13m"},
        {img: "animanePics/lovePic/lovePic3.png", title: "最後一封情書", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "animanePics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "7.6", duration: "2h08m"},
        {img: "animanePics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.3", duration: "1h37m"},
        {img: "animanePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "9.1", duration: "1h19m"},
        {img: "animanePics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "6.5", duration: "1h31m"},
        {img: "animanePics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "5.2", duration: "1h24m"},
        {img: "animanePics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "6.4", duration: "2h22m"},
        {img: "animanePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "8.2", duration: "1h23m"},
        {img: "animanePics/horrorPic/horrorPic5.png", title: "血色森林", rating: "7.7", duration: "1h45m"},
        {img: "animanePics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "9.4", duration: "1h13m"},
        {img: "animanePics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "animanePics/susPic/susPic12.png", title: "最終的線索", rating: "7.6", duration: "2h08m"},
        {img: "animanePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.3", duration: "1h37m"},
        {img: "animanePics/susPic/susPic10.png", title: "獵殺潛伏", rating: "9.1", duration: "1h19m"},
        {img: "animanePics/susPic/susPic9.png", title: "影子城市", rating: "6.5", duration: "1h31m"},
        {img: "animanePics/susPic/susPic8.png", title: "深淵的訊號", rating: "5.2", duration: "1h24m"},
        {img: "animanePics/susPic/susPic7.png", title: "記憶裂痕", rating: "6.4", duration: "2h22m"},
        {img: "animanePics/susPic/susPic6.png", title: "密室遺言", rating: "8.2", duration: "1h23m"},
        {img: "animanePics/susPic/susPic5.png", title: "時光編碼", rating: "7.7", duration: "1h45m"},
        {img: "animanePics/susPic/susPic4.png", title: "謊言的碎片", rating: "9.4", duration: "1h13m"},
        {img: "animanePics/susPic/susPic3.png", title: "最後的晚餐", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "animanePics/funPic/funPic12.png", title: "金牌大廚", rating: "7.6", duration: "2h08m"},
        {img: "animanePics/funPic/funPic11.png", title: "狗狗特工", rating: "8.3", duration: "1h37m"},
        {img: "animanePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "9.1", duration: "1h19m"},
        {img: "animanePics/funPic/funPic9.png", title: "老闆不在家", rating: "6.5", duration: "1h31m"},
        {img: "animanePics/funPic/funPic8.png", title: "我的機器人女友", rating: "5.2", duration: "1h24m"},
        {img: "animanePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "6.4", duration: "2h22m"},
        {img: "animanePics/funPic/funPic6.png", title: "重返十七歲", rating: "8.2", duration: "1h23m"},
        {img: "animanePics/funPic/funPic5.png", title: "荒島大逃殺", rating: "7.7", duration: "1h45m"},
        {img: "animanePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "9.4", duration: "1h13m"},
        {img: "animanePics/funPic/funPic3.png", title: "烏龍特警", rating: "6.2", duration: "2h03m"}
      ]
    }
                        /*============================================================
                                            電視劇 種類資料 (最新) 
                          ============================================================*/
    const tvLatest = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "tvPics/lovePic/lovePic12.png", title: "愛的力量", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/lovePic/lovePic9.png", title: "愛，一直在", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/lovePic/lovePic4.png", title: "擁抱星空", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/lovePic/lovePic3.png", title: "最後一封情書", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "tvPics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/horrorPic/horrorPic5.png", title: "血色森林", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "tvPics/susPic/susPic12.png", title: "最終的線索", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/susPic/susPic10.png", title: "獵殺潛伏", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/susPic/susPic9.png", title: "影子城市", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/susPic/susPic8.png", title: "深淵的訊號", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/susPic/susPic7.png", title: "記憶裂痕", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/susPic/susPic6.png", title: "密室遺言", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/susPic/susPic5.png", title: "時光編碼", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/susPic/susPic4.png", title: "謊言的碎片", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/susPic/susPic3.png", title: "最後的晚餐", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "tvPics/funPic/funPic12.png", title: "金牌大廚", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/funPic/funPic11.png", title: "狗狗特工", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/funPic/funPic10.png", title: "求愛特攻隊", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/funPic/funPic9.png", title: "老闆不在家", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/funPic/funPic8.png", title: "我的機器人女友", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/funPic/funPic6.png", title: "重返十七歲", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/funPic/funPic5.png", title: "荒島大逃殺", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/funPic/funPic4.png", title: "我的室友是外星人", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/funPic/funPic3.png", title: "烏龍特警", rating: "6.2", duration: "2h03m"}
      ]
    }


                          /*============================================================
                                              電影 種類資料 (熱門精選) 
                          ============================================================*/
    const movieHot = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "moviePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/lovePic/lovePic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/lovePic/lovePic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/lovePic/lovePic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/lovePic/lovePic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "moviePics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/horrorPic/horrorPic5.png", title: "血色森林", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "moviePics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/susPic/susPic4.png", title: "謊言的碎片", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/susPic/susPic5.png", title: "時光編碼", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/susPic/susPic6.png", title: "密室遺言", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/susPic/susPic7.png", title: "記憶裂痕", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/susPic/susPic8.png", title: "深淵的訊號", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/susPic/susPic9.png", title: "影子城市", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/susPic/susPic10.png", title: "獵殺潛伏", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/susPic/susPic12.png", title: "最終的線索", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "moviePics/funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/funPic/funPic2.png", title: "超能奶爸", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/funPic/funPic3.png", title: "烏龍特警", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/funPic/funPic5.png", title: "荒島大逃殺", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/funPic/funPic6.png", title: "重返十七歲", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/funPic/funPic8.png", title: "我的機器人女友", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/funPic/funPic9.png", title: "老闆不在家", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/funPic/funPic11.png", title: "狗狗特工", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/funPic/funPic12.png", title: "金牌大廚", rating: "6.4", duration: "1h42m"},
      ]
    }

                        /*============================================================
                                              動漫 種類資料 (熱門精選) 
                          ============================================================*/
    const animaneHot = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "animanePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "animanePics/lovePic/lovePic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "animanePics/lovePic/lovePic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "animanePics/lovePic/lovePic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "animanePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "animanePics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "animanePics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "animanePics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "animanePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "animanePics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "animanePics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "animanePics/lovePic/lovePic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "animanePics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m"},
        {img: "animanePics/horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.3", duration: "1h37m"},
        {img: "animanePics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.1", duration: "1h19m"},
        {img: "animanePics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "6.5", duration: "1h31m"},
        {img: "animanePics/horrorPic/horrorPic5.png", title: "血色森林", rating: "5.2", duration: "1h24m"},
        {img: "animanePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "6.4", duration: "2h22m"},
        {img: "animanePics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "8.2", duration: "1h23m"},
        {img: "animanePics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "7.7", duration: "1h45m"},
        {img: "animanePics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.4", duration: "1h13m"},
        {img: "animanePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "6.2", duration: "2h03m"},
        {img: "animanePics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.9", duration: "1h20m"},
        {img: "animanePics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "animanePics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m"},
        {img: "animanePics/susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.3", duration: "1h37m"},
        {img: "animanePics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.1", duration: "1h19m"},
        {img: "animanePics/susPic/susPic4.png", title: "謊言的碎片", rating: "6.5", duration: "1h31m"},
        {img: "animanePics/susPic/susPic5.png", title: "時光編碼", rating: "5.2", duration: "1h24m"},
        {img: "animanePics/susPic/susPic6.png", title: "密室遺言", rating: "6.4", duration: "2h22m"},
        {img: "animanePics/susPic/susPic7.png", title: "記憶裂痕", rating: "8.2", duration: "1h23m"},
        {img: "animanePics/susPic/susPic8.png", title: "深淵的訊號", rating: "7.7", duration: "1h45m"},
        {img: "animanePics/susPic/susPic9.png", title: "影子城市", rating: "9.4", duration: "1h13m"},
        {img: "animanePics/susPic/susPic10.png", title: "獵殺潛伏", rating: "6.2", duration: "2h03m"},
        {img: "animanePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.9", duration: "1h20m"},
        {img: "animanePics/susPic/susPic12.png", title: "最終的線索", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "animanePics/funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m"},
        {img: "animanePics/funPic/funPic2.png", title: "超能奶爸", rating: "8.3", duration: "1h37m"},
        {img: "animanePics/funPic/funPic3.png", title: "烏龍特警", rating: "9.1", duration: "1h19m"},
        {img: "animanePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "6.5", duration: "1h31m"},
        {img: "animanePics/funPic/funPic5.png", title: "荒島大逃殺", rating: "5.2", duration: "1h24m"},
        {img: "animanePics/funPic/funPic6.png", title: "重返十七歲", rating: "6.4", duration: "2h22m"},
        {img: "animanePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "8.2", duration: "1h23m"},
        {img: "animanePics/funPic/funPic8.png", title: "我的機器人女友", rating: "7.7", duration: "1h45m"},
        {img: "animanePics/funPic/funPic9.png", title: "老闆不在家", rating: "9.4", duration: "1h13m"},
        {img: "animanePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "6.2", duration: "2h03m"},
        {img: "animanePics/funPic/funPic11.png", title: "狗狗特工", rating: "8.9", duration: "1h20m"},
        {img: "animanePics/funPic/funPic12.png", title: "金牌大廚", rating: "6.4", duration: "1h42m"},
      ]
    }

                        /*============================================================
                                            電視劇 種類資料 (熱門精選) 
                          ============================================================*/
    const tvHot = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "tvPics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/lovePic/lovePic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/lovePic/lovePic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/lovePic/lovePic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "tvPics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "tvPics/lovePic/lovePic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "tvPics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/horrorPic/horrorPic5.png", title: "血色森林", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "6.2", duration: "2h03m"},
        {img: "tvPics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.9", duration: "1h20m"},
        {img: "tvPics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "tvPics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/susPic/susPic4.png", title: "謊言的碎片", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/susPic/susPic5.png", title: "時光編碼", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/susPic/susPic6.png", title: "密室遺言", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/susPic/susPic7.png", title: "記憶裂痕", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/susPic/susPic8.png", title: "深淵的訊號", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/susPic/susPic9.png", title: "影子城市", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/susPic/susPic10.png", title: "獵殺潛伏", rating: "6.2", duration: "2h03m"},
        {img: "tvPics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.9", duration: "1h20m"},
        {img: "tvPics/susPic/susPic12.png", title: "最終的線索", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "tvPics/funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/funPic/funPic2.png", title: "超能奶爸", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/funPic/funPic3.png", title: "烏龍特警", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/funPic/funPic4.png", title: "我的室友是外星人", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/funPic/funPic5.png", title: "荒島大逃殺", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/funPic/funPic6.png", title: "重返十七歲", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/funPic/funPic8.png", title: "我的機器人女友", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/funPic/funPic9.png", title: "老闆不在家", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/funPic/funPic10.png", title: "求愛特攻隊", rating: "6.2", duration: "2h03m"},
        {img: "tvPics/funPic/funPic11.png", title: "狗狗特工", rating: "8.9", duration: "1h20m"},
        {img: "tvPics/funPic/funPic12.png", title: "金牌大廚", rating: "6.4", duration: "1h42m"},
      ]
    }

                        /*============================================================
                                            電影 種類資料 (更多) 
                          ============================================================*/
      const movieMore = [
        {img: "moviePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/horrorPic/horrorPic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/funPic/funPic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/horrorPic/horrorPic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/susPic/susPic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/funPic/funPic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/horrorPic/horrorPic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/susPic/susPic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/funPic/funPic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"}
      ];
                        /*============================================================
                                            動漫 種類資料 (更多) 
                          ============================================================*/
      const animaneMore = [
        {img: "animanePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "animanePics/horrorPic/horrorPic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "animanePics/susPic/susPic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "animanePics/funPic/funPic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "animanePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "animanePics/horrorPic/horrorPic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "animanePics/susPic/susPic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "animanePics/funPic/funPic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "animanePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "animanePics/horrorPic/horrorPic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "animanePics/susPic/susPic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "animanePics/funPic/funPic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"}
      ];
                        /*============================================================
                                            電視劇 種類資料 (更多) 
                          ============================================================*/
      const tvMore = [
        {img: "tvPics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/horrorPic/horrorPic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/susPic/susPic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/funPic/funPic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/horrorPic/horrorPic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/susPic/susPic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/funPic/funPic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/horrorPic/horrorPic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "tvPics/susPic/susPic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "tvPics/funPic/funPic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"}
      ];

                        /*============================================================
                                            電影 種類資料 (影片介紹) 
                          ============================================================*/
    const movieIntro = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "moviePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "故事設定在近未來的台北，城市被永不熄滅的霓虹與浮空投影淹沒。在這科技冰冷、人際疏離的時代，台北化身為巨大的寂寞迷宮。雨後的街頭倒映著絢爛光影，模糊了現實邊界，為這場都市邂逅奠定了既科幻又感性的基調。", 
        desc2: "失意調酒師與尋憶攝影師在雨中偶然相遇，兩人在城市的隱秘角落尋找真實的共鳴。隨著感情升溫，一段隱藏在霓虹背後的秘密逐漸浮現。他們必須在虛假的光影吞噬彼此前，緊握雙手，守護這座城市中唯一的純粹溫度。"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "moviePics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "這座被當地人稱為「血染莊園」的哥德式古宅，孤零零地矗立在荒蕪的森林深處，彷彿是一道拒絕癒合的傷口。傳說，百年前這裡曾發生過慘絕人寰的滅門血案，古宅的主人為了追求永生，與惡魔達成了禁忌的契約。自此，古宅便被詛咒包圍，牆壁中時常傳出低沉的哀嚎，任何踏入其中的人，都將成為古宅的犧牲品，靈魂永遠禁錮在黑暗之中。", 
        desc2: "年輕的歷史學者艾莉絲（化名），為了尋找失蹤的妹妹，不顧勸阻踏入了這座禁忌古宅。她身穿破舊的裙子，手中的燭光在黑暗中搖曳，彷彿隨時都會熄滅。每前進一步，古宅的牆壁都彷彿在低語，訴說著不為人知的恐怖。當艾莉絲緩緩走向二樓黑暗的樓梯口，她並不知道，那裡不僅僅是二樓的入口，更是通往無盡噩夢與古宅血腥真相的深淵。"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "moviePics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "故事發生在長年大霧籠罩的港口城市。這座城市在繁華霓虹下隱藏著腐敗與暗殺，各方勢力在迷霧中進行情報交易。灰藍色的街道與深棕色的老舊建築交織，形成一個無法逃脫的權力漩渦，真相如同海報上的濃霧，讓人始終看不清全貌。", 
        desc2: "一名神祕的檔案員意外目睹高層暗殺事件，成為唯一的活口。他穿著長風衣獨自走上拱橋，在濃霧中感知到監視者的存在。這不僅是一場橫跨城市的逃亡，更是一場心理博弈。他必須在霓虹燈火熄滅前，將足以撼動帝國的證詞交出，否則將永遠消失在迷霧之中。"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "moviePics/funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "在一座陽光普照、步調繁忙的大都市，一場號稱「年度最完美」的豪門婚禮即將舉行。然而，在這個追求精準與面子的社交圈中，任何一點小差錯都會引發核彈級的災難，而這一切的混亂，竟然全源自於一個最不該缺席的人。", 
        desc2: "準新郎阿傑在宣誓前夕意外發現驚人秘密，穿著西裝與黃色小鴨拖鞋在大街上奪門而出。身後憤怒的伴郎團與穿禮服的哈巴狗緊追不捨，他在繁華街道上演一場爆笑逃亡，試圖在被抓回禮堂前，找回對真愛的定義與自由。"}
      ],
    }
                        /*============================================================
                                            動漫 種類資料 (影片介紹) 
                          ============================================================*/
    const animaneIntro = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "animanePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "故事設定在近未來的台北，城市被永不熄滅的霓虹與浮空投影淹沒。在這科技冰冷、人際疏離的時代，台北化身為巨大的寂寞迷宮。雨後的街頭倒映著絢爛光影，模糊了現實邊界，為這場都市邂逅奠定了既科幻又感性的基調。", 
        desc2: "失意調酒師與尋憶攝影師在雨中偶然相遇，兩人在城市的隱秘角落尋找真實的共鳴。隨著感情升溫，一段隱藏在霓虹背後的秘密逐漸浮現。他們必須在虛假的光影吞噬彼此前，緊握雙手，守護這座城市中唯一的純粹溫度。"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "animanePics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "這座被當地人稱為「血染莊園」的哥德式古宅，孤零零地矗立在荒蕪的森林深處，彷彿是一道拒絕癒合的傷口。傳說，百年前這裡曾發生過慘絕人寰的滅門血案，古宅的主人為了追求永生，與惡魔達成了禁忌的契約。自此，古宅便被詛咒包圍，牆壁中時常傳出低沉的哀嚎，任何踏入其中的人，都將成為古宅的犧牲品，靈魂永遠禁錮在黑暗之中。", 
        desc2: "年輕的歷史學者艾莉絲（化名），為了尋找失蹤的妹妹，不顧勸阻踏入了這座禁忌古宅。她身穿破舊的裙子，手中的燭光在黑暗中搖曳，彷彿隨時都會熄滅。每前進一步，古宅的牆壁都彷彿在低語，訴說著不為人知的恐怖。當艾莉絲緩緩走向二樓黑暗的樓梯口，她並不知道，那裡不僅僅是二樓的入口，更是通往無盡噩夢與古宅血腥真相的深淵。"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "animanePics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "故事發生在長年大霧籠罩的港口城市。這座城市在繁華霓虹下隱藏著腐敗與暗殺，各方勢力在迷霧中進行情報交易。灰藍色的街道與深棕色的老舊建築交織，形成一個無法逃脫的權力漩渦，真相如同海報上的濃霧，讓人始終看不清全貌。", 
        desc2: "一名神祕的檔案員意外目睹高層暗殺事件，成為唯一的活口。他穿著長風衣獨自走上拱橋，在濃霧中感知到監視者的存在。這不僅是一場橫跨城市的逃亡，更是一場心理博弈。他必須在霓虹燈火熄滅前，將足以撼動帝國的證詞交出，否則將永遠消失在迷霧之中。"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "animanePics/funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "在一座陽光普照、步調繁忙的大都市，一場號稱「年度最完美」的豪門婚禮即將舉行。然而，在這個追求精準與面子的社交圈中，任何一點小差錯都會引發核彈級的災難，而這一切的混亂，竟然全源自於一個最不該缺席的人。", 
        desc2: "準新郎阿傑在宣誓前夕意外發現驚人秘密，穿著西裝與黃色小鴨拖鞋在大街上奪門而出。身後憤怒的伴郎團與穿禮服的哈巴狗緊追不捨，他在繁華街道上演一場爆笑逃亡，試圖在被抓回禮堂前，找回對真愛的定義與自由。"}
      ],
    }
                        /*============================================================
                                            電視劇 種類資料 (影片介紹) 
                          ============================================================*/
    const tvIntro = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "tvPics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "故事設定在近未來的台北，城市被永不熄滅的霓虹與浮空投影淹沒。在這科技冰冷、人際疏離的時代，台北化身為巨大的寂寞迷宮。雨後的街頭倒映著絢爛光影，模糊了現實邊界，為這場都市邂逅奠定了既科幻又感性的基調。", 
        desc2: "失意調酒師與尋憶攝影師在雨中偶然相遇，兩人在城市的隱秘角落尋找真實的共鳴。隨著感情升溫，一段隱藏在霓虹背後的秘密逐漸浮現。他們必須在虛假的光影吞噬彼此前，緊握雙手，守護這座城市中唯一的純粹溫度。"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "tvPics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "這座被當地人稱為「血染莊園」的哥德式古宅，孤零零地矗立在荒蕪的森林深處，彷彿是一道拒絕癒合的傷口。傳說，百年前這裡曾發生過慘絕人寰的滅門血案，古宅的主人為了追求永生，與惡魔達成了禁忌的契約。自此，古宅便被詛咒包圍，牆壁中時常傳出低沉的哀嚎，任何踏入其中的人，都將成為古宅的犧牲品，靈魂永遠禁錮在黑暗之中。", 
        desc2: "年輕的歷史學者艾莉絲（化名），為了尋找失蹤的妹妹，不顧勸阻踏入了這座禁忌古宅。她身穿破舊的裙子，手中的燭光在黑暗中搖曳，彷彿隨時都會熄滅。每前進一步，古宅的牆壁都彷彿在低語，訴說著不為人知的恐怖。當艾莉絲緩緩走向二樓黑暗的樓梯口，她並不知道，那裡不僅僅是二樓的入口，更是通往無盡噩夢與古宅血腥真相的深淵。"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "tvPics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "故事發生在長年大霧籠罩的港口城市。這座城市在繁華霓虹下隱藏著腐敗與暗殺，各方勢力在迷霧中進行情報交易。灰藍色的街道與深棕色的老舊建築交織，形成一個無法逃脫的權力漩渦，真相如同海報上的濃霧，讓人始終看不清全貌。", 
        desc2: "一名神祕的檔案員意外目睹高層暗殺事件，成為唯一的活口。他穿著長風衣獨自走上拱橋，在濃霧中感知到監視者的存在。這不僅是一場橫跨城市的逃亡，更是一場心理博弈。他必須在霓虹燈火熄滅前，將足以撼動帝國的證詞交出，否則將永遠消失在迷霧之中。"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "tvPics/funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "在一座陽光普照、步調繁忙的大都市，一場號稱「年度最完美」的豪門婚禮即將舉行。然而，在這個追求精準與面子的社交圈中，任何一點小差錯都會引發核彈級的災難，而這一切的混亂，竟然全源自於一個最不該缺席的人。", 
        desc2: "準新郎阿傑在宣誓前夕意外發現驚人秘密，穿著西裝與黃色小鴨拖鞋在大街上奪門而出。身後憤怒的伴郎團與穿禮服的哈巴狗緊追不捨，他在繁華街道上演一場爆笑逃亡，試圖在被抓回禮堂前，找回對真愛的定義與自由。"}
      ]
    }

                        /*============================================================
                                        電影、動漫、電視劇 種類資料 (更多頁面) 
                          ============================================================*/
    /*電影 種類資料 (更多)*/
    const movieMorePage = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "moviePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/lovePic/lovePic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/lovePic/lovePic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/lovePic/lovePic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/lovePic/lovePic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "moviePics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/horrorPic/horrorPic5.png", title: "血色森林", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "moviePics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/susPic/susPic4.png", title: "謊言的碎片", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/susPic/susPic5.png", title: "時光編碼", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/susPic/susPic6.png", title: "密室遺言", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/susPic/susPic7.png", title: "記憶裂痕", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/susPic/susPic8.png", title: "深淵的訊號", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/susPic/susPic9.png", title: "影子城市", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/susPic/susPic10.png", title: "獵殺潛伏", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/susPic/susPic12.png", title: "最終的線索", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "moviePics/funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/funPic/funPic2.png", title: "超能奶爸", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/funPic/funPic3.png", title: "烏龍特警", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/funPic/funPic5.png", title: "荒島大逃殺", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/funPic/funPic6.png", title: "重返十七歲", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/funPic/funPic8.png", title: "我的機器人女友", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/funPic/funPic9.png", title: "老闆不在家", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/funPic/funPic11.png", title: "狗狗特工", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/funPic/funPic12.png", title: "金牌大廚", rating: "6.4", duration: "1h42m"},
      ]
    }

    /*動漫 種類資料 (更多)*/
    const animaneMorePage = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "moviePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/lovePic/lovePic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/lovePic/lovePic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/lovePic/lovePic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/lovePic/lovePic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "moviePics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/horrorPic/horrorPic5.png", title: "血色森林", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "moviePics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/susPic/susPic4.png", title: "謊言的碎片", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/susPic/susPic5.png", title: "時光編碼", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/susPic/susPic6.png", title: "密室遺言", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/susPic/susPic7.png", title: "記憶裂痕", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/susPic/susPic8.png", title: "深淵的訊號", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/susPic/susPic9.png", title: "影子城市", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/susPic/susPic10.png", title: "獵殺潛伏", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/susPic/susPic12.png", title: "最終的線索", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "moviePics/funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m"},
        {img: "moviePics/funPic/funPic2.png", title: "超能奶爸", rating: "8.3", duration: "1h37m"},
        {img: "moviePics/funPic/funPic3.png", title: "烏龍特警", rating: "9.1", duration: "1h19m"},
        {img: "moviePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "6.5", duration: "1h31m"},
        {img: "moviePics/funPic/funPic5.png", title: "荒島大逃殺", rating: "5.2", duration: "1h24m"},
        {img: "moviePics/funPic/funPic6.png", title: "重返十七歲", rating: "6.4", duration: "2h22m"},
        {img: "moviePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "8.2", duration: "1h23m"},
        {img: "moviePics/funPic/funPic8.png", title: "我的機器人女友", rating: "7.7", duration: "1h45m"},
        {img: "moviePics/funPic/funPic9.png", title: "老闆不在家", rating: "9.4", duration: "1h13m"},
        {img: "moviePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "6.2", duration: "2h03m"},
        {img: "moviePics/funPic/funPic11.png", title: "狗狗特工", rating: "8.9", duration: "1h20m"},
        {img: "moviePics/funPic/funPic12.png", title: "金牌大廚", rating: "6.4", duration: "1h42m"},
      ]
    }

    /*電視劇 種類資料 (更多)*/
    const tvMorePage = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "tvPics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/lovePic/lovePic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/lovePic/lovePic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/lovePic/lovePic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "tvPics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "tvPics/lovePic/lovePic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "tvPics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/horrorPic/horrorPic5.png", title: "血色森林", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "6.2", duration: "2h03m"},
        {img: "tvPics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.9", duration: "1h20m"},
        {img: "tvPics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "tvPics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/susPic/susPic4.png", title: "謊言的碎片", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/susPic/susPic5.png", title: "時光編碼", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/susPic/susPic6.png", title: "密室遺言", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/susPic/susPic7.png", title: "記憶裂痕", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/susPic/susPic8.png", title: "深淵的訊號", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/susPic/susPic9.png", title: "影子城市", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/susPic/susPic10.png", title: "獵殺潛伏", rating: "6.2", duration: "2h03m"},
        {img: "tvPics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.9", duration: "1h20m"},
        {img: "tvPics/susPic/susPic12.png", title: "最終的線索", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "tvPics/funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m"},
        {img: "tvPics/funPic/funPic2.png", title: "超能奶爸", rating: "8.3", duration: "1h37m"},
        {img: "tvPics/funPic/funPic3.png", title: "烏龍特警", rating: "9.1", duration: "1h19m"},
        {img: "tvPics/funPic/funPic4.png", title: "我的室友是外星人", rating: "6.5", duration: "1h31m"},
        {img: "tvPics/funPic/funPic5.png", title: "荒島大逃殺", rating: "5.2", duration: "1h24m"},
        {img: "tvPics/funPic/funPic6.png", title: "重返十七歲", rating: "6.4", duration: "2h22m"},
        {img: "tvPics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "8.2", duration: "1h23m"},
        {img: "tvPics/funPic/funPic8.png", title: "我的機器人女友", rating: "7.7", duration: "1h45m"},
        {img: "tvPics/funPic/funPic9.png", title: "老闆不在家", rating: "9.4", duration: "1h13m"},
        {img: "tvPics/funPic/funPic10.png", title: "求愛特攻隊", rating: "6.2", duration: "2h03m"},
        {img: "tvPics/funPic/funPic11.png", title: "狗狗特工", rating: "8.9", duration: "1h20m"},
        {img: "tvPics/funPic/funPic12.png", title: "金牌大廚", rating: "6.4", duration: "1h42m"},
      ]
    }
