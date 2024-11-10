---
layout: post
title: Dataverse Git Integration (Preview) First Look
subtitle: An overview of the new Dataverse Git integration preview, setup guide, and my thoughts on it.
date: 2024-11-09 00:00:00 +1200
categories: [blog]
tags: [git, dataverse, azure devops]
image: /assets/img/posts/2024-11-5-microsoft-xrm-data-powershell-cheat-sheet/banner.jpg
comments: true
---

Microsoft Dataverse now offers native source control integration with an Azure DevOps Git repository. The integration aims to improve version control, change tracking, and collaboration across development environments.

This is a significant step forward by Microsoft's Power Platform team. The feature, still in its early stages, has high expectations to meet and is long overdue.

Let's look at how to set it up, explore its key features and limitations, and I'll share my honest thoughts on it.

## How to Set It Up

### Prerequisites

The following prerequisites are required to use this new feature:

- Power Platform environment with the following:
	- Enabled for early release cycle, as this feature is still in preview.
	- Enabled as a Managed Environment.
	- Dataverse enabled.
- System Administrator role assigned when binding the environment or solution to an Azure DevOps project.
- Azure DevOps subscription and licenses for all users who will interact with source control.

### Connect Dataverse to Git

1. Sign in to [Power Apps](https://make.powerapps.com/) and go to **Solutions**.
2. In the **Solutions** area, click **Connect to Git** on the command bar. ![Click connect to git](\assets\img\posts\2024-11-11-dataverse-git-integration-preview-first-look\setup-git-integration-connect-to-git.png "Click connect to git"){:class="img-fluid blog-post-img"}
3. Select either **Environment** or **Solution** from the connection type options, select your Azure DevOps organization and project, and set the root Git folder that the solution components will be committed to.![Select solution or environment binding](\assets\img\posts\2024-11-11-dataverse-git-integration-preview-first-look\setup-git-integration-select-solution-or-environemnt-binding.png "Select solution or environment binding"){:class="img-fluid blog-post-img"}
4. If you selected **Solution** as your connection type, you will need to select the solution you'd like to connect along with the branch. For this example, we'll use `main`. You will also need to provide a subfolder name under the root folder for your solution.![Solution binding](\assets\img\posts\2024-11-11-dataverse-git-integration-preview-first-look\setup-git-integration-solution-binding.png "Solution binding"){:class="img-fluid blog-post-img"}

> **Environment Binding**
>
> Environment binding links an entire Dataverse environment, along with all unmanaged solutions and components, to a single repository and folder. It stores all unmanaged customizations in a single Git location, allowing multiple solutions to share a root folder while tracking each component’s association.
>
> <br />
> **Solution Binding**
>
> Solution binding enables source control for multiple solutions within the same environment but in separate repositories or folders. It offers more organizational flexibility but requires setting up each solution individually. Each solution component can only be bound to one location, and you choose the repository and folder for each solution at the time of binding.
>
> <br />
> Learn more about environment and solution binding at [How to choose between environment and solution binding](https://learn.microsoft.com/en-us/power-platform/alm/git-integration/connecting-to-git#how-to-choose-between-environment-and-solution-binding)

## How to Commit Changes

1. After making changes or adding components to your unmanaged solution.
2. Open your solution and click  **Source Control** on the left navigation pane.![Commit changes navigation pane](\assets\img\posts\2024-11-11-dataverse-git-integration-preview-first-look\commit-changes-navigation-pane.png "Commit changes navigation pane"){:class="img-fluid blog-post-img"}
3. Click **Commit** to commit your changes to source control and provide a comment for the Git commit.
4. Open your DevOps repository to review your committed solution files.![Commit changes Git repository](\assets\img\posts\2024-11-11-dataverse-git-integration-preview-first-look\commit-changes-git-repo.png "Commit changes Git repository"){:class="img-fluid blog-post-img"}

### How to Pull Changes From Source Control

1. After making some code-first changes to the solution files in your DevOps repository, open your solution and click  **Source Control** on the left navigation pane.
2. Click **Check for updates** and review your code-first changes.![Check for updates](\assets\img\posts\2024-11-11-dataverse-git-integration-preview-first-look\pull-changes-check-for-updates.png "Check for updates"){:class="img-fluid blog-post-img"}
3. Click **Pull** to pull your changes into your development environment from source control.![Pull changes](\assets\img\posts\2024-11-11-dataverse-git-integration-preview-first-look\pull-changes.png "Pull changes"){:class="img-fluid blog-post-img"}

## My Thoughts

Dataverse’s new Git integration is a much-needed and promising step toward modernizing solution management for Power Platform developers. These features are a highly anticipated addition, filling a long-standing gap in Dataverse’s DevOps capabilities.

With the introduction of YAML for solution files, Microsoft has enhanced readability and usability, which is a major improvement for developer workflows.

That said, the feature remains in its early stages, with no PAC CLI support and incomplete coverage of all solution components. Hopefully, Microsoft will address these issues in future updates to enhance its functionality and usability.

While there’s room for further development, this release signals a positive direction, and with ongoing updates, it’s likely to become an essential part of a mature DevOps process for Dataverse.


## Resources

[Overview of Dataverse Git integration (preview)](https://learn.microsoft.com/en-us/power-platform/alm/git-integration/overview)

[Dataverse Git integration setup (preview)](https://learn.microsoft.com/en-us/power-platform/alm/git-integration/connecting-to-git)

[FAQs about Dataverse and Git integration (preview)](https://learn.microsoft.com/en-us/power-platform/alm/git-integration/faqs)
