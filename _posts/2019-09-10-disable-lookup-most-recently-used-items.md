---
layout: post
title: Disable a lookup's the most recently used items
subtitle: How to disable a lookup's most recently used items suggestions.
date: 2019-09-10 00:00:00 +1200
categories: [blog]
tags: [dynamics 365, powerapps, cds]
image: /assets/img/posts/2019-09-10-disable-lookup-most-recently-used-items/image.png
---

Having a lookup suggest the most recent records is a cool little feature, but it may not always be useful. This feature does not obey any filtered lookup conditions you may have configured. This can result in items being displayed that a user should not be allowed to select. I'm not sure if this is a bug or just an oversight.

![Screenshot of the most recently used items in a lookup.](/assets/img/posts/2019-09-10-disable-lookup-most-recently-used-items/lookup-most-recently-used-items.png "Most recently used items"){:class="img-fluid blog-post-img img-thumbnail "}

## What can we do about it?
{:class="anchored"}
It is possible to disable this feature. Simply navigate to the form editor and open the lookup field's properties dialog. Under the **Field Behaviour** section, check the **Disable most recently used items for this field** option and click **OK**. Save and publish the form.

![Screenshot of the "Disable most recently used items for this field" option.](/assets/img/posts/2019-09-10-disable-lookup-most-recently-used-items/disable-most-recently-used-items-option.png "Disable most recently used items for this field"){:class="img-fluid blog-post-img img-thumbnail "}

## Easy as!
{:class="anchored"}

When setting focus to the lookup you will notice that it no longer suggests the most recently used records.

![Screenshot of the lookup not showing most recently used items.](/assets/img/posts/2019-09-10-disable-lookup-most-recently-used-items/lookup-not-showing-most-recently-used-items.png "No most recently used items"){:class="img-fluid blog-post-img img-thumbnail "}
