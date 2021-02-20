const util = {};

//判断微信浏览器
util.isWeiXin = () => {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf('micromessenger') != -1) {
		return true;
	} else {
		return false;
	}
}

// 银行卡验证
util.luhmCheck = (bankno) => {
	if (bankno.length < 16 || bankno.length > 19) {
		//$("#banknoInfo").html("银行卡号长度必须在16到19之间");
		return false;
	}
	let num = /^\d*$/; //全数字
	if (!num.exec(bankno)) {
		//$("#banknoInfo").html("银行卡号必须全为数字");
		return false;
	}
	//开头6位
	let strBin =
		"10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
	if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
		//$("#banknoInfo").html("银行卡号开头6位不符合规范");
		return false;
	}
	let lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhm进行比较）

	let first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
	let newArr = new Array();
	for (let i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
		newArr.push(first15Num.substr(i, 1));
	}
	let arrJiShu = new Array(); //奇数位*2的积 <9
	let arrJiShu2 = new Array(); //奇数位*2的积 >9

	let arrOuShu = new Array(); //偶数位数组
	for (let j = 0; j < newArr.length; j++) {
		if ((j + 1) % 2 == 1) { //奇数位
			if (parseInt(newArr[j]) * 2 < 9)
				arrJiShu.push(parseInt(newArr[j]) * 2);
			else
				arrJiShu2.push(parseInt(newArr[j]) * 2);
		} else //偶数位
			arrOuShu.push(newArr[j]);
	}

	let jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
	let jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
	for (let h = 0; h < arrJiShu2.length; h++) {
		jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
		jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
	}

	let sumJiShu = 0; //奇数位*2 < 9 的数组之和
	let sumOuShu = 0; //偶数位数组之和
	let sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
	let sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
	let sumTotal = 0;
	for (let m = 0; m < arrJiShu.length; m++) {
		sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
	}

	for (let n = 0; n < arrOuShu.length; n++) {
		sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
	}

	for (let p = 0; p < jishu_child1.length; p++) {
		sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
		sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
	}
	//计算总和
	sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

	//计算Luhm值
	let k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
	let luhm = 10 - k;

	if (lastNum == luhm) {
		return true;
	} else {
		return false;
	}
}

//js 把对象按照属性名的字母顺序进行排列
util.objKeySort = (obj) => {
	var newkey = Object.keys(obj).sort();
	//先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
	var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
	for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
		newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
	}
	return newObj; //返回排好序的新对象
}

//按名称排序,由“参数”+“值”合并为字符串
util.objKeyValue = (objs) => {
	var str = '' //定义一个空字符用来接收对象里的key或者value
	for (var item in objs) { //遍历item变量里的对象的属性和元素，
		str += item + "&" //将obj对象的属性遍历出来，并且追加到str字符中。
		str += objs[item] + "&" //将obj对象的值遍历出来，并且追加到str字符中。
	}
	//第一种方法、将字符串中最后一个元素","逗号去掉，
	str = str.substring(0, str.lastIndexOf('&'));
	//第二种方法、将字符串中最后一个元素","逗号去掉，
	//str = (str.substring(str.length - 1) == ',') ? str.substring(0, str.length - 1) : str;
	//第三种方法、将字符串中最后一个元素","逗号去掉，
	//var str=str.substring(0,str.length-1);//3、将字符串中最后一个元素","逗号去掉，
	//第四种方法、将字符串中最后一个元素","逗号去掉，
	// var reg=/,$/gi;
	// str=str.replace(reg,"");
	//console.log(str)
	console.log(str)
	return str;
}

export default util;