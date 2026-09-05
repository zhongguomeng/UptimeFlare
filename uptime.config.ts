// 把 'https://你的网站.com' 改成真实地址
{
  id: 'https://www.dod168.com',
  name: '我的网站',
  method: 'GET',
  target: 'https://www.dod168.com',  // 改成真实地址
  // ...
}

// 把 '你的服务器IP:22' 改成真实 IP
{
  id: 'my_server_ssh',
  name: '我的服务器 SSH',
  method: 'TCP_PING',
  target: '1.2.3.4:22',  // 改成真实 IP 和端口
  // ...
}
