---
layout: post
title: CRUD operations with Xrm.WebApi.online.execute and Xrm.WebApi.online.executeMultiple
subtitle: How to execute CRUD opertaions using the Xrm.WebApi.online.execute and Xrm.WebApi.online.executeMultiple methods with JavaScript.
date: 2019-09-16 00:00:00 +1200
categories: [blog]
tags: [dynamics 365, common data service, client api, xrm.webapi, web api]
image: /assets/img/posts/2019-09-16-crud-operations-with-xrm-webapi-online-execute-and-executemultiple/image.png
---

CRUD (create, read, update, delete) operations using the `Xrm.WebApi.online.execute` and `Xrm.WebApi.online.executeMultiple` methods of the Dynamics 365 Client API, with JavaScript, are not very well documented in the official Microsoft documentation. The [Xrm.WebApi.online.execute (Client API reference)
](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute) documentation has no code samples for CRUD opertations.

So, here are code samples to get you going...

## CRUD Opertations with Xrm.WebApi.online.execute {#execute}
{:class="anchored"}
Below are some code samples for running CRUD operations using the [Xrm.WebApi.online.execute](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute) method.

### Create {#execute-create}
{:class="anchored"}
<script src="https://gist.github.com/ryanmichaeljames/8bd4dd65ec7d481b46c8ae2c3657dd53.js"></script>

### Retrieve {#execute-retrieve}
{:class="anchored"}
<script src="https://gist.github.com/ryanmichaeljames/80571d2384f33e81b8847a80f08a7071.js"></script>

### Update {#execute-update}
{:class="anchored"}
<script src="https://gist.github.com/ryanmichaeljames/3a7f2e2a5276d377a18cc2663d096649.js"></script>

### Delete {#execute-delete}
{:class="anchored"}
<script src="https://gist.github.com/ryanmichaeljames/a9cba1986e839967f8ff2ffc1f1f97a9.js"></script>


## CRUD Opertations with Xrm.WebApi.online.executeMultiple {#execute-multiple}
{:class="anchored"}
Below are some of code samples for running CRUD operations using the [Xrm.WebApi.online.executeMultiple](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/executemultiple) method.
> Note: As per the OData v4 specifications, you cannot include read operations as part of a change set. 

### Create {#execute-multiple-create}
{:class="anchored"}
<script src="https://gist.github.com/ryanmichaeljames/4c9f87dc4296cea817048df5a1aa62a4.js"></script>

### Retrieve {#execute-multiple-retrieve}
{:class="anchored"}
<script src="https://gist.github.com/ryanmichaeljames/29b0665c370f0a9e849791fdf84c41cc.js"></script>

### Update {#execute-multiple-update}
{:class="anchored"}
<script src="https://gist.github.com/ryanmichaeljames/6866f8a2c077306b487962757edf74d1.js"></script>

### Delete {#execute-multiple-delete}
{:class="anchored"}
<script src="https://gist.github.com/ryanmichaeljames/81ae711d5bd2bd6b812cc68c070299b8.js"></script>

## Sources
{:class="anchored"}
Sample code derived from pending pull request [#626](https://github.com/MicrosoftDocs/powerapps-docs/pull/626).