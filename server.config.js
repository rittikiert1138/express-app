module.exports = {
    apps : [
      {
        name: 'express-app',
        script: './app.js',
        instances: 1,
        autorestart: true,
        exec_mode: "fork",
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production'
        },
    },
   ],
};
