---
title: ng-template - the how, the when and the beauty
date: 2018-10-10
category: Angular
tags: ["angular", "templates"]
---

I’ll start this one off with a quick challenge. Think of your five favourite features of Angular.

Are ng-templates on that list? It certainly wasn’t on mine a couple of months ago, but now it easily ranks in the top three and if it wasn’t on your list either, you’re in for a real treat with this series of blog posts, which will make you a template pro in no time.

We’ll start off from the very basic of what a template is, discover how you already heavily use templates in your application and finally go pro by creating flexible UI components with fully customisable appearances (no css magic involved).

Sounds good? Okay let’s spin up our editor and write some templates!

```html
<ng-template>
  Hello world!
</ng-template>
```

So how does it look in the browser? Blank screen, you say? Hm, can you check the error log for me? Just kidding.
This is the expected behaviour.

**A template is just a blueprint for a view.** Think of it as a class in OOP.
So how do we actually use classes? Well, we create instances of it. Same goes for templates. We need to tell Angular to take our blueprint and actually render it to the screen.

The easiest way to render a template (we’ll discover some more along the way) is to create a `TemplateOutlet` - which is basically just a location for the content defined in our blueprint to be displayed in.

```html
<ng-template #myTemplate>
  Hello world!
</ng-template>

<ng-container [ngTemplateOutlet]="myTemplate"></ng-container>
```

See what we’ve done here? We’ve assigned our template to a reference called `#myTemplate`. Now we create an outlet at the location, where we want our content to be rendered to the screen and pass it our template.

> “Hey Angular, I’ve got this blueprint called myTemplate here. Can you take it and display it over there?”
> <cite>Our code in plain english</cite>

If you now check your browser you should see a nice welcoming.

Couldn’t we get the same result by just typing `Hello world` into our editor?

```html
Hello world
```

…Yes.

Are templates an overly complex way of doing things so people can boost their egos? No.

While this example is overly complex and boosts my ego a little bit, it actually shows us the two most import concepts of ng-template.

1.  Templates are instructions on what to render - they don’t show up in your view
2.  Those instructions can be passed around and be rendered anywhere

So why would I ever define what to display, but not display it immediately?

Well maybe you want to render something depending on a certain condition. You can define a template and only display it, when the condition is met. This is what `ngIf` is for? Yup and it uses templates. Check out the next blog post in this series to find out how it works under the hood.

Maybe you want to define your template once and create views from it over and over again, say to loop over an array like `ngFor` does? We’ll learn how it works and how to pass dynamic data to a template.

What if you want to reuse your component’s logic, but need a slightly (or completely) different UI in some places. You can pass different templates to that component! This is sometimes referred to as a headless component or [the render props pattern](https://reactjs.org/docs/render-props.html "the render props pattern") in react land.

Do you have a global component - like a nav bar - and it needs to display different buttons depending on which route is active? This can get messy rather quickly. Let’s see how we can leverage templates for a cleaner, more scalable solution.

<div class="highlight">
<h2>Conclusion</h2>

While template don’t seem really useful at first glance, they can help you to tackle sophisticated use cases, like writing customisable UI components with ease and really level up your Angular game.
They’re heavily used within the framework itself and add a great flexibility to your tool belt.

</div>
