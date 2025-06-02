/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
    let total = ratings.length;
    let index = 0;

    const processSegment = (ratings, begin) => {
        const length = ratings.length;
        let extraCandies = 0;
        let up = 0;
        let down = 0;
        let descending = false;
        let index = begin;

        while (index < length - 1) {
            const isUp = ratings[index] < ratings[index + 1];
            const isDown = ratings[index] > ratings[index + 1];

            if (!isUp && !isDown) {
                index++;
                break;
            }

            if (isUp) {
                if (descending) break;
                up++;
                extraCandies += up;
            } else {
                descending = true;
                down++;
                extraCandies += down;
            }

            index++;
        }

        extraCandies -= Math.min(up, down);
        return [index, extraCandies];
    };


    while (index < ratings.length - 1) {
        const [nextIndex, extraCandies] = processSegment(ratings, index);
        total += extraCandies;
        index = nextIndex;
    }

    return total;
};
