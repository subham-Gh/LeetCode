/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    // Sort the folders lexicographically
    folder.sort();
    const result = [];

    for (let path of folder) {
        // If result is empty OR current path is not a subfolder of the last added folder
        if (
            result.length === 0 || 
            !path.startsWith(result[result.length - 1] + "/")
        ) {
            result.push(path);
        }
    }

    return result;
};
