class FindSumPairs {
    constructor(arr1, arr2) {
        this.nums1 = arr1;
        this.nums2 = arr2;

        this.freq1 = new Map();
        this.freq2 = new Map();

        for (const val of this.nums1) {
            this.freq1.set(val, (this.freq1.get(val) || 0) + 1);
        }

        this.sortedNums1Keys = [...this.freq1.keys()].sort((a, b) => a - b);

        for (const val of this.nums2) {
            this.freq2.set(val, (this.freq2.get(val) || 0) + 1);
        }
    }

    add(index, val) {
        const oldVal = this.nums2[index];
        const newVal = oldVal + val;

        const oldCount = this.freq2.get(oldVal);
        if (oldCount === 1) {
            this.freq2.delete(oldVal);
        } else {
            this.freq2.set(oldVal, oldCount - 1);
        }

        this.freq2.set(newVal, (this.freq2.get(newVal) || 0) + 1);
        this.nums2[index] = newVal;
    }

    count(target) {
        let total = 0;
        for (const val1 of this.sortedNums1Keys) {
            if (val1 > target) break;

            const val2 = target - val1;
            const count2 = this.freq2.get(val2);
            if (count2 !== undefined) {
                total += this.freq1.get(val1) * count2;
            }
        }
        return total;
    }
}