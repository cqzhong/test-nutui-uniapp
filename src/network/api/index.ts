interface FileType {
  [name: string]: any
}
const moduleObj = {}
const modules: Record<string, FileType> = import.meta.glob('./apis/*.ts', { eager: true })
Object.entries(modules).forEach(([_path, moduleFn]) => {
  Object.assign(moduleObj, moduleFn)
})
export default moduleObj
