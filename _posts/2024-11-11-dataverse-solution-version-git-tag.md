---
layout: post
title: Automate Dataverse Solution Version Git Tagging in an Azure DevOps Pipeline
subtitle: Automatically tagging the latest Git commit with the Dataverse solution version.
date: 2024-11-11 00:00:00 +1200
categories: [blog]
tags: [git, dataverse, azure devops]
image: /assets/img/posts/2024-11-11-dataverse-solution-version-git-tag/cover.png
comments: true
---

In this guide, we'll set up an Azure DevOps pipeline that automatically tags the latest commit in the main branch with the version number from a Dataverse Solution.xml file. This setup helps track solution versions in Git, making it easy to locate specific versions of your Dataverse solution over time.


> **Note:** This tagging process isn't intended for release tags. The tag is moved to the latest commit that matches the version in `Solution.xml`, ensuring that unrelated changes (like config updates) don’t leave the version tag on older commits. However, because this pipeline deletes and recreates tags, it can cause issues if used with release tags or if others rely on specific tags for deployments. For production or release tags, it’s safer to create new versioned tags (like v1.0.1, v1.0.2) for each update rather than overwriting existing tags.

## Step 1: Create the Pipeline YAML File

In your Azure DevOps Git repository, where your Dataverse solution files are unpacked, create a new pipeline file. For this example we'll use `pipelines\git-tag-solution-version.yml`.

Add the following content to the YAML file:

{% gist 2d9dcb1b1e4b75a3f3f978f0dfbb0442 git-tag-solution-version.yml %}


The PowerShell script in the pipeline does the following:

1. Configures Git with the user’s email and name for tagging.
2. Checks if `Solution.xml` exists; exits if not found.
3. Reads the solution name and version from `Solution.xml`.
4. Combines the solution name and version to create a tag name.
5. Checks if the tag already exists, deletes it if so, to keep the tag on the latest commit.
6. Tags the latest commit with the solution version and pushes it to the remote repository.

## Step 2: Set Up the Pipeline in Azure DevOps

1. Go to your Azure DevOps project.
2. Navigate to **Pipelines**
3. Click **New pipeline**.
4. Select **Azure Repos Git** and choose your repository.
5. Select **Exisiting Azure Pipelines YAML file**.
6. Select the branch and path where you created the YMAL file, then click **Continue**.
7. Click the dropdown arrow next to **Run** and select **Save**.
8. To rename the pipeline, click the ... (ellipsis) on the top right, choose **Rename/move pipeline**, and name it `git-tag-solution-version`, then click Save.

## Step 3: Test the Pipeline

1. Make a change to files in the repo. And push your changes.
2. If you update the solution version you sould see a new tag created with the latest version.![Created Git tag](/assets/img/posts/2024-11-11-dataverse-solution-version-git-tag/commit-history-created-tag.png "Created Git tag"){:class="img-fluid blog-post-img img-thumbnail "}
3. If you update files other than the solution file verion then you should see the solution git tag move to the latest commit.![Moved Git tag](/assets/img/posts/2024-11-11-dataverse-solution-version-git-tag/commit-history-moved-tag.png "Moved Git tag"){:class="img-fluid blog-post-img img-thumbnail "}
