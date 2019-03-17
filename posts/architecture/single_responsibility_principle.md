---
title: Single Responsibility Principle
date: 2018-10-03
category: Architecture
level: Beginner
tags: ["clean code", "ood"]
---

# SOLID Series : Single Responsibility Principle

(img)

Writing software is easy. What's hard is to write software that's easy to understand and easy to change six months down the road by another human being.

One way to help you achieve this is to follow the Single Responsibility Principle, that was introduced by Robert „Uncle Bob“ Martin in his book Agile Software Development - Principles, Patterns and Practices in 2002.

## Definition

The Single Responsibility Principle states, that your code should have one and only one responsibility.

Having a responsibility is a fancy word for saying having a reason to change.

## Reasons to change

When you think of code. What might be a reason to change it?

Imagine that you are writing an customer relation management tool for your company. The requirements are actually quite simple.

„We need a website to display all of our customers data in a table“.

You decide to go for server side rendering and pick a database of your choice. Everything’s works fine and the app ships a couple of weeks later.

(img)

Here’s a quick overview of what you might have come up with.

The controller class provides an endpoint and asks the customer service for the rendered data and sends it to the client.

After a few weeks complaints about the response time emerge. It turns out the database you picked wasn’t the right choice and you need to replace it.
Hence the code that deals with the database logic needs to be changed. It lives in the _CustomerService_.

A few days later your company decides that a simple website is not enough anymore, since the customer relation managers want to use the application on the iPads and store the data for offline use. You need to provide an API for a JSON representation of the data. Since the code for getting the data already lives in the _CustomerService_ you decide to add a _getCustomerJSON_ method to that class.

Both of these events are reasons to change. Note that those changes are unrelated and happened at difference times, though.
The database needed to be changed for performance reasons, the API needed to be added because of a business decision.

Yet oddly enough, in both cases the _CustomerService_ needed to be changed. Why? Because it is in charge of getting the data AND rendering the data. It has more than one responsibility.

Rendering HTML and getting data from the database do not belong together - they are unrelated.

##The problems of multi responsibility

While is does not seem too big of a deal in the first place, you opt in for a lot of nasty problems in the future by putting too many responsibilities in one class.

### Hard to understand.

Think of a swiss army knife. Frankly, this is probably the most overused analogy for a violation of the single responsibility principle, but it’s the best one I can come up with.

First of all, the name is quite misleading. Obviously it has a knife in it, but it actually has a lot of other stuff like a screwdriver, scissor, tin opener and what not.

If you’ve never seen a swiss army knife before and heard that name you’d imagine something completely different than it actually is. And even if you have, chances are you can’t come up with any functionality it provides.

If you’re up for a challenge I encourage you to remember all tools the _Wenger Giant Knife 2007_ provides. It has 81 by the way.

Don’t let your classes become a _Wenger Giant Knife_. If your class has more than one responsibility it’s hard to find a concise name for it, let alone a concise description.

Let’s look at our _CustomerService_ class again. Is Service a name that immediately tell you what this call does? Can you describe what it does without using words like AND and OR?

No, because it does too many things.

Breaking a class with multiple responsibilities apart into multiple classes enables us to give them a concise name. Having a well named class in place is key in comprehension of the application. Also, if you have a certain task, you don’t want to bother with code that isn’t related to it. So why have it in the same place?

### Hard to change

> The only thing that is constant is change - Heraclitus
> Written by the ancient greek philosopher, this statement holds truer than ever in the software industry. You will change your code. A lot.

Imagine your swiss army knife again. Let’s say the screwdriver can only deal with Phillips screws, but now you need to work with slot screws. You need to replace the screwdriver. Good luck with getting the whole thing apart, replacing the things you need and put it back together without breaking anything.

Even worse, your co-worker needs to replace the knife at the same time. Imagine how difficult it would be for two people to make a change at the same place, let alone the absurdity of two adults fighting over who get’s to use the swiss army knife first.

What does it mean for our code? We already figured out that a class with more than one responsibility is harder to understand.
It’s also harder to add new features to it or swap functionalities out.

The _CustomerService_ deals with all kinds of stuff. It gets data from the database, so it needs to handle it’s connection. It also renders the HTML, it probably uses a templating engine for this.

