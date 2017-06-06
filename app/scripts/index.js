/**
 * Created by klsayhtg on 2017. 5. 16..
 */

const savedLang = Cookies.get('lang');
let currentLanguage = savedLang ? savedLang : 'zh_rCN';

if (currentLanguage === null || currentLanguage === undefined || currentLanguage === 'undefined') {
  currentLanguage = 'zh_rCN';
}

function moveToHashTab(hash) {
  if (hash !== '' && hash != null) {
    $($(`[href='${hash}']`)[0]).tab('show');
  }
}

const firstHash = window.location.hash;
moveToHashTab(firstHash);

$(window).on('hashchange', () => {
  moveToHashTab(window.location.hash);
});

const applyBottomTemplate = nunjucks.render('apply-bottom.html', {});
$('#main, #customer, #manager, #driver').append(applyBottomTemplate);

const bottomTemplate = nunjucks.render('bottom.html', {});
$('#main, #customer, #manager, #driver, #register').append(bottomTemplate);

/**
 * setLanguage
 * use $.lang[currentLanguage][languageNumber]
 */
function setLanguage(lang) {
  _.forEach($('[data-langstr]'), (elem) => {
    const $elem = $(elem);
    $elem.html($.lang[lang][$elem.data('langstr')]);
  });
  _.forEach($('input[type=submit][data-langstr]'), (elem) => {
    const $elem = $(elem);
    $elem.val($.lang[lang][$elem.data('langstr')]);
  });

  _.forEach($('[data-langimg]'), (elem) => {
    const $elem = $(elem);
    $(document).ready(() => {
      $elem.css('background-image', `url(${$.lang[lang][$elem.data('langimg')]})`);
    });
  });
  _.forEach($('[data-langsvg]'), (elem) => {
    const $elem = $(elem);
    $(document).ready(() => {
      document.getElementById($elem.data('langsvg')).src = $.lang[lang][$elem.data('langsvg')];
    });
  });

  setBottomIcons(lang);
  mobileNavDropdownEvent();
}

function setBottomIcons(lang) {
  // hide wechat always temporally
  $('.nav-bottom-wechat').detach();

  if (['zh_rCN', 'zh_rTW'].indexOf(lang) >= 0) {
    $('.nav-bottom-facebook, .nav-bottom-instagram').hide();
  } else {
    $('.nav-bottom-facebook, .nav-bottom-instagram').show();
  }
}

let isDropdownActive = false;
const mobileNavToggle = $('#mobile-nav-toggle');

mobileNavToggle.on('shown.bs.collapse', function() {
  isDropdownActive = true;
});

mobileNavToggle.on('hidden.bs.collapse', function() {
  isDropdownActive = false;
});

function mobileNavDropdownEvent() {
  if(isDropdownActive) {
    $('.navbar-toggle').click();
  }
}

function setTabChangeEvents(id) {
  try {
    $(window).unbind('scroll');
    $.fn.fullpage.destroy('all');
  } catch (e) {

  }
  if('#customer' === id || '#manager' === id || '#driver' === id) {
    $(() => {
      const fullpageId = `${'#fullpage' + '-'}${  id.substring(1)}`;
      if($(fullpageId).length > 0) {
        $($(fullpageId)).fullpage({
          responsiveWidth: 1000,
          verticalCentered: false,
          css3: false,
          fitToSection: false,
          fitToSectionDelay: 30000,
          afterLoad: function(anchorLink, index){
            // index가 마지막 section으로 오면 scroll event를 끔
            if(window.innerWidth > 1000 && index === 6){
              $.fn.fullpage.setAutoScrolling(false);

              $(window).scroll(() => {
                const height = $(window).scrollTop();
                if(window.innerWidth > 1000 && height < window.innerHeight * 5 - 5) {
                  $.fn.fullpage.setAutoScrolling(true);
                  if(height === '0') {
                    $.fn.fullpage.moveTo(0);
                  } else {
                    $.fn.fullpage.moveTo(5);
                  }
                }
              });
            }
          },
        });
      }
    });
  } else if('#main' === id) {
    (function() {
      window.addEventListener('scroll', function(event) {
        let depth, i, layer, len, movement, translate3d;
        const topDistance = this.pageYOffset;
        const layers = document.querySelectorAll('[data-type=\'parallax\']');
        for (i = 0, len = layers.length; i < len; i++) {
          layer = layers[i];
          depth = layer.getAttribute('data-depth');
          movement = -(topDistance * depth);
          translate3d = `translate3d(-50%, ${  movement  }px, 0)`;
          layer.style['-webkit-transform'] = translate3d;
          layer.style['-moz-transform'] = translate3d;
          layer.style['-ms-transform'] = translate3d;
          layer.style['-o-transform'] = translate3d;
          layer.style.transform = translate3d;
        }
      });
    }).call(this);
  }

  if ('#register' === id) {
    $('.nav-menu-login, .divider1').hide();
  } else {
    $('.nav-menu-login, .divider1').show();
  }

  mobileNavDropdownEvent();
}

