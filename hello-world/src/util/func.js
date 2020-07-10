/**
 * 通用工具类
 */
export default class func {
  /**
   * 不为空
   * @param val
   * @returns {boolean}
   */
  static notEmpty(val) {
    return !this.isEmpty(val);
  }

  /**
   * 是否为定义
   * @param val
   * @returns {boolean}
   */
  static isUndefined(val) {
    return val === null || typeof val === 'undefined';
  }

  /**
   * 为空
   * @param val
   * @returns {boolean}
   */
  static isEmpty(val) {
    if (
      val === null ||
      typeof val === 'undefined' ||
      (typeof val === 'string' && val === '' && val !== 'undefined')
    ) {
      return true;
    }
    return false;
  }

  /**
   * 强转int型
   * @param val
   * @param defaultValue
   * @returns {number}
   */
  static toInt(val, defaultValue) {
    if (this.isEmpty(val)) {
      return defaultValue === undefined ? -1 : defaultValue;
    }
    const num = parseInt(val, 0);
    return Number.isNaN(num) ? (defaultValue === undefined ? -1 : defaultValue) : num;
  }

  /**
   * Json强转为Form类型
   * @param obj
   * @returns {FormData}
   */
  static toFormData(obj) {
    const data = new FormData();
    Object.keys(obj).forEach(key => {
      data.append(key, Array.isArray(obj[key]) ? obj[key].join(',') : obj[key]);
    });
    return data;
  }

  /**
   * date类转为字符串格式
   * @param date
   * @param format
   * @returns {null}
   */
  static format(date, format = 'YYYY-MM-DD HH:mm:ss') {
    return date ? date.format(format) : null;
  }

  /**
   * 根据逗号联合
   * @param arr
   * @returns {string}
   */
  static join(arr) {
    return arr ? arr.join(',') : '';
  }

  /**
   * 根据逗号分隔
   * @param str
   * @returns {string}
   */
  static split(str) {
    return str ? String(str).split(',') : '';
  }
}

export function getListToTree (list) {
  const map = {}; let node; const tree = []; let i
  for (i = 0; i < list.length; i++) {
    map[list[i].value] = list[i]
    list[i].children = []
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i]
    if (node.parentID !== '0' && map[node.parentID]) {
      map[node.parentID].children.push(node)
    } else {
      tree.push(node)
    }
  }
  return tree
}


/**
   * base64转为图片文件
   * @param urlData
   * @returns
   */
export function  base64ToBlob(urlData) {
  const arr = urlData.split(',');
  const mime = arr[0].match(/:(.*?);/)[1] || 'image/png';
  // 去掉url的头，并转化为byte
  const bytes = window.atob(arr[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  const ab = new ArrayBuffer(bytes.length);
  // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
  const ia = new Uint8Array(ab);

  for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
  }

  return new Blob([ab], {
      type: mime
  });
}
/**
 * buildingCode的格式化方法
 * @param buildingCode
 * @returns {string}
 */
import store from '../store'
export const formatBuildingCode = (str) => {
  // console.log(store.getters.roomType)
	if(!str)return
    const roomTypeMap=store.getters.roomType
      const strArr=str.split("-")
      let reStr=''
      switch(strArr.length){
        case 2:
          reStr=strArr[1]
          break;
        case 3:
          reStr=strArr[1]+" L"+strArr[2]
          break;
        case 4:
          reStr=strArr[1]+" #"+strArr[2]+"-"+ strArr[3]
          break;
        case 5:
          reStr=strArr[1]+" #"+strArr[2]+"-"+ strArr[3]+" "+roomTypeMap[strArr[4]].roomName || strArr[4]
          break;
      }
      return reStr
}

/**
 * 将数组按长度分组为二维数组
 * @param {Array} array 源坐标
 * @param {Number} groupLength 数组分组长度
 * @returns {Array} 分组后的二维数组
 */
export const arrayGroup = (array, groupLength) => {
  var index = 0
  var newArray = []

  while (index < array.length) {
    newArray.push(array.slice(index, index += groupLength))
  }

  return newArray
}
