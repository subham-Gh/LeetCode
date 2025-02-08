var NumberContainers = function() {
	/** @type {Map<number, Set<number>>} */
    this.indicesMap = new Map();
	/** @type {Map<number, number>} */
	this.numberMap = new Map();
	/** @type {Map<number, number>} */
	this.minIndexMap = new Map();
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
	if (this.numberMap.has(index)) {
		/** @type {number} */
		const old_num = this.numberMap.get(index);
		const set = this.indicesMap.get(old_num);
		if (set.size === 1) {
			this.indicesMap.delete(old_num);
		} else {
			this.indicesMap.get(old_num).delete(index);
		}
		if (index === this.minIndexMap.get(old_num)) {
			this.minIndexMap.set(old_num, -1); // marked as dirty
		}
	}

	this.numberMap.set(index, number);
	if (!this.indicesMap.has(number)) {
		this.indicesMap.set(number, new Set());
	}
	this.indicesMap.get(number).add(index);
	if (!this.minIndexMap.has(number) || index < this.minIndexMap.get(number)) {
		this.minIndexMap.set(number, index);
	}
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
	if (!this.indicesMap.has(number)) {
		return -1;
	}

	if (this.minIndexMap.get(number) === -1) {
		let min = Number.MAX_SAFE_INTEGER;
		for (let x of this.indicesMap.get(number)) {
			min = Math.min(x, min);
		}
		this.minIndexMap.set(number, min);
		return min;
	} else {
		return this.minIndexMap.get(number);
	}
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */