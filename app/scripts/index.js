/**
 * Created by klsayhtg on 2017. 5. 16..
 */

let currentLanguage = 'en';

const applyBottomTemplate = nunjucks.render('apply-bottom.html', {});
$('#main, #customer, #manager, #driver').append(applyBottomTemplate);

const bottomTemplate = nunjucks.render('bottom.html', {});
$('#main, #customer, #manager, #driver, #register').append(bottomTemplate);

// 언어팩 선언.
$.lang = {};
$.lang.en = {
  locale: 'English',
  txt_support: 'Support',
  txt_login: 'Login',
  title_apply: 'Be in control',
  btn_apply: 'APPLY NOW',
  txt_ems1: 'Easishare Management System',
  txt_ems2: 'Integrated fleet management platform',
  txt_ems_customer: 'CUSTOMER',
  txt_ems_driver: 'DRIVER',
  txt_ems_manager: 'MANAGER',
  txt_serve: 'Serve',
  txt_order: 'Order',
  txt_dispatch: 'Dispatch',
  title_ems_service: 'EMS Service',
  txt_customer_title: 'Customer Tool & APP',
  txt_customer_content: 'Create your customer\'s account to serve their order inputs.',
  txt_manager_title: 'Manager Tool',
  txt_manager_content: 'Manage booking. scheduling. dispatch and reservations all in one.',
  txt_driver_title: 'Driver APP',
  txt_driver_content: 'Dispatch rides and track ride progress real time.',
  title_benefits: 'Benefits',
  txt_survive_title: 'Survive!',
  txt_survive_content: 'Get more business with same fleet size by exchanging orders with other suppliers',
  txt_moreorder_title: 'More Order!',
  txt_moreorder_content: 'Get more order from other booking apps and OTAs connected to EMS',
  txt_ownit_title: 'Own it!',
  txt_ownit_content: 'Get manager tool, customer and driver mobile application with your brand on it',
  txt_win_title: 'Win!',
  txt_win_content: 'Going into bidding? Take secure cloud-based EMS with you to win',
  title_social_proof: 'Social Proof',
  'social-txt_andasun-1': 'Andasun',
  txt_andasun_content: '“It’s easy and boost work efficiency. We no longer have to make multiple phone calls or search through documents to find an available driver.”',
  txt_rich: 'Rich Pacific International',
  txt_rich_content: '“We love how we can track where the drivers are to make sure they are in time for pickup. With this tool, we can provide better service.”',
  txt_manager: 'Manager',
  txt_apply_bottom_content: 'Eliminate trivial tasks with EMS to focus on things that matters most',
  txt_icp: '粤ICP备17020336号粤公网安备 44030402000541号<br>© 2017 深圳易智顺顺科技有限公司 Easi6 Limited. All Rights Reserved.',
  txt_terms_policy: 'Terms & Policy',
  txt_register_title: 'Apply Easishare Management System',
  txt_register_title_desc: 'Below are the basic information we need to get you started.<br>Our sales team will contract you for further guidance as soon as possible.',
  register_confirm_btn: 'Confirm',
};

$.lang.zh_rCN = {
  locale: '中文简体',
  txt_support: '支持',
  txt_login: '登录',
  title_apply: '连接你我',
  btn_apply: '立即申请',
  txt_ems1: '易智行车辆管理系统',
  txt_ems2: '为您整合业务资源',
  txt_ems_customer: '乘客',
  txt_ems_driver: '司机',
  txt_ems_manager: '调度',
  txt_serve: '服务',
  txt_order: '订单',
  txt_dispatch: '安排',
  title_ems_service: '易智行解决方案',
  txt_customer_title: '客户预订工具（含网页与app）',
  txt_customer_content: '为您的客户创建账户，客户下单后，您可以接收到订单。',
  txt_manager_title: '调度工具',
  txt_manager_content: '提供全流程一站式的服务，可为客户下单、行程安排、司机车辆调度等。',
  txt_driver_title: '司机app',
  txt_driver_content: '给司机安排行程并实时监控行程进度。',
  title_benefits: '优势与收益',
  txt_survive_title: '业务拓展！',
  txt_survive_content: '在同样规模的车辆下，通过与同行换单，获取更多的业务。',
  txt_moreorder_title: '更多订单！',
  txt_moreorder_content: '易智行接入了大量订车平台与在线旅行社，您可获得更多订单。',
  txt_ownit_title: '自有品牌',
  txt_ownit_content: '调度工具、客户端、司机端，将标识您提供的自有品牌。',
  txt_win_title: '商业机遇',
  txt_win_content: '需要投标？使用云端安全加密技术的易智行助您在投标中脱颖而出！',
  title_social_proof: '客户评价',
  'social-txt_andasun-1': '深圳市安达顺汽车服务有限公司',
  txt_andasun_content: '“易智行系统使用方便，并提高了工作效率。我们不需要打多次电话或者查看安排表来确认是否有可安排的司机。”',
  txt_rich: '富邦国际发展有限公司',
  txt_rich_content: '“我们可以实时监控司机的位置，以确保司机准时接客。我们很喜欢这个实用的功能。通过易智行，我们能够提供更优质的服务。”',
  txt_manager: '调度',
  txt_apply_bottom_content: '通过易智行车辆管理系统，消除繁琐的工作流程，集中资源到最重要的业务上。',
  txt_icp: '粤ICP备17020336号粤公网安备 44030402000541号<br>© 2017 深圳易智顺顺科技有限公司 Easi6 Limited. All Rights Reserved.',
  txt_terms_policy: '政策条款',
  txt_register_title: 'EMS易智行车辆管理系统',
  txt_register_title_desc: '如需注册易智行车辆管理系统，请如实填写以下信息，谢谢！',
  register_confirm_btn: '提交',
};

