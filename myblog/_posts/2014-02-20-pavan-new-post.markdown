---
layout: post
date:   2014-02-20 21:48:26
categories: how-to
keywords: how to install jekyll blog, jekyll configuration for github
description: This is how i installed Jekyll blog on my github pages
title: Issues i faced while installing Jekyll blog for GitHub
---
 
![My helpful screenshot]({{site.url}}/myblog/assets/jekyll.png)

So far I meant blogging means Wordpress or blogspot which provides easy to use user interfaces, blog posts, edits and you can provide keywords and you can optimize your blog for SEO. Still i run couple of sites using wordpress though.

ever since I found Github Pages and Git blog using Jekyll I really wanted to implement my own Github Page and Blog with Jekyll.

There are lot of sites showing how easily you can implement Github blog with Jekyll, but i ran into some issue while implemnting this Jekyll blog, but i finally made one blog on Github.

How to implement Jekyll blog is easily demonstrated [here][jekyll].

If you ran into any issues while implementing Jekyll blog like me, then this post might sounds interesting for you

Here are the issues i faced and how i solved

Issue 1:
first check `ruby -v`
Issue the command `gem install jekyll`
after a while I got this error message
{% highlight ruby %}
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.0.0 directory.
{% endhighlight %}

This means you dont have your own local copy of `ruby`, by default every mac will come with pre-installed ruby for its own internal purpose.
to come over this you can install your own ruby enviornment using RVM, there is another way using rbenv, but myself i prefer to use [this][rvm]

once you install `ruby`, then you can continue with your installation.

Issue 2:
At the of installation, I got this message
{% highlight ruby %}
  * WARNING: You have '~/.profile' file, you might want to load it,
    to do that add the following line to '/Users/pavankothapalli/.bash_profile':

      source ~/.profile
{% endhighlight %}
Thought this mac installation really driving me crazy, but it's so simple. just update the .bash_profile file with `source ~/.profile`. In this way every time console opens it will load the path parameters.

That's all ... your awesome blog is live.


Welcome to MyBlog!

Thanks for visiting [my blog][kpavan]

BookMark : {{page.id}}

[kpavan]: http://kpavan.com
[jekyll]: http://jekyllrb.com/
[rvm]: https://rvm.io/