function setMobileVisible() {
  const isVisible = window.innerWidth <= 1000;
  if(isVisible) {
    $('.apply-field-mobile, .navbar-ems-mobile').show();
    $('.apply-field, .navbar-ems, .breadcrumb-list').hide();
  } else {
    $('.apply-field-mobile, .navbar-ems-mobile').hide();
    $('.apply-field, .navbar-ems, .breadcrumb-list').show();
  }
}

// 언어 변경
$('.lang-selector').click((evt) => {
  const langtype = $(evt.target).data('langtype');
  const lang = $.langtype[currentLanguage][langtype];

  if (['zh_rCN', 'zh_rTW', 'en', 'ko'].indexOf(lang) >= 0) {
    currentLanguage = lang;
    Cookies.set('lang', lang);
    setLanguage(lang);
  }
});

// Wechat popover
$('[data-toggle=\'popover\']').popover();

// 탭 이동
$('[data-toggle=\'tab\']').click((evt) => {
  evt.preventDefault();

  const $target = $(evt.currentTarget);
  location.href = `/${$target.attr('href')}`;
  $('html, body').animate({
    scrollTop: 0,
  }, 600);

  setTabChangeEvents($target.attr('href'));
});

window.onresize = function(event) {
  setMobileVisible();
};

const questions = {};
questions.en = [
  'Company Name',
  'Phone Number',
  'Company Address',
  'Company email address',
  'Login ID',

  'Which Language option do you want to use?',
  'Where is your company’s base city?',
  'Do you also need to manage long-term contracted / leased drivers?',
  'Which type of car do you own?',
  'Where do your rides travel?',

  'Do you want to take easiway, OTA orders?',
];
questions.zh_rCN = [
  '公司名称', '联系方式', '公司详细地址', '公司邮箱地址', '登录账号',

  '语言设置', '贵公司业务所覆盖的城市', '是否需要管理长租/固定合同的司机？', '贵公司的车辆类型有哪些？', '公司提供服务的区域类型？',

  '贵公司可以接受易路的订单吗？',
];
questions.zh_rTW = [];

const descriptions = {};
descriptions.en = [
  'Enter your company’s full name', null, null, null, null,

  null, null, null, 'Select all that applies to your company', 'Select all that applies to your company',

  null,
];
descriptions.zh_rCN = [
  '输入贵公司的全称', null, null, null, null,

  null, null, null, '请选择贵公司拥有的所有车辆类型', '请选择贵公司拥有的所有车辆类型',

  null,
];
descriptions.zh_rTW = [];

const questionsTypeArr = [
  'text', 'text', 'text', 'email', 'text',

  'radio', 'radio', 'radio', 'checkbox', 'checkbox',

  'radio',
];

const yesOrNo = [
  {
    name: 'yesOrNo',
    value: 'true',
    label: {
      en: 'Yes',
      zh_rCN: '是',
      zh_rTW: '',
    },
  },
  {
    name: 'yesOrNo',
    value: 'false',
    label: {
      en: 'No',
      zh_rCN: '否',
      zh_rTW: '',
    },
  },
];
const cities = [];
const cityValues = [
  0, 1, 2, 3, 5,
  6, 1000, 2000, 2001, -1,
];
const cityNames = {};
cityNames.en = [
  'Shenzhen', 'Hongkong', 'Macau', 'Zhuhai', 'Meizhou',
  'Guangzhou', 'Taiwan', 'Jakarta', 'Bali', 'Etc',
];
cityNames.zh_rCN = [
  '深圳', '香港', '澳门', '珠海', '梅州',
  '广州', '台灣', 'Jakarta', 'Bali', 'Etc',
];
cityNames.zh_rTW = [];

for (let i = 0; i < cityNames.en.length; i++) {
  cities.push({
    name: 'city',
    value: cityValues[i],
    label: {
      en: cityNames.en[i],
      zh_rCN: cityNames.zh_rCN[i] || '',
      zh_rTW: cityNames.zh_rTW[i] || '',
    },
  });
}

const langs = [];
const langValues = [
  'zh_rCN', 'zh_rTW', 'en',
];
const langNames = {};
langNames.en = [
  '中文简体', '中文繁体', 'English',
];
langNames.zh_rCN = [
  '中文简体', '中文繁体', 'English',
];
langNames.zh_rTW = [];

