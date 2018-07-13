/**
 * 此文件管理项目所有接口
 */
import { get, post, put, del } from './network';

/**
 * 服务器根域名
 * 试玩更多接口看这里
 * http://jsonplaceholder.typicode.com/
 * @type {string}
 */
export const API_ROOT = 'https://gank.io/api/';


/**
 * 获取图片
 */
export const getPhoto2 = (id) => get(`${API_ROOT}/photos/${id}`);

//请求图片
export function getPhoto(id) {
  const url = API_ROOT + '/photos/' + id;
  return get(url);
}
/**
 * 获取android资讯
 */
export function getAndroidListInfo(pageIdex, pageSize) {
  return get(API_ROOT + "data/Android/" + pageSize + "/" + pageIdex);
}
/**
 * 获取福利资讯
 */
export function getWelfareListInfo(pageIdex, pageSize) {
  return get(API_ROOT + "data/福利/" + pageSize + "/" + pageIdex);
}

/**
 * 根据分类获取资讯，
 */
export function getAllListInfoForType(listtype,pageIdex, pageSize) {
  return get(API_ROOT + "data/" + listtype+"/" + pageSize + "/" + pageIdex);
}