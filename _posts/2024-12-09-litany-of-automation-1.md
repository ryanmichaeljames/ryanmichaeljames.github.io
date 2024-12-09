---
layout: post
title: "The Litany of Automation 1: Consecrating Infrastructure for Deployment"
subtitle: Forging the sacred infrastructure and resources needed to serve Imperium of Man through deployment automation.
date: 2024-12-09 00:00:01 +1200
categories: [blog]
tags: [azure devops, power platform, deployment pipeline, alm]
image: /assets/img/posts/2024-12-09-litany-of-automation-1/banner.jpg
comments: true
---

The path to successful deployment begins with a strong foundation. This guide focuses on automating the creation of infrastructure required for deployment pipelines, **ONLY** using scripts, eschewing the inefficiency of manual setups. Each command executed is a step toward aligning our systems with the Machine God's eternal perfection.

Each command is a prayer, and each script a hymn, ensuring that the Omnissiah's will flows seamlessly through our pipelines and manifests in the efficiency of our deployments.

---

## Step 1: Create Service Principal

Bypass manual inefficiency and invoke the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/) to enact the rites to create a service principal.

{% gist 6e6f178e55bf546082b5de2391b7825f create-service-principal.ps1 %}

> **Cogitator's Note:** `--api "00000007-0000-0000-c000-000000000000"` sets the `Dynamics CRM` API while `--api-permissions "78ce3f0f-a1ce-49c2-8cde-64b5c0896db4=Scope"` sets the `user_impersonation` permission.

> **Cogitator's Note:** In order to grant conesnt you will need to have been assigned, by an ordained admin, on of following roles: `Privileged Role Administrator`, `Cloud Application Administrator` or `Application Administrator`.

---

## Step 2: Create Power Platform Application User

Call upon the [Power Platform CLI](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction) to create an application user and grant the service principal access to the Dataverse.

{% gist 6e6f178e55bf546082b5de2391b7825f create-application-user.ps1 %}

Replace the `$env` empty GUID with your environment id.

> **Cogitator's Note:** To find your environment id you can make this prayer: `pac admin list`

---

## Step 3: Install Power Platform Build Tools

Invoke the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/) to install the [Power Platform Build Tools](https://marketplace.visualstudio.com/items?itemName=microsoft-IsvExpTools.PowerPlatform-BuildTools) extension.

{% gist 6e6f178e55bf546082b5de2391b7825f install-power-platform-build-tools.ps1 %}

## Step 4: Create Service Connection

Create a service connection `service-endpoint-config.json` to be consumed by the Azure CLI.

{% gist 6e6f178e55bf546082b5de2391b7825f service-endpoint-config.json %}

Replace the following properties with your environment values:
- `name`
- `url`
- `authorization.parameters.applicationId`
- `authorization.parameters.tenantId`
- `serviceEndpointProjectReferences.projectReference.id`
- `serviceEndpointProjectReferences.projectReference.name`
- `serviceEndpointProjectReferences.name`

> **Cogitator's Note:** You can get the project id by making the following prayer:
>
> `az devops project show --org "https://dev.azure.com/ORG_NAME" --project "PROJECT_NAME"`

Use the Azure CLI to consume the above config file and create a Power Platform Service Connection in Devops.

{% gist 6e6f178e55bf546082b5de2391b7825f create-service-endpoint.ps1 %}

---

## Conclusion

By automating the creation of your infrastructure, you honor the principles of precision, consistency, and repeatability. These steps not only streamline your setup but also pave the way for more advanced automation in future workflows. Through the use of CLI tools, you eliminate inefficiencies, reduce errors, and ensure that your infrastructure is ready to serve the Machine God's will with unwavering reliability. Let this foundation guide you as you continue your journey into deeper realms of automation.

All source code can be found in my [GitHub repo](https://github.com/ryanmichaeljames/adeptus-deployus)

By the Omnissiah's grace, our automation endures. ❤️

---

## Resources

- [https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli-interactively](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli-interactively)
- [https://learn.microsoft.com/en-us/cli/azure/ad/app?view=azure-cli-latest#az-ad-app-create](https://learn.microsoft.com/en-us/cli/azure/ad/app?view=azure-cli-latest#az-ad-app-create)
- [https://learn.microsoft.com/en-us/cli/azure/ad/app/credential?view=azure-cli-latest#az-ad-app-credential-reset](https://learn.microsoft.com/en-us/cli/azure/ad/app/credential?view=azure-cli-latest#az-ad-app-credential-reset)
- [https://learn.microsoft.com/en-us/cli/azure/ad/app/permission?view=azure-cli-latest#az-ad-app-permission-add](https://learn.microsoft.com/en-us/cli/azure/ad/app/permission?view=azure-cli-latest#az-ad-app-permission-add)
- [https://learn.microsoft.com/en-us/cli/azure/ad/app/permission?view=azure-cli-latest#az-ad-app-permission-grant](https://learn.microsoft.com/en-us/cli/azure/ad/app/permission?view=azure-cli-latest#az-ad-app-permission-grant)
- [https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/auth#pac-auth-create](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/auth#pac-auth-create)
- [https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/admin#pac-admin-assign-user](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/admin#pac-admin-assign-user)
- [https://learn.microsoft.com/en-us/cli/azure/devops/extension?view=azure-cli-latest#az-devops-extension-install](https://learn.microsoft.com/en-us/cli/azure/devops/extension?view=azure-cli-latest#az-devops-extension-install)
- [https://learn.microsoft.com/en-us/azure/devops/cli/service-endpoint?view=azure-devops#create-service-endpoint-using-configuration-file](https://learn.microsoft.com/en-us/azure/devops/cli/service-endpoint?view=azure-devops#create-service-endpoint-using-configuration-file)