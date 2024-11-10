---
layout: post
title: Microsoft.Xrm.Data.PowerShell Cheat Sheet
subtitle: A quick reference for Power Platform automation in PowerShell
date: 2024-11-05 00:00:00 +1200
categories: [blog]
tags: [powershell, power platform]
image: /assets/img/posts/2024-11-5-microsoft-xrm-data-powershell-cheat-sheet/banner.jpg
comments: true
---

The `Microsoft.Xrm.Data.Powershell` module is a powerful tool for managing and automating Power Platform tasks in PowerShell. This cheat sheet covers essential cmdlets for Power Platform developers and administrators.


#### Authentication

{% gist ce20b4a23db91c246de09d16f1070229 authenticate.ps1 %}

**NOTE:** If `Get-CrmConnection` is used then the `-conn` parameter must be passed to the cmdlets below.

#### Retrieve a record

{% gist ce20b4a23db91c246de09d16f1070229 retrieve-record.ps1 %}

**Optional Parameters:**

`-Fields`: String array of columns to return.

`-IncludeNullValue`: A switch to include columns even if they have null values.

#### Retrieve multiple records

{% gist ce20b4a23db91c246de09d16f1070229 retrieve-multiple-records.ps1 %}

**Optional Parameters:**

`-FilterAttribute`: Logical name of the column to filter

`-FilterOperator`: A conditional operator

`-FilterValue`: The value to filter by.

`-Fields`: String array of columns to return.

`-AllRows`: A swtich to return all rows.

`-TopCount`: The number of rows to return.

#### Retrieve multiple records with FetchXML

{% gist ce20b4a23db91c246de09d16f1070229 retrieve-multiple-records-with-fetchxml.ps1 %}

**Optional Parameters:**

`-TopCount`: The number of rows to return.

`-PageNumber`: The page number to return.

`-PageCookie`: The paging cookie.

`-AllRows`: A swtich to return all rows.

#### Retrieve multiple records by view name

{% gist ce20b4a23db91c246de09d16f1070229 retrieve-multiple-records-by-view-name.ps1 %}

**Optional Parameters:**

`-IsUserView`: Speficy `$true` if the view is User View.

`-AllRows`: A swtich to return all rows.

`-TopCount`: The number of rows to return.

#### Create a record

{% gist ce20b4a23db91c246de09d16f1070229 create-record.ps1 %}

#### Update a record

{% gist ce20b4a23db91c246de09d16f1070229 update-record.ps1 %}

**Optional Parameters:**

`-Upsert`: A swtich to upsert the record.

#### Delete a record

{% gist ce20b4a23db91c246de09d16f1070229 delete-record.ps1 %}

#### Handing diferent column types

{% gist ce20b4a23db91c246de09d16f1070229 handling-columns.ps1 %}

> Check back later, advanced operations coming soon :)