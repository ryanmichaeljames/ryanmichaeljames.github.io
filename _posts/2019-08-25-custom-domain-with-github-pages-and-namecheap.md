---
layout: post
title: Custom domain with GitHub Pages and Namecheap
subtitle: 
date: 2019-08-25 00:00:00 +1200
categories: [blog]
tags: [github pages, custom domain, namecheap]
banner_image: /assets/images/2019-08-25-custom-domain-with-github-pages-and-namecheap/banner.png
---

So you've setup you own personal [GitHub Pages](https://pages.github.com) site and bought a custom domain from [Namecheap](https://www.namecheap.com), now what? In this blog post I'll show you how to configure your GitHub Pages site to use your new custom domain in less than 5 minutes.

## Namecheap
First we will configure the DNS settings for your custom domain through Namecheap's domain control panel.

1. Navigate to your domian list and click **Manage** on the domain you wish to configure.\
![Screenshot of the Namecheap domain list](/assets/images/2019-08-25-custom-domain-with-github-pages-and-namecheap/namecheap-domian-list.png "Namecheap domian list"){:class="img-fluid blog-post-img"}
2. Click on the **Advanced DNS** tab and Scroll down to **Host Records** section.\
![Screenshot of the Namecheap DNS control panel](/assets/images/2019-08-25-custom-domain-with-github-pages-and-namecheap/namecheap-advanced-dns.png "Namecheap Advanced DNS"){:class="img-fluid blog-post-img"}
4. Update the CNAME record by setting the **value** to your GitHub Pages repository, in my case it was `ryanmichaeljames.github.io.`, and leave TTL as `Automatic`.\
![Screenshot of the CNAME record](/assets/images/2019-08-25-custom-domain-with-github-pages-and-namecheap/namecheap-cname-record.png "Namecheap CNAME Record"){:class="img-fluid blog-post-img"}
5. Next we'll add a few A records with the GitHub's [IP addresses](https://help.github.com/en/articles/setting-up-an-apex-domain#configuring-a-records-with-your-dns-provider) and set their TTL to `Automatic`.
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
![Screenshot of the A records](/assets/images/2019-08-25-custom-domain-with-github-pages-and-namecheap/namecheap-a-records.png "Namecheap A Records"){:class="img-fluid blog-post-img"}

Next we will configure your GitHub Pages site.

## GitHub

Finally lets configure your GitHub Pages site to use your custom domian and enable SSL.

1. Navigate to your GitHub Pages site's repository and click on the **Settings** tab and scroll down to the GitHub Pages section.\
![Screenshot of the GitHub settings tab.](/assets/images/2019-08-25-custom-domain-with-github-pages-and-namecheap/github-pages-settings.png "GitHub Pages Settings"){:class="img-fluid blog-post-img"}
3. Under **Custom domain** enter your new domian name and click **Save**.
![Screenshot of the GitHub Pages custom domain field](/assets/images/2019-08-25-custom-domain-with-github-pages-and-namecheap/github-pages-custom-domian.png "GitHub Pages Custom Domian"){:class="img-fluid blog-post-img"}
A file named `CNAME` has been added to your repository.
![alt text](/assets/images/2019-08-25-custom-domain-with-github-pages-and-namecheap/
github-pages-cname-file.png "GitHub Pages Custom Domian")
5. Finally check **Enforce HTTPS** to enable SSL for your site.\
![Screenshot of the GitHub Pages enforce HTTPs field](/assets/images/2019-08-25-custom-domain-with-github-pages-and-namecheap/github-pages-enforce-https.png "GitHub Pages Custom Domian"){:class="img-fluid blog-post-img"}


> Don't forget to include `www` in your custom domain name. This will prevent the  `ERR_CERT_COMMON_NAME_INVALID` error when you browse to `www.<domain>.<tld>`.

## Easy as!

Sorted! You should now have both your GitHub Pages site and your DNS setup. All you need to do is test that it works.

It may take up to 24 hours for your DNS configuration to propagate and for you to successfully browse to your site using your custom domian. For me, it took about 30 minutes.