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
  description: "Aplicativo para android feito em java utilizando o banco de dados Firebase o projeto nao contem todos os recursos do whatsApp apenas os principais.",
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
  tags: ['JavaScript', 'React.js', 'Next.js'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 8
}, {
  title: 'Quiz Web',
  description: "Um questionario com uma interface bem amigavel ",
  image: './images/image10.jpg',
  tags: ['JavaScript', 'React.js', 'Next.js'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGdCQURUO0FBRUVDLGFBQVcsRUFBRSxxSkFGZjtBQUdJQyxPQUFLLEVBQUUscUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxpQkFEVDtBQUVFQyxhQUFXLEVBQUMsdVVBRmQ7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUSxVQUFSLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLG1CQURUO0FBRUVDLGFBQVcsRUFBRSwrSkFGZjtBQUdJQyxPQUFLLEVBQUUscUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLE1BRFQ7QUFFRUMsYUFBVyxFQUFFLGdJQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVEsVUFBUixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUscUJBRFQ7QUFFRUMsYUFBVyxFQUFFLGdJQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFlLEtBQWYsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBckNzQixFQThDdEI7QUFDRU4sT0FBSyxFQUFFLG9CQURUO0FBRUVDLGFBQVcsRUFBRSxnSUFGZjtBQUdFQyxPQUFLLEVBQUUscUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBOUNzQixFQXVEdEI7QUFDRU4sT0FBSyxFQUFFLFdBRFQ7QUFFRUMsYUFBVyxFQUFFLGdJQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVEsVUFBUixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F2RHNCLEVBZ0V0QjtBQUNFTixPQUFLLEVBQUUsc0JBRFQ7QUFFRUMsYUFBVyxFQUFFLGdJQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWhFc0IsRUEwRXRCO0FBQ0VOLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQUUsME5BRmY7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFlBQUQsRUFBYyxVQUFkLEVBQXlCLFNBQXpCLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTFFc0IsRUFtRnRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFBRSxpREFGZjtBQUdFQyxPQUFLLEVBQUUsc0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsWUFBRCxFQUFjLFVBQWQsRUFBeUIsU0FBekIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkZzQixDQUFqQjtBQWdHQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mN2U5YjAwYjJjMjJiZTUwYzQzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdXaGF0c0FwcCBDbG9uZScsXG4gICAgZGVzY3JpcHRpb246IFwiQXBsaWNhdGl2byBwYXJhIGFuZHJvaWQgZmVpdG8gZW0gamF2YSB1dGlsaXphbmRvIG8gYmFuY28gZGUgZGFkb3MgRmlyZWJhc2UgbyBwcm9qZXRvIG5hbyBjb250ZW0gdG9kb3Mgb3MgcmVjdXJzb3MgZG8gd2hhdHNBcHAgYXBlbmFzIG9zIHByaW5jaXBhaXMuXCIsXG4gICAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlMS5qcGcnLFxuICAgICAgdGFnczogWydKYXZhJywnZmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSW5zdGFncmFtIENsb25lJyxcbiAgICBkZXNjcmlwdGlvbjpcIldoaWxlIGJ1aWxkaW5nIGl0IHlvdSdyZSBnb2luZyB0byBsZWFybiBtYW55IGFkdmFuY2VkIFJlYWN0ICYgSmF2YVNjcmlwdCB0b3BpY3MsIGFzIHdlbGwgYXMgaG93IHRvIHVzZSBTdHJpcGUgZm9yIGNhcmQgdHJhbnNhY3Rpb25zLiBPbiB0b3Agb2YgdGhhdCwgYXQgdGhlIGVuZCBvZiB0aGUgdmlkZW8sIHlvdSB3aWxsIGhhdmUgdGhpcyB1bmlxdWUgYW5kIGNvbXBsZXggd2Vic2hvcCBhcHAgdGhhdCB5b3Ugd2lsbCBiZSBhYmxlIHRvIGFkZCB0byB5b3VyIHBvcnRmb2xpby4gQW5kIHRydXN0IG1lLCBlLWNvbW1lcmNlIGFwcGxpY2F0aW9ucyBhcmUgaW1wcmVzc2l2ZS5cIixcbiAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlMi5qcGcnLFxuICAgIHRhZ3M6IFsnSmF2YScsJ2ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0ZsYXBweSBCaXJkIENsb25lJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gICAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlMy5qcGcnLFxuICAgICAgdGFnczogWydKYXZhJywnZmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUXVpeicsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXG4gICAgaW1hZ2U6ICcuL2ltYWdlcy9pbWFnZTQuanBnJyxcbiAgICB0YWdzOiBbJ0phdmEnLCdmaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIb3RlbCBwYXJhIGNhY2hvcnJvJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB2aWRlbyB0dXRvcmlhbC4gSW4gdGhpcyB2aWRlbywgd2Ugd2lsbCBjcmVhdGUgYSBmdWxsIFJlYWx0aW1lIENoYXQgQXBwbGljYXRpb25cIixcbiAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlNS5qcGcnLFxuICAgIHRhZ3M6IFsnQyMnLCAnSHRtbCcsICdDc3MnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnV2hhdHNBcHAgV2ViIENsb25lJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB2aWRlbyB0dXRvcmlhbC4gSW4gdGhpcyB2aWRlbywgd2Ugd2lsbCBjcmVhdGUgYSBmdWxsIFJlYWx0aW1lIENoYXQgQXBwbGljYXRpb25cIixcbiAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlNi5wbmcnLFxuICAgIHRhZ3M6IFsnSmF2YScsJ2ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDUsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ09seCBDbG9uZScsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXG4gICAgaW1hZ2U6ICcuL2ltYWdlcy9pbWFnZTcuanBnJyxcbiAgICB0YWdzOiBbJ0phdmEnLCdmaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiA2LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdHYW1lIC0gQ2FyYSBvdSBDb3JvYScsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXG4gICAgaW1hZ2U6ICcuL2ltYWdlcy9pbWFnZTguanBnJyxcbiAgICB0YWdzOiBbJ0phdmEnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogNyxcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6ICdQb3J0YSBkYSBzb3J0ZScsXG4gICAgZGVzY3JpcHRpb246IFwiVW0gam9nbyBwYXJhIHRlc3RhciBhIHN1YSBzb3J0ZSwgb25kZSBxdWVtIGpvZ2EgZGV2ZSB0ZW50YXIgZW5jb250cmFyIGEgcG9ydGEgcHJlbWlhZGEgcG9yIGVsaW1pbmHDp8Ojby4gUG9kZW5kbyBzZWxlY2lvbmFyIG9zIG7DrXZlaXMgZGUgZGlmaWN1bGRhZGUsIGF0cmF2w6lzIGRhIG1vdmltZW50YcOnw6NvIGRvIHByw6ptaW8gZSBhIGFsdGVyYcOnw6NvIGRvIG7Dum1lcm8gZGUgcG9ydGFzLlwiLFxuICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2U5LmpwZycsXG4gICAgdGFnczogWydKYXZhU2NyaXB0JywnUmVhY3QuanMnLCdOZXh0LmpzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDgsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1F1aXogV2ViJyxcbiAgICBkZXNjcmlwdGlvbjogXCJVbSBxdWVzdGlvbmFyaW8gY29tIHVtYSBpbnRlcmZhY2UgYmVtIGFtaWdhdmVsIFwiLFxuICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2UxMC5qcGcnLFxuICAgIHRhZ3M6IFsnSmF2YVNjcmlwdCcsJ1JlYWN0LmpzJywnTmV4dC5qcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiA5LFxuICB9XG5cbiAgXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTcsIHRleHQ6ICdJbmljaWVpIG1pbmhhIGpvcm5hZGEgbm8gbXVuZG8gZGEgcHJvZ3JhbWHDp8Ojby4nLCB9LFxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdDb21lY2VpIGEgZmF6ZXIgZmFjdWxkYWRlIGRlIFMuSSBuYSBVbml2ZXJzaWRhZGUgUG9zaXRpdm8uJywgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRm9xdWVpIG1ldXMgZXN0dWRvcyBlbSBkZXNlbnZvbHZpbWVudG8gbW9iaWxlIHV0aWxpemFuZG8gSmF2YS4nLCB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdEZXNlbnZvbHZpIHByb2pldG9zIGNvbSBiYXNlIG5vcyBjb25oZWNpbWV0b3MgYWRpcXVpcmlkb3MuJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnSW5pY2llaSBtZXVzIGVzdHVkb3MgZW0gZGVzZW52b2x2aW1lbnRvIHdlYiB1dGlsaXphbmRvIFJlYWN0LicsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=