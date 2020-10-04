# node-hello-world
A hello world server-side application powered by NodeJS

# Lab: Deploy NodeJS application to Compute Engine

Prerequisites:
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

## STEP 2: Connect to Virtual Machine
1. In the Cloud Console, go to the [VM Instances](https://console.cloud.google.com/compute/instances) page.
1. In the list of virtual machine instances, click **SSH** in the row of the instance that you want to connect to.

## STEP 3: Install Node & GIT
```bash
sudo apt-get -y update
sudo apt-get install -y nodejs npm

node --version
npm --version
```

What is [NodeJS](https://nodejs.org/en/about/)?
Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

```bash
sudo apt install git-all

git --version
```

What is [GIT](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/)?
GIT is a version control system, a software tool that helps record changes to files by keeping a track of modifications done to the code.

## STEP 4: Clone source code from Github to Virtual Machine
```bash
git clone https://github.com/DSC-FPTU-HCMC/node-hello-world.git
cd node-hello-world
```
What is GIT?


## STEP 5: Start your application locally
```bash
npm start
```

## STEP 6: Setup PM2
```bash
sudo npm install -g pm2
```

## STEP 7: See the magic
1. In the Google Cloud Console, go to the [VM Instances](https://console.cloud.google.com/compute/instances) page.
1. Copy the external IP Address of the instance you created.
1. Open new tab on Google Chrome, and paste the link into navigation bar.


## STEP 8: Clean up resource
1. In the Google Cloud Console, go to the [VM Instances](https://console.cloud.google.com/compute/instances) page.
1. Click the name of the instance you created.
1. At the top of the instance's details page, click Delete.