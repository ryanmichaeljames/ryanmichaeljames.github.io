---
layout: post
title: 🔒 Generating a SSL certificate for PowerApps Portals
subtitle: Overcoming the gotchas of generating a SSL cetificate setting it up PowerApps Portals and Dynamics 365 Portals.
date: 2019-08-27 00:00:00 +1200
categories: [blog]
tags: [powerapps portals, dynamics portals, ssl certificate]
banner_image: /assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/banner.png
---

In this blog post I'll show you how to generate a CSR (Certificate Signing Request), export a PFX (Personal File Exchange) file and configure PowerApps to use your new SSL certificate.

By default, your PowerApps portal is already using Azure's wildcard certificate that's used on all Azure sites. But if you want to use a custom domain on your Portals site you will need a new SSL certificate for that domain.

In order to generate a SSL certificate your certificate authority is going to need you to create a CSR (Certificate Signing Request). There are a number of ways to generate a CSR file, but in this guide we are going to use IIS becasue, quite frankly, it's the simplist.

> This guide also applies to Dynamics 365 Portals

### Install IIS
If you don't have IIS installed follow these steps, otherwise skip this section.
1. Open **Windows Settings** and click on **Apps**.
![Screenshot of Windows Settings](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/windows-settings.png "Windows Settings"){:class="img-fluid blog-post-img"}
2. Scroll all the way down to the **Related settings** section and click **Programs and Features**.
![Screenshot of Windows Settings Apps & features](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/windows-settings-apps-and-features.png "Apps & features"){:class="img-fluid blog-post-img"}
3. From the Programs and Features control panel click **Turn Windows features on or off**.
![Screenshot of Control Panel Programs & Features](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/control-panel-programs-and-features.png "Programs & Features"){:class="img-fluid blog-post-img"}
4. Expand **Internet Information Services**, then expand **Web Management Tools** and check **IIS Management Console**.
![Screenshot of the Turn Windows features on or off dialog](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/control-panel-windows-features.png "Turn Windows features on or off"){:class="img-fluid blog-post-img"}
5. Finally click **OK**.

It will take a few moments to install IIS. Once it's complete you are ready to generate a CSR!

### Generate a Certificate Signing Request
1. Open IIS and double click **Server Certificates**.
![Screenshot of the IIS Server Certificates link](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-server-certificates.png "IIS Server Certificates"){:class="img-fluid blog-post-img"}
2. From the **Actions** bar on the right, click **Create Certificate Request...**.
![Screenshot of the Create Certificate Request link on Actions bar](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-actions-create-certificate-request.png "Create Certificate Request"){:class="img-fluid blog-post-img"}
3. Enter the distinguished name properties and click **Next**.
![Screenshot of the Distinguished Name Properties](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-distinguished-name-properties.png "Distinguished Name Properties"){:class="img-fluid blog-post-img"}
> Common name should contain the custom domain of your portal. For example `www.ryanjames.dev`.
4. For the crypographic service provider properties, leave **Cryptograpic service Provider** as `Microsoft RSA Channel Cryptographic Provider`, change **Bit length** to `2048` and click **Next**.
![Screenshot of the Crypographic Service Provider Properties](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-cryptographics-service-provider-properties.png "Crypographic Service Provider Properties"){:class="img-fluid blog-post-img"}
5. Specify a file name with the `.csr` extension and then click **Finish**.
![Screenshot of the File Name](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-file-name.png "File Name"){:class="img-fluid blog-post-img"}

You should now have a CSR that you can submit to your certificate authority. You can validate that the details of the CSR are correct by running `certutil -dump filename.csr` in Command Prompt.

### Complete the Certificate Request

Once your certificate authority has provided you with your new certificate, you will need to complete the request and export a PFX certificate file to be uploaded to the PowerApps Portal admin center.

1. Open IIS and double click **Server Certificates**.
![Screenshot of the IIS Server Certificates link](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-server-certificates.png "IIS Server Certificates"){:class="img-fluid blog-post-img"}
2. From the **Actions** bar on the right, click **Complete Certificate Request...**.
![Screenshot of the Complete Certificate Request link on Actions bar](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-actions-complete-certificate-request.png "Complete Certificate Request"){:class="img-fluid blog-post-img"}
3. Select the certificate file you recieved from your certificate authority, give it a friendly name and leave the certifiacte store as `Personal`. Click **OK**.
![Screenshot of the Specify Certificate Authority Response](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-specify-certificate-authority-response.png "Specify Certificate Authority Response"){:class="img-fluid blog-post-img"}
> You may need to change the extention of the certificate file to `.cer` if you  provided with a `.crt` file.
4. Right click the new certificate record in the Server Certificates list can click **Export...**
![Screenshot of the server certificates](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-certificate-list.png "Server Certificates"){:class="img-fluid blog-post-img"}
5. Specify a location where you want the `.pfx` file to be exported to and give the certificate a strong password. Click **OK**.
![Screenshot of the certificate export](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/iis-certificate-export.png "Export Certificate"){:class="img-fluid blog-post-img"}
> Remember this password. You will need it when uploading your certificate to the PowerApps Portals admin center.


### Upload the certificate to PowerApps Portal admin center
Almost there! Next we have left to do is upload the `.pfx` file to our portal through the PowerApps Portals admin center.

1. Browse to the PowerApps Portals admin center for your portal and click **Manage SSL certificates**.  
![Screenshot of PowerApps Portals admin center](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/powerapps-managed-ssl-certificates.png "Manage SSL Certificates"){:class="img-fluid blog-post-img"}
2. Click **Add new**.
![Screenshot of the SSL certificates list](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/powerapps-managed-ssl-certificates-add-new.png "Add new"){:class="img-fluid blog-post-img"}
3. Click the **Upload file** button, select the `.pfx` file we exported earlier, enter the password we created and click **OK**.
![Screenshot of the Upload a Certificate dialog](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/powerapps-managed-ssl-certificates-upload.png "Upload a Certificate"){:class="img-fluid blog-post-img"}

## Create a SSL Binding
Finally! The last section, I promise! We can now create a SSL binding between the certificate and the portal hostname.
1. From the PowerApps Portals admin center click **Set up custom domians and SSL**.
![Screenshot of PowerApps Portals admin center](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/powerapps-setup-custom-domains-and-ssl.png "Setup custom domians and SSL"){:class="img-fluid blog-post-img"}
2. Under the **SSL Bindings** section click **Add new**.
![Screenshot of the SSL Bindings](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/powerapps-ssl-binding-add-new.png "Add new"){:class="img-fluid blog-post-img"}
3. Specify the **HOSTNAME** and the **Certificate** you want to bind and click **OK**.
![Screenshot of the SSL Bindings](/assets/images/2019-08-27-generating-a-ssl-certificate-for-powerapps-portals/powerapps-add-ssl-binding.png "Add SSL Binding"){:class="img-fluid blog-post-img"}

### Easy as!

Sorted! You should now  be able to browse to your PowerApps portal using your custom domian with yournew certificate in place.