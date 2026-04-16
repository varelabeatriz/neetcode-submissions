class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hashMapS = new Map();
        let hashMapT = new Map();

        if (s.length !== t.length) {
            return false;
        }

        for(let i = 0; i < s.length; i++){
            let currS = s.charAt(i);
            hashMapS.set(currS, (hashMapS.get(currS) || 0) + 1)

            let currT = t.charAt(i);
            hashMapT.set(currT, (hashMapT.get(currT) || 0) + 1)
        }
  
        if(hashMapS.size !== hashMapT.size){
            return false;
        }

        for (const [key, value] of hashMapS) {
            if (hashMapT.has(key)){
                if (hashMapT.get(key) !== hashMapS.get(key)){
                    return false;
                }
            } else {
                return false;
            }
        }

        return true;

    }
}
