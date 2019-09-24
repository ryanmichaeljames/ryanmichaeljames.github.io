---
layout: post
title: Retrieving formatted values from D365/CDS with Microsoft Flow
subtitle: How to retrieve formatted values from Dynamics 365 and Common Data Service when using Microsoft Flow or Logic Apps.
date: 2019-09-12 00:00:00 +1200
categories: [blog]
tags: [dynamics 365, common data service, logic apps, flow]
image: /assets/img/posts/2019-09-12-retrieving-formatted-values-from-d365-cds-with-microsoft-flow/image.png
comments: true
---

The Dynamics 365 and Common Data Service connectors in Microsoft Flow and Logic Apps do not return formatted values when using the `Get Record` and `List Records` actions. This is a real pain if you need to use formatted values.

It seems that the Dynamics 365 and Common Data Service actions do not implement a `Prefer` header that contains the `odata.include-annotations="OData.Community.Display.V1.FormattedValue"` value required by the Web API to return formatted values.

There is a work around, however.

## HTTP with Azure AD
{:class="anchored"}
Fortunately, we can use the `Invoke an HTTP request` action that is part of the `HTTP with Azure AD` connector. This connector and action are awesome because it allows us to send HTTP requests to Dynamics 365 or Common Data Service without having to worry about the authentication. No Azure App registrations! No bearer tokens!

Add a new action to your Flow or Logic App. Search for `HTTP with Azure AD` and select the `Invoke an HTTP request` action.

![Screenshot of choose action dialog](/assets/img/posts/2019-09-12-retrieving-formatted-values-from-d365-cds-with-microsoft-flow/http-with-azure-ad-1.png "Invoke an HTTP request"){:class="img-fluid blog-post-img"}

Enter the base URL of your Dynamics 365 or Common Data Service instance into the **Base Resource URL** and **Azure AD Resource URI (Application ID URI)** fields. For example: `https://orgname.crm.dynamics.com`. Next, click **Sign in**.

![Screenshot of HTTP with Azure AD connection creation](/assets/img/posts/2019-09-12-retrieving-formatted-values-from-d365-cds-with-microsoft-flow/http-with-azure-ad-2.png "HTTP with Azure AD connection"){:class="img-fluid blog-post-img"}

Set the **Method** to `GET` and enter the **Url of the request** field, enter rest of the request URL along with the OData query parameters you would have used in the traditional Dynamics 365 and Common Data Service actions.

Now the important part! Add a new header with a key of `Prefer` and a value of `odata.include-annotations="OData.Community.Display.V1.FormattedValue"`. This will tell the web API to include formatted values in the response.

![Screenshot of Invoke an HTTP request action](/assets/img/posts/2019-09-12-retrieving-formatted-values-from-d365-cds-with-microsoft-flow/http-with-azure-ad-3.png "Invoke an HTTP request action"){:class="img-fluid blog-post-img"}

Save your Flow or Logic App and then trigger it. If you inspect the `Invoke an HTTP request` action of a successful run, you will notice that the formatted values are now included in the response body JSON.

![Screenshot of successful Invoke an HTTP request action](/assets/img/posts/2019-09-12-retrieving-formatted-values-from-d365-cds-with-microsoft-flow/http-with-azure-ad-4.png "Successful Invoke an HTTP request action"){:class="img-fluid blog-post-img"}

## Bonus tips
{:class="anchored"}
If you need to iterate through the response values you can use `body('Invoke_an_HTTP_request')?['value']` on an `Apply to each` action.

> `Invoke_an_HTTP_request` is the default name of the action we created. If you changed it's name then you will need you will need to change it in the expression too.

![Screenshot of expression to get response results to iterate over](/assets/img/posts/2019-09-12-retrieving-formatted-values-from-d365-cds-with-microsoft-flow/iterate-over-response-results.png "Iterate over response results"){:class="img-fluid blog-post-img"}

To get the formatted value from one of the values you are iterating over you can use `items('Apply_to_each')?['fieldname@OData.Community.Display.V1.FormattedValue']`.

![Screenshot of expression to get formatted value from response results](/assets/img/posts/2019-09-12-retrieving-formatted-values-from-d365-cds-with-microsoft-flow/get-formatted-value-from-response.png "Get formatted value response results"){:class="img-fluid blog-post-img"}

## Vote for OData annotations to be added to Flow

If you'd like to see OData annotations added to Flow and Logic Apps please consider voting for it on the Flow Ideas section of the Microsoft Flow Community site. [https://powerusers.microsoft.com/t5/Flow-Ideas/Dynamics-365-Header-Include-OData-Annotations/idi-p/126183](https://powerusers.microsoft.com/t5/Flow-Ideas/Dynamics-365-Header-Include-OData-Annotations/idi-p/126183).

![I'm doing my part!](https://media.giphy.com/media/YYfEjWVqZ6NDG/source.gif "I'm doing my part!"){:class="img-fluid blog-post-img"}