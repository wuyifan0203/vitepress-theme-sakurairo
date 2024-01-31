/*
 * @Date: 2023-09-27 20:22:45
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2023-10-07 10:34:49
 * @FilePath: /vuepress-interview/src/code/MyPromise.ts
 */

type StateType = "pending" | "fulfilled" | "rejected";

class MyPromise{
    state:StateType = 'pending';
    value:undefined

    
    constructor(callback){
        try {
            callback(this.resolve.bind(this,this.value), this.reject.bind(this,this.value))
        } catch (error) {
            this.catch(error)
        }

    }

     private resolve(value){
        this.state = "fulfilled"
        this.value = value
    }

    private reject(value){
        this.state = "rejected"
        this.value = value
    }

    catch(callback){
        return this.then(null,callback)
    }

    then(callback1,callback2){
        return this.constructor((resolve,reject)=>{
            try {
                const result = callback1(this.value);
                resolve(result);
            } catch (error) {
                const result = callback2(this.value)
                reject(result)
            }
        })
    }

    finally(callback){
        return this.constructor((resolve,reject)=>{
            try {
                const result = callback(this.value);
                resolve(result);
            } catch (error) {
                const result = callback(this.value)
                reject(result)
            }
        })
    }
}