//工具类Utils
import { message } from 'antd';

import CONFIG from './config.js'

var Utils = {}

Utils.CONFIG = CONFIG;

Utils.ajaxCount = 0;

Utils.showModal = function() {

}
/**
 * Shows the message.显示提示消息
 */
Utils.showMessage = function() {
	message.open({
		content: 'message',
		onClose: function() {

		},
		icon: ''
	})
}

window.$utils = Utils;

