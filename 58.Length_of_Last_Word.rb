# Given a string s consists of upper/lower-case alphabets and empty space 
# characters ' ', return the length of last word in the string.

# If the last word does not exist, return 0.

# Note: A word is defined as a character sequence consists of non-space 
# characters only.

# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    words = s.split(" ")
    words.empty? ? 0 : words[-1].length
end

# p length_of_last_word("Hello world")