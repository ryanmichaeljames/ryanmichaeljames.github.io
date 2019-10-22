---
layout: post
title: AddressFinder Widget PCF control for Dynamics 365 and CDS
subtitle: I wasn't happy with any of the community PCF controls that consume the AddressFinder API so I made my own.
date: 2019-10-22 00:00:00 +1200
categories: [blog]
tags: [dynamics 365, common data service, pcf, addressfinder]
image: /assets/img/posts/2019-10-22-addressfinder-pcf-control-for-d365-and-cds/image.png
comments: true
---

There are a few community made PCF controls out there that consume the [AddressFinder](https://addressfinder.nz/) API allowing you to search for New Zealand and Australian addresses, but I wasn't happy with any of them. They were either under maintained or didn't offer enough customisation options. So, I created my own... [PFC AddressFinder Widget](https://github.com/ryanmichaeljames/pcf-addressfinder-widget) 😎

## PCF AddressFinder Widget
{:class="anchored"}

I created an open source PCF control that uses the [AddressFinder Widget](https://addressfinder.nz/docs/widget_docs) to search for addresses and populate the address fields of any Dynamics 365 or CDS entity.

![PCF AddressFinder Widget Demo](/assets/img/posts/2019-10-22-addressfinder-pcf-control-for-d365-and-cds/pcf-addressfinder-widget-demo.gif "PCF AddressFinder Widget Demo"){:class="img-fluid blog-post-img"}

## Installation
{:class="anchored"}

Download the [latest release](https://github.com/ryanmichaeljames/pcf-addressfinder-widget/releases/latest) from the [pcf-addressfinder-widget](https://github.com/ryanmichaeljames/pcf-addressfinder-widget) repository on GitHub and import the solution into your Dynamics 365 or CDS instance.

![Download latest release](/assets/img/posts/2019-10-22-addressfinder-pcf-control-for-d365-and-cds/latest-release.png "Download the latest release"){:class="img-fluid blog-post-img"}

## Setup
{:class="anchored"}

Add the AddressFinder Widget control to your Line 1 address field and configure the address fields you wish to populate by mapping them to the control's properties.

![Screenshot of control setup](/assets/img/posts/2019-10-22-addressfinder-pcf-control-for-d365-and-cds/control-setup-1.png "Add AddressFinder Widget control"){:class="img-fluid blog-post-img"}

Add your AddressFinder API key to the `API Key` property and configure any additional options to meet your requirements. If you need an API key you can [register](https://portal.addressfinder.net/signup/nz/nz_free5) for a free account that gives you 500 free address lookups a month. 

![Screenshot of control setup](/assets/img/posts/2019-10-22-addressfinder-pcf-control-for-d365-and-cds/control-setup-2.png "Add AddressFinder Widget control"){:class="img-fluid blog-post-img"}

## README
{:class="anchored"}

For more details on how to use the PCF AddressFinder Widget control or if you feel like contributing please see the repository's [README](https://github.com/ryanmichaeljames/pcf-addressfinder-widget/blob/master/README.md) on GitHub.
