---
layout: post
title: Why You Suck at Git (and How to Fix It)
subtitle: Git doesn't have to be --hard
date: 2024-11-18 00:00:00 +1200
categories: [blog]
tags: [git]
image: /assets/img/posts/2024-11-18-why-you-suck-at-git/cover.png
comments: true
---

Git doesn't have to be `--hard`. We've all been there, staring at the terminal, wondering why a simple command turned into a tangled mess of conflicts and detached HEADs. It might seem daunting, but the truth is, Git is not out to get you. It's a powerful tool that, once you understand it, will make your development life much easier.

## 1. You're Treating Git Like It's a Magic Black Box

Clarke's third law states, "Any sufficiently advanced technology is indistinguishable from magic." To many of us developers, Git is like an ancient forbidden spellbook, full of cryptic commands that require memorization and the correct rituals performed to ensure nothing breaks. Commands like `git rebase`, `git cherry-pick`, and `git reset` feel like spells you're casting in the hopes that nothing explodes in your face.

#### The Fix

Take the time to learn the core concepts of Git. Try to gain an understanding of how it stores data, how branches are just pointers to commits, what happens during a merge or rebase and what a HEAD is. There are plenty of resources online to help you, but if you're just typing commands you found on Stack Overflow without knowing what they do, you're bound to get lost when something unexpected happens.

I recommend the free official Git book https://git-scm.com/book/en/v2

Git is magic, but it doesn't have to be.

## 2. You're Too Reliant on the GUI

Most of us started out using a GUI client for Git, like [GitHub Desktop](https://github.com/apps/desktop), [SourceTree](https://www.sourcetreeapp.com/), [Tower](https://www.git-tower.com/), or even the built-in client in VS Code. Think of these clients as training wheels. They are great for getting started, but at some point they need to come off. GUI clients make things seem simple because they abstract the underlying commands, leaving you clueless when things go wrong.

Dad says it's time to be a big boy now.

#### The Fix

Challenge yourself. Use the command line for common Git tasks. Learn how to perform basic operations like committing, branching, merging, without the GUI. The command line gives you way more control and helps you build a better understanding of Git. You can still use the GUI when it makes sense, but you'll have a stronger foundation and newfound confidence to fall back on.

The official [Git documentation](https://git-scm.com/docs) is excellent for referencing and I highly recommend checking out their [giteveryday](https://git-scm.com/docs/giteveryday) page.

## 3. You Panic When You See Merge Conflicts

Merge conflicts are just Git saying "Hey, we need to talk." And much like real life, instead of dealing with it head-on, you panic, avoid eye contact, and brush it under the rug. Usually by clicking wildly through your 69 merge conflicts, and inevitably overwriting someone else's work. Just like tough conversations are a part of life, merge conflicts are a normal part of collaborative development. You cannot avoid them forever.

#### The Fix

Stay calm, take a deep breath, acknowledge the problem, and try to handle it thoughtfully. Git is simply pointing out that two sets of changes are affecting the same part of a file. Try to understand why the conflict occurred and make thoughtful decisions about how to resolve it. Often, merge conflicts are the punishment for your Git sins. Learn from these mistakes. The more you deal with merge conflicts, the less intimidating they become.

## 4. You Don't Know How to Undo Mistakes

Git has some great tools for undoing mistakes, but if you don't know how to use them, you might feel like you're trying to defuse a bomb with a YouTube tutorial paused on another tab. One wrong move, and everything explodes anyway.

Learning to undo mistakes calmly (without spiraling into panic) is one of the most important skills you can develop in Git.

#### The Fix

Take time to practice undoing changes in a safe environment. Create a test repository, and make some deliberate mistakes. Use commands like `git reset`, `git revert`, and `git checkout` to see how you can step back through history. The more comfortable you are undoing changes, the less scary Git becomes.

## Final Thoughts

If you see yourself in any of these points, don’t worry, you’re not alone. Git has a steep learning curve, and it takes time to feel comfortable. The important thing is to keep learning, practicing, and experimenting. Start treating Git as your spellbook, not some dark, arcane magic to fear. The next time you hit a snag, remember: Git is just a series of snapshots and changes, much like spells you can learn and master. With time, you'll be casting those Git commands like a true wizard, confidently navigating through your project's history.