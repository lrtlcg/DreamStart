import Vue from "vue";
//复制
export function deepCopy(target: any) {
  if (typeof target == "object") {
    const result = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (typeof target[key] == "object") {
        (result as any)[key] = deepCopy(target[key]);
      } else {
        (result as any)[key] = target[key];
      }
    }
    return result;
  }
  return target;
}
//交换
export function swap(
  arr: { [x: string]: any },
  i: string | number,
  j: string | number,
) {
  const temp = arr[i];
  Vue.set(arr, i, arr[j]);
  Vue.set(arr, j, temp);
}
