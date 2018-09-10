class LocalStorage {
    constructor(databaseName = 'temp'){
        this.databaseName = databaseName;
    }

    set(key,val){
        let rs = this.getAll()
        rs = JSON.parse(rs);
        console.info(rs)
        rs[key] = val;
        
        localStorage[this.databaseName] = JSON.stringify(rs);
    }

    get(key){
        let rs = this.getAll()
        rs = JSON.parse(rs);
        return rs[key]
    }
    getAll(){
        return localStorage[this.databaseName] || "{}"
    }
}

export default LocalStorage;