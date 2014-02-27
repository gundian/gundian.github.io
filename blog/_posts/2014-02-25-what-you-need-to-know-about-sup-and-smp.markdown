---
layout: post
date:   2014-02-25 20:05:26
categories: how-to sap_smp sap_sup sap
keywords: MBOs in SMP 3.0, Future roadmap for SAP Mobility, How to upgrade SUP to SMP
description: Differences between SUP and SMP and what you need to about the new SMP Platform 3.0
title: What you need to know about SMP 3.0, Roadmap for SAP Mobility.
---
 

![Learn about SMP 3.0 and OData](http://wiki.scn.sap.com/wiki/download/attachments/332333549/SMP_TITLE.png?version=1&modificationDate=1367253119000&api=v2)

I was working with SUP 2.1.x and 2.2 all along and build some MBO based HWC Applications, as Sybase mentioned MBO based applications are less critical business tasks, and easy to implemet situations like work flow approvals, leave requests.

SAP has changed the way of approach with their new SMP 2.3, they seems like more focused on OData approach with the combination of NetWeaver Gateway, while they support the MBO based applications still, which will allow old SUP users to continue their HWC applications and they make use OData protocal applications for better and robust solutions. Even with SMP 2.3 we had limited Push support while there is no off-line capability at that time.

Now, with their recent release SMP 3.0, seems everything has been changed. 

The Differences i see between SUP 2.2 , SMP 2.3 and SMP 3.0

1. with `SMP 3.0` release, there is no SCC `Sybase Control center`, so we kind of lost of the features we used as a SCC Administrator.
2. SMP 3.0 comes with total refreshing look, as the Admin console it self deigned in HTML5 as old SCC used Flex.
3. With `SMP 3.0`, now the developers have more choices to choose from, Native vs Hybrid development of the front end apps.
4. `AppBuilder`, is the new web based GUI Tool, with all drag and drop features and it comes with Cordova bundle and Kapsel bundle so developers can more focus on their business and application process, instead of worry about Device APIs, as cordova covers that part for us. for more information click [here][sapacademy]

Here is one Sample application you can build using AppBuilder / SMP 3.0 with in 30 minutes, as a developer you will understand all the components in the ViewPort and how to use, even you can add controllers to it. 

![Sample application using AppBuilder](http://scn.sap.com/servlet/JiveServlet/downloadImage/327361/image046.png)

Check the details [here][scnlink]


Thanks for visiting [my blog][kpavan]

BookMark : {{ site.url }}/blog{{page.id}}

[scnlink]: http://scn.sap.com/docs/DOC-49170
[sapacademy]: http://www.sapmobileacademy.com/
[kpavan]: http://kpavan.com/blog
