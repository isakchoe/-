

var DATA = [
  { user: '이동욱14', message: '가성비 있는 인생, 내 관짝도 가성비 있는것으로.', created_at: '2019-07-03 12:30:20' },
  { user: '최부성15', message: '오늘도 멋진 남자 최 모씨', created_at: '2019-11-04 18:30:20' },
  { user: '함스터치15', message: '음식도 간이 중요하듯 인생도 간이다', created_at: '2019-11-05 07:30:20' },
  { user: '고갱주15', message: '내 삶이 가취있기를', created_at: '2015-08-03 12:30:20' },
  { user: '여성익15', message: '빠끄!', created_at: '2019-10-04 18:30:20' }
];




var randomUser = ['이동욱14', '최부성15', '함스터치15', '최강창민', '류훈식', '고갱주','여성익15'];
var randomMessage = [
  '여자 만나!',
  '헬스 왔다. 질문 받는다 ',
  '얼만데?',
  '플렉스 해버렷지 머야~ 빠끄!',
  '빠끄충 죽이고 싶다 ㅂㄷㅂㄷ',
  '끝가지 갔기 때문이에요~',
  '쉑~~~!!!! s'

]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateNewTweet() {
 
 
 
  var tweet = {};
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  tweet.created_at = new Date().format()// 어떻게 하면 보기 좋은 형태로 나타낼 수 있을까요?
  return tweet;
};

Number.prototype.padLeft = function() {
  if(this < 10) {
    return '0' + String(this);
  }
  else {
    return String(this);
  }
}

Date.prototype.format = function() {
  var yyyy = this.getFullYear();
  var month = (this.getMonth() + 1).padLeft();
  var dd = this.getDate().padLeft();
  var HH = this.getHours().padLeft();
  var mm = this.getMinutes().padLeft();
  var ss = this.getSeconds().padLeft();

  var format = [yyyy, month, dd].join('-') + ' ' + [HH, mm, ss].join(':');
  return format;
}