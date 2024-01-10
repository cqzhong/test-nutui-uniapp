// 深层级数组的扁平化
export function flattenArray(data) {
  let result: any = []

  function recursiveFlatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      result.push({...arr[i], children: undefined})
      if (arr[i].children && arr[i].children.length > 0) {
        recursiveFlatten(arr[i].children)
      }
    }
  }

  recursiveFlatten(data)
  return result
}
