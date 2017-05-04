/*! Copyright Ilyas Malgazhdarov */
webpackJsonp([0],{498:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),l=r(a),o=(n(63),n(22),n(500)),m=r(o),f=n(506);r(f);t.default=function(e){return l.default.createElement("div",{className:"flex flex-center full"},l.default.createElement(m.default,null))}},499:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(r);n(503);var l=n(63),o=n(106),m=function(e){return e.length>9&&e.length<15?"0.8em":e.length>=15&&e.length<20?"0.6em":e.length>=20&&e.length<27?"0.45em":e.length>=27?"0.4em":"1em"},f=function(e){var t=e.bookName,n=e.name,r=o.utils.getBookName(t,n),l=o.utils.getBookName(t,n),f="1em";return r instanceof Array?(r.sort(function(e,t){return t.length-e.length}),f=m(r[0])):f=m(r),a.default.createElement("div",{className:"flex app-blue app-home-components-___book__r___1TkTA"},a.default.createElement("div",{style:{fontSize:f,fontFamily:"BebasBold"}},l))},c=function(e){return{name:e.form.name.value,bookName:e.form.bookName.value}};t.default=(0,l.connect)(c)(f)},500:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),l=r(a);n(504);var o=n(501),m=r(o),f=n(499),c=r(f);t.default=function(e){return l.default.createElement("div",{className:"full flex flex-center flex-wrap app-home-components-___bookForm__r___22XhV"},l.default.createElement("div",{className:"flex flex-center app-home-components-___bookForm__book-form___NsUEH"},l.default.createElement(c.default,null)),l.default.createElement("div",{className:"flex flex-center app-home-components-___bookForm__book-form___NsUEH app-home-components-___bookForm__form___1oCec"},l.default.createElement(m.default,null)))}},501:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),o=r(l),m=n(106);n(505);var f=n(63),c=n(185),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),d=n(22),_=n(509),i=r(_),s=function(e){return"day"===e?(0,i.default)(1,32):"year"===e?(0,i.default)(2010,1939,-1):m.data.monthsList},p=function(e){var t=e.form,n=a(e,["form"]);return o.default.createElement("div",{className:"flex flex-center flex-column app-home-components-___form__form___3fx6T"},o.default.createElement(m.DescText,{text:"Для кого эта книга?"}),o.default.createElement("div",{style:{margin:3,marginTop:0}}),o.default.createElement(m.DescSmall,{text:"Детали будут использованы для создания книги"}),o.default.createElement("div",{style:{margin:6}}),o.default.createElement(m.Input,{placeholder:"Имя",field:t.name,fieldType:"name",enter:n.actions.enterInput}),o.default.createElement(m.ErrorText,{text:t.name.errorText}),o.default.createElement(m.Input,{placeholder:"Фамилия",field:t.surname,fieldType:"surname",enter:n.actions.enterInput}),o.default.createElement(m.ErrorText,{text:t.surname.errorText}),o.default.createElement(m.Select,{default:"Пол",values:["female","male"],options:["Женский","Мужской"],field:t.gender,fieldType:"gender",enter:n.actions.enterInput}),o.default.createElement(m.ErrorText,{text:t.gender.errorText}),o.default.createElement("div",{style:{marginTop:15}}),o.default.createElement(m.DescText,{text:"Дата рождения"}),o.default.createElement("div",{style:{margin:5}}),o.default.createElement("div",{className:"flex width-full"},o.default.createElement("div",{className:"app-home-components-___form__day___2vD61"},o.default.createElement(m.Select,{default:"День",values:s("day"),options:s("day"),field:t.day,fieldType:"day",enter:n.actions.enterInput})),o.default.createElement("div",{className:"app-home-components-___form__month___1Y9nI"},o.default.createElement(m.Select,{default:"Месяц",values:s("month"),options:s("month"),field:t.month,fieldType:"month",enter:n.actions.enterInput})),o.default.createElement("div",{className:"app-home-components-___form__year___15sGv"},o.default.createElement(m.Select,{values:s("year"),default:"Год",options:s("year"),field:t.year,fieldType:"year",enter:n.actions.enterInput}))),!t.dateExists&&o.default.createElement(m.ErrorText,{text:"Данной даты не существует"}),t.dateExists&&o.default.createElement(m.ErrorText,{text:t.month.errorText||t.day.errorText||t.year.errorText}),o.default.createElement(m.Select,{values:["today","next"],default:"Возраст указанный в книге",options:["Возраст сегодня "+(t.calculatedAge&&" ("+t.calculatedAge+")"),"Возраст в следующий день рождения "+(t.calculatedAge&&" ("+(parseInt(t.calculatedAge)+1)+")")],field:t.age,fieldType:"age",enter:n.actions.enterInput}),o.default.createElement(m.ErrorText,{text:t.age.errorText}),o.default.createElement("div",{className:"flex width-full"},o.default.createElement(m.Button,{click:function(){return n.actions.changeForm(!0)}},"Продолжить")))},x=function(e){var t=e.form,n=a(e,["form"]);return o.default.createElement("div",{className:"flex flex-center flex-column app-home-components-___form__form___3fx6T"},o.default.createElement(m.DescText,{text:"От кого эта книга?"}),o.default.createElement("div",{style:{margin:10,marginTop:0}}),o.default.createElement(m.Input,{field:t.senderName,style:"",placeholder:"Оби Ван Кеноби",fieldType:"senderName",enter:n.actions.enterInput}),o.default.createElement(m.ErrorText,{text:t.senderName.errorText}),o.default.createElement(m.Input,{field:t.bookName,style:"",placeholder:"Название книги (можно оставить пустым)",fieldType:"bookName",enter:n.actions.enterInput}),o.default.createElement(m.ErrorText,{text:t.bookName.errorText}),o.default.createElement("div",{style:{margin:15}}),o.default.createElement(m.DescText,{text:"Отношение"}),o.default.createElement("div",{style:{margin:3,marginTop:0}}),o.default.createElement(m.DescSmall,{text:"Кем вы приходитесь человеку по имени "+t.name.value}),o.default.createElement("div",{style:{margin:6}}),o.default.createElement(m.Select,{values:["collegue","friend","relative","married"],default:"Кем приходитесь?",options:["Коллеги","Друзья","Родственники","male"===t.gender.value?"Супруга":"Супруг"],field:t.relation,fieldType:"relation",enter:n.actions.enterInput}),o.default.createElement(m.ErrorText,{text:t.relation.errorText}),o.default.createElement("div",{className:"flex width-full space-between"},o.default.createElement(m.Button,{click:function(){return n.actions.changeForm(!1)}},"Назад"),o.default.createElement(m.Button,{click:function(){return n.actions.changeForm(!1)}},"Создать книгу")))},E=function(e){var t=e.form,n=t.isNext,r=a(t,["isNext"]),l=e.actions;return n?o.default.createElement(x,{actions:l,form:r}):o.default.createElement(p,{actions:l,form:r})},v=function(e){return{form:e.form}},h=function(e){return{actions:(0,d.bindActionCreators)(u,e)}};t.default=(0,f.connect)(v,h)(E)},503:function(e,t){e.exports={r:"app-home-components-___book__r___1TkTA"}},504:function(e,t){e.exports={r:"app-home-components-___bookForm__r___22XhV","book-form":"app-home-components-___bookForm__book-form___NsUEH",form:"app-home-components-___bookForm__form___1oCec"}},505:function(e,t){e.exports={form:"app-home-components-___form__form___3fx6T",day:"app-home-components-___form__day___2vD61",month:"app-home-components-___form__month___1Y9nI",year:"app-home-components-___form__year___15sGv"}},506:function(e,t){e.exports={"slider-div":"app-home-___home__slider-div___1IPgh"}},507:function(e,t){function n(e,t,n,l){for(var o=-1,m=a(r((t-e)/(n||1)),0),f=Array(m);m--;)f[l?m:++o]=e,e+=n;return f}var r=Math.ceil,a=Math.max;e.exports=n},508:function(e,t,n){function r(e){return function(t,n,r){return r&&"number"!=typeof r&&l(t,n,r)&&(n=r=void 0),t=o(t),void 0===n?(n=t,t=0):n=o(n),r=void 0===r?t<n?1:-1:o(r),a(t,n,r,e)}}var a=n(507),l=n(186),o=n(187);e.exports=r},509:function(e,t,n){var r=n(508),a=r();e.exports=a}});