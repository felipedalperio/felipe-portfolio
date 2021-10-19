self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'WhatsApp Clone',
  description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
  image: './images/image1.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'Instagram Clone',
  description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  image: './images/image2.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'Flappy Bird Clone',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: './images/image3.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Quiz',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: './images/image4.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}, {
  title: 'Hotel para cachorro',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: './images/image5.jpg',
  tags: ['C#', 'Html', 'Css'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 4
}, {
  title: 'WhatsApp Web Clone',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: './images/image6.png',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 5
}, {
  title: 'Olx Clone',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: './images/image7.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 6
}, {
  title: 'Game - Cara ou Coroa',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: './images/image8.jpg',
  tags: ['Java'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 7
}, {
  title: 'Porta da sorte',
  description: "Um jogo para testar a sua sorte, onde quem joga deve tentar encontrar a porta premiada por eliminação. Podendo selecionar os níveis de dificuldade, através da movimentação do prêmio e a alteração do número de portas.",
  image: './images/image9.jpg',
  tags: ['Java'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 7
}];
var TimeLineData = [{
  year: 2017,
  text: 'Iniciei minha jornada no mundo da programação.'
}, {
  year: 2018,
  text: 'Comecei a fazer faculdade de S.I na Universidade Positivo.'
}, {
  year: 2019,
  text: 'Foquei meus estudos em desenvolvimento mobile utilizando Java.'
}, {
  year: 2020,
  text: 'Desenvolvi projetos com base nos conhecimetos adiquiridos.'
}, {
  year: 2021,
  text: 'Iniciei meus estudos em desenvolvimento web utilizando React.'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGdCQURUO0FBRUVDLGFBQVcsRUFBRSxtUUFGZjtBQUdJQyxPQUFLLEVBQUUscUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxpQkFEVDtBQUVFQyxhQUFXLEVBQUMsdVVBRmQ7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUSxVQUFSLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLG1CQURUO0FBRUVDLGFBQVcsRUFBRSwrSkFGZjtBQUdJQyxPQUFLLEVBQUUscUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLE1BRFQ7QUFFRUMsYUFBVyxFQUFFLGdJQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVEsVUFBUixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUscUJBRFQ7QUFFRUMsYUFBVyxFQUFFLGdJQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFlLEtBQWYsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBckNzQixFQThDdEI7QUFDRU4sT0FBSyxFQUFFLG9CQURUO0FBRUVDLGFBQVcsRUFBRSxnSUFGZjtBQUdFQyxPQUFLLEVBQUUscUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBOUNzQixFQXVEdEI7QUFDRU4sT0FBSyxFQUFFLFdBRFQ7QUFFRUMsYUFBVyxFQUFFLGdJQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVEsVUFBUixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F2RHNCLEVBZ0V0QjtBQUNFTixPQUFLLEVBQUUsc0JBRFQ7QUFFRUMsYUFBVyxFQUFFLGdJQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWhFc0IsRUEwRXRCO0FBQ0VOLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQUUsME5BRmY7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE1BQUQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBMUVzQixDQUFqQjtBQXVGQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZDQ0YTc5M2U2MDdjNWQ4NTQ2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdXaGF0c0FwcCBDbG9uZScsXG4gICAgZGVzY3JpcHRpb246IFwiVXNpbmcgUmVhY3QsIE5vZGUuanMsIEV4cHJlc3MgJiBNb25nb0RCIHlvdSdsbCBsZWFybiBob3cgdG8gYnVpbGQgYSBGdWxsIFN0YWNrIE1FUk4gQXBwbGljYXRpb24gLSBmcm9tIHN0YXJ0IHRvIGZpbmlzaC4gVGhlIEFwcCBpcyBjYWxsZWQgTWVtb3JpZXMgYW5kIGl0IGlzIGEgc2ltcGxlIHNvY2lhbCBtZWRpYSBhcHAgdGhhdCBhbGxvd3MgdXNlcnMgdG8gcG9zdCBpbnRlcmVzdGluZyBldmVudHMgdGhhdCBoYXBwZW5lZCBpbiB0aGVpciBsaXZlcy5cIixcbiAgICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2UxLmpwZycsXG4gICAgICB0YWdzOiBbJ0phdmEnLCdmaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdJbnN0YWdyYW0gQ2xvbmUnLFxuICAgIGRlc2NyaXB0aW9uOlwiV2hpbGUgYnVpbGRpbmcgaXQgeW91J3JlIGdvaW5nIHRvIGxlYXJuIG1hbnkgYWR2YW5jZWQgUmVhY3QgJiBKYXZhU2NyaXB0IHRvcGljcywgYXMgd2VsbCBhcyBob3cgdG8gdXNlIFN0cmlwZSBmb3IgY2FyZCB0cmFuc2FjdGlvbnMuIE9uIHRvcCBvZiB0aGF0LCBhdCB0aGUgZW5kIG9mIHRoZSB2aWRlbywgeW91IHdpbGwgaGF2ZSB0aGlzIHVuaXF1ZSBhbmQgY29tcGxleCB3ZWJzaG9wIGFwcCB0aGF0IHlvdSB3aWxsIGJlIGFibGUgdG8gYWRkIHRvIHlvdXIgcG9ydGZvbGlvLiBBbmQgdHJ1c3QgbWUsIGUtY29tbWVyY2UgYXBwbGljYXRpb25zIGFyZSBpbXByZXNzaXZlLlwiLFxuICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2UyLmpwZycsXG4gICAgdGFnczogWydKYXZhJywnZmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRmxhcHB5IEJpcmQgQ2xvbmUnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2UzLmpwZycsXG4gICAgICB0YWdzOiBbJ0phdmEnLCdmaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdRdWl6JyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB2aWRlbyB0dXRvcmlhbC4gSW4gdGhpcyB2aWRlbywgd2Ugd2lsbCBjcmVhdGUgYSBmdWxsIFJlYWx0aW1lIENoYXQgQXBwbGljYXRpb25cIixcbiAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlNC5qcGcnLFxuICAgIHRhZ3M6IFsnSmF2YScsJ2ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hvdGVsIHBhcmEgY2FjaG9ycm8nLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHZpZGVvIHR1dG9yaWFsLiBJbiB0aGlzIHZpZGVvLCB3ZSB3aWxsIGNyZWF0ZSBhIGZ1bGwgUmVhbHRpbWUgQ2hhdCBBcHBsaWNhdGlvblwiLFxuICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2U1LmpwZycsXG4gICAgdGFnczogWydDIycsICdIdG1sJywgJ0NzcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiA0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXaGF0c0FwcCBXZWIgQ2xvbmUnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHZpZGVvIHR1dG9yaWFsLiBJbiB0aGlzIHZpZGVvLCB3ZSB3aWxsIGNyZWF0ZSBhIGZ1bGwgUmVhbHRpbWUgQ2hhdCBBcHBsaWNhdGlvblwiLFxuICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2U2LnBuZycsXG4gICAgdGFnczogWydKYXZhJywnZmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogNSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnT2x4IENsb25lJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB2aWRlbyB0dXRvcmlhbC4gSW4gdGhpcyB2aWRlbywgd2Ugd2lsbCBjcmVhdGUgYSBmdWxsIFJlYWx0aW1lIENoYXQgQXBwbGljYXRpb25cIixcbiAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlNy5qcGcnLFxuICAgIHRhZ3M6IFsnSmF2YScsJ2ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDYsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0dhbWUgLSBDYXJhIG91IENvcm9hJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB2aWRlbyB0dXRvcmlhbC4gSW4gdGhpcyB2aWRlbywgd2Ugd2lsbCBjcmVhdGUgYSBmdWxsIFJlYWx0aW1lIENoYXQgQXBwbGljYXRpb25cIixcbiAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlOC5qcGcnLFxuICAgIHRhZ3M6IFsnSmF2YSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiA3LFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogJ1BvcnRhIGRhIHNvcnRlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJVbSBqb2dvIHBhcmEgdGVzdGFyIGEgc3VhIHNvcnRlLCBvbmRlIHF1ZW0gam9nYSBkZXZlIHRlbnRhciBlbmNvbnRyYXIgYSBwb3J0YSBwcmVtaWFkYSBwb3IgZWxpbWluYcOnw6NvLiBQb2RlbmRvIHNlbGVjaW9uYXIgb3MgbsOtdmVpcyBkZSBkaWZpY3VsZGFkZSwgYXRyYXbDqXMgZGEgbW92aW1lbnRhw6fDo28gZG8gcHLDqm1pbyBlIGEgYWx0ZXJhw6fDo28gZG8gbsO6bWVybyBkZSBwb3J0YXMuXCIsXG4gICAgaW1hZ2U6ICcuL2ltYWdlcy9pbWFnZTkuanBnJyxcbiAgICB0YWdzOiBbJ0phdmEnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogNyxcbiAgfVxuXG4gIFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnSW5pY2llaSBtaW5oYSBqb3JuYWRhIG5vIG11bmRvIGRhIHByb2dyYW1hw6fDo28uJywgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnQ29tZWNlaSBhIGZhemVyIGZhY3VsZGFkZSBkZSBTLkkgbmEgVW5pdmVyc2lkYWRlIFBvc2l0aXZvLicsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZvcXVlaSBtZXVzIGVzdHVkb3MgZW0gZGVzZW52b2x2aW1lbnRvIG1vYmlsZSB1dGlsaXphbmRvIEphdmEuJywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnRGVzZW52b2x2aSBwcm9qZXRvcyBjb20gYmFzZSBub3MgY29uaGVjaW1ldG9zIGFkaXF1aXJpZG9zLicsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ0luaWNpZWkgbWV1cyBlc3R1ZG9zIGVtIGRlc2Vudm9sdmltZW50byB3ZWIgdXRpbGl6YW5kbyBSZWFjdC4nLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9