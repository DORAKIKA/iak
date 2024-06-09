const funcMap = {};

/** 注册一个功能 */
export function registryFunction(key: string, func: Function) {
  funcMap[key] = func;
}

/** 执行注册的功能 */
export function execFunction(key: string, ...params: any) {
  const func = funcMap[key];
  if (func) {
    func(...params);
  } else {
    console.warn(key, "未注册");
  }
}
