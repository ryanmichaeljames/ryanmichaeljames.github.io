---
layout: post
title: OAuth 2.0 Resource Owner Password Credentials grant type with Dynamics 365 and CDS
subtitle: Getting an OAuth access token with user credentials, and why you should be careful.
date: 2019-09-24 00:00:00 +1200
categories: [blog]
tags: [dynamics 365, common data service, oauth 2.0]
image: /assets/img/posts/2019-09-24-oath-resource-owner-password-credentials-grant-type-with-d365-and-cds/image.png
comments: true
---

In this post I'll be demonstrating how to obtain an OAuth access token from Dynamics 365 or Common Data Service using the Resource Owner Password Credentials (ROPC) grant type. With this grant type, the client uses impersonation to request an OAuth access token on behalf of a resource owner. In layman terms... Getting an OAuth access token with a username and password.

I will also briefly explain how ROPC works and why you should be careful when implementing it.

## Shut up and show me the code!
{:class="anchored"}

<script src="https://gist.github.com/ryanmichaeljames/5082e5ee9439b389094216b8050aa445.js"></script>

## Now do it with Postman
{:class="anchored"}

Open [Postman](https://www.getpostman.com){:target="_blank"} and create a new `POST` request with `https://login.microsoftonline.com/common/oauth2/token` as the request URL. Under the **Body** tab, select `x-www-form-urlencoded` and add the following key value pairs:

Key | Value
--- | ---
resource | `https://<orgname>.api.crm6.dynamics.com`
client_id | `2ad88395-b77d-4561-9441-d0e40824f9bc`
username | `<username>`
password | `<password>`
grant_type | `password`

![OAuth Resource Owner Password Credential with Postman](/assets/img/posts/2019-09-24-oath-resource-owner-password-credentials-grant-type-with-d365-and-cds/ropc-with-postman.png "OAuth Resource Owner Password Credential with Postman"){:class="img-fluid blog-post-img"}

## So, what is happening here?
{:class="anchored"}

![OAuth Resource Owner Password Credential Grant Flow Chart](/assets/img/posts/2019-09-24-oath-resource-owner-password-credentials-grant-type-with-d365-and-cds/ropc-flow.png "OAuth Resource Owner Password Credential Grant Flow Chart"){:class="img-fluid blog-post-img"}

The flow diagram above illustrates the following steps:
1. The resource owner provides the client with its username and password.
2. The client requests an access token from the authorization server's token endpoint by including the credentials received from the resource owner.  When making the request, the client authenticates with the authorization server.
3. The authorization server authenticates the client and validates the resource owner credentials, and if valid, issues an access token.

## Should I be using ROPC?
{:class="anchored"}

Short answer... Maybe. It depends. You need to be very careful with how you manage the credentials within your application.

Long answer...

As per the OAuth 2.0 Authorization Framework spec:

> The resource owner password credentials grant type is suitable in cases where the resource owner has a trust relationship with the client, such as the device operating system or a highly privileged application. The authorization server should take special care when enabling this grant type and only allow it when other flows are not viable.
>
> -- <cite>[RFC 6749 The OAuth 2.0 Authorization Framework - Section 4.3](https://tools.ietf.org/html/rfc6749#section-4.3){:target="_blank"}</cite>

In other words, the resource owner password credentials grant type should only be used in scenarios when the 3rd party application (client) can be completely trusted with the Dynamics 365 or Common Data Service user's (resource owner) credentials.

> It is also used to migrate existing clients using direct authentication schemes such as HTTP Basic or Digest authentication to OAuth by converting the stored credentials to an access token.
>
> -- <cite>[RFC 6749 The OAuth 2.0 Authorization Framework - Section 4.3](https://tools.ietf.org/html/rfc6749#section-4.3){:target="_blank"}</cite>

This grant type was introduced to allow legacy applications to easily migrate to OAuth from the old HTTP specification and allowing them to benefit from the advantages of OAuth.

> This grant type carries a higher risk than other grant types because it maintains the password anti-pattern this protocol seeks to avoid. The client could abuse the password, or the password could unintentionally be disclosed to an attacker (e.g., via log files or other records kept by the client).
>
> -- <cite>[RFC 6749 The OAuth 2.0 Authorization Framework - Section 10.7](https://tools.ietf.org/html/rfc6749#section-10.7){:target="_blank"}</cite>

Becasue the user's credentials are exposed to the client application and they are passed as plain text to the authorization server, you need to be extremely careful with how you store, manage and consume the credentials. If the user credentials are leaked this would not only compromise your Dynamics 365/CDS instances but also Office 365 and Azure.

## My closing thoughts
{:class="anchored"}

This approach is considered obsolete and risky by many, and I'm inclined to  agree. There are scenarios when using the ROPC grant type may be a valid solution. Do your research to understand the risks and then do as much as possible to mitigate them.
