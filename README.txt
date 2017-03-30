本扩展未经Firefox验证（俺第一次写扩展，小东西，也懒得验证了），如果您信得过在下（反正源码就在这里）请继续往下看


Q：如何安装Firefox扩展包xpi
A：打开Firefox，将xpi包直接拖进去

Q：如何安装未经验证的Firefox扩展？
A：由于Firefox越来越重视安全性，新版的Firefox都不允许安装未经验证的扩展，然而以下方法可以相当trick地绕过验证
	目前最新版52.0已成功绕过
	1）新建文件config.js，写入以下代码（一个字符都不能少，位置也不能动，第一行的注释是必须的！！！）
=====================================================================
//
try {
Components.utils.import("resource://gre/modules/addons/XPIProvider.jsm", {})
.eval("SIGNED_TYPES.clear()");
}
catch(ex) {}
=====================================================================
	放置在firefox的根目录E:\xxxxxx\FireFox下
	2）新建文件config-prefs.js,写入以下代码（要求同上）
=====================================================================
pref("general.config.obscure_value", 0);
pref("general.config.filename", "config.js");
=====================================================================
	放置在E:\xxxxxx\FireFox\defaults\pref下
	3）重启firefox即可
A：如果按照上述步骤出现问题，请先确保没有看漏任何一个字
	来源连接 http://www.ghacks.net/2016/08/14/override-firefox-add-on-signing-requirement/