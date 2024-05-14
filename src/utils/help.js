
import { base64 } from '@/utils/crypto';

export let Help = {
    /**
     * 获取URL中的参数
     * @param 参数名
     * @param URL查询部分
     */
    getQueryString(name, search = window.location.search) {
        if (!search) return null;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },
    /**
     * 获取跳转登录后的参数
     * @param 参数名
     */
    getParamByJump(name, search = window.location.search) {
        const params = this.getQueryString('params', search);
        if (params) {
            try {
                return this.getQueryString(name, '?' + base64.decrypt(params), search);
            }
            catch (e) {
                return null;
            }
            //return this.getQueryString(name,'?'+str.replace(/--/g,'=').replace(/__/g,'&'));
        }
        else return this.getQueryString(name);
    },
    /**
     * 获取跳转到/other/webauthn页面的地址
     */
    getWebauthnUrl() {
        if (location.href.indexOf('params') > -1) {
            let str = this.getDecryptStr(this.getQueryString('params'));
            str = str.indexOf('&st=') > -1 ? str.split('&st=')[0] : str.indexOf('st=') > -1 ? str.split('st=')[0] : str;
            return location.origin + '/other/webauthn?url=' + location.href.split('?')[0] + '?' + str;
        }
        else {
            return location.origin + '/other/webauthn?url=' + location.href.slice(0, location.href.indexOf(location.href.indexOf('&st') > -1 ? '&st=' : 'st='));
        }
    },
    /**
     * 加密字符串
     * @param str
     */
    getEncryptionStr(str) {
        return base64.encryption(str);
    },
    /**
     *
     * @param str 解密字符串
     */
    getDecryptStr(str) {
        return base64.decrypt(str);
    },
    isNumber(val) {
        const regPos = /^\d+(\.\d+)?$/, //非负浮点数
            regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if (regPos.test(val) || regNeg.test(val)) return true;
        else return false;
    },
    get isLiferayPath() {
        return location.pathname.startsWith('/liferay') || location.search.includes('sys=liferay') || this.getParamByJump('sys') == 'liferay';
    },
    isSpeD365Path() {
        return location.search.includes('sys=d365') || this.getParamByJump('sys') == 'd365';
    },
    /**
     * 解析地址栏参数
     * @param Parameter
     */
    analysisUrlParameter(Parameter) {
        var pattern = /([^&=?]+)=([^&=?]+)/g;//定义正则表达式
        var parames = {};//定义数组

        //跳转登陆 参数会合并加密
        const search = this.getQueryString('params');
        if (search) Parameter = base64.decrypt(search);

        Parameter.replace(pattern, (a, b, c) => {
            parames[b] = c;
            return ''
        });
        return parames;//返回这个数组.
    },
    /**
     * 获取数字的金融格式
     * @param str
     */
    getMoney(s, currency = '') {
        if (!s && s != 0) s = 0;
        s = s.toString();
        s = s.replace(/^(\d*)$/, "$1.");
        s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
        s = s.replace(".", ",");
        var re = /(\d)(\d{3},)/;
        while (re.test(s))
            s = s.replace(re, "$1,$2");
        s = s.replace(/,(\d\d)$/, ".$1");
        return currency + s.replace(/^\./, "0.")
    },
    getStrLength(str) {
        //获得字符串实际长度，中文2，英文1
        //要获得长度的字符串
        var realLength = 0, len = str ? str.length : 0, charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128)
                realLength += 1;
            else
                realLength += 2;
        }
        return realLength;
    },
    getTimeZone() {
        return new Date().getTimezoneOffset() / 60;
    }
}