����չδ��Firefox��֤������һ��д��չ��С������Ҳ������֤�ˣ���������ŵù����£�����Դ����������������¿�


Q����ΰ�װFirefox��չ��xpi
A����Firefox����xpi��ֱ���Ͻ�ȥ

Q����ΰ�װδ����֤��Firefox��չ��
A������FirefoxԽ��Խ���Ӱ�ȫ�ԣ��°��Firefox��������װδ����֤����չ��Ȼ�����·��������൱trick���ƹ���֤
	Ŀǰ���°�52.0�ѳɹ��ƹ�
	1���½��ļ�config.js��д�����´��루һ���ַ��������٣�λ��Ҳ���ܶ�����һ�е�ע���Ǳ���ģ�������
=====================================================================
//
try {
Components.utils.import("resource://gre/modules/addons/XPIProvider.jsm", {})
.eval("SIGNED_TYPES.clear()");
}
catch(ex) {}
=====================================================================
	������firefox�ĸ�Ŀ¼E:\xxxxxx\FireFox��
	2���½��ļ�config-prefs.js,д�����´��루Ҫ��ͬ�ϣ�
=====================================================================
pref("general.config.obscure_value", 0);
pref("general.config.filename", "config.js");
=====================================================================
	������E:\xxxxxx\FireFox\defaults\pref��
	3������firefox����
A�����������������������⣬����ȷ��û�п�©�κ�һ����
	��Դ���� http://www.ghacks.net/2016/08/14/override-firefox-add-on-signing-requirement/