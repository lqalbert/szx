//工具类Utils
import { message } from 'antd';

import CONFIG from './config.js'

var Utils = {}

Utils.CONFIG = CONFIG;

Utils.ajaxCount = 0;

Utils.showModal = function() {

}

/**
 * Gets the tip text. 获取提示文字
 *
 * @param      {<type>}  type    消息类型
 * @param      {<type>}  code    消息键名
 * @return     {<type>}  The tip text.
 */
Utils.getTipText = function(type, code) {
	return Utils.CONFIG[type][code] || '';
}

/**
 * Shows the message.显示提示消息
 *
 * @param      {<type>}  showType  消息弹窗类型
 * @param      {<type>}  type      消息文字类型
 * @param      {<type>}  code      消息提示文字键名
 * @param      {<type>}  text      消息文字，如不为空则优先显示
 */
Utils.showMessage = function(showType, type, code, text, cb) {
	message.open({
		content: text ? text : Utils.getTipText(type, code),
		onClose: function() {
			if(typeof cb == 'function') cb();
		},
		icon: ''
	})
}

window.$utils = Utils;

