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
        {img: "moviePics/lovePic/lovePic12.png", title: "愛的力量", rating: "5.9", duration: "1h30m"},
        {img: "moviePics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.7", duration: "2h18m"},
        {img: "moviePics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "7.6", duration: "1h00m"},
        {img: "moviePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.1", duration: "1h58m"},
        {img: "moviePics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "6.3", duration: "2h24m"},
        {img: "moviePics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "7.9", duration: "1h26m"},
        {img: "moviePics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "8.2", duration: "1h45m"},
        {img: "moviePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.5", duration: "2h07m"},
        {img: "moviePics/lovePic/lovePic4.png", title: "擁抱星空", rating: "6.8", duration: "1h12m"},
        {img: "moviePics/lovePic/lovePic3.png", title: "最後一封情書", rating: "9.3", duration: "1h38m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "moviePics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "2h12m"},
        {img: "moviePics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.1", duration: "1h49m"},
        {img: "moviePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "5.8", duration: "1h15m"},
        {img: "moviePics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.2", duration: "2h26m"},
        {img: "moviePics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "6.9", duration: "1h27m"},
        {img: "moviePics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "7.7", duration: "1h53m"},
        {img: "moviePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "8.8", duration: "2h05m"},
        {img: "moviePics/horrorPic/horrorPic5.png", title: "血色森林", rating: "5.1", duration: "1h09m"},
        {img: "moviePics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "7.3", duration: "1h41m"},
        {img: "moviePics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.4", duration: "2h18m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "moviePics/susPic/susPic12.png", title: "最終的線索", rating: "5.3", duration: "1h59m"},
        {img: "moviePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.8", duration: "1h22m"},
        {img: "moviePics/susPic/susPic10.png", title: "獵殺潛伏", rating: "7.5", duration: "2h08m"},
        {img: "moviePics/susPic/susPic9.png", title: "影子城市", rating: "6.8", duration: "1h56m"},
        {img: "moviePics/susPic/susPic8.png", title: "深淵的訊號", rating: "8.3", duration: "1h42m"},
        {img: "moviePics/susPic/susPic7.png", title: "記憶裂痕", rating: "5.7", duration: "2h25m"},
        {img: "moviePics/susPic/susPic6.png", title: "密室遺言", rating: "9.1", duration: "1h14m"},
        {img: "moviePics/susPic/susPic5.png", title: "時光編碼", rating: "7.4", duration: "2h19m"},
        {img: "moviePics/susPic/susPic4.png", title: "謊言的碎片", rating: "6.2", duration: "1h37m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.5", duration: "1h29m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "moviePics/funPic/funPic12.png", title: "金牌大廚", rating: "6.1", duration: "1h31m"},
        {img: "moviePics/funPic/funPic11.png", title: "狗狗特工", rating: "7.8", duration: "2h22m"},
        {img: "moviePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "5.4", duration: "1h52m"},
        {img: "moviePics/funPic/funPic9.png", title: "老闆不在家", rating: "6.7", duration: "1h40m"},
        {img: "moviePics/funPic/funPic8.png", title: "我的機器人女友", rating: "9.2", duration: "2h09m"},
        {img: "moviePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "7.5", duration: "1h27m"},
        {img: "moviePics/funPic/funPic6.png", title: "重返十七歲", rating: "8.1", duration: "1h55m"},
        {img: "moviePics/funPic/funPic5.png", title: "荒島大逃殺", rating: "5.8", duration: "2h14m"},
        {img: "moviePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "9.6", duration: "1h18m"},
        {img: "moviePics/funPic/funPic3.png", title: "烏龍特警", rating: "6.4", duration: "1h33m"},
      ]
    }
                        /*============================================================
                                            動漫 種類資料 (最新) 
                          ============================================================*/
    const animaneLatest = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "animanePics/lovePic/lovePic12.png", title: "最後一次心動練習", rating: "5.9", duration: "1h33m"},
        {img: "animanePics/lovePic/lovePic11.png", title: "你的名字還沒出現", rating: "8.7", duration: "2h11m"},
        {img: "animanePics/lovePic/lovePic10.png", title: "透明情書實驗室", rating: "7.6", duration: "1h05m"},
        {img: "animanePics/lovePic/lovePic9.png", title: "那年夏天沒有結束", rating: "9.1", duration: "1h58m"},
        {img: "animanePics/lovePic/lovePic8.png", title: "戀愛體溫37.8℃", rating: "6.3", duration: "2h24m"},
        {img: "animanePics/lovePic/lovePic7.png", title: "星座說我們會分開", rating: "7.9", duration: "1h26m"},
        {img: "animanePics/lovePic/lovePic6.png", title: "放學後的第零次告白", rating: "8.2", duration: "1h45m"},
        {img: "animanePics/lovePic/lovePic5.png", title: "回憶只剩你未刪除", rating: "5.5", duration: "2h07m"},
        {img: "animanePics/lovePic/lovePic4.png", title: "戀愛預報90%", rating: "6.8", duration: "1h12m"},
        {img: "animanePics/lovePic/lovePic3.png", title: "櫻色導航系統", rating: "9.4", duration: "1h38m"},
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "animanePics/horrorPic/horrorPic12.png", title: "門外的腳步數到十", rating: "6.4", duration: "2h12m"},
        {img: "animanePics/horrorPic/horrorPic11.png", title: "無人接聽的廣播室", rating: "8.1", duration: "1h49m"},
        {img: "animanePics/horrorPic/horrorPic10.png", title: "校車最後一站", rating: "5.8", duration: "1h15m"},
        {img: "animanePics/horrorPic/horrorPic9.png", title: "影子晚歸", rating: "9.2", duration: "2h26m"},
        {img: "animanePics/horrorPic/horrorPic8.png", title: "停格的監視畫面", rating: "6.9", duration: "1h27m"},
        {img: "animanePics/horrorPic/horrorPic7.png", title: "404號病房", rating: "7.7", duration: "1h53m"},
        {img: "animanePics/horrorPic/horrorPic6.png", title: "白色雨夜", rating: "8.8", duration: "2h05m"},
        {img: "animanePics/horrorPic/horrorPic5.png", title: "替身出席者", rating: "5.1", duration: "1h09m"},
        {img: "animanePics/horrorPic/horrorPic4.png", title: "沒有瞳孔的照片", rating: "7.3", duration: "1h41m"},
        {img: "animanePics/horrorPic/horrorPic3.png", title: "笑聲來自天花板", rating: "9.4", duration: "2h18m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "animanePics/susPic/susPic12.png", title: "最後的版本更新", rating: "5.3", duration: "1h59m"},
        {img: "animanePics/susPic/susPic11.png", title: "匿名檔案X", rating: "8.8", duration: "1h22m"},
        {img: "animanePics/susPic/susPic10.png", title: "密室之外", rating: "7.5", duration: "2h08m"},
        {img: "animanePics/susPic/susPic9.png", title: "複製人格計畫", rating: "6.8", duration: "1h56m"},
        {img: "animanePics/susPic/susPic8.png", title: "交換不在場證明", rating: "8.3", duration: "1h42m"},
        {img: "animanePics/susPic/susPic7.png", title: "錯誤時間線", rating: "5.7", duration: "2h25m"},
        {img: "animanePics/susPic/susPic6.png", title: "消失的監控角度", rating: "9.1", duration: "1h14m"},
        {img: "animanePics/susPic/susPic5.png", title: "沉睡證據", rating: "7.4", duration: "2h19m"},
        {img: "animanePics/susPic/susPic4.png", title: "說謊者的指紋", rating: "6.2", duration: "1h37m"},
        {img: "animanePics/susPic/susPic3.png", title: "第十二個旁觀者", rating: "9.5", duration: "1h29m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "animanePics/funPic/funPic12.png", title: "全校第一倒數", rating: "6.1", duration: "1h31m"},
        {img: "animanePics/funPic/funPic11.png", title: "貓咪部長上任中", rating: "7.8", duration: "2h22m"},
        {img: "animanePics/funPic/funPic10.png", title: "轉生後我還是社畜", rating: "5.4", duration: "1h52m"},
        {img: "animanePics/funPic/funPic9.png", title: "勇者的休假申請", rating: "6.7", duration: "1h40m"},
        {img: "animanePics/funPic/funPic8.png", title: "天才其實搞錯了", rating: "9.2", duration: "2h09m"},
        {img: "animanePics/funPic/funPic7.png", title: "魔法少女不上班", rating: "7.5", duration: "1h27m"},
        {img: "animanePics/funPic/funPic6.png", title: "社團經費爭奪戰", rating: "8.1", duration: "1h55m"},
        {img: "animanePics/funPic/funPic5.png", title: "外星人轉學生很普通", rating: "5.8", duration: "2h14m"},
        {img: "animanePics/funPic/funPic4.png", title: "我的技能是吐槽", rating: "9.6", duration: "1h18m"},
        {img: "animanePics/funPic/funPic3.png", title: "打工拯救世界", rating: "6.4", duration: "1h33m"},
      ]
    }
                        /*============================================================
                                            電視劇 種類資料 (最新) 
                          ============================================================*/
    const tvLatest = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "tvPics/lovePic/lovePic12.png", title: "時間允許我們相愛", rating: "8.1", duration: "1h12m"},
        {img: "tvPics/lovePic/lovePic11.png", title: "不小心愛上你", rating: "5.4", duration: "2h03m"},
        {img: "tvPics/lovePic/lovePic10.png", title: "我們之間的那條街", rating: "7.8", duration: "1h58m"},
        {img: "tvPics/lovePic/lovePic9.png", title: "愛在迷路之後", rating: "9.6", duration: "1h40m"},
        {img: "tvPics/lovePic/lovePic8.png", title: "戀愛天氣預報", rating: "6.3", duration: "2h24m"},
        {img: "tvPics/lovePic/lovePic7.png", title: "等你下班", rating: "7.1", duration: "1h28m"},
        {img: "tvPics/lovePic/lovePic6.png", title: "那年夏天的最後一封信", rating: "8.5", duration: "1h55m"},
        {img: "tvPics/lovePic/lovePic5.png", title: "城市另一端的你", rating: "5.7", duration: "2h08m"},
        {img: "tvPics/lovePic/lovePic4.png", title: "愛情延遲三秒", rating: "6.9", duration: "1h15m"},
        {img: "tvPics/lovePic/lovePic3.png", title: "你在我的未來裡", rating: "9.2", duration: "1h30m"},
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "tvPics/horrorPic/horrorPic12.png", title: "最後一班校車", rating: "8.4", duration: "1h57m"},
        {img: "tvPics/horrorPic/horrorPic11.png", title: "紅色雨夜", rating: "7.2", duration: "1h20m"},
        {img: "tvPics/horrorPic/horrorPic10.png", title: "夜班醫院", rating: "5.9", duration: "2h18m"},
        {img: "tvPics/horrorPic/horrorPic9.png", title: "停電之後", rating: "9.5", duration: "1h44m"},
        {img: "tvPics/horrorPic/horrorPic8.png", title: "沒有名字的墓碑", rating: "7.9", duration: "2h05m"},
        {img: "tvPics/horrorPic/horrorPic7.png", title: "窗外一直有人看著", rating: "6.8", duration: "1h33m"},
        {img: "tvPics/horrorPic/horrorPic6.png", title: "第七天消失", rating: "8.1", duration: "2h21m"},
        {img: "tvPics/horrorPic/horrorPic5.png", title: "白色走廊", rating: "5.2", duration: "1h49m"},
        {img: "tvPics/horrorPic/horrorPic4.png", title: "影子不跟著我", rating: "7.5", duration: "1h08m"},
        {img: "tvPics/horrorPic/horrorPic3.png", title: "門外的腳步聲", rating: "9.3", duration: "2h15m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "tvPics/susPic/susPic12.png", title: "重複的那一天", rating: "7.7", duration: "2h15m"},
        {img: "tvPics/susPic/susPic11.png", title: "最後的證人", rating: "5.6", duration: "1h50m"},
        {img: "tvPics/susPic/susPic10.png", title: "失控調查局", rating: "8.4", duration: "2h06m"},
        {img: "tvPics/susPic/susPic9.png", title: "錯位人生", rating: "9.1", duration: "1h18m"},
        {img: "tvPics/susPic/susPic8.png", title: "沉默的錄音帶", rating: "6.5", duration: "1h41m"},
        {img: "tvPics/susPic/susPic7.png", title: "誰改寫了真相", rating: "7.3", duration: "2h28m"},
        {img: "tvPics/susPic/susPic6.png", title: "完美的不在場證明", rating: "8.9", duration: "1h36m"},
        {img: "tvPics/susPic/susPic5.png", title: "黑名單計畫", rating: "5.8", duration: "2h11m"},
        {img: "tvPics/susPic/susPic4.png", title: "倒數48小時", rating: "6.1", duration: "1h59m"},
        {img: "tvPics/susPic/susPic3.png", title: "匿名舉報人", rating: "9.4", duration: "1h24m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "tvPics/funPic/funPic12.png", title: "誰把我的人生調成困難模式", rating: "6.5", duration: "2h10m"},
        {img: "tvPics/funPic/funPic11.png", title: "我的主管像小孩", rating: "7.6", duration: "1h29m"},
        {img: "tvPics/funPic/funPic10.png", title: "假裝成熟的大人", rating: "5.8", duration: "1h48m"},
        {img: "tvPics/funPic/funPic9.png", title: "全公司都誤會我", rating: "9.4", duration: "2h05m"},
        {img: "tvPics/funPic/funPic8.png", title: "家裡突然多了一群人", rating: "6.7", duration: "1h40m"},
        {img: "tvPics/funPic/funPic7.png", title: "人生重開機", rating: "7.9", duration: "2h26m"},
        {img: "tvPics/funPic/funPic6.png", title: "隔壁鄰居太熱心", rating: "8.3", duration: "1h53m"},
        {img: "tvPics/funPic/funPic5.png", title: "社恐也要上班", rating: "5.1", duration: "2h18m"},
        {img: "tvPics/funPic/funPic4.png", title: "我真的不是天才", rating: "9.7", duration: "1h12m"},
        {img: "tvPics/funPic/funPic3.png", title: "誤會大聯盟", rating: "6.2", duration: "1h25m"},
      ]
    }


                          /*============================================================
                                              電影 種類資料 (熱門精選) 
                          ============================================================*/
    const movieHot = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "moviePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "8.4", duration: "1h52m"},
        {img: "moviePics/lovePic/lovePic2.png", title: "時光之約", rating: "7.1", duration: "2h15m"},
        {img: "moviePics/lovePic/lovePic3.png", title: "最後一封情書", rating: "9.3", duration: "1h38m"},
        {img: "moviePics/lovePic/lovePic4.png", title: "擁抱星空", rating: "6.8", duration: "1h12m"},
        {img: "moviePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.5", duration: "2h07m"},
        {img: "moviePics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "8.2", duration: "1h45m"},
        {img: "moviePics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "7.9", duration: "1h26m"},
        {img: "moviePics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "6.3", duration: "2h24m"},
        {img: "moviePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.1", duration: "1h58m"},
        {img: "moviePics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "7.6", duration: "1h00m"},
        {img: "moviePics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.7", duration: "2h18m"},
        {img: "moviePics/lovePic/lovePic12.png", title: "愛的力量", rating: "5.9", duration: "1h30m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "moviePics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "6.2", duration: "1h58m"},
        {img: "moviePics/horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.5", duration: "1h24m"},
        {img: "moviePics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.4", duration: "2h18m"},
        {img: "moviePics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "7.3", duration: "1h41m"},
        {img: "moviePics/horrorPic/horrorPic5.png", title: "血色森林", rating: "5.1", duration: "1h09m"},
        {img: "moviePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "8.8", duration: "2h05m"},
        {img: "moviePics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "7.7", duration: "1h53m"},
        {img: "moviePics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "6.9", duration: "1h27m"},
        {img: "moviePics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.2", duration: "2h26m"},
        {img: "moviePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "5.8", duration: "1h15m"},
        {img: "moviePics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.1", duration: "1h49m"},
        {img: "moviePics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "2h12m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "moviePics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.9", duration: "2h03m"},
        {img: "moviePics/susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.6", duration: "1h51m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.5", duration: "1h29m"},
        {img: "moviePics/susPic/susPic4.png", title: "謊言的碎片", rating: "6.2", duration: "1h37m"},
        {img: "moviePics/susPic/susPic5.png", title: "時光編碼", rating: "7.4", duration: "2h19m"},
        {img: "moviePics/susPic/susPic6.png", title: "密室遺言", rating: "9.1", duration: "1h14m"},
        {img: "moviePics/susPic/susPic7.png", title: "記憶裂痕", rating: "5.7", duration: "2h25m"},
        {img: "moviePics/susPic/susPic8.png", title: "深淵的訊號", rating: "8.3", duration: "1h42m"},
        {img: "moviePics/susPic/susPic9.png", title: "影子城市", rating: "6.8", duration: "1h56m"},
        {img: "moviePics/susPic/susPic10.png", title: "獵殺潛伏", rating: "7.5", duration: "2h08m"},
        {img: "moviePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.8", duration: "1h22m"},
        {img: "moviePics/susPic/susPic12.png", title: "最終的線索", rating: "5.3", duration: "1h59m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "moviePics/funPic/funPic1.png", title: "落跑新郎", rating: "7.2", duration: "1h46m"},
        {img: "moviePics/funPic/funPic2.png", title: "超能奶爸", rating: "8.9", duration: "2h01m"},
        {img: "moviePics/funPic/funPic3.png", title: "烏龍特警", rating: "6.4", duration: "1h33m"},
        {img: "moviePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "9.6", duration: "1h18m"},
        {img: "moviePics/funPic/funPic5.png", title: "荒島大逃殺", rating: "5.8", duration: "2h14m"},
        {img: "moviePics/funPic/funPic6.png", title: "重返十七歲", rating: "8.1", duration: "1h55m"},
        {img: "moviePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "7.5", duration: "1h27m"},
        {img: "moviePics/funPic/funPic8.png", title: "我的機器人女友", rating: "9.2", duration: "2h09m"},
        {img: "moviePics/funPic/funPic9.png", title: "老闆不在家", rating: "6.7", duration: "1h40m"},
        {img: "moviePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "5.4", duration: "1h52m"},
        {img: "moviePics/funPic/funPic11.png", title: "狗狗特工", rating: "7.8", duration: "2h22m"},
        {img: "moviePics/funPic/funPic12.png", title: "金牌大廚", rating: "6.1", duration: "1h31m"}
      ]
    }

                        /*============================================================
                                              動漫 種類資料 (熱門精選) 
                          ============================================================*/
    const animaneHot = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "animanePics/lovePic/lovePic1.png", title: "告白在日落之後", rating: "8.6", duration: "1h52m"},
        {img: "animanePics/lovePic/lovePic2.png", title: "借來的心跳聲", rating: "7.1", duration: "2h15m"},
        {img: "animanePics/lovePic/lovePic3.png", title: "櫻色導航系統", rating: "9.4", duration: "1h38m"},
        {img: "animanePics/lovePic/lovePic4.png", title: "戀愛預報90%", rating: "6.8", duration: "1h12m"},
        {img: "animanePics/lovePic/lovePic5.png", title: "回憶只剩你未刪除", rating: "5.5", duration: "2h07m"},
        {img: "animanePics/lovePic/lovePic6.png", title: "放學後的第零次告白", rating: "8.2", duration: "1h45m"},
        {img: "animanePics/lovePic/lovePic7.png", title: "星座說我們會分開", rating: "7.9", duration: "1h26m"},
        {img: "animanePics/lovePic/lovePic8.png", title: "戀愛體溫37.8℃", rating: "6.3", duration: "2h24m"},
        {img: "animanePics/lovePic/lovePic9.png", title: "那年夏天沒有結束", rating: "9.1", duration: "1h58m"},
        {img: "animanePics/lovePic/lovePic10.png", title: "透明情書實驗室", rating: "7.6", duration: "1h05m"},
        {img: "animanePics/lovePic/lovePic11.png", title: "你的名字還沒出現", rating: "8.7", duration: "2h11m"},
        {img: "animanePics/lovePic/lovePic12.png", title: "最後一次心動練習", rating: "5.9", duration: "1h33m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "animanePics/horrorPic/horrorPic1.png", title: "深夜自習室第九排", rating: "6.2", duration: "1h58m"},
        {img: "animanePics/horrorPic/horrorPic2.png", title: "電梯顯示-1樓", rating: "8.5", duration: "1h24m"},
        {img: "animanePics/horrorPic/horrorPic3.png", title: "笑聲來自天花板", rating: "9.4", duration: "2h18m"},
        {img: "animanePics/horrorPic/horrorPic4.png", title: "沒有瞳孔的照片", rating: "7.3", duration: "1h41m"},
        {img: "animanePics/horrorPic/horrorPic5.png", title: "替身出席者", rating: "5.1", duration: "1h09m"},
        {img: "animanePics/horrorPic/horrorPic6.png", title: "白色雨夜", rating: "8.8", duration: "2h05m"},
        {img: "animanePics/horrorPic/horrorPic7.png", title: "404號病房", rating: "7.7", duration: "1h53m"},
        {img: "animanePics/horrorPic/horrorPic8.png", title: "停格的監視畫面", rating: "6.9", duration: "1h27m"},
        {img: "animanePics/horrorPic/horrorPic9.png", title: "影子晚歸", rating: "9.2", duration: "2h26m"},
        {img: "animanePics/horrorPic/horrorPic10.png", title: "校車最後一站", rating: "5.8", duration: "1h15m"},
        {img: "animanePics/horrorPic/horrorPic11.png", title: "無人接聽的廣播室", rating: "8.1", duration: "1h49m"},
        {img: "animanePics/horrorPic/horrorPic12.png", title: "門外的腳步數到十", rating: "6.4", duration: "2h12m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "animanePics/susPic/susPic1.png", title: "昨日嫌疑人", rating: "7.9", duration: "2h03m"},
        {img: "animanePics/susPic/susPic2.png", title: "城市記憶備份檔", rating: "8.6", duration: "1h51m"},
        {img: "animanePics/susPic/susPic3.png", title: "第十二個旁觀者", rating: "9.5", duration: "1h29m"},
        {img: "animanePics/susPic/susPic4.png", title: "說謊者的指紋", rating: "6.2", duration: "1h37m"},
        {img: "animanePics/susPic/susPic5.png", title: "沉睡證據", rating: "7.4", duration: "2h19m"},
        {img: "animanePics/susPic/susPic6.png", title: "消失的監控角度", rating: "9.1", duration: "1h14m"},
        {img: "animanePics/susPic/susPic7.png", title: "錯誤時間線", rating: "5.7", duration: "2h25m"},
        {img: "animanePics/susPic/susPic8.png", title: "交換不在場證明", rating: "8.3", duration: "1h42m"},
        {img: "animanePics/susPic/susPic9.png", title: "複製人格計畫", rating: "6.8", duration: "1h56m"},
        {img: "animanePics/susPic/susPic10.png", title: "密室之外", rating: "7.5", duration: "2h08m"},
        {img: "animanePics/susPic/susPic11.png", title: "匿名檔案X", rating: "8.8", duration: "1h22m"},
        {img: "animanePics/susPic/susPic12.png", title: "最後的版本更新", rating: "5.3", duration: "1h59m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "animanePics/funPic/funPic1.png", title: "魔王的實習第一天", rating: "7.2", duration: "1h46m"},
        {img: "animanePics/funPic/funPic2.png", title: "全村最弱勇者", rating: "8.9", duration: "2h01m"},
        {img: "animanePics/funPic/funPic3.png", title: "打工拯救世界", rating: "6.4", duration: "1h33m"},
        {img: "animanePics/funPic/funPic4.png", title: "我的技能是吐槽", rating: "9.6", duration: "1h18m"},
        {img: "animanePics/funPic/funPic5.png", title: "外星人轉學生很普通", rating: "5.8", duration: "2h14m"},
        {img: "animanePics/funPic/funPic6.png", title: "社團經費爭奪戰", rating: "8.1", duration: "1h55m"},
        {img: "animanePics/funPic/funPic7.png", title: "魔法少女不上班", rating: "7.5", duration: "1h27m"},
        {img: "animanePics/funPic/funPic8.png", title: "天才其實搞錯了", rating: "9.2", duration: "2h09m"},
        {img: "animanePics/funPic/funPic9.png", title: "勇者的休假申請", rating: "6.7", duration: "1h40m"},
        {img: "animanePics/funPic/funPic10.png", title: "轉生後我還是社畜", rating: "5.4", duration: "1h52m"},
        {img: "animanePics/funPic/funPic11.png", title: "貓咪部長上任中", rating: "7.8", duration: "2h22m"},
        {img: "animanePics/funPic/funPic12.png", title: "全校第一倒數", rating: "6.1", duration: "1h31m"}
      ]
    }

                        /*============================================================
                                            電視劇 種類資料 (熱門精選) 
                          ============================================================*/
    const tvHot = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "tvPics/lovePic/lovePic1.png", title: "如果那天我們沒有錯過", rating: "8.8", duration: "1h45m"},
        {img: "tvPics/lovePic/lovePic2.png", title: "晚風裡的告白", rating: "7.4", duration: "2h12m"},
        {img: "tvPics/lovePic/lovePic3.png", title: "你在我的未來裡", rating: "9.2", duration: "1h30m"},
        {img: "tvPics/lovePic/lovePic4.png", title: "愛情延遲三秒", rating: "6.9", duration: "1h15m"},
        {img: "tvPics/lovePic/lovePic5.png", title: "城市另一端的你", rating: "5.7", duration: "2h08m"},
        {img: "tvPics/lovePic/lovePic6.png", title: "那年夏天的最後一封信", rating: "8.5", duration: "1h55m"},
        {img: "tvPics/lovePic/lovePic7.png", title: "等你下班", rating: "7.1", duration: "1h28m"},
        {img: "tvPics/lovePic/lovePic8.png", title: "戀愛天氣預報", rating: "6.3", duration: "2h24m"},
        {img: "tvPics/lovePic/lovePic9.png", title: "愛在迷路之後", rating: "9.6", duration: "1h40m"},
        {img: "tvPics/lovePic/lovePic10.png", title: "我們之間的那條街", rating: "7.8", duration: "1h58m"},
        {img: "tvPics/lovePic/lovePic11.png", title: "不小心愛上你", rating: "5.4", duration: "2h03m"},
        {img: "tvPics/lovePic/lovePic12.png", title: "時間允許我們相愛", rating: "8.1", duration: "1h12m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "tvPics/horrorPic/horrorPic1.png", title: "凌晨三點的電梯", rating: "6.4", duration: "1h52m"},
        {img: "tvPics/horrorPic/horrorPic2.png", title: "那棟沒人搬走的公寓", rating: "8.7", duration: "1h26m"},
        {img: "tvPics/horrorPic/horrorPic3.png", title: "門外的腳步聲", rating: "9.3", duration: "2h15m"},
        {img: "tvPics/horrorPic/horrorPic4.png", title: "影子不跟著我", rating: "7.5", duration: "1h08m"},
        {img: "tvPics/horrorPic/horrorPic5.png", title: "白色走廊", rating: "5.2", duration: "1h49m"},
        {img: "tvPics/horrorPic/horrorPic6.png", title: "第七天消失", rating: "8.1", duration: "2h21m"},
        {img: "tvPics/horrorPic/horrorPic7.png", title: "窗外一直有人看著", rating: "6.8", duration: "1h33m"},
        {img: "tvPics/horrorPic/horrorPic8.png", title: "沒有名字的墓碑", rating: "7.9", duration: "2h05m"},
        {img: "tvPics/horrorPic/horrorPic9.png", title: "停電之後", rating: "9.5", duration: "1h44m"},
        {img: "tvPics/horrorPic/horrorPic10.png", title: "夜班醫院", rating: "5.9", duration: "2h18m"},
        {img: "tvPics/horrorPic/horrorPic11.png", title: "紅色雨夜", rating: "7.2", duration: "1h20m"},
        {img: "tvPics/horrorPic/horrorPic12.png", title: "最後一班校車", rating: "8.4", duration: "1h57m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "tvPics/susPic/susPic1.png", title: "消失的證據", rating: "8.2", duration: "2h02m"},
        {img: "tvPics/susPic/susPic2.png", title: "城市沒有昨天", rating: "7.6", duration: "1h47m"},
        {img: "tvPics/susPic/susPic3.png", title: "匿名舉報人", rating: "9.4", duration: "1h24m"},
        {img: "tvPics/susPic/susPic4.png", title: "倒數48小時", rating: "6.1", duration: "1h59m"},
        {img: "tvPics/susPic/susPic5.png", title: "黑名單計畫", rating: "5.8", duration: "2h11m"},
        {img: "tvPics/susPic/susPic6.png", title: "完美的不在場證明", rating: "8.9", duration: "1h36m"},
        {img: "tvPics/susPic/susPic7.png", title: "誰改寫了真相", rating: "7.3", duration: "2h28m"},
        {img: "tvPics/susPic/susPic8.png", title: "沉默的錄音帶", rating: "6.5", duration: "1h41m"},
        {img: "tvPics/susPic/susPic9.png", title: "錯位人生", rating: "9.1", duration: "1h18m"},
        {img: "tvPics/susPic/susPic10.png", title: "失控調查局", rating: "8.4", duration: "2h06m"},
        {img: "tvPics/susPic/susPic11.png", title: "最後的證人", rating: "5.6", duration: "1h50m"},
        {img: "tvPics/susPic/susPic12.png", title: "重複的那一天", rating: "7.7", duration: "2h15m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "tvPics/funPic/funPic1.png", title: "老闆今天心情不好", rating: "7.4", duration: "1h42m"},
        {img: "tvPics/funPic/funPic2.png", title: "我的室友很離譜", rating: "8.8", duration: "2h01m"},
        {img: "tvPics/funPic/funPic3.png", title: "誤會大聯盟", rating: "6.2", duration: "1h25m"},
        {img: "tvPics/funPic/funPic4.png", title: "我真的不是天才", rating: "9.7", duration: "1h12m"},
        {img: "tvPics/funPic/funPic5.png", title: "社恐也要上班", rating: "5.1", duration: "2h18m"},
        {img: "tvPics/funPic/funPic6.png", title: "隔壁鄰居太熱心", rating: "8.3", duration: "1h53m"},
        {img: "tvPics/funPic/funPic7.png", title: "人生重開機", rating: "7.9", duration: "2h26m"},
        {img: "tvPics/funPic/funPic8.png", title: "家裡突然多了一群人", rating: "6.7", duration: "1h40m"},
        {img: "tvPics/funPic/funPic9.png", title: "全公司都誤會我", rating: "9.4", duration: "2h05m"},
        {img: "tvPics/funPic/funPic10.png", title: "假裝成熟的大人", rating: "5.8", duration: "1h48m"},
        {img: "tvPics/funPic/funPic11.png", title: "我的主管像小孩", rating: "7.6", duration: "1h29m"},
        {img: "tvPics/funPic/funPic12.png", title: "誰把我的人生調成困難模式", rating: "6.5", duration: "2h10m"}
      ]
    }

                        /*============================================================
                                            電影 種類資料 (更多) 
                          ============================================================*/
      const movieMore = [
        {img: "moviePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "8.4", duration: "1h52m"},
        {img: "moviePics/horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.5", duration: "1h24m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.5", duration: "1h29m"},
        {img: "moviePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "9.6", duration: "1h18m"},
        {img: "moviePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.5", duration: "2h07m"},
        {img: "moviePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "8.8", duration: "2h05m"},
        {img: "moviePics/susPic/susPic7.png", title: "記憶裂痕", rating: "5.7", duration: "2h25m"},
        {img: "moviePics/funPic/funPic8.png", title: "我的機器人女友", rating: "9.2", duration: "2h09m"},
        {img: "moviePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.1", duration: "1h58m"},
        {img: "moviePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "5.8", duration: "1h15m"},
        {img: "moviePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.8", duration: "1h22m"},
        {img: "moviePics/funPic/funPic12.png", title: "金牌大廚", rating: "6.1", duration: "1h31m"}
      ];
                        /*============================================================
                                            動漫 種類資料 (更多) 
                          ============================================================*/
      const animaneMore = [
        {img: "animanePics/lovePic/lovePic1.png", title: "告白在日落之後", rating: "8.6", duration: "1h52m"},
        {img: "animanePics/horrorPic/horrorPic2.png", title: "電梯顯示-1樓", rating: "8.5", duration: "1h24m"},
        {img: "animanePics/susPic/susPic3.png", title: "第十二個旁觀者", rating: "9.5", duration: "1h29m"},
        {img: "animanePics/funPic/funPic4.png", title: "我的技能是吐槽", rating: "9.6", duration: "1h18m"},
        {img: "animanePics/lovePic/lovePic5.png", title: "回憶只剩你未刪除", rating: "5.5", duration: "2h07m"},
        {img: "animanePics/horrorPic/horrorPic6.png", title: "白色雨夜", rating: "8.8", duration: "2h05m"},
        {img: "animanePics/susPic/susPic7.png", title: "錯誤時間線", rating: "5.7", duration: "2h25m"},
        {img: "animanePics/funPic/funPic8.png", title: "天才其實搞錯了", rating: "9.2", duration: "2h09m"},
        {img: "animanePics/lovePic/lovePic9.png", title: "那年夏天沒有結束", rating: "9.1", duration: "1h58m"},
        {img: "animanePics/horrorPic/horrorPic10.png", title: "校車最後一站", rating: "5.8", duration: "1h15m"},
        {img: "animanePics/susPic/susPic11.png", title: "匿名檔案X", rating: "8.8", duration: "1h22m"},
        {img: "animanePics/funPic/funPic12.png", title: "全校第一倒數", rating: "6.1", duration: "1h31m"}
      ];
                        /*============================================================
                                            電視劇 種類資料 (更多) 
                          ============================================================*/
      const tvMore = [
        {img: "tvPics/lovePic/lovePic1.png", title: "如果那天我們沒有錯過", rating: "8.8", duration: "1h45m"},
        {img: "tvPics/horrorPic/horrorPic2.png", title: "那棟沒人搬走的公寓", rating: "8.7", duration: "1h26m"},
        {img: "tvPics/susPic/susPic3.png", title: "匿名舉報人", rating: "9.4", duration: "1h24m"},
        {img: "tvPics/funPic/funPic4.png", title: "我真的不是天才", rating: "9.7", duration: "1h12m"},
        {img: "tvPics/lovePic/lovePic5.png", title: "城市另一端的你", rating: "5.7", duration: "2h08m"},
        {img: "tvPics/horrorPic/horrorPic6.png", title: "第七天消失", rating: "8.1", duration: "2h21m"},
        {img: "tvPics/susPic/susPic7.png", title: "誰改寫了真相", rating: "7.3", duration: "2h28m"},
        {img: "tvPics/funPic/funPic8.png", title: "家裡突然多了一群人", rating: "6.2", duration: "2h13m"},
        {img: "tvPics/lovePic/lovePic9.png", title: "愛在迷路之後", rating: "9.6", duration: "1h40m"},
        {img: "tvPics/horrorPic/horrorPic10.png", title: "夜班醫院", rating: "5.9", duration: "2h18m"},
        {img: "tvPics/susPic/susPic11.png", title: "最後的證人", rating: "5.6", duration: "1h50m"},
        {img: "tvPics/funPic/funPic12.png", title: "誰把我的人生調成困難模式", rating: "6.5", duration: "2h10m"}
      ];

                        /*============================================================
                                            電影 種類資料 (影片介紹) 
                          ============================================================*/
    const movieIntro = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "moviePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "8.4", duration: "1h52m", director: "林曉彤", year: "2024", 
        tags: ["浪漫","愛情","科幻"], 
        desc1: "故事設定在近未來的台北，城市被永不熄滅的霓虹與浮空投影淹沒。在這科技冰冷、人際疏離的時代，台北化身為巨大的寂寞迷宮。雨後的街頭倒映著絢爛光影，模糊了現實邊界，為這場都市邂逅奠定了既科幻又感性的基調。", 
        desc2: "失意調酒師與尋憶攝影師在雨中偶然相遇，兩人在城市的隱秘角落尋找真實的共鳴。隨著感情升溫，一段隱藏在霓虹背後的秘密逐漸浮現。他們必須在虛假的光影吞噬彼此前，緊握雙手，守護這座城市中唯一的純粹溫度。"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "moviePics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "6.2", duration: "1h58m", director: "張慕凡", year: "2023", 
        tags: ["恐怖","驚悚","超自然"], 
        desc1: "這座被當地人稱為「血染莊園」的哥德式古宅，孤零零地矗立在荒蕪的森林深處，彷彿是一道拒絕癒合的傷口。傳說，百年前這裡曾發生過慘絕人寰的滅門血案，古宅的主人為了追求永生，與惡魔達成了禁忌的契約。自此，古宅便被詛咒包圍，牆壁中時常傳出低沉的哀嚎，任何踏入其中的人，都將成為古宅的犧牲品，靈魂永遠禁錮在黑暗之中。", 
        desc2: "年輕的歷史學者艾莉絲（化名），為了尋找失蹤的妹妹，不顧勸阻踏入了這座禁忌古宅。她身穿破舊的裙子，手中的燭光在黑暗中搖曳，彷彿隨時都會熄滅。每前進一步，古宅的牆壁都彷彿在低語，訴說著不為人知的恐怖。當艾莉絲緩緩走向二樓黑暗的樓梯口，她並不知道，那裡不僅僅是二樓的入口，更是通往無盡噩夢與古宅血腥真相的深淵。"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "moviePics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.9", duration: "2h03m", director: "高志明", year: "2025", 
        tags: ["懸疑","犯罪","心理"], 
        desc1: "故事發生在長年大霧籠罩的港口城市。這座城市在繁華霓虹下隱藏著腐敗與暗殺，各方勢力在迷霧中進行情報交易。灰藍色的街道與深棕色的老舊建築交織，形成一個無法逃脫的權力漩渦，真相如同海報上的濃霧，讓人始終看不清全貌。", 
        desc2: "一名神祕的檔案員意外目睹高層暗殺事件，成為唯一的活口。他穿著長風衣獨自走上拱橋，在濃霧中感知到監視者的存在。這不僅是一場橫跨城市的逃亡，更是一場心理博弈。他必須在霓虹燈火熄滅前，將足以撼動帝國的證詞交出，否則將永遠消失在迷霧之中。"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "moviePics/funPic/funPic1.png", title: "落跑新郎", rating: "7.2", duration: "1h46m", director: "周佩琪", year: "2024", 
        tags: ["喜劇","愛情","生活"], 
        desc1: "在一座陽光普照、步調繁忙的大都市，一場號稱「年度最完美」的豪門婚禮即將舉行。然而，在這個追求精準與面子的社交圈中，任何一點小差錯都會引發核彈級的災難，而這一切的混亂，竟然全源自於一個最不該缺席的人。", 
        desc2: "準新郎阿傑在宣誓前夕意外發現驚人秘密，穿著西裝與黃色小鴨拖鞋在大街上奪門而出。身後憤怒的伴郎團與穿禮服的哈巴狗緊追不捨，他在繁華街道上演一場爆笑逃亡，試圖在被抓回禮堂前，找回對真愛的定義與自由。"}
      ]
    }
                        /*============================================================
                                            動漫 種類資料 (影片介紹) 
                          ============================================================*/
    const animaneIntro = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "animanePics/lovePic/lovePic1.png", title: "告白在日落之後", rating: "8.6", duration: "1h52m", director: "新海誠一", year: "2024", 
        tags: ["青春","純愛","奇幻"], 
        desc1: "故事發生在一個被時間遺忘的海邊小鎮，據說當夕陽完全沒入海平線的瞬間，天空會短暫出現名為『幻景時刻』的裂縫，能讓分隔兩地的人傳達心聲。女主角七海一直暗戀著即將轉學的青梅竹馬，卻始終無法開口，她決定在日落的餘暉消失前，進行最後一次的冒險。", 
        desc2: "兩人奔跑在閃耀著橘紅色光芒的斜坡路上，影子拉得很長很長。當日落的倒數開始，原本平凡的告白竟引發了奇蹟般的時空重疊。在層層雲彩與絢麗光影的交織下，這場告白不僅是愛情的起點，更是關於珍惜當下與守護回憶的動人詩篇。"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "animanePics/horrorPic/horrorPic1.png", title: "深夜自習室第九排", rating: "6.2", duration: "1h58m", director: "佐藤健二", year: "2025", 
        tags: ["校園怪談","靈異","驚悚"], 
        desc1: "私立秀英高中有一則流傳已久的都市傳說：千萬不要在午夜十二點後留在自習室。傳聞中，自習室的第九排座位永遠是空的，但若你在此時回頭看，會發現那裡坐著一個正低頭翻書、卻沒有臉孔的學姐，她正在尋找下一個陪她讀書的『同班同學』。", 
        desc2: "為了準備補考，膽大的主角阿哲決定打破禁忌，在深夜獨自踏入靜謐得可怕的校舍。隨著時鐘指針重合，走廊傳來規律的腳步聲，自習室的燈光開始詭異閃爍。阿哲驚覺，原本空蕩的第九排座位，不知何時多出了一本打開的考卷，而上面寫著的名字，竟是他自己的…。"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "animanePics/susPic/susPic1.png", title: "昨日嫌疑人", rating: "7.9", duration: "2h03m", director: "押井守宏", year: "2024", 
        tags: ["科幻","解謎","時空旅行"], 
        desc1: "在未來世界，人們的記憶可以被數位化備份。一宗離奇的謀殺案發生，死者留下的最後一段記憶記錄卻與所有監視器畫面完全衝突。負責偵辦的警探發現，嫌疑犯竟然是二十四小時前已經在另一場意外中『死亡』的自己，這究竟是系統漏洞，還是有人在操弄時間？", 
        desc2: "穿梭在層層疊疊的高科技貧民窟，警探被迫與『昨日的自己』展開追逐。隨著真相逼近，他意識到這不只是單純的犯罪，而是涉及國家級記憶刪減計畫的巨大陰謀。在破碎的記憶與冰冷的代碼之間，他必須找出誰才是真正的嫌疑人，以及那段被強行抹除的『昨日真相』。"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "animanePics/funPic/funPic1.png", title: "魔王的實習第一天", rating: "7.2", duration: "1h46m", director: "水島精二", year: "2026", 
        tags: ["搞笑","異世界","職場"], 
        desc1: "統治魔界的強大魔王因經營不善導致財政崩潰，為了拯救瀕臨倒閉的魔王城，他決定屈就來到人間界的連鎖便利商店擔任實習生。原本以為能用魔法征服顧客，沒想到第一個難關竟然是如何在不弄壞掃描機的情況下，正確地刷開一盒微波便當。", 
        desc2: "穿著寬大的員工制服，魔王大人一邊抱怨著人間的人資制度，一邊被迫對著進店的勇者（其實是常客）大喊：『歡迎光臨！』。這場充滿文化衝突與社畜心酸的實習生活，在各種魔法誤用與脫線下屬的攪局中，發展成一連串讓人噴飯的日常爆笑喜劇。"}
      ]
    }
                        /*============================================================
                                            電視劇 種類資料 (影片介紹) 
                          ============================================================*/
    const tvIntro = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "tvPics/lovePic/lovePic1.png", title: "如果那天我們沒有錯過", rating: "8.8", duration: "1h45m", director: "林詩雨", year: "2024", 
        tags: ["現代遺憾","都市純愛","療癒"], 
        desc1: "故事發生在步調飛快的台北。這座城市每天有數萬人在捷運交會，卻有更多人在擦身而過中遺忘了初衷。雨後的信義區街頭，積水倒映著寂寞的霓虹，為這段關於『後悔』與『重逢』的故事鋪陳出感性且略帶憂傷的基調。", 
        desc2: "十年後，成為建築師的他在老家舊書店再次遇見那個女孩。如果當年他勇敢伸出手，現在的一切是否會不同？這部劇不只是談情說愛，更多的是在探討時間如何改變人的選擇，以及如何在遺憾中找回與自己和解的溫暖勇氣。"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "tvPics/horrorPic/horrorPic1.png", title: "凌晨三點的電梯", rating: "6.4", duration: "1h52m", director: "張慕凡", year: "2025", 
        tags: ["都市怪談","密閉空間","驚悚"], 
        desc1: "這是一棟位於鬧區、卻頻繁更換物業管理的老舊商辦大樓。傳說，只要在凌晨三點獨自搭乘這部電梯，並在關門前按下特定樓層，電梯便會載你前往一個『不屬於生者』的空間。原本只是上班族間的惡作劇傳聞，卻在數人離奇失蹤後，蒙上了陰沉的血色。", 
        desc2: "夜班保全阿強為了查明真相，在三點整踏入了電梯。隨著指示燈劇烈閃爍，電梯卻停在了不存在的『B5』層。當門緩緩打開，外面不是停車場，而是充滿低語聲的白色走廊。他必須在電梯門再次關上之前，找出逃離這場無限循環的唯一出路。"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "tvPics/susPic/susPic1.png", title: "消失的證據", rating: "8.2", duration: "2h02m", director: "高志遠", year: "2024", 
        tags: ["硬核犯罪","司法博弈","燒腦"], 
        desc1: "在證據至上的法治社會，如果關鍵證物在高度警戒的證物房裡憑空消失，真相是否也隨之葬送？這座冷色調的警政大樓隱藏著層層權力勾結，灰暗的偵訊室內，每個人的眼神背後都藏著不為人知的祕密，讓正義的天平隨時可能傾斜。", 
        desc2: "資深檢察官與天才駭客被迫聯手，針對一宗豪門謀殺案展開絕地調查。所有的監控畫面、錄音檔、甚至是兇刀，都在一夜之間被系統徹底抹除。在倒數48小時的起訴時限內，他們必須在充滿偽裝的偽證中，找出那個被隱藏在黑暗核心、足以翻轉整座城市的終極真相。"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "tvPics/funPic/funPic1.png", title: "老闆今天心情不好", rating: "7.4", duration: "1h42m", director: "王大同", year: "2026", 
        tags: ["職場生存","社畜日常","爆笑"], 
        desc1: "這是一家充滿活力的廣告公司，但每位員工都具備一項神祕技能：『判斷老闆的心情指數』。這座辦公室就像一個充滿未知的雷區，老闆的每個噴嚏、每聲嘆氣，都足以決定大家今天能否準時下班，或者面臨無止盡的改稿地獄。", 
        desc2: "當平日嚴肅的毒舌老闆突然失戀，整間公司陷入了前所未有的混亂與笑料。為了安撫老闆的情緒，一群廢柴社畜各顯神通，從送錯下午茶到策劃一場荒謬的單身派對。在雞飛狗跳的職場鬥智中，這場保住工作的求生作戰，意外演變成一場溫馨又噴飯的療癒之旅。"}
      ]
    }




                        /*============================================================
                                        電影、動漫、電視劇 種類資料 (更多頁面) 
                          ============================================================*/
    /*電影 種類資料 (更多)*/
    const movieMorePage = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "moviePics/lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "8.4", duration: "1h52m"},
        {img: "moviePics/lovePic/lovePic2.png", title: "時光之約", rating: "7.1", duration: "2h15m"},
        {img: "moviePics/lovePic/lovePic3.png", title: "最後一封情書", rating: "9.3", duration: "1h38m"},
        {img: "moviePics/lovePic/lovePic4.png", title: "擁抱星空", rating: "6.8", duration: "1h12m"},
        {img: "moviePics/lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.5", duration: "2h07m"},
        {img: "moviePics/lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "8.2", duration: "1h45m"},
        {img: "moviePics/lovePic/lovePic7.png", title: "遇見你，真好", rating: "7.9", duration: "1h26m"},
        {img: "moviePics/lovePic/lovePic8.png", title: "守候一生的承諾", rating: "6.3", duration: "2h24m"},
        {img: "moviePics/lovePic/lovePic9.png", title: "愛，一直在", rating: "9.1", duration: "1h58m"},
        {img: "moviePics/lovePic/lovePic10.png", title: "夢中的婚禮", rating: "7.6", duration: "1h00m"},
        {img: "moviePics/lovePic/lovePic11.png", title: "情牽一生", rating: "8.7", duration: "2h18m"},
        {img: "moviePics/lovePic/lovePic12.png", title: "愛的力量", rating: "5.9", duration: "1h30m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "moviePics/horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "6.2", duration: "1h58m"},
        {img: "moviePics/horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.5", duration: "1h24m"},
        {img: "moviePics/horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.4", duration: "2h18m"},
        {img: "moviePics/horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "7.3", duration: "1h41m"},
        {img: "moviePics/horrorPic/horrorPic5.png", title: "血色森林", rating: "5.1", duration: "1h09m"},
        {img: "moviePics/horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "8.8", duration: "2h05m"},
        {img: "moviePics/horrorPic/horrorPic7.png", title: "深淵凝視", rating: "7.7", duration: "1h53m"},
        {img: "moviePics/horrorPic/horrorPic8.png", title: "惡魔交易", rating: "6.9", duration: "1h27m"},
        {img: "moviePics/horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.2", duration: "2h26m"},
        {img: "moviePics/horrorPic/horrorPic10.png", title: "活死人墓", rating: "5.8", duration: "1h15m"},
        {img: "moviePics/horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.1", duration: "1h49m"},
        {img: "moviePics/horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "2h12m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "moviePics/susPic/susPic1.png", title: "迷霧中的證人", rating: "7.9", duration: "2h03m"},
        {img: "moviePics/susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.6", duration: "1h51m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.5", duration: "1h29m"},
        {img: "moviePics/susPic/susPic4.png", title: "謊言的碎片", rating: "6.2", duration: "1h37m"},
        {img: "moviePics/susPic/susPic5.png", title: "時光編碼", rating: "7.4", duration: "2h19m"},
        {img: "moviePics/susPic/susPic6.png", title: "密室遺言", rating: "9.1", duration: "1h14m"},
        {img: "moviePics/susPic/susPic7.png", title: "記憶裂痕", rating: "5.7", duration: "2h25m"},
        {img: "moviePics/susPic/susPic8.png", title: "深淵的訊號", rating: "8.3", duration: "1h42m"},
        {img: "moviePics/susPic/susPic9.png", title: "影子城市", rating: "6.8", duration: "1h56m"},
        {img: "moviePics/susPic/susPic10.png", title: "獵殺潛伏", rating: "7.5", duration: "2h08m"},
        {img: "moviePics/susPic/susPic11.png", title: "謊言的遺產", rating: "8.8", duration: "1h22m"},
        {img: "moviePics/susPic/susPic12.png", title: "最終的線索", rating: "5.3", duration: "1h59m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "moviePics/funPic/funPic1.png", title: "落跑新郎", rating: "7.2", duration: "1h46m"},
        {img: "moviePics/funPic/funPic2.png", title: "超能奶爸", rating: "8.9", duration: "2h01m"},
        {img: "moviePics/funPic/funPic3.png", title: "烏龍特警", rating: "6.4", duration: "1h33m"},
        {img: "moviePics/funPic/funPic4.png", title: "我的室友是外星人", rating: "9.6", duration: "1h18m"},
        {img: "moviePics/funPic/funPic5.png", title: "荒島大逃殺", rating: "5.8", duration: "2h14m"},
        {img: "moviePics/funPic/funPic6.png", title: "重返十七歲", rating: "8.1", duration: "1h55m"},
        {img: "moviePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "7.5", duration: "1h27m"},
        {img: "moviePics/funPic/funPic8.png", title: "我的機器人女友", rating: "9.2", duration: "2h09m"},
        {img: "moviePics/funPic/funPic9.png", title: "老闆不在家", rating: "6.7", duration: "1h40m"},
        {img: "moviePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "5.4", duration: "1h52m"},
        {img: "moviePics/funPic/funPic11.png", title: "狗狗特工", rating: "7.8", duration: "2h22m"},
        {img: "moviePics/funPic/funPic12.png", title: "金牌大廚", rating: "6.1", duration: "1h31m"}
      ]
    }

    /*動漫 種類資料 (更多)*/
    const animaneMorePage = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "animanePics/lovePic/lovePic1.png", title: "告白在日落之後", rating: "8.6", duration: "1h52m"},
        {img: "animanePics/lovePic/lovePic2.png", title: "借來的心跳聲", rating: "7.1", duration: "2h15m"},
        {img: "animanePics/lovePic/lovePic3.png", title: "櫻色導航系統", rating: "9.4", duration: "1h38m"},
        {img: "animanePics/lovePic/lovePic4.png", title: "戀愛預報90%", rating: "6.8", duration: "1h12m"},
        {img: "animanePics/lovePic/lovePic5.png", title: "回憶只剩你未刪除", rating: "5.5", duration: "2h07m"},
        {img: "animanePics/lovePic/lovePic6.png", title: "放學後的第零次告白", rating: "8.2", duration: "1h45m"},
        {img: "animanePics/lovePic/lovePic7.png", title: "星座說我們會分開", rating: "7.9", duration: "1h26m"},
        {img: "animanePics/lovePic/lovePic8.png", title: "戀愛體溫37.8℃", rating: "6.3", duration: "2h24m"},
        {img: "animanePics/lovePic/lovePic9.png", title: "那年夏天沒有結束", rating: "9.1", duration: "1h58m"},
        {img: "animanePics/lovePic/lovePic10.png", title: "透明情書實驗室", rating: "7.6", duration: "1h05m"},
        {img: "animanePics/lovePic/lovePic11.png", title: "你的名字還沒出現", rating: "8.7", duration: "2h11m"},
        {img: "animanePics/lovePic/lovePic12.png", title: "最後一次心動練習", rating: "5.9", duration: "1h33m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "animanePics/horrorPic/horrorPic1.png", title: "深夜自習室第九排", rating: "6.2", duration: "1h58m"},
        {img: "animanePics/horrorPic/horrorPic2.png", title: "電梯顯示-1樓", rating: "8.5", duration: "1h24m"},
        {img: "animanePics/horrorPic/horrorPic3.png", title: "笑聲來自天花板", rating: "9.4", duration: "2h18m"},
        {img: "animanePics/horrorPic/horrorPic4.png", title: "沒有瞳孔的照片", rating: "7.3", duration: "1h41m"},
        {img: "animanePics/horrorPic/horrorPic5.png", title: "替身出席者", rating: "5.1", duration: "1h09m"},
        {img: "animanePics/horrorPic/horrorPic6.png", title: "白色雨夜", rating: "8.8", duration: "2h05m"},
        {img: "animanePics/horrorPic/horrorPic7.png", title: "404號病房", rating: "7.7", duration: "1h53m"},
        {img: "animanePics/horrorPic/horrorPic8.png", title: "停格的監視畫面", rating: "6.9", duration: "1h27m"},
        {img: "animanePics/horrorPic/horrorPic9.png", title: "影子晚歸", rating: "9.2", duration: "2h26m"},
        {img: "animanePics/horrorPic/horrorPic10.png", title: "校車最後一站", rating: "5.8", duration: "1h15m"},
        {img: "animanePics/horrorPic/horrorPic11.png", title: "無人接聽的廣播室", rating: "8.1", duration: "1h49m"},
        {img: "animanePics/horrorPic/horrorPic12.png", title: "門外的腳步數到十", rating: "6.4", duration: "2h12m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "animanePics/susPic/susPic1.png", title: "昨日嫌疑人", rating: "7.9", duration: "2h03m"},
        {img: "animanePics/susPic/susPic2.png", title: "城市記憶備份檔", rating: "8.6", duration: "1h51m"},
        {img: "animanePics/susPic/susPic3.png", title: "第十二個旁觀者", rating: "9.5", duration: "1h29m"},
        {img: "animanePics/susPic/susPic4.png", title: "說謊者的指紋", rating: "6.2", duration: "1h37m"},
        {img: "animanePics/susPic/susPic5.png", title: "沉睡證據", rating: "7.4", duration: "2h19m"},
        {img: "animanePics/susPic/susPic6.png", title: "消失的監控角度", rating: "9.1", duration: "1h14m"},
        {img: "animanePics/susPic/susPic7.png", title: "錯誤時間線", rating: "5.7", duration: "2h25m"},
        {img: "animanePics/susPic/susPic8.png", title: "交換不在場證明", rating: "8.3", duration: "1h42m"},
        {img: "animanePics/susPic/susPic9.png", title: "複製人格計畫", rating: "6.8", duration: "1h56m"},
        {img: "animanePics/susPic/susPic10.png", title: "密室之外", rating: "7.5", duration: "2h08m"},
        {img: "animanePics/susPic/susPic11.png", title: "匿名檔案X", rating: "8.8", duration: "1h22m"},
        {img: "animanePics/susPic/susPic12.png", title: "最後的版本更新", rating: "5.3", duration: "1h59m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "animanePics/funPic/funPic1.png", title: "魔王的實習第一天", rating: "7.2", duration: "1h46m"},
        {img: "animanePics/funPic/funPic2.png", title: "全村最弱勇者", rating: "8.9", duration: "2h01m"},
        {img: "animanePics/funPic/funPic3.png", title: "打工拯救世界", rating: "6.4", duration: "1h33m"},
        {img: "animanePics/funPic/funPic4.png", title: "我的技能是吐槽", rating: "9.6", duration: "1h18m"},
        {img: "animanePics/funPic/funPic5.png", title: "外星人轉學生很普通", rating: "5.8", duration: "2h14m"},
        {img: "animanePics/funPic/funPic6.png", title: "社團經費爭奪戰", rating: "8.1", duration: "1h55m"},
        {img: "animanePics/funPic/funPic7.png", title: "魔法少女不上班", rating: "7.5", duration: "1h27m"},
        {img: "animanePics/funPic/funPic8.png", title: "天才其實搞錯了", rating: "9.2", duration: "2h09m"},
        {img: "animanePics/funPic/funPic9.png", title: "勇者的休假申請", rating: "6.7", duration: "1h40m"},
        {img: "animanePics/funPic/funPic10.png", title: "轉生後我還是社畜", rating: "5.4", duration: "1h52m"},
        {img: "animanePics/funPic/funPic11.png", title: "貓咪部長上任中", rating: "7.8", duration: "2h22m"},
        {img: "animanePics/funPic/funPic12.png", title: "全校第一倒數", rating: "6.1", duration: "1h31m"}
      ]
    }

    /*電視劇 種類資料 (更多)*/
    const tvMorePage = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "tvPics/lovePic/lovePic1.png", title: "如果那天我們沒有錯過", rating: "8.8", duration: "1h45m"},
        {img: "tvPics/lovePic/lovePic2.png", title: "晚風裡的告白", rating: "7.4", duration: "2h12m"},
        {img: "tvPics/lovePic/lovePic3.png", title: "你在我的未來裡", rating: "9.2", duration: "1h30m"},
        {img: "tvPics/lovePic/lovePic4.png", title: "愛情延遲三秒", rating: "6.9", duration: "1h15m"},
        {img: "tvPics/lovePic/lovePic5.png", title: "城市另一端的你", rating: "5.7", duration: "2h08m"},
        {img: "tvPics/lovePic/lovePic6.png", title: "那年夏天的最後一封信", rating: "8.5", duration: "1h55m"},
        {img: "tvPics/lovePic/lovePic7.png", title: "等你下班", rating: "7.1", duration: "1h28m"},
        {img: "tvPics/lovePic/lovePic8.png", title: "戀愛天氣預報", rating: "6.3", duration: "2h24m"},
        {img: "tvPics/lovePic/lovePic9.png", title: "愛在迷路之後", rating: "9.6", duration: "1h40m"},
        {img: "tvPics/lovePic/lovePic10.png", title: "我們之間的那條街", rating: "7.8", duration: "1h58m"},
        {img: "tvPics/lovePic/lovePic11.png", title: "不小心愛上你", rating: "5.4", duration: "2h03m"},
        {img: "tvPics/lovePic/lovePic12.png", title: "時間允許我們相愛", rating: "8.1", duration: "1h12m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "tvPics/horrorPic/horrorPic1.png", title: "凌晨三點的電梯", rating: "6.4", duration: "1h52m"},
        {img: "tvPics/horrorPic/horrorPic2.png", title: "那棟沒人搬走的公寓", rating: "8.7", duration: "1h26m"},
        {img: "tvPics/horrorPic/horrorPic3.png", title: "門外的腳步聲", rating: "9.3", duration: "2h15m"},
        {img: "tvPics/horrorPic/horrorPic4.png", title: "影子不跟著我", rating: "7.5", duration: "1h08m"},
        {img: "tvPics/horrorPic/horrorPic5.png", title: "白色走廊", rating: "5.2", duration: "1h49m"},
        {img: "tvPics/horrorPic/horrorPic6.png", title: "第七天消失", rating: "8.1", duration: "2h21m"},
        {img: "tvPics/horrorPic/horrorPic7.png", title: "窗外一直有人看著", rating: "6.8", duration: "1h33m"},
        {img: "tvPics/horrorPic/horrorPic8.png", title: "沒有名字的墓碑", rating: "7.9", duration: "2h05m"},
        {img: "tvPics/horrorPic/horrorPic9.png", title: "停電之後", rating: "9.5", duration: "1h44m"},
        {img: "tvPics/horrorPic/horrorPic10.png", title: "夜班醫院", rating: "5.9", duration: "2h18m"},
        {img: "tvPics/horrorPic/horrorPic11.png", title: "紅色雨夜", rating: "7.2", duration: "1h20m"},
        {img: "tvPics/horrorPic/horrorPic12.png", title: "最後一班校車", rating: "8.4", duration: "1h57m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "tvPics/susPic/susPic1.png", title: "消失的證據", rating: "8.2", duration: "2h02m"},
        {img: "tvPics/susPic/susPic2.png", title: "城市沒有昨天", rating: "7.6", duration: "1h47m"},
        {img: "tvPics/susPic/susPic3.png", title: "匿名舉報人", rating: "9.4", duration: "1h24m"},
        {img: "tvPics/susPic/susPic4.png", title: "倒數48小時", rating: "6.1", duration: "1h59m"},
        {img: "tvPics/susPic/susPic5.png", title: "黑名單計畫", rating: "5.8", duration: "2h11m"},
        {img: "tvPics/susPic/susPic6.png", title: "完美的不在場證明", rating: "8.9", duration: "1h36m"},
        {img: "tvPics/susPic/susPic7.png", title: "誰改寫了真相", rating: "7.3", duration: "2h28m"},
        {img: "tvPics/susPic/susPic8.png", title: "沉默的錄音帶", rating: "6.5", duration: "1h41m"},
        {img: "tvPics/susPic/susPic9.png", title: "錯位人生", rating: "9.1", duration: "1h18m"},
        {img: "tvPics/susPic/susPic10.png", title: "失控調查局", rating: "8.4", duration: "2h06m"},
        {img: "tvPics/susPic/susPic11.png", title: "最後的證人", rating: "5.6", duration: "1h50m"},
        {img: "tvPics/susPic/susPic12.png", title: "重複的那一天", rating: "7.7", duration: "2h15m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "tvPics/funPic/funPic1.png", title: "老闆今天心情不好", rating: "7.4", duration: "1h42m"},
        {img: "tvPics/funPic/funPic2.png", title: "我的室友很離譜", rating: "8.8", duration: "2h01m"},
        {img: "tvPics/funPic/funPic3.png", title: "誤會大聯盟", rating: "6.2", duration: "1h25m"},
        {img: "tvPics/funPic/funPic4.png", title: "我真的不是天才", rating: "9.7", duration: "1h12m"},
        {img: "tvPics/funPic/funPic5.png", title: "社恐也要上班", rating: "5.1", duration: "2h18m"},
        {img: "tvPics/funPic/funPic6.png", title: "隔壁鄰居太熱心", rating: "8.3", duration: "1h53m"},
        {img: "tvPics/funPic/funPic7.png", title: "人生重開機", rating: "7.9", duration: "2h26m"},
        {img: "tvPics/funPic/funPic8.png", title: "家裡突然多了一群人", rating: "6.7", duration: "1h40m"},
        {img: "tvPics/funPic/funPic9.png", title: "全公司都誤會我", rating: "9.4", duration: "2h05m"},
        {img: "tvPics/funPic/funPic10.png", title: "假裝成熟的大人", rating: "5.8", duration: "1h48m"},
        {img: "tvPics/funPic/funPic11.png", title: "我的主管像小孩", rating: "7.6", duration: "1h29m"},
        {img: "tvPics/funPic/funPic12.png", title: "誰把我的人生調成困難模式", rating: "6.5", duration: "2h10m"}
      ]
    }

                        /*============================================================
                                            推薦影片 種類資料 (更多) 
                          ============================================================*/
      const movieRec = [
        {img: "tvPics/lovePic/lovePic1.png", title: "如果那天我們沒有錯過", rating: "8.8", duration: "1h45m"},
        {img: "animanePics/horrorPic/horrorPic1.png", title: "深夜自習室第九排", rating: "6.2", duration: "1h58m"},
        {img: "moviePics/susPic/susPic3.png", title: "最後的晚餐", rating: "9.5", duration: "1h29m"},
        {img: "tvPics/funPic/funPic4.png", title: "我真的不是天才", rating: "9.7", duration: "1h12m"},
        {img: "animanePics/horrorPic/horrorPic8.png", title: "停格的監視畫面", rating: "6.9", duration: "1h27m"},
        {img: "moviePics/funPic/funPic10.png", title: "求愛特攻隊", rating: "5.4", duration: "1h52m"},
        {img: "tvPics/horrorPic/horrorPic7.png", title: "窗外一直有人看著", rating: "6.8", duration: "1h33m"},
        {img: "animanePics/lovePic/lovePic11.png", title: "你的名字還沒出現", rating: "8.7", duration: "2h11m"},
        {img: "moviePics/funPic/funPic7.png", title: "瘋狂大拍賣", rating: "7.5", duration: "1h27m"},
        {img: "tvPics/susPic/susPic4.png", title: "倒數48小時", rating: "6.1", duration: "1h59m"},
        {img: "animanePics/lovePic/lovePic9.png", title: "那年夏天沒有結束", rating: "9.1", duration: "1h58m"},
        {img: "moviePics/susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.6", duration: "1h51m"},
      ];