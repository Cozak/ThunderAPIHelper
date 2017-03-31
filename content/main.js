// Privileged DOM
var mainWindow = window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                  .getInterface(Components.interfaces.nsIWebNavigation)
                  .QueryInterface(Components.interfaces.nsIDocShellTreeItem)
                  .rootTreeItem
                  .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                  .getInterface(Components.interfaces.nsIDOMWindow);

// Thunder API
var CoHelperThunderAPI = {
  callAddTask4: function(evt) {
    var hrefs = evt.target.getAttribute("hrefs");
    if (!hrefs) {
      alert("资源链接不存在..");
      return;
    }
    // 获取资源链接列表
    var links = JSON.parse(hrefs);
    // 初始化下载模块
    xThunder.init('', links.length, 'Thunder');
    for (var i=0; i<links.length; ++i) {
        xThunder.addTask(links[i], '');
    }
    // 启动相关下载器
    xThunder.callAgent();
  },
}

// 添加事件监听
mainWindow.document.addEventListener("CallThunderDownloadByHelper", function(e) { CoHelperThunderAPI.callAddTask4(e); }, false, true);
