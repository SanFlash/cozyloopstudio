class CozyDB {
    constructor() {
        this.dbName = 'CozyLoopDB';
        this.dbVersion = 1;
        this.db = null;
    }

    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
            request.onupgradeneeded = e => {
                this.db = e.target.result;
                if (!this.db.objectStoreNames.contains('customRequests')) {
                    this.db.createObjectStore('customRequests', { keyPath: 'id' });
                }
                if (!this.db.objectStoreNames.contains('products')) {
                    this.db.createObjectStore('products', { keyPath: 'id', autoIncrement: true });
                }
            };
        });
    }

    async saveCustomRequest(request) {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('customRequests', 'readwrite');
            const store = tx.objectStore('customRequests');
            const req = store.put(request);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    async getCustomRequests() {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('customRequests', 'readonly');
            const store = tx.objectStore('customRequests');
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    async deleteRequest(id) {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('customRequests', 'readwrite');
            const store = tx.objectStore('customRequests');
            const req = store.delete(id);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    async saveProduct(product) {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('products', 'readwrite');
            const store = tx.objectStore('products');
            const req = store.put(product);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    async getProducts() {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('products', 'readonly');
            const store = tx.objectStore('products');
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    async deleteProduct(id) {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('products', 'readwrite');
            const store = tx.objectStore('products');
            const req = store.delete(id);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }
}

const db = new CozyDB();

async function saveCustomRequest(request) {
    return db.saveCustomRequest(request);
}

async function saveProduct(product) {
    return db.saveProduct(product);
}

async function getProducts() {
    return db.getProducts();
}
