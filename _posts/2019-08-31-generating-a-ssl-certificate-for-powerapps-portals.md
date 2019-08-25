---
layout: post
title: "Generating a SSL certificate for PowerApps Portals"
date: 2019-08-25 00:00:00 +1200
categories: 
---
By default, your PowerApps portal is already using Azure's wildcard certificate that's used on all Azure sites. But if you want to use a custom domain on your portal site you will need a new SSL certificate for that domain.

In this guide I'll show you how to generate a CSR (Certificate Signing Request), export a PFX (Personal File Exchange) file and configure PowerApps to use your new SSL certificate.

In order to generate a SSL certificate your certificate authority is going to need you to generate a CSR (Certificate Signing Request). There a a number of ways to generate a CSR file, but in this guide we are going to use IIS becasue, quite frankly, it's the simplist.

## Install IIS
If you don't have IIS installed follow these steps, otherwise skip this section.
1. Open **Windows Settings** and navigate to **Apps**.
2. Scroll all the way down to the **Related settings** section and click **Programs and Features**.
3. From the Programs and Features control panel click **Turn Windows features on or off**.
4. Expand **Internet Information Services**, then expand **Web Management Tools** and check **IIS Management Console**.
5. Finally click **OK**.

It will take a few moments to install IIS. Once it's complete you are ready to generate a CSR!

## Generate a Certificate Signing Request
1. Open IIS and double click **Server Certificates**.
2. From the **Actions** bar on the right, click **Create Certificate Request...**.
3. Enter the distinguished name properties and click **Next**.
4. For the crypographic service provider properties, leave **Cryptograpic service Provider** as `Microsoft RSA Channel Cryptographic Provider`, change **Bit length** to `2048` and click **Next**.
5. Specify a file name with the `.csr` extension and then click **Finish**.

> Common name should contain the custom domain of your portal. For example `www.ryanjames.dev`.

You should now have a CSR that you can submit to your certificate authority. You can validate that the details of the CSR are correct by running `certutil -dump filename.csr` in Command Prompt.

## Complete the Certificate Request

Once your certificate authority has provided you with your new certificate, you will need to complete the request and export a PFX certificate file ready to be uploaded to the PowerApps Portal admin center.

1. Open IIS and double click **Server Certificates**.
2. From the **Actions** bar on the right, click **Complete Certificate Request...**.
3. Select the certificate file you recieved from your certificate authority, give it a friendly name and leave the certifiacte store as `Personal`. Click **OK**.
> You may need to change the extention of the certificate file to `.cer` if you  provided with a `.crt` file.
4. Right click the new certificate record in the Server Certificates list can click **Export...**
5. Specify a location where you want the `.pfx` file to be exported to and give the certificate a strong password. Click **OK**.
> Remember this password. You will need it when we upload the certificate to the PowerApps Portals admin center.

## Upload the certificate to PowerApps Portal admin center
Almost there! Next we have left to do is upload the `.pfx` file to our portal through the PowerApps Portals admin center.

1. Browse to the PowerApps Portals admin center for your portal and click **Manage SSL certificates**.
2. Click **Add new**.
3. Click the **Upload file** button, select the `.pfx` file we exported earlier, enter the password we created and click **OK**. 

## Create a SSL Binding
Finally! The last section, I promise! We can now create a SSL binding between the cetificate and the portal hostname.
1. From the PowerApps Portals admin center click **Set up custom domians and SSL**.
2. Under the **SSL Bindings** section click **Add new**.
3. Specify the **HOSTNAME** and the **Certificate** you want to bind and click **OK**.

## Easy as!

Sorted! You should now  be able to browse to your PowerApps portal using your custom domian with yournew certificate in place.