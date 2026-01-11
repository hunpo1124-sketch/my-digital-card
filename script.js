        // 1.获取元素：找到那个按钮，存在变量里
        // const 意思是定义一个“常量” （不会变的东西）
        const toggleBtn = document.getElementById("theme-toggle");
        const saveBtn = document.querySelector(".save");
        const card = document.querySelector(".card");
        const deleteBtn = document.querySelector(".delete");

        // 找到 body 元素，改背景
        const body = document.body;


        // 2.定义功能：点击之后要发生什么？
        function switchTheme () {
            // toggle 意思：有就删掉，没有就加上
            // 给 body 加一个'dark-mode' 的class
            body.classList.toggle('dark-mode');
            card.classList.toggle('dark-card');

            //逻辑判断：如果已经是黑夜模式，按钮图标变成太阳
            if (body.classList.contains('dark-mode')) {
                toggleBtn.innerText = "☀️ 切换模式";
            } else {
                toggleBtn.innerText = "🌙 切换模式";
            }
        }

        // 3.绑定事件：当按钮被“click” 时， 执行 switchTheme 函数
        toggleBtn.addEventListener("click",switchTheme);

        saveBtn.addEventListener('click', function() {
            // 动作A：弹窗
            alert('名片已保存！（模拟）');

            // 动作B：修改文字
            saveBtn.innerText = "已保存";

            // 动作C：修改样式
            // 直接改 CSS 背景色
            saveBtn.style.backgroundColor = "#2ecc71"
            saveBtn.style.color = "white";
        })

        deleteBtn.addEventListener('click', function() {
            // confirm 会退回 ture （点了确定）或 false (点了取消)
           const isSure = confirm("确定要删除名片吗？");

           if (isSure) {
            // 隐藏卡片的魔法
            card.style.display = "none";
           }
        })


        // 1.定义图纸：要生成的按钮名字
        let links = ["GitHub","微博","微信"];
       
        let myData = [
            { name: "GitHub", url:"https://github.com/hunpo1124-sketch/my-first-webpage"},
            { name: "我的博客", url:"https://yourblog.com"},
            { name: "我的微信", url:"https://weixin.qq.com"}
        ];

        // 2.找到房间：获取那个空盒子
        let linkBox = document.getElementById("links-box");

        // 3.开始装修：利用循环生成 HTML字符串
        let htmlString = ""; //准备空袋子

        for (let i = 0; i < myData.length; i++) {
            // 读取当前这个对象
            let item = myData[i];
            // 拼接 HTML 字符串，把 lins[i] 塞进 <a> 标签里
            // 如果按钮有 class = btn 记得加在下面
            htmlString = htmlString +
            '<a href = "' + item.url + ' "class="link-btn target="_blank">' + item.name + '</a>';
        }

        // 4.把袋子的东西，一次性倒进房间里
        linkBox.innerHTML = htmlString;



        // 1.定义一个函数，专门用来更新时间
        function updateTime () {
            const now = new Date();
            const timeString = now.toLocaleTimeString("zh-CN", { hour12:false});
            const clockElment = document.getElementById("clock");
            
            clockElment.innerText = "当前时间：" + timeString;
        }
    
            // 2.立即执行一次
            updateTime();

            // 3.启动定时器
            // 1000毫秒 = 1秒
            //每过1000毫秒就去自动跑一遍 updateTime 函数
            setInterval(updateTime,1000);

