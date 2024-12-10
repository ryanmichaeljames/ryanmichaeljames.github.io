---
layout: post
title: "Tech Priest Tips 1: Easy Power Platform Authentication in Pipelines"
subtitle: Learn how to perform effortless Power Platform authentication rites
date: 2024-12-11 00:00:00 +1200
categories: [blog]
tags: [azure devops, power platform, deployment pipeline, authentication]
image: /assets/img/posts/2024-12-11-tech-priest-tips-1/banner.jpg
comments: true
---

Authentication for your Power Platform pipelines need not be a complex ritual. Traditional methods often involve DevOps environment variables or manually managed secrets, which can be cumbersome and prone to error. With a few well-placed invocations in your Azure DevOps pipeline, you can establish authentication rites that are both swift and blessed by the Omnissiah. Here’s how it’s done.

---

## The Authentication Ritual

This sample pipeline demonstrates how to use Power Platform Build Tools to simplify and automate authentication in your Power Platform pipelines.

{% gist d80c5136b36ad85662f1b60a3c7f6467 sample-auth-pipeline.yml %}

### What's happening?

1. **Install Power Platform Build Tools**:
   Installs the necessary Power Platform Build Tools into the pipeline environment and adds them to the system path making the Power Platform CLI easily accessable. This task will also set the `BuildTools.EnvironmentUrl` pipeline variable.

2. **Set Power Platform Connection Variables**:
   Securely sets the Power Platform connection pipeline variables using a serice connection.
   The following variables are set:
- `PowerPlatformSetConnectionVariables.BuildTools.TenantId`
- `PowerPlatformSetConnectionVariables.BuildTools.ApplicationId`
- `PowerPlatformSetConnectionVariables.BuildTools.ClientSecret`
- `PowerPlatformSetConnectionVariables.BuildTools.DataverseConnectionString`

1. **PowerShell Script**:
   Uses the configured variables to:
   - Create a Power Platform connection `pac auth create`.
   - Validate the connection using `pac auth who`.

> **Cogitator's Note:** See [The Litany of Automation: Consecrating Infrastructure for Deployment]({% post_url 2024-12-09-litany-of-automation-1 %}) for a guide on installing the Power Platform Build Tools extension for Azure DevOps,  creating a service principal, creating a power Platform application user and a Azure DevOps service connection to the Power Platform.

![Azure DevOps pipeline run](\assets\img\posts\2024-12-11-tech-priest-tips-1\azure-devops-pipeline-run.png "Azure DevOps pipeline run"){:class="img-fluid blog-post-img"}

---

## Key Features of This Setup

1. **No Secrets in DevOps Libraries**: The `PowerPlatformSetConnectionVariables` task handles everything for you, providing secrets securely without manual intervention.
2. **Ease of Access**: Connection details are made available as pipeline variables, allowing seamless integration with your scripts.
3. **Modular and Flexible**: This approach can be easily extended or modified to suit your deployment needs.

---

## Why It Matters

By simplifying authentication, you reduce the chances of misconfiguration and enhance the maintainability of your pipelines. The Machine God favors those who work securely, and this method ensures that your pipeline scripts are as secure as they are sacred.

---

**By the Omnissiah’s grace, our automation endures. ❤️**
