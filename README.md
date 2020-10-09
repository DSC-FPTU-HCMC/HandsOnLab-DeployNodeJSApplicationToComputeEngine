# node-hello-world
A hello world server-side application powered by NodeJS

# Lab: Deploy NodeJS application to Compute Engine

## Prerequisites:
- A google cloud platform account
- Fundamental knowledge of NodeJS

## STEP 1: Create a Virtual Machine
1. In the Cloud Console, go to the [VM Instances](https://console.cloud.google.com/compute/instances) page.
1. Click **Create instance**.
1. In the Boot disk section, click Change to begin configuring your boot disk.
1. On the Public images tab, choose Debian version 9.
1. Click Select.
1. In the **Firewall** section, select **Allow HTTP traffic**.
1. Click Create to create the instance.

Allow a short time for the instance to start. After the instance is ready, it is listed on the VM instances page with a green status icon.

## STEP 2: Connect to the VM
1. In the Cloud Console, go to the [VM Instances](https://console.cloud.google.com/compute/instances) page.
1. In the list of virtual machine instances, click **SSH** in the row of the instance that you want to connect to.

**What is [SSH](https://phoenixnap.com/kb/ssh-to-connect-to-remote-server-linux-or-windows)?**

Secure Shell (SSH) is a software standard to support encrypted data transfer between two computers. It can be used to support secure logins, file transfers or general purpose connects. Servers maintained by ITS require SSH-based connections in most cases.

## STEP 3: Install Node & GIT
```bash
sudo apt-get -y update
sudo apt-get install -y nodejs npm

node --version
npm --version
```

**What is [NodeJS](https://nodejs.org/en/about/)?**

Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

```bash
sudo apt install git-all

git --version
```

**What is [GIT](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/)?**

GIT is a version control system, a software tool that helps record changes to files by keeping a track of modifications done to the code.

## STEP 4: Clone source code from Github to the VM
```bash
git clone https://github.com/DSC-FPTU-HCMC/node-hello-world.git
cd node-hello-world
```

## STEP 5: Start your application
```bash
# install the dependencies
npm install

# start the application
npm start

# Ctrl C to shutdown
```

## STEP 6: Configure nginx
```bash
sudo apt-get install -y nginx

# navigate to configuration folder for nginx
cd /etc/nginx/sites-available

# backup your current default file
sudo mv default default.bak

# create new nginx's configuration file
sudo touch default
```

Edit the file `default`
```
server {
  listen 80;
  server_name YOUR_SERVERS_IP_ADDRESS;

  location / {
    proxy_pass "http://127.0.0.1:8080";
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_cache_bypass $http_upgrade;
  }
}
```

```bash
# restart nginx
sudo service nginx restart

# start application
npm start
```

**What is [nginx](https://www.nginx.com/resources/glossary/nginx)?**
nginx is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. ... In addition to its HTTP server capabilities, nginx can also function as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers.

## STEP 7: Setup PM2
```bash
# install pm2
sudo npm install -g pm2

# start the application
pm2 start npm -- start
```

**What is [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)?**

PM2 is a production process manager for Node. js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.

## STEP 8: See the magic
1. In the Google Cloud Console, go to the [VM Instances](https://console.cloud.google.com/compute/instances) page.
1. Copy the external IP Address of the instance you created.
1. Open new tab on Google Chrome, and paste the link into navigation bar.


## STEP 9: Clean up resource
1. In the Google Cloud Console, go to the [VM Instances](https://console.cloud.google.com/compute/instances) page.
1. Click the name of the instance you created.
1. At the top of the instance's details page, click Delete.

# Thank you!
