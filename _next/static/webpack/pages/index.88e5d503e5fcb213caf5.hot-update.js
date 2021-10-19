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
  description: "Aplicativo para android feito em java com o objetivo de ser semelhante ao WhatsApp verdadeiro. O projeto não contém todos os recursos do WhatsApp, apenas os principais.",
  image: './images/image1.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'Instagram Clone',
  description: "Projeto mobile (Android) com o intuito de parecer o verdadeiro Instagram, o aplicativo contém sistemas de postagem, aplicação de filtros em imagens e opções de curtir , seguir e comentar.",
  image: './images/image2.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'Flappy Bird Clone',
  description: "Jogo ( android ) com o objetivo de ter as mesmas características do game Flappy Bird, o projeto foi realizado utilizando a biblioteca libGDX.",
  image: './images/image3.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Quiz',
  description: "Questionário de perguntas e respostas com um contador (timer) para dispositivos android.",
  image: './images/image4.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}, {
  title: 'Hotel para cachorro',
  description: "hotel para cachorro, no modelo MVC (Model, View, Controller), onde pessoas Jurídicas podem divulgar seus hoteis, e pessoas fisicas podem realizar uma simulação de preço.",
  image: './images/image5.jpg',
  tags: ['C#', 'Html', 'Css'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 4
}, {
  title: 'WhatsApp Web Clone',
  description: "Projeto Web para trocação de mensagens entre usuários. A autenticação é feita com o facebook utilizando o firebase.",
  image: './images/image6.png',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 5
}, {
  title: 'Olx Clone',
  description: "Projeto mobile (Android) com o intuito de parecer o verdadeiro OLX, o aplicativo contém sistemas de postagem e pesquisa com filtro de região.",
  image: './images/image7.jpg',
  tags: ['Java', 'firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 6
}, {
  title: 'Game - Cara ou Coroa',
  description: "Simples projeto Android para trabalhar com números randômico e Fragments.",
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
  description: "Questionário de perguntas e respostas com (timer) e uma interface interativa.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGdCQURUO0FBRUVDLGFBQVcsRUFBRSwwS0FGZjtBQUdJQyxPQUFLLEVBQUUscUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxpQkFEVDtBQUVFQyxhQUFXLEVBQUMsNkxBRmQ7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUSxVQUFSLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLG1CQURUO0FBRUVDLGFBQVcsRUFBRSwrSUFGZjtBQUdJQyxPQUFLLEVBQUUscUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLE1BRFQ7QUFFRUMsYUFBVyxFQUFFLDBGQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVEsVUFBUixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUscUJBRFQ7QUFFRUMsYUFBVyxFQUFFLDJLQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFlLEtBQWYsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBckNzQixFQThDdEI7QUFDRU4sT0FBSyxFQUFFLG9CQURUO0FBRUVDLGFBQVcsRUFBRSxxSEFGZjtBQUdFQyxPQUFLLEVBQUUscUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBOUNzQixFQXVEdEI7QUFDRU4sT0FBSyxFQUFFLFdBRFQ7QUFFRUMsYUFBVyxFQUFFLCtJQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVEsVUFBUixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F2RHNCLEVBZ0V0QjtBQUNFTixPQUFLLEVBQUUsc0JBRFQ7QUFFRUMsYUFBVyxFQUFFLDJFQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWhFc0IsRUEwRXRCO0FBQ0VOLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQUUsME5BRmY7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFlBQUQsRUFBYyxVQUFkLEVBQXlCLFNBQXpCLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTFFc0IsRUFtRnRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFBRSwrRUFGZjtBQUdFQyxPQUFLLEVBQUUsc0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsWUFBRCxFQUFjLFVBQWQsRUFBeUIsU0FBekIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkZzQixDQUFqQjtBQWdHQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OGU1ZDUwM2U1ZmNiMjEzY2FmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdXaGF0c0FwcCBDbG9uZScsXG4gICAgZGVzY3JpcHRpb246IFwiQXBsaWNhdGl2byBwYXJhIGFuZHJvaWQgZmVpdG8gZW0gamF2YSBjb20gbyBvYmpldGl2byBkZSBzZXIgc2VtZWxoYW50ZSBhbyBXaGF0c0FwcCB2ZXJkYWRlaXJvLiBPIHByb2pldG8gbsOjbyBjb250w6ltIHRvZG9zIG9zIHJlY3Vyc29zIGRvIFdoYXRzQXBwLCBhcGVuYXMgb3MgcHJpbmNpcGFpcy5cIixcbiAgICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2UxLmpwZycsXG4gICAgICB0YWdzOiBbJ0phdmEnLCdmaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdJbnN0YWdyYW0gQ2xvbmUnLFxuICAgIGRlc2NyaXB0aW9uOlwiUHJvamV0byBtb2JpbGUgKEFuZHJvaWQpIGNvbSBvIGludHVpdG8gZGUgcGFyZWNlciBvIHZlcmRhZGVpcm8gSW5zdGFncmFtLCBvIGFwbGljYXRpdm8gY29udMOpbSBzaXN0ZW1hcyBkZSBwb3N0YWdlbSwgYXBsaWNhw6fDo28gZGUgZmlsdHJvcyBlbSBpbWFnZW5zIGUgb3DDp8O1ZXMgZGUgY3VydGlyICwgc2VndWlyIGUgY29tZW50YXIuXCIsXG4gICAgaW1hZ2U6ICcuL2ltYWdlcy9pbWFnZTIuanBnJyxcbiAgICB0YWdzOiBbJ0phdmEnLCdmaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGbGFwcHkgQmlyZCBDbG9uZScsXG4gICAgZGVzY3JpcHRpb246IFwiSm9nbyAoIGFuZHJvaWQgKSBjb20gbyBvYmpldGl2byBkZSB0ZXIgYXMgbWVzbWFzIGNhcmFjdGVyw61zdGljYXMgZG8gZ2FtZSBGbGFwcHkgQmlyZCwgbyBwcm9qZXRvIGZvaSByZWFsaXphZG8gdXRpbGl6YW5kbyBhIGJpYmxpb3RlY2EgbGliR0RYLlwiLFxuICAgICAgaW1hZ2U6ICcuL2ltYWdlcy9pbWFnZTMuanBnJyxcbiAgICAgIHRhZ3M6IFsnSmF2YScsJ2ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1F1aXonLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1ZXN0aW9uw6FyaW8gZGUgcGVyZ3VudGFzIGUgcmVzcG9zdGFzIGNvbSB1bSBjb250YWRvciAodGltZXIpIHBhcmEgZGlzcG9zaXRpdm9zIGFuZHJvaWQuXCIsXG4gICAgaW1hZ2U6ICcuL2ltYWdlcy9pbWFnZTQuanBnJyxcbiAgICB0YWdzOiBbJ0phdmEnLCdmaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIb3RlbCBwYXJhIGNhY2hvcnJvJyxcbiAgICBkZXNjcmlwdGlvbjogXCJob3RlbCBwYXJhIGNhY2hvcnJvLCBubyBtb2RlbG8gTVZDIChNb2RlbCwgVmlldywgQ29udHJvbGxlciksIG9uZGUgcGVzc29hcyBKdXLDrWRpY2FzIHBvZGVtIGRpdnVsZ2FyIHNldXMgaG90ZWlzLCBlIHBlc3NvYXMgZmlzaWNhcyBwb2RlbSByZWFsaXphciB1bWEgc2ltdWxhw6fDo28gZGUgcHJlw6dvLlwiLFxuICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2U1LmpwZycsXG4gICAgdGFnczogWydDIycsICdIdG1sJywgJ0NzcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiA0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXaGF0c0FwcCBXZWIgQ2xvbmUnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb2pldG8gV2ViIHBhcmEgdHJvY2HDp8OjbyBkZSBtZW5zYWdlbnMgZW50cmUgdXN1w6FyaW9zLiBBIGF1dGVudGljYcOnw6NvIMOpIGZlaXRhIGNvbSBvIGZhY2Vib29rIHV0aWxpemFuZG8gbyBmaXJlYmFzZS5cIixcbiAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlNi5wbmcnLFxuICAgIHRhZ3M6IFsnSmF2YScsJ2ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDUsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ09seCBDbG9uZScsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvamV0byBtb2JpbGUgKEFuZHJvaWQpIGNvbSBvIGludHVpdG8gZGUgcGFyZWNlciBvIHZlcmRhZGVpcm8gT0xYLCBvIGFwbGljYXRpdm8gY29udMOpbSBzaXN0ZW1hcyBkZSBwb3N0YWdlbSBlIHBlc3F1aXNhIGNvbSBmaWx0cm8gZGUgcmVnacOjby5cIixcbiAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlNy5qcGcnLFxuICAgIHRhZ3M6IFsnSmF2YScsJ2ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDYsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0dhbWUgLSBDYXJhIG91IENvcm9hJyxcbiAgICBkZXNjcmlwdGlvbjogXCJTaW1wbGVzIHByb2pldG8gQW5kcm9pZCBwYXJhIHRyYWJhbGhhciBjb20gbsO6bWVyb3MgcmFuZMO0bWljbyBlIEZyYWdtZW50cy5cIixcbiAgICBpbWFnZTogJy4vaW1hZ2VzL2ltYWdlOC5qcGcnLFxuICAgIHRhZ3M6IFsnSmF2YSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiA3LFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogJ1BvcnRhIGRhIHNvcnRlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJVbSBqb2dvIHBhcmEgdGVzdGFyIGEgc3VhIHNvcnRlLCBvbmRlIHF1ZW0gam9nYSBkZXZlIHRlbnRhciBlbmNvbnRyYXIgYSBwb3J0YSBwcmVtaWFkYSBwb3IgZWxpbWluYcOnw6NvLiBQb2RlbmRvIHNlbGVjaW9uYXIgb3MgbsOtdmVpcyBkZSBkaWZpY3VsZGFkZSwgYXRyYXbDqXMgZGEgbW92aW1lbnRhw6fDo28gZG8gcHLDqm1pbyBlIGEgYWx0ZXJhw6fDo28gZG8gbsO6bWVybyBkZSBwb3J0YXMuXCIsXG4gICAgaW1hZ2U6ICcuL2ltYWdlcy9pbWFnZTkuanBnJyxcbiAgICB0YWdzOiBbJ0phdmFTY3JpcHQnLCdSZWFjdC5qcycsJ05leHQuanMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogOCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUXVpeiBXZWInLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1ZXN0aW9uw6FyaW8gZGUgcGVyZ3VudGFzIGUgcmVzcG9zdGFzIGNvbSAodGltZXIpIGUgdW1hIGludGVyZmFjZSBpbnRlcmF0aXZhLlwiLFxuICAgIGltYWdlOiAnLi9pbWFnZXMvaW1hZ2UxMC5qcGcnLFxuICAgIHRhZ3M6IFsnSmF2YVNjcmlwdCcsJ1JlYWN0LmpzJywnTmV4dC5qcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiA5LFxuICB9XG5cbiAgXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTcsIHRleHQ6ICdJbmljaWVpIG1pbmhhIGpvcm5hZGEgbm8gbXVuZG8gZGEgcHJvZ3JhbWHDp8Ojby4nLCB9LFxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdDb21lY2VpIGEgZmF6ZXIgZmFjdWxkYWRlIGRlIFMuSSBuYSBVbml2ZXJzaWRhZGUgUG9zaXRpdm8uJywgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRm9xdWVpIG1ldXMgZXN0dWRvcyBlbSBkZXNlbnZvbHZpbWVudG8gbW9iaWxlIHV0aWxpemFuZG8gSmF2YS4nLCB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdEZXNlbnZvbHZpIHByb2pldG9zIGNvbSBiYXNlIG5vcyBjb25oZWNpbWV0b3MgYWRpcXVpcmlkb3MuJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnSW5pY2llaSBtZXVzIGVzdHVkb3MgZW0gZGVzZW52b2x2aW1lbnRvIHdlYiB1dGlsaXphbmRvIFJlYWN0LicsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=