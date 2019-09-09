---
layout: post
title: Overreacting to the new Power Platform API limits
subtitle: Are we looking at the new API limits all wrong?
date: 2019-09-09 00:00:00 +1200
categories: [blog]
tags: [power platform, dynamics 365, powerapps, cds]
image: /assets/img/posts/2019-09-09-overreacting-to-new-power-platform-api-limits/image.jpg
---

In the wake of the new [Power Platform request limits and allocations](https://docs.microsoft.com/en-us/power-platform/admin/api-request-limits-allocations) to take effect in October 2019 there has been a lot of speculation amongst my colleagues and associates, myself included, as to the negative impact this will have on our customers and the projects we are working on.

Perhaps we are overreacting...

## Spoilt
Like spoilt only children we've had very little throttling with regards to API usage. In the past we were limited to 4000 API requests, per user, per organization instance, over a five-minute sliding window. Theoretically, meaning we could make up to 1,152,000 API requests in 24 hours. That is a lot for the average user. But this also means that it can be abused.

## The new rules
So, what are mom and dad's new rules? There will be a limit to the number of API requests a user can make to the Power Platform in a 24-hour period. This limit will be based on the licence assigned to the user.

User licenses | Number of API requests / 24 hours
--- | ---
Dynamics 365 Enterprise applications | 20,000
Dynamics 365 Professional | 10,000
Dynamics 365 Team Member | 5,000
PowerApps per user plan| 5,000
Microsoft Flow per user plan| 5,000
Office licenses (that include PowerApps/Microsoft Flow) | 2,000

Source: [https://docs.microsoft.com/en-us/power-platform/admin/api-request-limits-allocations](https://docs.microsoft.com/en-us/power-platform/admin/api-request-limits-allocations)

It's worth noting that if a user has multiple plans assigned from different product lines, then their API limit will be the sum of the requests allocated to each plan, but if a user has multiple licences allocated within the same product line then their API limit will be what is allocated to the base license.

In Scott Durrow's new [blog post](http://develop1.net/public/post/2019/09/04/how-do-the-powerplatform-api-limits-affect-model-driven-apps) regarding the subject, he does a little experiment and determines that an average user will consume ~10 API requests when opening a Dynamics 365 Unified Client Contact form. (Assuming no customizations have been made that make additional API calls). If the user has a Dynamics 365 Professional license, giving him 10,00 API requests a day, they would have to open ~2 contact records every minute, for eight hours straight before they would hit their limit. This is more than enough for an average user.

## New ways to play
The new API limits should not have a large impact on the average user. However, we do need to be aware of the new limits when developing Model Driven Apps and try keep API request to a minimum. But shouldn't we have been doing that all along?

There will most definitely be scenarios where a user will exceed their API limit. A capacity add-on will be available to add an additional 10,000 requests per 24 hours to any user. 

Cash grab? Maybe... but Microsoft's cloud offerings are maturing and LDD (License Driven Development) is becoming even more important as the Power Platform evolves. This will inevitably influence the pricing model. We need to make sure that we mature along with it, designing and building solutions that bridge the capability of the platform and our customer's needs.

Yes, this will prove to be a challenge in certain circumstances, but we enjoy this line of work because we like a challenge and solving new types of problems. Don't forget that!

## Sharing our toys
The Power Platform is a shared platform, and it was only a matter of time before mom and dad made some new rules to play by to ensure quality of service for everyone on the platform. We collectively use the Power Platform, and having it guarded against malicious and noisy behaviour is probably not a bad thing.
