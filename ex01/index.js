const { resolve } = require('path');
const fs = require('fs');
module.exports.getRouter = (path = resolve('./')) => {
	// ##BEGIN## 代码已加密
	const list = fs.readdirSync(path);
	return `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
${list.map(files =>
`{
    path: '/${files.replace('.vue','')}',
    name: '${files.replace('.vue','')}',
    component: () => import('./views/${files}')
},
`).join('')}
    ]
})`;
	// ##END##
};

