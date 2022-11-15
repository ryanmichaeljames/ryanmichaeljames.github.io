---
layout: post
title: "Part 1: Securing ASP.NET Web API with Access Control List"
subtitle: Practical ways of securing your ASP.NET Web API with the Microsoft Identity Platform
date: 2022-11-15 00:00:00 +1200
categories: [blog]
tags: [asp.net, micrososft identity platform, authorization]
image: /assets/img/posts/2022-11-15-securing-asp-dotnet-web-api-with-microsoft-identity-platform/image.png
comments: true
---

In this series of blog posts we'll cover how to secure your ASP.NET Web API with Azure AD authentication and a number of authorization methods.

## Authentication

Authentication is the process of of determining if the API consumer is who they say they are. For this we'll be using Azure Active Directory to generate bearer tokens to be validated by the WEB API.

## Authorization

Authentication is the process of of determining if the API consumer is allowed to consume the resource.

There are 3 types of authorization methods that we will be covering in this series

- Access control list
- Delegated permissions
- Application roles

## Access Control List

There are 2 approaches to using access control lists. The first one is using a single applciation registration that acts as both the API and the client application and an access control list that is implied.

The second is using two or more application registrations. One API application and one or more client applciations with an access control list that is configured.

## ASP.NET Setup

Add the the [Microsoft.Identity.Web](https://www.nuget.org/packages/Microsoft.Identity.Web) package to your ASP.NET project.

```powershell
dotnet add package Microsoft.Identity.Web
```

Add the following JSON to your `appsettings.json` file and replace `TenantId` with your Azure tenant ID. We wil populate the `ClientId` later.

```json
{
  "AzureAd": {
    "Instance": "https://login.microsoftonline.com/",
    "TenantId": "00000000-0000-0000-0000-000000000000",
    "ClientId": "00000000-0000-0000-0000-000000000000"
  }
}
```


## Single Application Registrion Approach

We will need to register an Application Registration for the ASP.NET Web  that will serve as both the API and the client application.

##### Appliction Registration Config
From the Azure Active Directory blade, create an application registration.

![create application registration](/assets/img/posts/2022-11-15-securing-asp-dotnet-web-api-access-control-list\single-app-registration-create.png "create application registration"){:class="img-fluid blog-post-img img-thumbnail"}

Copy the `Application (client) ID` and keep it somewhere safe for now.

![create application registration](/assets/img/posts/2022-11-15-securing-asp-dotnet-web-api-access-control-list\single-app-registration-create-2.png "create application registration"){:class="img-fluid blog-post-img img-thumbnail"}

Navigate to `Expose an API` and along side `Application ID URI`, click `Set`. Set the Applciation ID URI to your desired value. We will be using the default value Azure provides which something looks like `api://<application_id>`.

![set application id uri](\assets\img\posts\2022-11-15-securing-asp-dotnet-web-api-access-control-list\single-app-registration-set-application-id-uri.png "set application id uri"){:class="img-fluid blog-post-img img-thumbnail"}

Navigate to `Certificates & secrets` and add a new client secret. Give it a descption and specify the expiry. Copy the secret `value` and keep it somewhere safe for now.

![add application registration secret](\assets\img\posts\2022-11-15-securing-asp-dotnet-web-api-access-control-list\single-app-registration-add-secret.png "add application registration secret"){:class="img-fluid blog-post-img img-thumbnail"}

##### ASP.NET Config



```json
{
  "AzureAd": {
    "Instance": "https://login.microsoftonline.com/",
    "TenantId": "<TENANT_ID>",
    "ClientId": "<CLIENT_ID>",
    "AllowWebApiToBeAuthorizedByACL": true
  }
}
```