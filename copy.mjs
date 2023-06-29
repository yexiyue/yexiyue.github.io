import fs from 'fs'
import path from 'path'

//源目录
const src=path.resolve(process.cwd(),'./blogs')
//目标目录
const dist=path.resolve(process.cwd(),'./dist')

//获取要复制的文件目录
function recordDirs(src,sign){
    let res=[]
    const dirs=fs.readdirSync(src)
    dirs.forEach(item=>{
        const fileDir=path.join(src,item)
        const state=fs.statSync(fileDir)
        if(state.isDirectory()){
            if(fileDir.includes(sign)){
                res.push(fileDir)
            }else{
                res.push(...recordDirs(fileDir,sign))
            }
        }
    })
    return res
}

//复制当前文件夹到指定目录
function copyDir(src,dist){
    const dir=dist+'\\blogs'+src.split('blogs')[1]
    const sourceFile=fs.readdirSync(src)
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir,{recursive:true})
    }

    sourceFile.forEach(file=>{
        const fileDir=path.join(src,file)
        const state=fs.statSync(fileDir)
        if(state.isFile()){
            //复制文件到指定目录
            fs.copyFileSync(fileDir,dir+'\\'+file)
        }
    })
}


//执行复制
function copy({src,sign,dist}){
    const dirs=recordDirs(src,sign)
    dirs.forEach(dir=>{
        console.log(`========开始拷贝文件夹：${dir}========`)
        copyDir(dir,dist)
    })
    console.log(`----------执行完成----------`)
}

copy({
    sign:'.assets',
    src,
    dist
})
