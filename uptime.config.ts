// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 状态页标题，改成你喜欢的
  title: "我的服务状态监控",
  // 状态页头部的链接，可以改或删
  links: [
    { link: 'https://github.com/zhongguomeng', label: 'GitHub' },
    // 不需要可以删掉或注释掉
  ],
}

const workerConfig: WorkerConfig = {
  // 在这里定义你要监控的所有服务
  monitors: [
    // ========== HTTP/HTTPS 网站监控 ==========
    {
      id: 'dod168',
      name: 'dod168',
      method: 'GET',
      target: 'https://www.dod168.com',
      tooltip: 'dod168',
      statusPageLink: 'https://www.dod168.com',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'zhuce',
      name: '注册页面',
      method: 'GET',
      target: 'https://zc.dods.fun',
      tooltip: '注册',
      statusPageLink: 'https://zc.dods.fun',
      expectedCodes: [200],
      timeout: 10000,
    },
    // 添加你自己的网站，把 url 替换成你的
    {
      id: 'my_website',
      name: '我的网站',
      method: 'GET',
      target: 'https://你的网站.com',
      tooltip: '我的个人网站',
      statusPageLink: 'https://你的网站.com',
      expectedCodes: [200],
      timeout: 10000,
    },
    
    // ========== TCP 端口监控（如 SSH） ==========
    {
      id: 'my_server_ssh',
      name: '我的服务器 SSH',
      method: 'TCP_PING',
      target: '你的服务器IP:22',  // 改成你的 IP 和端口
      tooltip: '生产服务器 SSH 端口',
      statusPageLink: 'ssh://你的服务器IP',
      timeout: 5000,
    },
    // 如果需要监控其他端口，复制上面这个改一下
    // {
    //   id: 'my_server_web',
    //   name: '我的服务器 Web',
    //   method: 'TCP_PING',
    //   target: '你的服务器IP:443',
    //   tooltip: '生产服务器 HTTPS',
    //   timeout: 5000,
    // },
  ],

  // ========== 通知设置（可选） ==========
  // 不需要通知可以保持注释状态，或直接删掉
  notification: {
    // 以 Telegram 为例，如果你想用别的通知方式，参考官方 Wiki
    webhook: {
      // Telegram Bot API 地址，替换成你自己的
      url: 'https://api.telegram.org/bot你的BotToken/sendMessage',
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: '你的ChatID',
        text: '$MSG',  // $MSG 会自动替换成消息内容
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,  // 故障持续5分钟后才发通知，避免误报
  },
}

// ========== 维护计划（可选） ==========
// 不需要可以留空数组 []
const maintenances: MaintenanceConfig[] = [
  // 示例：计划维护
  // {
  //   monitors: ['my_website'],
  //   title: '服务器维护',
  //   body: '升级系统，预计 2 小时',
  //   start: '2026-09-10T00:00:00+08:00',
  //   end: '2026-09-10T02:00:00+08:00',
  //   color: 'blue',
  // },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