$.lang.zh_rTW = {
  locale: '中文繁体',
  txt_support: '支持',
  txt_login: '登錄',
  title_apply: '連接你我',
  btn_apply: '立即申請',
  txt_ems1: '易智行車輛管理系統',
  txt_ems2: '為您整合業務資源',
  txt_ems_customer: '乘客',
  txt_ems_driver: '司機',
  txt_ems_manager: '調度',
  txt_serve: '服務',
  txt_order: '訂單',
  txt_dispatch: '安排',
  title_ems_service: '易智行解決方案',
  txt_customer_title: '客戶預訂工具（含網頁與app）',
  txt_customer_content: '為您的客戶創建賬戶，客戶下單後，您可以接收到訂單。',
  txt_manager_title: '調度工具',
  txt_manager_content: '提供全流程一站式的服務，可為客戶下單、行程安排、司機車輛調度等。',
  txt_driver_title: '司機app',
  txt_driver_content: '給司機安排行程並實時監控行程進度。',
  title_benefits: '優勢與收益',
  txt_survive_title: '業務拓展！',
  txt_survive_content: 'Get more business with same fleet size by exchanging orders with other suppliers',
  txt_moreorder_title: 'More Order!',
  txt_moreorder_content: 'Get more order from other booking apps and OTAs connected to EMS',
  txt_ownit_title: 'Own it!',
  txt_ownit_content: 'Get manager tool, customer and driver mobile application with your brand on it',
  txt_win_title: 'Win!',
  txt_win_content: 'Going into bidding? Take secure cloud-based EMS with you to win',
  title_social_proof: 'Social Proof',
  'social-txt_andasun-1': 'Andasun',
  txt_andasun_content: '“It’s easy and boost work efficiency. We no longer have to make multiple phone calls or search through documents to find an available driver.”',
  txt_rich: 'Rich Pacific International',
  txt_rich_content: '“We love how we can track where the drivers are to make sure they are in time for pickup. With this tool, we can provide better service.”',
  txt_manager: 'Manager',
  txt_apply_bottom_content: 'Eliminate trivial tasks with EMS to focus on things that matters most',
  txt_icp: '粤ICP备17020336号粤公网安备 44030402000541号<br>© 2017 深圳易智顺顺科技有限公司 Easi6 Limited. All Rights Reserved.',
  txt_terms_policy: 'Terms & Policy',
  register_confirm_btn: 'Confirm',
};

$.lang.ko = {};

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
  currentLanguage = lang;
}

// 언어 변경
$('.lang-selector').click((evt) => {
  const lang = $(evt.target).data('lang');
  setLanguage(lang);
});

// Wechat popover
$('[data-toggle=\'popover\']').popover();

// 탭 이동
$('[data-toggle=\'tab\']').click(() => {
  $('html, body').animate({
    scrollTop: 0,
  }, 600);
});

/*
 추가적으로 유용한 처리.
 1. 브라우저 언어에 따라 최초 언어 셋팅하기
 2. 외부에서 URL ?lang=ja 접근시 셋팅하기
 3. 언어 변경시 쿠키에 언어코드 저장해서 재접속시 쿠키 기준으로 언어 셋팅.
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
    alert($.lang[currentLanguage].register_succeed || 'Register succeed. Thanks.');
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
