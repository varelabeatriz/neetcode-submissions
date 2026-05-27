class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let treatedString = s.toLowerCase();
        treatedString = treatedString.replace(/[^a-zA-Z0-9]/g, "");

        const reversed = treatedString.split("").reverse().join("");

        if(treatedString == reversed){
            return true;
        }

        return false;
    }
}