The class is pretty bloated and it’s kind of hard to tell apart which private functions and properties belong to which responsibility. It seems that some are even shared.

Adjusting the code for the HTML rendering, might cause the database connection to stop working correctly, because we deleted a property we thought we could get rid of.

Those two responsibilities coupled together make it really hard to change on without affecting the other.

Remember how you were working on getting a new Database ready, when the request for implementing a JSON API came in? A co-worker is taking care of it. But remember you’re working on the same source file. The stage is set for chaos.

The co-worker is done before you and submits the code into version control. Since he has a little bit of time left, he decides to do some extra work.

It’s friday evening by the time your done. You’re looking forward to your well deserved weekend and you’re in an awesome mood, because the new database code is running smoothly. You just need to submit your code and head off home, but wait…your co-worker’s last commit message was _small refactoring_. The _small_ turned out to be a complete redesign of the class and you’re in huge trouble because now you need to merge your stuff in. Farewell good mood. Oh by the way, the HTML rendering broke again. Farewell weekend.

By separating each responsibility in it’s own class and source file, we reduce the impact of our chances to the system. We reduce the risk of our change conflicting with other changes or breaking other functionalities.

Rule of thumb: If you don’t have to touch a class, you will not break it.

### Hard to test

We need to write tests in order to make sure our system is working correctly, even after we changed the implementation.

You need to think of every edge case and every scenario to ensure your test suite is rock solid and no line of code is untested.

Imagine what a test suite for the _Wenger Giant Knife 2007_ might look like. You need to test all 81 tools. And all the possible functionalities this tools provide. You probably end up with a huge set of tests, that take a lot of time to perform.

Now, when the screwdriver is swapped out, you need to perform all those tests again to ensure nothing else broke. The knife’s test need to be performed again, even though it not directly affected by the change request.

The problem for having big classes with multiple responsibilities is not the execution time of the tests, even though the fact that code that should’t be affected needs to be tested again is worrying.

The actual benefit in having small classes is, that it’s easier to come up with all the test cases you need while keeping your tests understandable and maintainable (single responsibility, anyone?).
Another factor is, that a class with multiple responsibilities tends to have a lot of dependencies. The _CustomerService_ talks to the database, so it probably has some sort of library for that. It also renders HMTL and serializes JSON. Those probably add another dependencies.

In tests, you usually don’t want to talk to a real database, you want to mock it out. By reducing the number of responsibilities, we reduce the number of dependencies that need to be mocked and therefore a huge pain point when writing tests.

### Hard to reuse

When it comes to reusability, I found that the smaller the classes the better. If you only need a certain functionality, but the class it provides also deals with other stuff, you can hardly reuse it.

Maybe the functionality you need lives in an ambiguously named class. First off you need to know the functionality is in there (ambiguous named classes make the application harder to understand, don’t they?). Secondly you need to deal with the fact that even though another responsibility said class change, your code might break. This is because having multiple responsibilities in one class couples them, and therefore couples all the depending classes as well. (It’s really hard to change classes, with multiple responsibilities, right?)

If you look at the UML for the CustomerService you notice that the responsibility for dealing with the database is actually private. It’s locked away in the class. This is another reason we can’t reuse the code.

You probably end up with duplicating the logic, which frankly is as bad, because we when a change occurs we might forget it in one place. Let alone the tediousness of editing the same code in multiple places over and over again.

By separating each responsibility in it’s own class, it’s easy to reuse it. I like to think of classes as building blocks to put an application together. It’s nicer to deal with small atomic building blocks, than big ones, that won’t fit.

## Wrap Up

Since we know by now how separating our responsibilities can benefit us, let’s revisit our example again. The problem seems to be that we can’t reuse the database logic, because it’s coupled to the html rendering. Our only way of providing a JSON API without duplicating the code was to put it in the same class and therefore coupling the JSON handling with the HTML rendering.
Not only does it make the class harder to understand, it also leads to fragility, because any change to the HTML rendering might break our JSON API.

The key here is to separate the rendering logic from the database logic. Doing this enables us to reuse our database code while giving us the ability to support new output formats or modify existing ones without affecting the others. It also keeps each class nice and short and enables us to give them a concise name.
We now have a maintainable and understandable system in place, that can be easily modified and enhanced without having to worry about breaking working code.

(img)
