module.exports = {
    listen: process.env.APP_LISTEN || '0.0.0.0',
    port: process.env.APP_PORT || process.env.PORT || 9090
}
// test change

/*module.exports = {
    listen: process.env.APP_LISTEN || '0.0.0.0',
    port: process.env.APP_PORT || process.env.PORT || 9090,
    
    // ⚠️ Intentionally bad: hardcoded password
    dbPassword: "SuperSecret123!"
}*/