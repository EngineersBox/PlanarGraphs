class Dict {

    /**
     * Create a new dictionary
     * 
     * @param {Array} entries
     */
    constructor(entries = []) {
        this.entries = entries;
    }

    /**
     * Put a new key value pair into the dictionary
     * 
     * @param {*} key 
     * @param {*} val 
     */
    put(key, val) {
        remove(key);
        this.entries.push({ K: key, V: val });
    }

    /**
     * Get the value assosciated with a key
     * 
     * @param {*} key 
     * @returns {*}
     */
    get(key) {
        return this.entries.filter(a => a.K == key)[0].V;
    }

    /**
     * Remove a key value pair from the dictionary
     * 
     * @param {*} key 
     */
    remove(key) {
        this.entries = this.entries.filter(a => a.K != key);
    }

    /**
     * Check if the dictionary contains a key value pair
     * 
     * @param {*} key 
     * @param {*} val 
     * @returns {Boolean}
     */
    contains(key, val) {
        return 1 == this.entries.filter(a => a.K == key && val in a.V).length;
    }

    /**
     * Get the entries array
     */
    entries() {
        return this.entries;
    }

    /**
     * Get the number of key value pairs
     * 
     * @returns {Number}
     */
    size() {
        return this.entries.length;
    }

}