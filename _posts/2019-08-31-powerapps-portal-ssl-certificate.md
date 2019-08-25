---
layout: post
title: "Generating a SSL certificate for PowerApps portal"
date: 2019-08-25 00:00:00 +1200
categories: 
---
By default, you PowerApps portal already is already using Azure's wildcard certificate that's used on all Azure sites. But if you want to use a custom domain on your portal site you will need a new SSL certificate for that domain.

In this guide I'll show you how to generate a CSR (Certificate Signing Request), export a PFX (Personal File Exchange) file and configure PowerApps to use your new SSL certificate.

## Certificate Signing Request
In order to generate a SSL certificate your certificate authority is going to need you to generate a CSR (Certificate Signing Request). There a a numbe of ways to generate a CSR file, but in this guide we are going to use IIS becasue, quite frankly, it's the simplist.

### Install IIS
If you don't have IIS installed follow these steps, otherwise skip straight to to **Generate the CSR**.
1. Open **Windows Settings** and navigate to **Apps**.
2. Scroll all the way down to the **Related settings** section and click **Programs and Features**.
3. From the Programs and Features control panel click **Turn Windows features on or off**.
4. Expand **Internet Information Services**, then expand **Web Management Tools** and check **IIS Management Console**.
5. Finally click **OK**.

It will take a few moments to install IIS. Once it's complete you are ready to generate a CSR!

### Generate the CSR
1. Open IIS

## 

## Easy as!

