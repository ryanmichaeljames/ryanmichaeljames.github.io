---
layout: post
title: An update on the API limits for non-licensed users
subtitle: Lets explore the new API limits for non-licensed users.
date: 2019-10-03 00:00:00 +1200
categories: [blog]
tags: [dynamics 365, common data service, powerapps]
image: /assets/img/posts/2019-10-03-an-update-on-the-api-limits-for-non-licensed-users/image.jpg
comments: true
---

In in my previous post, [Overreacting to the new Power Platform API limits](/blog/2019/09/09/overreacting-to-new-power-platform-api-limits), I argued that the new Power Platform API limits are justified to maintain quality of service for all of us. My argument still stands.  Microsoft have updated their [Requests limits and allocations](https://docs.microsoft.com/en-us/power-platform/admin/api-request-limits-allocations#non-licensed-usersapplication-usersusers-with-special-free-licensess) documentation to explain how the new licencing and API limit changes affect non-licensed users and it's looking positive.

## How do the API limits affect non-licensed users
{:class="anchored"}

Each Common Data Service tenant will have a base API request capacity that can only be consumed by it's non-licensed users. These non-licensed include non-interaction users, application users and administrative users. Essentially their will be a pool of API requests that all non-licensed users in a tenant will collectively consume.

The base request capacity is based on the type of subscription:

Subscription | API requests per 24 hours
--- | ---
Dynamics 365 enterprise | 100,000
Dynamics 365 professional | 50,000
PowerApps | 25,000
Microsoft Flow | 25,000

## Points worth noting
{:class="anchored"}

If a tenant has multiple subscriptions, their base API request capacity will be the max of two subscriptions. I'm assuming that the two subscriptions in question will be the two with the highest API request capacity.

The base API request capacity can be increased by purchaing PowerApps and Microsoft Flow capacity add-ons.

![Screenshot of PowerApps and Flow capacity add-on subscription](/assets/img/posts/2019-10-03-an-update-on-the-api-limits-for-non-licensed-users/powerapps-flow-capacity-add-on.png "PowerApps and Flow capacity add-on subscription"){:class="img-fluid blog-post-img"}

If the limits are occasionally and resonably exceeded, the users will not be blocked. However, administrators will receive notifications about overages.

The base API request capacity can only be comsumed by non-licensed users.

## My thoughts
{:class="anchored"}

The future is not as bleak as it seamed a few weeks ago. The API request limits for non-interactive users are pretty generous and should be sufficient for integration and 3rd party access to Dynamics 365 and Common Data Service.

Microsft could have made this a little clearer when they first announced the new API limits to stave off some of the histeria.