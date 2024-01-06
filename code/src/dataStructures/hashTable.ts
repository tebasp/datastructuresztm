interface IHashTable<T> {
    get(key: string): T | undefined
    set(key: string, value: T): [string, T][]
    keys(): string[]
}

export class CustomHash<T> implements IHashTable<T> {
    data: Array<Array<[string, T]>>

    constructor(size: number) {
        this.data = new Array<Array<[string, T]>>(size)
    }

    private _hash(key: string): number {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key: string, value: T): [string, T][] {
        const address = this._hash(key)

        if (!this.data[address]) {
            this.data[address] = []
        }

        this.data[address].push([key, value])

        return this.data[address]
    }

    get(key: string): T | undefined {
        const address = this._hash(key)
        const currentItem = this.data[address]

        if (!currentItem) {
            return undefined
        }

        for (const element of currentItem) {
            if (element[0] === key) {
                return element[1]
            }
        }
    }

    keys() {
        return this.data.map((item) => item[0][0])
    }
}

const myHashTable = new CustomHash(50)

myHashTable.set('grapes', 10000)
myHashTable.set('apples', 9)
myHashTable.set('oranges', 2)

const grapes = myHashTable.get('grapes')
console.log('\nGrapes', grapes)

console.log('\nKeys', myHashTable.keys())
