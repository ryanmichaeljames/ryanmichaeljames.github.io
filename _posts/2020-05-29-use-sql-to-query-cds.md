---
layout: post
title: Use SQL to query CDS
subtitle: Querying the Common Data Service with SQL is now in preview!
date: 2020-05-29 00:00:00 +1200
categories: [blog]
tags: [common data service, sql]
image: /assets/img/posts/2020-05-29-use-sql-to-query-cds/image.png
comments: true
---

A SQL connection to the Common Data Service's [Tabular Data Stream (TDS)](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-tds/893fcc7e-8a39-4b3c-815a-773b7b982c50) endpoint is now available allowing you to execute SQL queries against the entity tables.

## Enabling the TDS endpoint
{:class="anchored"}

> This feature is still in preview and is not available in all regions and should not be used in production as it still subject to breaking changes.

> The CDS environment must be version 9.1.0.17437 or above.

Open the [Power Platform admin center](https://admin.powerplatform.microsoft.com/environments), select your environment and click **Settings**.

![Enable TDS 1](/assets/img/posts/2020-05-29-use-sql-to-query-cds/enable-tds-1.png "Enable TDS 1"){:class="img-fluid blog-post-img img-thumbnail"} 

Click on **Product** and then click on **Features**.

![Enable TDS 2](/assets/img/posts/2020-05-29-use-sql-to-query-cds/enable-tds-2.png "Enable TDS 2"){:class="img-fluid blog-post-img img-thumbnail"} 

Set **Enable TDS endpoint** to **On** and click **Save**.

![Enable TDS 3](/assets/img/posts/2020-05-29-use-sql-to-query-cds/enable-tds-3.png "Enable TDS 3"){:class="img-fluid blog-post-img img-thumbnail"} 

## Querying CDS with SQL
{:class="anchored"}

Open SQL Server Management Studio and click **Connect**. Enter your CDS environment URL followed by the port number **5558**. Set the authentication to **Azure Active Directory** and enter your username and password. Click **Connect**.

![Query CDS with SQL 1](/assets/img/posts/2020-05-29-use-sql-to-query-cds/query-cds-with-sql-1.png "Query CDS with SQL 1"){:class="img-fluid blog-post-img img-thumbnail"} 

You should be able to view and query the CDS tables.

![Query CDS with SQL 2](/assets/img/posts/2020-05-29-use-sql-to-query-cds/query-cds-with-sql-2.png "Query CDS with SQL 2"){:class="img-fluid blog-post-img img-thumbnail"} 

## Supported operations
{:class="anchored"}

The supported SQL operations include:
- Batch operations
- SELECT
- Aggregation functions (i.e., Count() and Max() functions)
- UNIONs and JOINs
- Filtering

## Limitations
{:class="anchored"}

INSERT and UPDATE operations will not work as the SQL connection is read-only.

The following CDS data types are not supported when using the SQL connection:
- binary
- image
- ntext
- sql_variant
- varbinary
- virtual
- HierarchyId
- managedproperty
- file
- xml
- partylist
- timestamp

## Sources
{:class="anchored"}

[https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/cds-sql-query](https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/cds-sql-query)

[https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-tds/b46a581a-39de-4745-b076-ec4dbb7d13ec](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-tds/b46a581a-39de-4745-b076-ec4dbb7d13ec)

[https://docs.microsoft.com/en-us/power-platform/admin/settings-features](https://docs.microsoft.com/en-us/power-platform/admin/settings-features)