function detectPatterns(name: string): Set<string> {
    const patterns = new Set<string>();
    const nameLength = name.length;
  
    // helper function to check if a string contains only digits
    const isNumeric = (str: string): boolean => /^\d+$/.test(str);
  
    for (let i = 0; i < nameLength; i++) {
      for (let j = i + 1; j <= nameLength; j++) {
        const pattern = name.slice(i, j);
  
        // check for AAA pattern
        if (pattern.match(/^(\d)\1{2}$/)) {
          patterns.add("AAA");
        }
  
        // check for AABC pattern
        if (pattern.match(/^(\d)\1\w(\w)$/) && !isNumeric(pattern)) {
          patterns.add("AABC");
        }
  
        // check for ABBA pattern
        if (pattern.length === 4 && pattern[0] === pattern[3] && pattern[1] === pattern[2]) {
          patterns.add("ABBA");
        }
  
        // check for ABCD pattern
        if (pattern.length === 4 && !isNumeric(pattern) && new Set(pattern).size === 4) {
          patterns.add("ABCD");
        }
  
        // check for XXX000 pattern
        if (pattern.match(/^(\w)\1{2}0{3}$/)) {
          patterns.add("XXX000");
        }
  
        // check for 100K pattern
        if (pattern.match(/^100000$/)) {
          patterns.add("100K");
        }
  
        // check for 10K pattern
        if (pattern.match(/^(\d{2})\d{3}$/) && parseInt(pattern) < 100000) {
          patterns.add("10K");
        }
  
        // check for MMDD pattern
        if (pattern.match(/^(\d{2})(\d{2})$/) && parseInt(pattern.substr(0, 2)) <= 12 && parseInt(pattern.substr(2, 2)) <= 31) {
          patterns.add("MMDD");
        }
  
        // check for 0XXX pattern
        if (pattern.match(/^0(\d)\1{2}$/)) {
          patterns.add("0XXX");
        }
  
        // check for 0x10K pattern
        if (pattern.match(/^0x(\d{2})\d{3}$/) && parseInt(pattern.substr(2)) < 100000) {
          patterns.add("0x10K");
        }
  
        // check for ABBB pattern
        if (pattern.match(/^(\d)\1{2}(\d)$/)) {
          patterns.add("ABBB");
        }
  
        // check for ABCC pattern
        if (pattern.length === 4 && !isNumeric(pattern) && new Set(pattern).size === 3) {
          patterns.add("ABCC");
        }
      }
    }
  
    return patterns;
  }
  