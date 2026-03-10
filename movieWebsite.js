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

  /*── 最新電影四個電影資料 ── */
    let latestMovies = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "lovePic/lovePic12.png", title: "愛的力量", rating: "7.6", duration: "2h08m"},
        {img: "lovePic/lovePic11.png", title: "情牽一生", rating: "8.3", duration: "1h37m"},
        {img: "lovePic/lovePic10.png", title: "夢中的婚禮", rating: "9.1", duration: "1h19m"},
        {img: "lovePic/lovePic9.png", title: "愛，一直在", rating: "6.5", duration: "1h31m"},
        {img: "lovePic/lovePic8.png", title: "守候一生的承諾", rating: "5.2", duration: "1h24m"},
        {img: "lovePic/lovePic7.png", title: "遇見你，真好", rating: "6.4", duration: "2h22m"},
        {img: "lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "8.2", duration: "1h23m"},
        {img: "lovePic/lovePic5.png", title: "琴聲繚繞", rating: "7.7", duration: "1h45m"},
        {img: "lovePic/lovePic4.png", title: "擁抱星空", rating: "9.4", duration: "1h13m"},
        {img: "lovePic/lovePic3.png", title: "最後一封情書", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "7.6", duration: "2h08m"},
        {img: "horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.3", duration: "1h37m"},
        {img: "horrorPic/horrorPic10.png", title: "活死人墓", rating: "9.1", duration: "1h19m"},
        {img: "horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "6.5", duration: "1h31m"},
        {img: "horrorPic/horrorPic8.png", title: "惡魔交易", rating: "5.2", duration: "1h24m"},
        {img: "horrorPic/horrorPic7.png", title: "深淵凝視", rating: "6.4", duration: "2h22m"},
        {img: "horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "8.2", duration: "1h23m"},
        {img: "horrorPic/horrorPic5.png", title: "血色森林", rating: "7.7", duration: "1h45m"},
        {img: "horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "9.4", duration: "1h13m"},
        {img: "horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "susPic/susPic12.png", title: "最終的線索", rating: "7.6", duration: "2h08m"},
        {img: "susPic/susPic11.png", title: "謊言的遺產", rating: "8.3", duration: "1h37m"},
        {img: "susPic/susPic10.png", title: "獵殺潛伏", rating: "9.1", duration: "1h19m"},
        {img: "susPic/susPic9.png", title: "影子城市", rating: "6.5", duration: "1h31m"},
        {img: "susPic/susPic8.png", title: "深淵的訊號", rating: "5.2", duration: "1h24m"},
        {img: "susPic/susPic7.png", title: "記憶裂痕", rating: "6.4", duration: "2h22m"},
        {img: "susPic/susPic6.png", title: "密室遺言", rating: "8.2", duration: "1h23m"},
        {img: "susPic/susPic5.png", title: "時光編碼", rating: "7.7", duration: "1h45m"},
        {img: "susPic/susPic4.png", title: "謊言的碎片", rating: "9.4", duration: "1h13m"},
        {img: "susPic/susPic3.png", title: "最後的晚餐", rating: "6.2", duration: "2h03m"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "funPic/funPic12.png", title: "金牌大廚", rating: "7.6", duration: "2h08m"},
        {img: "funPic/funPic11.png", title: "狗狗特工", rating: "8.3", duration: "1h37m"},
        {img: "funPic/funPic10.png", title: "求愛特攻隊", rating: "9.1", duration: "1h19m"},
        {img: "funPic/funPic9.png", title: "老闆不在家", rating: "6.5", duration: "1h31m"},
        {img: "funPic/funPic8.png", title: "我的機器人女友", rating: "5.2", duration: "1h24m"},
        {img: "funPic/funPic7.png", title: "瘋狂大拍賣", rating: "6.4", duration: "2h22m"},
        {img: "funPic/funPic6.png", title: "重返十七歲", rating: "8.2", duration: "1h23m"},
        {img: "funPic/funPic5.png", title: "荒島大逃殺", rating: "7.7", duration: "1h45m"},
        {img: "funPic/funPic4.png", title: "我的室友是外星人", rating: "9.4", duration: "1h13m"},
        {img: "funPic/funPic3.png", title: "烏龍特警", rating: "6.2", duration: "2h03m"}
      ]
    }
    /**
  *渲染電影網格
  *@parem {Array} movies - 傳入特定分類的 10 部電影陣列
    */
function renderLatestGrid(movies) {
  const grid = document.getElementById('latest-grid');
  if (!grid || !movies) return;

  const html = movies.map(movie => `
      <div class="latest-card">
        <div class="latest-card-img-wrap">
          <a href="${movie.link}">
            <img class="latest-card-img" src="${movie.img}" alt="${movie.title}">
          </a>
        </div>
        <div class="latest-card-info">
          <div class="latest-card-title">${movie.title}</div>
          <div class="latest-card-meta">
            <i class="fas fa-star star"></i>${movie.rating}&nbsp;
            <i class="fas fa-clock"></i>${movie.duration}
          </div>
        </div>
      </div>
  `).join('');

  grid.style.opacity = '0';
  grid.style.transition = 'opacity 0.3s ease';

  setTimeout(() => {
    grid.innerHTML = html;
    grid.style.opacity = '1';
  }, 300);
}

function switchLatestCategory(category, btn) {
  // 1. 處理按鈕的高亮狀態 (Active)
  const buttons = document.querySelectorAll('#latest-menu .filter-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // 2. 根據分類抓取資料並重新渲染
  const selectedData = latestMovies[category];
  if (selectedData) {
    renderLatestGrid(selectedData);
  }
}
    

  /*── 熱門精選四個電影資料 ── */
    let hotMovies = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "lovePic/lovePic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "lovePic/lovePic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "lovePic/lovePic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "lovePic/lovePic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "lovePic/lovePic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "lovePic/lovePic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "lovePic/lovePic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "lovePic/lovePic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "lovePic/lovePic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m"},
        {img: "horrorPic/horrorPic2.png", title: "亡靈回聲", rating: "8.3", duration: "1h37m"},
        {img: "horrorPic/horrorPic3.png", title: "厲鬼附身", rating: "9.1", duration: "1h19m"},
        {img: "horrorPic/horrorPic4.png", title: "咒怨凶宅", rating: "6.5", duration: "1h31m"},
        {img: "horrorPic/horrorPic5.png", title: "血色森林", rating: "5.2", duration: "1h24m"},
        {img: "horrorPic/horrorPic6.png", title: "亡靈嘉年華", rating: "6.4", duration: "2h22m"},
        {img: "horrorPic/horrorPic7.png", title: "深淵凝視", rating: "8.2", duration: "1h23m"},
        {img: "horrorPic/horrorPic8.png", title: "惡魔交易", rating: "7.7", duration: "1h45m"},
        {img: "horrorPic/horrorPic9.png", title: "厲鬼現形", rating: "9.4", duration: "1h13m"},
        {img: "horrorPic/horrorPic10.png", title: "活死人墓", rating: "6.2", duration: "2h03m"},
        {img: "horrorPic/horrorPic11.png", title: "寂靜殺機", rating: "8.9", duration: "1h20m"},
        {img: "horrorPic/horrorPic12.png", title: "亡靈歸來", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m"},
        {img: "susPic/susPic2.png", title: "看不見的嫌疑犯", rating: "8.3", duration: "1h37m"},
        {img: "susPic/susPic3.png", title: "最後的晚餐", rating: "9.1", duration: "1h19m"},
        {img: "susPic/susPic4.png", title: "謊言的碎片", rating: "6.5", duration: "1h31m"},
        {img: "susPic/susPic5.png", title: "時光編碼", rating: "5.2", duration: "1h24m"},
        {img: "susPic/susPic6.png", title: "密室遺言", rating: "6.4", duration: "2h22m"},
        {img: "susPic/susPic7.png", title: "記憶裂痕", rating: "8.2", duration: "1h23m"},
        {img: "susPic/susPic8.png", title: "深淵的訊號", rating: "7.7", duration: "1h45m"},
        {img: "susPic/susPic9.png", title: "影子城市", rating: "9.4", duration: "1h13m"},
        {img: "susPic/susPic10.png", title: "獵殺潛伏", rating: "6.2", duration: "2h03m"},
        {img: "susPic/susPic11.png", title: "謊言的遺產", rating: "8.9", duration: "1h20m"},
        {img: "susPic/susPic12.png", title: "最終的線索", rating: "6.4", duration: "1h42m"},
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m"},
        {img: "funPic/funPic2.png", title: "超能奶爸", rating: "8.3", duration: "1h37m"},
        {img: "funPic/funPic3.png", title: "烏龍特警", rating: "9.1", duration: "1h19m"},
        {img: "funPic/funPic4.png", title: "我的室友是外星人", rating: "6.5", duration: "1h31m"},
        {img: "funPic/funPic5.png", title: "荒島大逃殺", rating: "5.2", duration: "1h24m"},
        {img: "funPic/funPic6.png", title: "重返十七歲", rating: "6.4", duration: "2h22m"},
        {img: "funPic/funPic7.png", title: "瘋狂大拍賣", rating: "8.2", duration: "1h23m"},
        {img: "funPic/funPic8.png", title: "我的機器人女友", rating: "7.7", duration: "1h45m"},
        {img: "funPic/funPic9.png", title: "老闆不在家", rating: "9.4", duration: "1h13m"},
        {img: "funPic/funPic10.png", title: "求愛特攻隊", rating: "6.2", duration: "2h03m"},
        {img: "funPic/funPic11.png", title: "狗狗特工", rating: "8.9", duration: "1h20m"},
        {img: "funPic/funPic12.png", title: "金牌大廚", rating: "6.4", duration: "1h42m"},
      ],
    }
    /**
 * 渲染電影網格
 * @param {Array} movies - 傳入特定分類的 12 部電影陣列
 */
function renderHotGrid(movies) {
  const grid = document.getElementById('hot-grid');
  if (!grid || !movies) return;

  const html = movies.map(movie => `
    <div class="hot-card">
      <div class="hot-card-img-wrap">
        <img class="hot-card-img" src="${movie.img}" alt="${movie.title}">
      </div>
      <div class="hot-card-info">
        <div class="hot-card-title">${movie.title}</div>
        <div class="hot-card-meta">
          <i class="fas fa-star star"></i>${movie.rating}&nbsp;
          <i class="fas fa-clock"></i>${movie.duration}
        </div>
      </div>
    </div>
  `).join('');

  // 2. 執行切換動畫：先淡出
  grid.style.opacity = '0';
  grid.style.transition = 'opacity 0.3s ease';

  // 3. 替換內容後再淡入
  setTimeout(() => {
    grid.innerHTML = html;
    grid.style.opacity = '1';
  }, 300);
}

/**
 * 分類按鈕切換
 */
function switchHotCategory(category, btn) {
  // 1. 處理按鈕的高亮狀態 (Active)
  const buttons = document.querySelectorAll('#hot-menu .filter-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // 2. 根據分類抓取資料並重新渲染
  const selectedData = hotMovies[category];
  if (selectedData) {
    renderHotGrid(selectedData);
  }
}


/*── 更多電影的電影資料 ── */
    let moreMovies = [
        {img: "lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m"},
        {img: "horrorPic/horrorPic2.png", title: "時光之約", rating: "8.3", duration: "1h37m"},
        {img: "susPic/susPic3.png", title: "最後一封情書", rating: "9.1", duration: "1h19m"},
        {img: "funPic/funPic4.png", title: "擁抱星空", rating: "6.5", duration: "1h31m"},
        {img: "lovePic/lovePic5.png", title: "琴聲繚繞", rating: "5.2", duration: "1h24m"},
        {img: "horrorPic/horrorPic6.png", title: "愛在雨中蔓延", rating: "6.4", duration: "2h22m"},
        {img: "susPic/susPic7.png", title: "遇見你，真好", rating: "8.2", duration: "1h23m"},
        {img: "funPic/funPic8.png", title: "守候一生的承諾", rating: "7.7", duration: "1h45m"},
        {img: "lovePic/lovePic9.png", title: "愛，一直在", rating: "9.4", duration: "1h13m"},
        {img: "horrorPic/horrorPic10.png", title: "夢中的婚禮", rating: "6.2", duration: "2h03m"},
        {img: "susPic/susPic11.png", title: "情牽一生", rating: "8.9", duration: "1h20m"},
        {img: "funPic/funPic12.png", title: "愛的力量", rating: "6.4", duration: "1h42m"}
      ];
    /**
 * 渲染電影網格
 * @param {Array} movies - 傳入無需分類的 12 部電影陣列
 */
function renderMoreGrid(movies){
  const grid = document.getElementById('more-grid');
  if (!grid || !movies) return;

  const html = movies.map(movie => `
    <div class="hot-card">
      <div class="hot-card-img-wrap">
        <img class="hot-card-img" src="${movie.img}" alt="${movie.title}">
      </div>
      <div class="hot-card-info">
        <div class="hot-card-title">${movie.title}</div>
        <div class="hot-card-meta">
          <i class="fas fa-star star"></i>${movie.rating}&nbsp;
          <i class="fas fa-clock"></i>${movie.duration}
        </div>
      </div>
    </div>
  `).join('');

  grid.innerHTML = html;
}


/*── 電影介紹四個電影資料 ── */
    let introMovies = {
      /* ── 浪漫分類 ── */
      '浪漫': [
        {img: "lovePic/lovePic1.png", title: "霓虹深處的邂逅", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "故事設定在近未來的台北，城市被永不熄滅的霓虹與浮空投影淹沒。在這科技冰冷、人際疏離的時代，台北化身為巨大的寂寞迷宮。雨後的街頭倒映著絢爛光影，模糊了現實邊界，為這場都市邂逅奠定了既科幻又感性的基調。", 
        desc2: "失意調酒師與尋憶攝影師在雨中偶然相遇，兩人在城市的隱秘角落尋找真實的共鳴。隨著感情升溫，一段隱藏在霓虹背後的秘密逐漸浮現。他們必須在虛假的光影吞噬彼此前，緊握雙手，守護這座城市中唯一的純粹溫度。"}
      ],
      /* ── 恐怖分類 ── */
      '恐怖': [
        {img: "horrorPic/horrorPic1.png", title: "禁忌古宅", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "這座被當地人稱為「血染莊園」的哥德式古宅，孤零零地矗立在荒蕪的森林深處，彷彿是一道拒絕癒合的傷口。傳說，百年前這裡曾發生過慘絕人寰的滅門血案，古宅的主人為了追求永生，與惡魔達成了禁忌的契約。自此，古宅便被詛咒包圍，牆壁中時常傳出低沉的哀嚎，任何踏入其中的人，都將成為古宅的犧牲品，靈魂永遠禁錮在黑暗之中。", 
        desc2: "年輕的歷史學者艾莉絲（化名），為了尋找失蹤的妹妹，不顧勸阻踏入了這座禁忌古宅。她身穿破舊的裙子，手中的燭光在黑暗中搖曳，彷彿隨時都會熄滅。每前進一步，古宅的牆壁都彷彿在低語，訴說著不為人知的恐怖。當艾莉絲緩緩走向二樓黑暗的樓梯口，她並不知道，那裡不僅僅是二樓的入口，更是通往無盡噩夢與古宅血腥真相的深淵。"}
      ],
      /* ── 懸疑分類 ── */
      '懸疑': [
        {img: "susPic/susPic1.png", title: "迷霧中的證人", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "故事發生在長年大霧籠罩的港口城市。這座城市在繁華霓虹下隱藏著腐敗與暗殺，各方勢力在迷霧中進行情報交易。灰藍色的街道與深棕色的老舊建築交織，形成一個無法逃脫的權力漩渦，真相如同海報上的濃霧，讓人始終看不清全貌。", 
        desc2: "一名神祕的檔案員意外目睹高層暗殺事件，成為唯一的活口。他穿著長風衣獨自走上拱橋，在濃霧中感知到監視者的存在。這不僅是一場橫跨城市的逃亡，更是一場心理博弈。他必須在霓虹燈火熄滅前，將足以撼動帝國的證詞交出，否則將永遠消失在迷霧之中。"}
      ],
      /* ── 喜劇分類 ── */
      '喜劇': [
        {img: "funPic/funPic1.png", title: "落跑新郎", rating: "7.6", duration: "2h08m", director: "陳韋仁", year: "2024", 
        tags: ["浪漫","愛情","喜劇"], 
        desc1: "在一座陽光普照、步調繁忙的大都市，一場號稱「年度最完美」的豪門婚禮即將舉行。然而，在這個追求精準與面子的社交圈中，任何一點小差錯都會引發核彈級的災難，而這一切的混亂，竟然全源自於一個最不該缺席的人。", 
        desc2: "準新郎阿傑在宣誓前夕意外發現驚人秘密，穿著西裝與黃色小鴨拖鞋在大街上奪門而出。身後憤怒的伴郎團與穿禮服的哈巴狗緊追不捨，他在繁華街道上演一場爆笑逃亡，試圖在被抓回禮堂前，找回對真愛的定義與自由。"}
      ],
    }
    /**
 * 渲染電影網格
 * @param {Array} movies - 傳入特定分類的 4 部電影陣列
 */
function renderIntroGrid(movies) {
  const grid = document.getElementById('intro-grid');
  if (!grid || !movies) return;

  const html = movies.map(movie => `
    <div class="intro-layout">
        <img class="intro-img" src="${movie.img}" alt="${movie.title}">
      <div class="intro-text">
        <div class="intro-title">${movie.title}</div>
          <div class="intro-meta">
            <div class="intro-meta-item">
              <i class="fas fa-star"></i> ${movie.rating} &nbsp; /10
            </div>
            <div class="intro-meta-item">
              <i class="fas fa-clock"></i> ${movie.duration}
            </div>
            <div class="intro-meta-item">
              <i class="fas fa-video"></i> ${movie.director}
            </div>
            <div class="intro-meta-item">
              <i class="fas fa-calendar"></i> ${movie.year}年
            </div>
          </div>

            <div class="intro-tags">
            ${movie.tags.map(tags => `<span class="intro-tags">${tags}</span>`).join('')}
            </div>

            <p class="intro-desc">${movie.desc1}</p>
            <p class="intro-desc">${movie.desc2}</p>

            <a href="#" class="btn-watch"><i class="fas fa-play"></i>立即觀看</a>
      </div>
    </div>
  `).join('');  

  // 2. 執行切換動畫：先淡出
  grid.style.opacity = '0';
  grid.style.transition = 'opacity 0.3s ease';

  // 3. 替換內容後再淡入
  setTimeout(() => {
    grid.innerHTML = html;
    grid.style.opacity = '1';
  }, 300);
}

function switchIntroCategory(category, btn) {
  // 1. 處理按鈕的高亮狀態 (Active)
  const buttons = document.querySelectorAll('#intro-menu .filter-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // 2. 根據分類抓取資料並重新渲染
  const selectedData = introMovies[category];
  if (selectedData) {
    renderIntroGrid(selectedData);
  }
}


// 頁面初次載入時，預設顯示「浪漫」
document.addEventListener('DOMContentLoaded', () => {
  switchHotCategory('浪漫', document.querySelector('#hot-menu .filter-btn:first-child'));
  switchLatestCategory('浪漫', document.querySelector('#latest-menu .filter-btn:first-child'));
  renderMoreGrid(moreMovies);
  switchIntroCategory('浪漫', document.querySelector('#intro-menu .filter-btn:first-child'));
});