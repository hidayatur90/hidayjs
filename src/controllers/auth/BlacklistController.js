let blacklistedTokens = [];

exports.blacklistToken = (token) => {
    blacklistedTokens.push(token);
};

exports.isTokenBlacklisted = (token) => {
    return blacklistedTokens.includes(token);
};
