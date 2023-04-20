const {log} = require('console');
const fs = require('fs');
const os = require('os')	//换行符常量 os.EOL
// directory path
// const dir = './node_modules/';
const dir = './docs/';
var _sidebar = './_sidebar.md';
// list all files in the directory
fs.readdir(dir, (err, files) => {
	if (err) {
		throw err;
	}
	console.log("目录读取完毕");
	// files object contains all files names
	// log them on console
	var sidebarArr = [];
	files.forEach(file => {
		sidebarArr.push(file);
		// var w_data ="["+sidebarItem+"]("+dir+file+")";	sidebarArr
	});
	var w_data = [];
	sidebarArr.forEach(file => {
		var sidebarItem = file.slice(0, file.length - 3)
		let ss = `- [${sidebarItem}](${dir+file})`+os.EOL;
		w_data.push(ss);
	})
	var w_data = new Buffer(w_data.join(''));
	// _deleteDir(_sidebar);
	
	fs.unlink(`${__dirname}/_sidebar.md`, (err) => {
	    if(err) console.log(err);
	    console.log('删除成功');
	});
	
	rewrite_sidebar(_sidebar,w_data);
	// return sidebarArr;
});
// console.log(sidebarArr);

// 写入文件
// fs.writeFile(filename,data,[options],callback);
/**
 * filename, 必选参数，文件名				__dirname目录名
 * data, 写入的数据，可以字符或一个Buffer对象
 * [options],flag,mode(权限),encoding
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */
function rewrite_sidebar(_sidebar, w_data) {
	fs.writeFile(_sidebar, w_data, function(err) {
		if (err) {
			console.error(err);
		} else {
			console.log('写入成功');
			console.log("侧边栏生成完毕");
		}
	});
}



// 重写sidebar文件

/**
 * @caption 删除本地文件夹/文件
 * @param {String} directoryPath 例： d://x/x/x.json 或者 d://x/x/x
 * *@param {Function} callback 例：回调
 */
// export let _deleteDir = (directoryPath, callback) => {
let _deleteDir = (directoryPath, callback) => {
	const fs = require('fs').promises;
	async function rmdirAsync(directoryPath) {
		try {
			let stat = await fs.stat(directoryPath)
			if (stat.isFile()) {
				await fs.unlink(directoryPath)
			} else {
				let dirs = await fs.readdir(directoryPath)
				// 递归删除文件夹内容(文件/文件夹)
				dirs = dirs.map(dir => rmdirAsync(path.join(directoryPath, dir)))
				await Promise.all(dirs)
				await fs.rmdir(directoryPath)
			}
		} catch (e) {
			alert(e);
			console.error(e);
		}
	}
	require('fs').existsSync(directoryPath) && rmdirAsync(directoryPath).then(() => {
		// 确保文件/文件夹均已删除 => 回调
		callback && callback();
	})
}
