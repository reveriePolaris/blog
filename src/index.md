---
layout: base.njk
---

# Sean's Blog
I might post interesting stuff every once 
in a blue moon.

<section class="scrollable">
    {% for post in collections.all %}
    <article class="card">
        <h2><a href="/posts/{{ post.data.slug }}">{{ post.data.title }}</a></h2>
        <p>{{ post.data.description }}</p>
    </article>
    {% endfor %}
</section>