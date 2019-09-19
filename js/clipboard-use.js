/*页面载入完成后，创建复制按钮*/
!(function(e, t, a) {
  /* code */
  var initCopyCode = function() {
    var copyHtml = "";
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += "  <span>复制</span>";
    copyHtml += "</button>";
    $(".highlight .code pre").before(copyHtml);
    new ClipboardJS(".btn-copy", {
      target: function(trigger) {
        return trigger.nextElementSibling;
      }
    }).on("success", function(e) {
      alert("复制成功");
      e.clearSelection();
    });
  };
  initCopyCode();
})(window, document);
