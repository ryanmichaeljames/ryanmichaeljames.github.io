---
layout: post
title: Common Data Service and Entity Framework
subtitle: CDS ❤️ EF
date: 2020-06-01 00:00:00 +1200
categories: [blog]
tags: [common data service, entity framework]
image: /assets/img/posts/2020-06-01-common-data-service-and-entity-framework/image.png
comments: true
---

Now that the Common Data Service allows SQL connections to run queries against the entity tables, I thought I might play around with Entity Framework...

## Sample Console Application
{:class="anchored"}

Let's quickly build a sample application that uses Entity Framework to consume the CDS TDS endpoint.

### Prerequisites
{:class="anchored"}

1. [Visual Studio Code](https://code.visualstudio.com)
2. [.NET Core 3.1 SDK](https://dotnet.microsoft.com/download)
3. [TDS enabled on CDS environment](/blog/2020/05/29/use-sql-to-query-cds/#enabling-the-tds-endpoint)

### Build
{:class="anchored"}

Run the following .NET Core CLI command to create a new console application:

```
dotnet new console -n CdsEfSampleApp
```

Install the required packages with the following commands:

```
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.Extensions.Configuration
dotnet add package Microsoft.Extensions.Configuration.Json 
dotnet add package Microsoft.Extensions.DependencyInjection
```

Add the following files to the project.

<script src="https://gist.github.com/ryanmichaeljames/0bcd44b4559b536b48a82cb6690dfe1e.js"></script>

> Don't forget to replace the connection string placeholders in the **appsettings.json** file with your CDS environment details and credentials.

Add the following `ItemGroup` to the `CdsEfSampleApp.csproj` project file to ensure the `appsettings.json` file is always copied to the bin folders when the project is built.

```xml
<ItemGroup>
  <Content Include="appsettings.json">
    <CopyToOutputDirectory>Always</CopyToOutputDirectory>
  </Content>
</ItemGroup>
```

### Run
{:class="anchored"}

Run the application.

```
dotnet run
```

![dotnet run](/assets/img/posts/2020-06-01-common-data-service-and-entity-framework/dotnet-run.png "dotnet run"){:class="img-fluid blog-post-img"} 

### Too lazy to build it yourself?
{:class="anchored"}

I've created a sample project that is available at [https://github.com/ryanmichaeljames/cds-tds-ef-sample](https://github.com/ryanmichaeljames/cds-tds-ef-sample). The project contains a simple implemetaion of Entity Framework's `DbContext` that is used to query the contact table.

The [README](https://github.com/ryanmichaeljames/cds-tds-ef-sample/edit/master/README.md) details the steps to get a copy of the sample code running on your local machine.

## Closing Thoughts

Being able to use Entity Framework to query the Common Data Service's entity tables opens up a lot of new possiblities. As a developer with a CRM development background this is kind of mind blowing and encourages out of the box thinking.

![mind blown](/assets/img/posts/2020-06-01-common-data-service-and-entity-framework/mind-blown.gif "mind blown"){:class="img-fluid blog-post-img"} 
