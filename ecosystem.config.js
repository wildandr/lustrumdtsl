module.exports = {
  apps: [
    {
      name: 'my-backend',
      script: 'node',
      args: 'server.js',
      cwd: './lustrumdtsl/my-backend/',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      out_file: '/home/wildandzakyramadhani/.pm2/logs/my-backend-out.log',
      error_file: '/home/wildandzakyramadhani/.pm2/logs/my-backend-error.log',
    },
    {
      name: 'my-frontend',
      script: 'npm',
      args: 'start',
      cwd: './lustrumdtsl/my-frontend/',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      out_file: '/home/wildandzakyramadhani/.pm2/logs/my-frontend-out.log',
      error_file: '/home/wildandzakyramadhani/.pm2/logs/my-frontend-error.log',
    },
  ],
};
