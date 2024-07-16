// https://github.com/cmliu/edgetunnel

let sub = 'alvless.comorg.us.kg';// 留空则使用内置订阅



let fakeHostName = 'ai.abcde.xyz'
let fakeUserID = '90cd4a77-141a-43c9-991b-08263cfe9c10';
let RproxyIP = 'true';
let subconverter = 'subapi-loadbalancing.pages.dev';// clash订阅转换后端，目前使用CM的订阅转换功能。自带虚假uuid和host订阅。
let subconfig = "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"; //订阅配置文件
let subProtocol = 'https';
let url = `${subProtocol}://${sub}/sub?host=${fakeHostName}&uuid=${fakeUserID}&edgetunnel=cmliu&proxyip=${RproxyIP}`;
url = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

replacestr='【请勿测速】';
fetch(url)
  .then(response => response.json())
  .then(data => {
    // 处理响应数据
    const outbounds = data["outbounds"];
    outbounds.forEach(e => {
        if (e['type'] == 'vless') {
            // const tag = e['server']
            rs = `${e['server']}:${e['server_port']}#${e['tag'].replace(/【请勿测速】.*/g, '')} `
            console.log(rs);
        }
    });

    // console.log(data["outbounds"]);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });