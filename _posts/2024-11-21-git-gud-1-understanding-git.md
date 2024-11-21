---
layout: post
title: "Git GUD 1: Understanding Git"
subtitle: Understanding the basics will make Git feel less like a Dark Souls speed run and more like a tool you can master.
date: 2024-11-21 00:00:00 +1200
categories: [blog]
tags: [git]
image: /assets/img/posts/2024-11-21-git-gud-1-understanding-git/cover.jpg
comments: true
---

To get the most out of Git, it's essential to understand its core concepts and internal workings. In the following sections, we'll dive into the foundational elements that make Git unique and powerful.

Understanding the basics will make Git feel less like a Dark Souls speed run and more like a tool you can master.

## Distributed Version Control

Git is a distributed version control system, which means that every developer has a complete copy of the project, including all of its history. This allows you to work offline, make commits, and browse the project history without needing to connect to a central server. It also means that everyone has a full backup of the project, making collaboration more resilient and less dependent on a single point of failure.

![Distributed version control](/assets/img/posts/2024-11-21-git-gud-1-understanding-git/distributed-version-control.png "Distributed version control"){:class="img-fluid blog-post-img"}

## Snapshots, Not Deltas

Git stores your project's history as a series of snapshots, not just changes (deltas). When you commit, Git takes a snapshot of your files at that moment and stores a reference to that snapshot. If files haven't changed, it simply links to the existing version.


![Checkins over time](/assets/img/posts/2024-11-21-git-gud-1-understanding-git/checkins-over-time.png "Checkins over time"){:class="img-fluid blog-post-img"}
## Data Integrity

Git ensures data integrity by checksumming everything before storing it using a SHA-1 hash, a unique fingerprint of the content. This makes it nearly impossible to change anything without Git noticing, ensuring data integrity.

Think of this hash as fingerprint of the content at a point in time.

## Always Adding, (Almost) Never Deleting

Git is designed to be additive, meaning that once data is added, it's very difficult to lose. Git rarely deletes data, and when it does, it's usually the result of intentional actions like garbage collection or explicit commands. Commits are snapshots stored permanently, allowing you to experiment freely without worrying about data loss. Even if mistakes happen, Git’s robust history and backup system make recovery straightforward.

## The Three States

Git operates with three main states for your files, which form the core of its workflow: **modified**, **staged**, and **committed**.

- **Modified**: The file has been changed but not yet added to the staging area.
- **Staged**: The file, in its current version, is marked to be included in the next commit. This is done through the staging area, also known as the index.
- **Committed**: The file's changes have been saved in your local Git database, effectively creating a snapshot of your project at that point in time.

These states relate to three main sections of a Git project:

- **Working Tree**: The working directory where you make changes to files. These files are checked out from the Git directory.
- **Staging Area**: A file in the Git directory that stores information about what will be included in your next commit. It helps in organizing which changes are ready to be committed.
- **Git Directory**: Where Git stores all its metadata and object database. When you clone a repository, this is what gets copied.

![The three states](/assets/img/posts/2024-11-21-git-gud-1-understanding-git/the-three-states.png "The three states"){:class="img-fluid blog-post-img"}

## Resources

- For more in-depth information, check out the official Git book: [Pro Git Book](https://git-scm.com/book/en/v2/).
- Images and diagrams used in this post are based on content from the official Git documentation.