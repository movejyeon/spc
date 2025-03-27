$(function () {
  // 메뉴에 마우스 올리면 snb 나옴
  $(".h_middle").on("mouseenter", function () {
    $(".snb").stop().fadeIn();
    $(".header_bg").stop().fadeIn();

    // .snb와 .header_bg가 .h_middle의 자식요소이어야 깜박임 없이 이벤트가 잘 실행됨
  });

  // 메뉴에 마우스 떼면 snb 사라짐
  $(".h_middle").on("mouseleave", function () {
    $(".snb").stop().fadeOut(0);
    $(".header_bg").stop().fadeOut(0);
  });

  // snb li 마우스 올리면 나머지 흐릿, this는 스타일 적용
  $(".snb li").on("mouseenter", function () {
    $(".snb li").removeClass("out");
    $(".snb li").not(this).addClass("out");
    $(".snb li").removeClass("on");
    $(this).addClass("on");
  });

  // snb li 마우스 떼면 원래 스타일로
  $(".snb li").on("mouseleave", function () {
    $(".snb li").removeClass("out");
    $(".snb li").removeClass("on");
  });

  // 마우스 올리면 외국어버전 띄워짐
  $(".lang").on("mouseenter", function () {
    $("header").addClass("on");
    $(".lang").addClass("on");
  });

  // 마우스 내리면 외국어 버전 사라짐
  $(".lang").on("mouseleave", function () {
    $("header").removeClass("on");
    $(".lang").removeClass("on");
  });

  // 모바일 메뉴버전
  $(".mo_menu_bar").on("click", function () {
    $(".mo_menu").toggleClass("on");
    $("body").toggleClass("on");
  });

  // let toggle = 0;

  // 모바일 서브메뉴
  $(".mo_gnb > li").on("click", function () {
    // if ($(this).hasClass("on")) {
    //   $(this).removeClass("on");
    // } else {
    //   $(".mo_gnb > li").removeClass("on");
    //   $(this).addClass("on");
    // }

    // $(".mo_gnb > li").removeClass("on");
    // $(this).addClass("on");

    // $(".mo_snb").stop().slideUp(0);
    // $(this).find(".mo_snb").stop().slideDown(300);

    let has = $(this).hasClass("on");
    if (has == true) {
      $(this).removeClass("on");
      $(this).find(".mo_snb").stop().slideUp(0);
    } else {
      $(".mo_gnb > li").removeClass("on");
      $(this).addClass("on");
      $(".mo_snb").stop().slideUp(0);
      $(this).find(".mo_snb").stop().slideDown(300);
    }

    // if (toggle == 0) {
    //   $(".mo_gnb > li").removeClass("on");
    //   $(this).addClass("on");
    //   toggle++;
    // } else {
    //   $(".mo_gnb > li").removeClass("on");
    //   $(this).removeClass("on");
    //   toggle = 0;
    // }
  });

  // 비쥬얼 다음 버튼

  let v = 0;

  $(".next").on("click", function () {
    if (v !== $(".visual_box .img").length - 1) {
      v++;
    } else {
      v = 0;
    }

    $(".visual_box .img").fadeOut();
    $(".visual_box .img").eq(v).fadeIn();
  });

  // 비쥬얼 이전 버튼
  $(".prev").on("click", function () {
    if (v !== 0) {
      v--;
    } else {
      v = $(".visual_box .img").length - 1;
    }

    $(".visual_box .img").fadeOut();
    $(".visual_box .img").eq(v).fadeIn();
  });

  // 브랜드 페이지
  // 브랜드 페이지
  let b = 0;
  let page1 = 1;
  let li = $(".con2_right ul li").length; // 4개
  let img = $(".con2_right ul li").eq(1).find(".brand_img").length; // 3개

  // console.log(img);

  // 브랜드 페이지 다음 버튼
  $(".brand_next").on("click", function () {
    // 각 li 이미지 fadeOut, fadeIn
    if (b !== img - 1) {
      b++;
    } else {
      b = 0;
    }

    // 페이지 숫자 변화
    if (page1 !== img) {
      page1++;
    } else {
      page1 = 1;
    }

    con2_brand();
  });

  // 브랜드 페이지 넘기는 함수
  function con2_brand() {
    // 각 li 이미지 fadeOut, fadeIn
    $(".con2_right ul li").find(".brand_img").fadeOut();

    // 각 li의 자식으로 있는 img 3개를 구하고 싶기 때문에 li의 for문으로 돌려야 함, 그래야 각각의 자식요소를 구할 수 있기 때문
    for (let i = 0; i < li; i++) {
      $(".con2_right ul li").eq(i).find(".brand_img").eq(b).fadeIn();
    }

    // 페이지 숫자 변화
    $(".con2_right .page_num span")
      .eq(0)
      .text("0" + page1);
  }

  // 브랜드 페이지 이전 버튼
  $(".brand_prev").on("click", function () {
    // 각 li 이미지 fadeOut, fadeIn
    if (b !== 0) {
      b--;
    } else {
      b = img - 1;
    }

    // 페이지 숫자 변화
    if (page1 !== 1) {
      page1--;
    } else {
      page1 = img;
    }

    con2_brand();
  });

  // 소식 페이지
  // 소식 페이지

  let n = 0; //뉴스 안 이미지 순번 정하는 변수
  let n_li = $(".con3_left ul li").length;
  // 뉴스 이미지의 부모<li>의 순번 길이
  let n_img = $(".con3_left ul li").eq(0).find(".con3_img").length;
  let page2 = 1;

  // 소식페이지 함수
  function con3_news() {
    $(".con3_left ul li").find(".con3_img").fadeOut();
    for (let i = 0; i < n_li; i++) {
      $(".con3_left ul li").eq(i).find(".con3_img").eq(n).fadeIn();
    }

    $(".con3_left .page_num span")
      .eq(0)
      .text("0" + page2);
  }

  // 소식 다음 버튼
  $(".news_next").on("click", function () {
    if (n !== n_img - 1) {
      n++;
    } else {
      n = 0;
    }

    if (page2 !== n_img) {
      page2++;
    } else {
      page2 = 1;
    }

    con3_news();
  });

  // 소식 이전 버튼
  $(".news_prev").on("click", function () {
    if (n !== 0) {
      n--;
    } else {
      n = n_img - 1;
    }

    if (page2 !== 1) {
      page2--;
    } else {
      page2 = n_img;
    }
    con3_news();
  });

  // 패밀리 사이트

  $(".family_wrap span").on("click", function () {
    $(".family_wrap span").toggleClass("on");
  });
});
