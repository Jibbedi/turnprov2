---
title: Why GraphQL?
date: 2019-03-31
category: GraphQL
level: Beginner
tags: ["graphql", "rest", "query language"]
ebook: https://www.turnpro.in/ebook/graphql/
---

What does the perfect API look like?
It should be efficient, fast and easy to use for our users
and it should be equally efficient, fast and easy for us to develop.

To be fast and efficient we need to carefully choose the data that we return from our API.
If we return data that the user does not use or need we are not as efficient as we could be.

We're not only doing more work on our servers than we need to. We're also wasting bandwidth.
Every byte that we make our users download will literally cost time
and - especially on mobile network plans - money.

**An API is about its users**. We as developers of an API should always keep that in mind.
It does not matter whether it is directly consumed by a customer's device or if it's consumed by another micro service or application.
At the end of the day, our API is an interaction with others and it's our responsibility to make that as good and joyful as we possibly can.

Efficiency and fastness will improve the overall performance of our application - which numerous studies have proven to be
the number 1 factor for good user experience. Improving on these factors will literally increase our revenue.
And hey - I'm more likely to keep using an app that respectfully uses my data plan.

An easy to use API can greatly decrease the time that is required to innovate on new features.
Developers will have a much nicer time implementing a feature and we can roll them out more frequently to our customers. And the easier an API is to use, the lower the risk of introducing bugs is.

After all, an API is about it's users.

## Knowledge is everything

You're probably familiar with the phrase _Knowledge is power._

It truly is.
If you know what the users of your API want you can model it in a way that is
efficient, fast and easy to use.

But how do you know what data the users want?

If the only user of your API is your co-worker in the next cubicle you can ask him.
But what if you have an API that is consumed by multiple users? Do you know them all?
Do they all have the same exact data requirements?

How could we model an API that is efficient for every user we have?

One option is to handcraft an API for each user.
Depending on the number of different users you have this might sound like a suitable solution.

But every time one of the users changes his data requirements we need to update their custom API.
Actually, we're now limiting the speed of our users' innovations by how quickly we can make changes to it.
And is it really efficient to create and maintain a different endpoint for every single user?

Custom APIs for every client would work perfectly if the cost
of keeping them up and running wouldn't be so high.
Or if - in the case of not knowing our users at all - they were possible at all.

### REST

It seems like it would be better if the clients didn't need a custom API.
But we can't just return all the data we have for everyone, right?. We're trying to be efficient and fast here.

We need a way for our users to express their data needs.
So what if we created a couple of small APIs that each return only a subset of our data instead?

Now if you've heard of REST this might sound familiar to you.
A REST API consists of multiple endpoints.
An endpoint is just an URL which returns a fixed structure of data. A resource.

The point of having multiple endpoints is to allow our users to request our data more granularly so we don't serve them with too much unnecessary information.
This means we should keep our endpoints small and concise.

Deciding which data belongs to a certain resource is up to the API developer.
There are tradeoffs. If an endpoint is really small it's more efficient since it doesn't send
a bunch of unused information. But chances are high that not all the required data is returned by that one endpoint which means the user has to request multiple endpoints. This is called _underfetching_.

If you provide more data in a single endpoint than chances are high that there's a bunch of unused data. This is called _overfetching_.

**Creating endpoints is a tough challenge**.
This is especially true for relational data. And to be frank, any data is relational.

A house has owners. Owners have family and friends which each have their own houses.
Houses belong to a street. Streets to a city and so on.
The world is literally a graph. And any of us is just a small node on it.

This does not seem really romantic, does it?
But the upside to that is that we are technically all friends with Kevin Bacon - at least to some [degree.](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon)

Think about it for a minute. How would you structure your API for this?
Would you create an endpoint for all information about a house? Will it include the information about the owner?
What about their families and their houses? Where do you draw the line?

We don't know what our users need from our API so it's hard to come up with a solution.
Smaller endpoints are more efficient but require multiple requests.
Bigger endpoints save us roundtrips but could send too much data.
Either way is not ideal. It's a compromise.

Phew. If only we knew better.

REST started with a good thought. Creating multiple endpoints and make users ask for specific slices of data.

However, relying on HTTP requests to select slices of data is not an optimal solution. It can be hard and tedious to orchestrate those requests. The users need to find out which requests can be sent concurrently and which requests needs to be performed sequentially.
Sequential requests create a critical path and can dramatically slow down the user experience because we if one request takes longer the whole chain is delayed.

Making an HTTP call also comes with a latency. We need to open a connection.
Perform an SSL handshake and close the connection. All of that is time-consuming.

Plus, all of the connection orchestration needs to be handled by every single user of our API individually. What a waste.

## Think about graphs, not endpoints

The problem seems to reside in the way we approach our API development.
Endpoints force us to make decisions about how an API is consumed.
A decision that we as API developers can hardly make.

We need to give our users a more powerful way to express their data requirements.
That's what GraphQL is about.

It's a way to shift the responsibilities.
The API developer is no longer in charge of deciding which data gets sent to the user anymore.
He's responsible for defining what data is available and how this data can be accessed. He's responsible to create the graph.

By swapping out those predefined endpoints we end up with a much more flexible solution that enables
our users to look at the available data and pick the pieces they need. After all, they know best.
In a way, we enable them to create their own handcrafted, perfectly tailored API.

We only serve the exact data that is needed without being forced to create a dedicated endpoint
for each user.

That's efficiency and fastness at work.
For our users as well as ourselves.

It's exactly what SQL is for our databases.
The database doesn't know which data it should return so we need to formulate a query with all of our requirements.
All the database knows is what data is available and how to get it.

By allowing our data to be requested with queries we enable tooling that has not been possible before.

We can analyze and validate those queries at build time
and provide users with helpful feedback.

We can give them an estimate of how long it will take for their data to download at runtime,
provide autocomplete suggestions for their IDE - and even generate code for them.

By specifying all the pieces of data they need we get useful insights into how our API is used.
We understand which data is important so we know where we should start improving things.

And if we ever choose to remove pieces of data we can point our users to an alternative solution
while being able to validate that each user eventually made the switch.
Having those insights will improve how we think about versioning.

Lastly, all of those possibilities created an amazing and creative open-source community
that keeps coming up with fantastic ideas to make our lives as developers and
our customers' lives easier.

GraphQL is not a revolution. It's an evolution. It's the next logical step when you think
about API development.

## GraphQL for...

### Backend developers

- ✅ Create a flexible API that supports any number of users
- ✅ Don't waste time creating endpoints dedicated for a single user
- ✅ Get detailed insights about how your API is consumed

### Frontend developers

- ✅ No need to orchestrate API calls to multiple endpoints
- ✅ Quickly iterate on your UI without depending on changes from a backend developer
- ✅ Improve your apps data consumption by getting perfectly tailored data
- ✅ Have the flexibility to customize the request data depending on situations like network status and screen size

### Managers

- ✅ Frontend and backend teams don't depend as much on each other
- ✅ Optimized data consumption increases app performance which can increase revenue
- ✅ Easier implementation will increase development velocity and decrease bugs
- ✅ Less additional effort to support multiple clients like iOS, Android and web
