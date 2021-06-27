<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '313924873769536',
      xfbml      : true,
      version    : 'v11.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

測試你的 Facebook 整合度
完成 SDK 設定後，就可以使用它來執行一些常見的工作。你可以使用 JavaScript SDK，將Social Plugins（例如Like Button和Comments Plugin）插入 HTML 頁面。
現在來嘗試加入讚按鈕；只要複製下方的程式碼行，並貼上頁面<body>內的任何一處即可：
<div
  class="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div>
重新載入頁面後，應該就會看到上面有一個「讚」按鈕。