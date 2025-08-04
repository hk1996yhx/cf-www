const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YHX</title>
</head>
<body>
    <div class="navbar" id="navbar">
    <!-- 动态生成链接 -->
    </div>
    <div class="iframe-container">
    <iframe id="contentFrame" src="https://hao.019960.xyz" title="内容"></iframe>
    </div>
    <script>
    // 链接数据
    const links = [
        { name: "导航站", url: "https://hao.019960.xyz" },
        { name: "博客", url: "https://blog.019960.xyz" },
        { name: "网盘", url: "https://cloudpaste.019960.xyz" },
        /*
        { name: "xxxxxxxxxxxxxxxx", url: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
        */
    ];

    // 获取导航栏容器
    const navbar = document.getElementById('navbar');

    // 动态生成导航链接
    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = "javascript:void(0);";
        anchor.textContent = link.name;
        anchor.onclick = function () {
            loadContent(link.url);
        };
        anchor.onmousedown = function (event) {
          if (event.button === 1) { // 中键点击
              event.preventDefault();
              window.open(link.url, '_blank');
          }
        };
        navbar.appendChild(anchor);
    });

    // JavaScript 函数用于加载 iframe 内容
    function loadContent(url) {
        document.getElementById('contentFrame').src = url;
    }
</script>
<script defer src="//webviso.yestool.org/js/index.min.js" data-base-url="https://analytics.019960.xyz"></script>
本页访问人次:<span id="page_pv"></span>本页访问人数:<span id="page_uv"></span>
    <!-- 看板娘 -->
    <script src="https://unpkg.com/oh-my-live2d@latest"></script>
    <script>
      OML2D.loadOml2d({
        models: [
          {
            path: 'https://model.hacxy.cn/platelet_2/model.json',
            position: [0, 100],
            scale: 0.08,
            stageStyle: {
              height: 450
            }
          },
          {
            path: 'https://model.hacxy.cn/bilibili-33/index.json',
            position: [0, 100],
            scale: 0.08,
            stageStyle: {
              height: 450
            }
          },
        ]
      });
    </script>
    <!-- 播放器容器 -->
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=4898507&auto=0&height=66"></iframe>


    <style>
        .navbar {
            background-color: #333;
            overflow: hidden;
            position: fixed;
            top: 2px;
            left:0px;
            width: 0.7%;
            z-index: 1000;
            border-radius: 10px; /* 圆角效果 */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 增加阴影效果 */
            transition: width 0.3s ease; /* 添加宽度过渡效果 */
            white-space: nowrap; /* 确保字体不换行 */
        }
        .navbar:hover {
            width: 5%; /* 鼠标移上去时恢复到原始宽度 */
        }
        .navbar a {
          display: block;
          color: white;
          text-align: left; /* 字体左对齐 */
          padding: 14px 20px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease; /* 平滑过渡 */
          border-radius: 5px; /* 按钮圆角 */
          margin: 0; /* 去掉默认的外边距，避免间距问题 */
      }

        .navbar a:hover {
            background-color: #4CAF50; /* 使用渐变效果 */
            color: white;
            transform: scale(1.05); /* 鼠标悬停时放大 */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* 悬停时增加阴影 */
        }

        .navbar a:active {
            background-color: #45a049; /* 按钮按下时的颜色 */
            transform: scale(0.98); /* 按钮按下时稍微缩小 */
        }

        .iframe-container {
            width: 100%;
            height: 100vh;
            position: relative;
            top: 0px; /* 让 iframe 紧贴导航栏下面 */
            margin: 0; /* 去除多余的间距 */
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        /* 音乐播放器样式 */
        .music-player {
            position: fixed;
            bottom: 20px;
            left: 50%;
            background-color: #333;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 增加阴影效果 */
            width: 80%; /* 设置播放器宽度为 80% 的页面宽度 */
            max-width: 500px; /* 最大宽度为 500px，可以根据需要调整 */
        }
        
        audio {
            width: 100%; /* 使音频播放器充满整个容器 */
        }
    </style>
</body>

</html>
`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // 如果是根路径请求，返回 HTML 内容
    if (url.pathname === '/') {
      return new Response(HTML_CONTENT, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    // 如果请求其他路径，返回 404 错误
    return new Response('Not Found', { status: 404 });
  }
};
