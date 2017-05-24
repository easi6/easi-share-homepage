/**
 * Created by klsayhtg on 2017. 5. 16..
 */

const savedLang = Cookies.get('lang');
let currentLanguage = savedLang ? savedLang : 'zh_rCN';

const firstHash = window.location.hash;
if (firstHash !== "" && firstHash != null) {
  $($(`[href='${firstHash}']`)[0]).tab('show');
}

const applyBottomTemplate = nunjucks.render('apply-bottom.html', {});
$('#main, #customer, #manager, #driver').append(applyBottomTemplate);

const bottomTemplate = nunjucks.render('bottom.html', {});
$('#main, #customer, #manager, #driver, #register').append(bottomTemplate);

/**
 * setLanguage
 * use $.lang[currentLanguage][languageNumber]
 */
function setLanguage(lang) {
  currentLanguage = lang;
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
    // $elem.html($.lang[currentLanguage][$elem.data('langimg')]);
    $(document).ready(() => {
      $elem.css('background-image', `url(${  $.lang[currentLanguage][$elem.data('langimg')]  })`);
    });
  });

  setBottomIcons(lang);
}

function setBottomIcons(lang) {
  // hide wechat always temporally
  $('#nav-bottom-wechat').hide();


  if (['zh_rCN', 'zh_rTW'].indexOf(lang) >= 0) {
    $('#nav-bottom-facebook, #nav-bottom-instagram').hide();
  } else {
    $('#nav-bottom-facebook, #nav-bottom-instagram').show();
  }
}

// 언어 변경
$('.lang-selector').click((evt) => {
  const lang = $(evt.target).data('lang');
  Cookies.set('lang', lang);
  setLanguage(lang);
});

// Wechat popover
$('[data-toggle=\'popover\']').popover();

// 탭 이동
$('[data-toggle=\'tab\']').click((evt) => {
  evt.preventDefault();
  const $target = $(evt.currentTarget);
  location.href = '/'+$target.attr('href');
  $('html, body').animate({
    scrollTop: 0,
  }, 600);
});

/*
 추가적으로 유용한 처리.
 1. 브라우저 언어에 따라 최초 언어 셋팅하기
 2. 외부에서 URL ?lang=ja 접근시 셋팅하기
 */

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
  $(matcher).html($.lang[currentLanguage].err_required || 'Please select one of these options.');
}

function removeAllErrorMessages() {
  $('.register-a-err').html('');
}

$registerForm.submit(() => {
  removeAllErrorMessages();
  const url = $registerForm.attr('action');
  const data = $registerForm.serialize();

  const dataArr = $registerForm.serializeArray();
  const checkedServiceRegion = _.find(dataArr, {name: 'service_region'});
  const checkedCarTypes = _.find(dataArr, {name: 'car_types'});

  if (checkedCarTypes == null) {
    showErrorMessage('car_types');
    location.href = '#car_types-qa-box';
    return false;
  }

  if (checkedServiceRegion == null) {
    showErrorMessage('service_region');
    location.href = '#service_region-qa-box';
    return false;
  }

  const success = (res) => {
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