for (let i = 0; i < langNames.en.length; i++) {
  langs.push({
    name: 'lang',
    value: langValues[i],
    label: {
      en: langNames.en[i],
      zh_rCN: langNames.zh_rCN[i] || '',
      zh_rTW: langNames.zh_rTW[i] || '',
    },
  });
}

const vans = [];
const vanValues = [
  0, 1, 2, 3, 4,
  5, 6,
];
const vanNames = {};
vanNames.en = [
  'Van (Alphard or Similar)',
  'Sedan (Camry or similar)',
  'Cross-border Van',
  'Cross-border Sedan',
  'Bus (49-person)',

  'Mini Bus (21-person)',
  'Black Sedan (A6 similar)',
];
vanNames.zh_rCN = [
  '商务车（丰田埃尔法或类似车型）',
  '轿车（凯美瑞或类似车型）',
  '跨境商务车',
  '跨境轿车',
  '大巴（49座）',

  '中巴（21座）',
  '豪华轿车（奥迪A6或类似车型）',
];
vanNames.zh_rTW = [];

for (let i = 0; i < vanNames.en.length; i++) {
  vans.push({
    name: 'van',
    value: vanValues[i],
    label: {
      en: vanNames.en[i],
      zh_rCN: vanNames.zh_rCN[i] || '',
      zh_rTW: vanNames.zh_rTW[i] || '',
    },
  });
}

const options = [
  null, null, null, null, null,

  langs, cities, yesOrNo, vans, cities,

  yesOrNo,
];

const names = [
  'name',
  'phone',
  'address',
  'email',
  'login',

  'locale',
  'base_city',
  'log_driving_record',
  'car_types',
  'service_region',

  'easiway_ind',
];

function prepareTranslations() {
  const questionsLength = questions.en.length;
  _.forEach(['en', 'zh_rCN', 'zh_rTW'], (lang) => {
    for (let i = 0; i < questionsLength; i++) {
      const number = i + 1;
      $.lang[lang][`register_question_${number}`] = `${number}. ${questions[lang][i]}`;
      $.lang[lang][`register_desc_${number}`] = descriptions[lang][i];
    }

    _.forEach([langs, cities, yesOrNo, vans], (optionSet) => {
      for (let i = 0; i < optionSet.length; i++) {
        const option = optionSet[i];
        $.lang[lang][`register_option_${option.name}_${option.value}`] = option.label[lang];
      }
    });
  });
}
prepareTranslations();

function renderQuestions() {
  for (let i = 0; i < 11; i++) {


    const question = {
      number: i + 1,
      name: names[i],
      required: true,
      type: questionsTypeArr[i],
      options: options[i],
      currentLanguage: currentLanguage,
    };
    const template = nunjucks.render('question.html', question);
    $('#register-form-content').append(template);
  }

  setLanguage(currentLanguage);
}

renderQuestions();

const $registerForm = $('#register-form');

function showErrorMessage(name) {
  const matcher = `#${name}-qa-box .register-a-err`;
  let errorMsg;
  if (name === 'login') {
    errorMsg = $.lang[currentLanguage].err_login_id_registered || 'This login ID is already taken.';
  } else {
    errorMsg = $.lang[currentLanguage].err_required || 'Please select one of these options.';
  }
  $(matcher).html(errorMsg);
}

function removeAllErrorMessages() {
  $('.register-a-err').html('');
}

const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

function scrollToHashLocation(hash) {
  // location.href = hash;

  $(document.body).animate({
    scrollTop: $(hash).offset().top - 100,
  }, 300);
}

$registerForm.submit(() => {
  removeAllErrorMessages();
  const url = isLocalhost ? 'http://easixing.dev:9000/companies/signup_request' : $registerForm.attr('action');
  const data = $registerForm.serialize();

  const dataArr = $registerForm.serializeArray();
  const checkedServiceRegion = _.find(dataArr, {name: 'service_region'});
  const checkedCarTypes = _.find(dataArr, {name: 'car_types'});

  if (checkedCarTypes == null) {
    showErrorMessage('car_types');
    scrollToHashLocation('#car_types-qa-box');
    return false;
  }

  if (checkedServiceRegion == null) {
    showErrorMessage('service_region');
    scrollToHashLocation('#service_region-qa-box');
    return false;
  }

  const success = (res) => {
    if (res.available != null && !res.available) {
      showErrorMessage('login');
      scrollToHashLocation('#login-qa-box');
      return;
    }

    alert($.lang[currentLanguage].register_succeed || 'Thank you! We will be in touch shortly.');
    location.href = '/';
  };
  const dataType = 'json';
  $.ajax({
    type: 'POST',
    url: url,
    data: data,
    success: success,
    dataType: dataType,
  });
  return false;
});

setLanguage(currentLanguage);
setTabChangeEvents(`#${$('.active').attr('id')}`);
setMobileVisible(false);
