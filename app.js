console.log("-----------------------");
console.log("Hello! 这是我的第一个后端程序");
console.log("1+1 等于" + (1+1));
console.log("-----------------------");

// 引入 Node.js 自带的 " os " （Operating System）模块
// require 意思是 “我需要这个工具包”
const os = require("os");
console.log("正在读取系统信息...");
console.log("-----------------------");

// 获取你的电脑用户名
console.log("当前用户：", os.userInfo().username);

// 获取你的操作系统类型
console.log("操作系统平台：", os.platform());

// 获取你的 CPU 架构
console.log("CPU架构：", os.arch());

// 获取电脑的总内存
const totalMem = os.totalmem() /1024 / 1024 / 1024;
console.log("总内存：", totalMem.toFixed(2) + "GB");

// Server 服务器； Port 端口；Loclbost 本地主机； Express 框架
