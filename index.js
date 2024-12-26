import { loadScripts } from './script-loader.js';

(function () {

    loadScripts([
        {
            urls: [
                'js/main-component.js',
            ],
            callback: function () {
                compoMain.Init();
            }
        },
    ]);

})();