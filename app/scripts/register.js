const currentLanguage = 'en';

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
questions.zh_rCN = [];
questions.zh_rTW = [];

const descriptions = {};
descriptions.en = [
  'Enter your company’s full name',
  null,
  null,
  null,
  null,

  null,
  null,
  null,
  'Enter your company’s full name',
  'Select all that applies to your company',

  null,
];
descriptions.zh_rCN = [];
descriptions.zh_rTW = [];

const questionsTypeArr = [
  'text', 'text', 'text', 'email', 'text',

  'radio', 'radio', 'radio', 'checkbox', 'checkbox',

  'radio',
];

const yesOrNo = [
  {
    value: 'true',
    label: {
      en: 'Yes',
      zh_rCN: '',
      zh_rTW: '',
    },
  },
  {
    value: 'false',
    label: {
      en: 'No',
      zh_rCN: '',
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
cityNames.zh_rCN = [];
cityNames.zh_rTW = [];

for (let i = 0; i < cityNames.en.length; i++) {
  cities.push({
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
  'Chinese - Simplified', 'Chinese - Traditional', 'English',
];
langNames.zh_rCN = [];
langNames.zh_rTW = [];

for (let i = 0; i < langNames.en.length; i++) {
  langs.push({
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
vanNames.zh_rCN = [];
vanNames.zh_rTW = [];

for (let i = 0; i < vanNames.en.length; i++) {
  vans.push({
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


function renderQuestions(selectedLanguage) {
  for (let i = 0; i < 11; i++) {
    const question = {
      number: i + 1,
      name: names[i],
      title: questions[selectedLanguage][i] || '',
      description: descriptions[selectedLanguage][i] || '',
      required: true,
      type: questionsTypeArr[i],
      options: options[i],
      currentLanguage: selectedLanguage,
    };
    const template = nunjucks.render('question.html', question);
    $('#register-form-content').append(template);
  }
}

renderQuestions(currentLanguage);

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
