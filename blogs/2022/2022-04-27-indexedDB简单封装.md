---
title: 对indexedDB的简单封装
date: 2022-04-27
cover: /images/2053194.jpg
tags:
 - indexedDB  
 - javascript
categories:
 - 浅浅探索
---
::: tip 介绍
基于promise对indexedDB的简单封装
:::
<!-- more -->

# IDBClass

**基于promise对indexedDB的简单封装**



## 一.背景

最近在阮一峰的日记里无意间浏览到了indexedDB,标准的客户端存储技术。IndexedDB 是一个基于 JavaScript 的面向对象数据库。IndexedDB 允许您存储和检索用**键**索引的对象；

### 官方介绍

IndexedDB 是一种底层 API，用于在客户端存储大量的结构化数据（也包括文件/二进制大型对象（blobs））。该 API 使用索引实现对数据的高性能搜索。虽然 [Web Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API) 在存储较少量的数据很有用，但对于存储更大量的结构化数据来说力不从心。而 IndexedDB 提供了这种场景的解决方案。本页面 MDN IndexedDB 的主要引导页 - 这里，我们提供了完整的 API 参考和使用指南，浏览器支持细节，以及关键概念的一些解释的链接。



**Note:** 此特性在 [Web Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API) 中可用



**注意**：IndexedDB API是强大的，但对于简单的情况可能看起来太复杂。如果你更喜欢一个简单的API，请尝试  [localForage](https://localforage.github.io/localForage/)、[dexie.js](https://www.dexie.org/)、[PouchDB](https://pouchdb.com/)、[idb](https://www.npmjs.com/package/idb)、[idb-keyval](https://www.npmjs.com/package/idb-keyval)、[JsStore](https://jsstore.net/) 或者 [lovefield](https://github.com/google/lovefield) 之类的库，这些库使 IndexedDB 对开发者来说更加友好。



### 产生原因

indexedDB的方法都是异步的，得去成功的回调去拿值，用起来不是很方便，所以打算自己封装一下indexedDB的常用操作，目前只有class版本的。



## 二.使用方式

导入模块



### 1.初始化

| optionsName        | value              |
| ------------------ | ------------------ |
| databaseName       | 数据库名称         |
| version            | 版本               |
| objectStores       | 想要创建的对象仓库 |
| objectStoreName    | 仓库名称           |
| objectStoreOptions | 仓库选项           |
| objectStoreIndex   | 创建索引           |



```typescript
onst database = new IDBClass({
      databaseName: 'test',
      version: 2,
      objectStores: [{
        objectStoreName: 'test',
        objectStoreOptions: {
          keyPath: 'id'
        },
        objectStoreIndex: [
          { name: 'name', keyPath: 'name', options: { unique: false } },
          { name: 'email', keyPath: 'email', options: { unique: false } }
        ]
      },
      {
        objectStoreName: 'person',
        objectStoreOptions: {
          keyPath: 'id'
        },
        objectStoreIndex: [
          { name: 'name', keyPath: 'name', options: { unique: false } },
          { name: 'email', keyPath: 'email', options: { unique: false } }
        ]
      }
      ],
    })
```



### 2.使用方法进行操作

为了简单点，我使用了typedoc注释文档生成

github仓库链接[yexiyue/IDBClass: 对indexedDB的简单封装 (github.com)](https://github.com/yexiyue/IDBClass)

下载文件后打开docs/index.html就能看到完整的api详情

```tsx
 database.delete('person','张三').catch(e=>{console.log(e)}) */
 database.findAll('person').then(e=>{
      console.log(e)
      return database.get('person',2)
    }).then(e=>{
      console.log(e)
    })

    database.get('person',5).then(e=>{
      console.log(e)
      return database.getByIndex('person','name','yehsifu')
    }).then(e=>{
      console.log(e)
      return database.findByIndex('person','name','yehsifu',5)
    }).then(e=>{
      console.log(e)
      
    }) 
   database.getByIndexCursor('person','name','yehsifu').then(e=>console.log(e))
    database.PageByIndexCursor('person','name','yehsifu',3,2).then(e=>console.log(e)) 
   database.page('person',1,5).then(e=>console.log(e)) 

   database.put('person',{id:1,name:'yeshifu666',email:'5f4ghf5h'})
   database.putByIndexCursor('person','email','6666666',{email:'88888',name:'6到家了'}).then(e=>console.log(e)) 

  database.deleteByIndex('person','email','6666666',true) 

database.close()

database.deleteDb() 
```

操作结果，部分的，完整的我就懒得截图了自己可以去尝试尝试

![image-20220427215027874](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e2d8a25571e4d29ba3ad3b244fb1a33~tplv-k3u1fbpfcp-zoom-1.image)

![image-20220427214514262](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d975cfffbe304df886575cb81c4733d1~tplv-k3u1fbpfcp-zoom-1.image)



![image-20220427214541061](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf8323fee65446f5afe830b56d71cb8a~tplv-k3u1fbpfcp-zoom-1.image)



![image-20220427214622413](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/727f99a223014a48912d97bc2c9e5fb7~tplv-k3u1fbpfcp-zoom-1.image)



## 三.废话不多说，直接上源码

```typescript

export class IDBClass {
  public o:Options;
  
  constructor(o:Options){
    this.o=o
    //先调用一下生成仓库对象
    this.getDb()
  }
  
  /**
   * @async
   * @returns IDBDatabase
   * @description 异步方法，用来获取数据库
   */
  public async getDb():Promise<IDBDatabase>{
    const openRequest:IDBRequest=this.getRequest()
    return new Promise((resolve,reject)=>{
      let db:IDBDatabase;
      openRequest.onupgradeneeded=(ev)=>{
        db=ev.target!.result
        if(db.version){
          this.o.objectStores.forEach(v=>{
            const objectStore:IDBObjectStore=db.createObjectStore(v.objectStoreName,v.objectStoreOptions)
            v.objectStoreIndex?.forEach(v=>{
              objectStore.createIndex(v.name,v.keyPath,v.options)
            })
          })
        }
      }
      openRequest.onsuccess=(ev)=>{
        if(ev.target!.result){
          db=ev.target!.result
        }
        resolve(db)
      }
      openRequest.onerror=(ev)=>{
        reject('数据库连接失败')
      }
    })
  }

  /**
   * 
   * @returns IDBRequest
   * @description 同步方法,用来获取数据库连接请求
   */
  public getRequest():IDBRequest{
    let indexedDB: IDBFactory =window.indexedDB /* ((window as any).indexedDB =
        (window as any).indexedDB ||
        (window as any).mozIndexedDB ||
        (window as any).webkitIndexedDB ||
        (window as any).msIndexedDB); */
      if (!indexedDB) {
        alert('你的浏览器不支持indexedDB')
        throw Error('你的客户端不支持indexedDB')
      }
    return indexedDB.open(this.o.databaseName,this.o.version)
  }

  /**
   * @async
   * @param StoreNames 仓库名，或仓库名数组
   * @returns IDBObjectStore or IDBObjectStore[]
   * @description 获取事务objectStore
   */
  public async getObjectStores(StoreNames:string | string[]):Promise<IDBObjectStore|any>{
    const db=await this.getDb()
    return new Promise((resolve,reject)=>{
      let objectStores:any={};
      let objectStoreNameList=this.o.objectStores.map(v=>{
        return v.objectStoreName
      })
      const transaction:IDBTransaction=db.transaction(objectStoreNameList,'readwrite')

      if(typeof StoreNames=='string'){
        objectStores=transaction.objectStore(StoreNames)
        resolve(objectStores)
      }else{
        StoreNames.forEach((v:string)=>{
          objectStores[v]=transaction.objectStore(v)
        })
        resolve(objectStores)
      }
    })
  }

  /**
   * @async
   * @param storeName 仓库名
   * @param data 添加的数据对象
   * @returns Boolean
   * @description 用来添加单个数据
   */
  public async add(storeName:string,data:any):Promise<boolean>{
    const objectStores:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      const request=objectStores.add(data)
      request.onerror=()=>reject(false)
      request.onsuccess=()=>resolve(true)
    })
  }

  /**
   * @async
   * @param storeName 仓库名
   * @param data 添加的数据对象数组
   * @returns Boolean
   * @description 批量添加数据
   */
  public async addMany(storeName:string,data:any[]):Promise<boolean>{
    const objectStores:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      data.forEach(v=>{
        const request=objectStores.add(v)
        request.onerror=()=>reject(false)
        request.onsuccess=()=>resolve(true)
      })
    })
  }

  /**
   * @async
   * @param storeName 仓库名
   * @param key 主键值
   * @returns 数据对象
   * @description 通过主键查找
   */
  public async get(storeName:string,key:any):Promise<boolean|object>{
    const objectStores:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      const request=objectStores.get(key)
      request.onerror=()=>reject(false)
      request.onsuccess=(ev)=>resolve(ev.target?.result)
    })
  }

  /**
   * @async
   * @param storeName 仓库名
   * @returns Promise<boolean|object[]>
   * @description 获取当前仓库全部数据
   */
  public async findAll(storeName:string):Promise<boolean|object[]>{
    const objectStores:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      const request=objectStores.openCursor()
      console.log(request)
      //创建数组保存数据
      let list:any[]=[];
      request.onerror=()=>reject(false)
      request.onsuccess=(ev)=>{
        let cursor=ev.target?.result
        if(cursor){
          list.push(cursor.value)
          //遍历
          cursor.continue()
        }else{
          resolve(list)
        }
      }
    })
  }

  /**
   * @async
   * @param storeName 仓库名
   * @param indexName 索引名
   * @param indexValue 索引值
   * @returns Promise<boolean|object>
   * @description 通过索引查找
   */
  public async getByIndex(storeName:string,indexName:string,indexValue:any):Promise<boolean|object>{
    const objectStores:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      const request=objectStores.index(indexName).get(indexValue)
      request.onerror=()=>reject(false)
      request.onsuccess=(ev)=>resolve(ev.target?.result)
    })
  }
  
  /**
   * @async
   * @param storeName 仓库名
   * @param indexName 索引名
   * @param indexValue 索引值
   * @param count 数目
   * @returns Promise<boolean|object>
   * @description 通过索引查找指定条数的记录
   */
  public async findByIndex(storeName:string,indexName:string,indexValue:any,count?:number):Promise<boolean|object>{
    const objectStores:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      const request=objectStores.index(indexName).getAll(indexValue,count)
      request.onerror=()=>reject(false)
      request.onsuccess=(ev)=>resolve(ev.target?.result)
    })
  }

  /**
   * @async
   * @param storeName 仓库名
   * @param indexName 索引名
   * @param indexValue 索引值
   * @returns Promise<boolean|object[]>
   * @description 通过索引及游标查询,查询全部符合条件的数据
   */
  public async getByIndexCursor(storeName:string,indexName:string,indexValue:any):Promise<boolean|object[]>{
    const objectStore:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      const request=objectStore.index(indexName).openCursor(IDBKeyRange.only(indexValue))
      const list:any[]=[];
      request.onerror=()=>reject(false)
      request.onsuccess=(ev)=>{
        let cursor:IDBCursor=ev.target?.result;
        if(cursor){
          list.push(cursor.value)
          cursor.continue()
        }else{
          resolve(list)
        }
      }
    })
  }


  /**
   * @async
   * @param storeName 仓库名
   * @param indexName 索引名
   * @param indexValue 索引值
   * @param page 页码
   * @param pageSize 当前页数目
   * @returns Promise<boolean|object[]>
   * @description 分页查找
   */
  public async PageByIndexCursor(storeName:string,indexName:string,indexValue:any,page:number=0,pageSize:number=0):Promise<boolean|object[]>{
    const objectStore:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      const request=objectStore.index(indexName).openCursor(IDBKeyRange.only(indexValue))
      const list:any[]=[];
      let counter=0;
      let advanced=true;
      request.onerror=()=>reject(false)
      request.onsuccess=(ev)=>{
        let cursor:IDBCursor|null=ev.target?.result;
        //判断是否需要跳过
        if(page>1 && advanced){
          advanced=false;
          //前进多少条
          cursor!.advance((page-1)*pageSize)
          return;
        }
        if(cursor){
          list.push(cursor.value)
          counter++;

          if(counter<pageSize){
            cursor.continue()
          }else{
            cursor=null
            resolve(list)
          }
        }else{
          resolve(list)
        }
      }
    })
  }
  
  /**
   * @async
   * @param storeName 仓库名
   * @param page 页码
   * @param pageSize 当前页数目
   * @returns Promise<boolean|object[]>
   * @description 分页查找全部数据
   */
  public async page(storeName:string,page:number=0,pageSize:number=0):Promise<boolean|object[]>{
    const objectStore=await this.getObjectStores(storeName);
    return new Promise((resolve,reject)=>{
      const request=objectStore.openCursor();
      const list:any[]=[]
      let counter:number=0;
      let advanced=true;
      request.onerror=()=>reject(false)
      request.onsuccess=(ev:any)=>{
        let cursor:IDBCursor|null=ev.target.result
        if(page>1 && advanced){
          advanced=false;
          cursor?.advance((page-1)*pageSize)
          return;
        }
        if(cursor){
          list.push(cursor.value)
          counter++;
          if(counter<pageSize){
            cursor.continue()
          }else{
            cursor=null;
            resolve(list)
          }
        }else{
          resolve(list)
        }
      }
    })
  }

  /**
   * @async
   * @param storeName 仓库名
   * @param data 数据对象 注意：一定要包含主键
   * @returns Promise<boolean>
   * @description 通过主键更新数据，数据对象中一定要包含主键
   */
  public async put(storeName:string,data:any):Promise<boolean>{
    const objectStore=await this.getObjectStores(storeName);
    return new Promise((resolve,reject)=>{
      const request=objectStore.put(data)
      request.onerror=()=>reject(false)
      request.onsuccess=()=>resolve(true)
    })
  }
  
  /**
   * @async
   * @param storeName 仓库名
   * @param indexName 索引名
   * @param indexValue 索引值
   * @param data 数据对象，建议不包含主键
   * @param updateAll 是否更新所有匹配
   * @returns Promise<boolean>
   * @description 通过索引批量更新
   */
  public async putByIndexCursor(storeName:string,indexName:string,indexValue:any,data:any,updateAll:boolean=false):Promise<boolean>{
    const objectStore=await this.getObjectStores(storeName);
    return new Promise((resolve,reject)=>{
      const request=objectStore.index(indexName).openCursor(IDBKeyRange.only(indexValue))
      request.onerror=()=>reject(false)
      request.onsuccess=(ev: { target: { result: IDBCursor | null; }; })=>{
        const cursor:IDBCursor|null=ev.target.result;
        if(cursor){
          //保存旧值
          let Value=cursor.value
          let keys=Object.getOwnPropertyNames(data)
          for(let key in Value){
            if(keys.includes(key)){
              Value[key]=data[key]
            }
          }
          const updateRequest=cursor.update(Value)
          updateRequest.onerror=()=>{
            console.log('单个更新失败')
          }
          if(updateAll){
            cursor.continue()
          }
          
        }else{
          resolve(true)
        }
      }
    })
  }

  /**
   * @async
   * @param storeName 仓库名
   * @param key 主键值
   * @returns Promise<boolean>
   * @description 通过主键删除
   */
  public async delete(storeName:string,key:any):Promise<boolean>{
    const objectStore:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      const request=objectStore.delete(key)
      request.onerror=()=>reject(false)
      request.onsuccess=()=>resolve(true)
    })
  }

  /**
   * @async
   * @param storeName 仓库名
   * @param indexName 索引名
   * @param indexValue 索引值
   * @param deleteAll 是否删除全部，默认false
   * @returns Promise<boolean>
   * @description 通过索引删除数据，默认删除匹配的第一条
   */
  public async deleteByIndex(storeName:string,indexName:string,indexValue:any,deleteAll:boolean=false):Promise<boolean>{
    const objectStore:IDBObjectStore=await this.getObjectStores(storeName)
    return new Promise((resolve,reject)=>{
      const request=objectStore.index(indexName).openCursor(IDBKeyRange.only(indexValue))
      request.onerror=()=>reject(false)
      request.onsuccess=(ev)=>{
        let cursor:IDBCursor|null=ev.target?.result
        if(cursor){
          const deleteRequest=cursor.delete()
          if(deleteAll){
            cursor.continue()
          }
          deleteRequest.onerror=()=>{
            console.log('删除单个失败')
          }
        }else{
          resolve(true)
        }
      }
    })
  }

  /**
   * @description 关闭数据库
   */
  public async close(){
    const db=await this.getDb();
    db.close();
    console.log('数据库已关闭')
  }

  /**
   * @async
   * @returns Promise<boolean>
   * @description 删库跑路
   */
  public async deleteDb():Promise<boolean>{
    const deleteRequest=window.indexedDB.deleteDatabase(this.o.databaseName)
    return new Promise((resolve,reject)=>{
      deleteRequest.onerror=()=>reject(false)
      deleteRequest.onsuccess=()=>{
        console.log(`${this.o.databaseName}数据库删除成功`)
        resolve(true)
      }
    })
  }
}

```



## 四.有啥好的建议，欢迎评论，回复加关注
