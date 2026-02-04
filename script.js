const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/1w_IXJEm5fncWeBFsD7uX1sH83aStIhPqDLJasXmqYTM/pub?output=csv";
// https://docs.google.com/spreadsheets/d/1w_IXJEm5fncWeBFsD7uX1sH83aStIhPqDLJasXmqYTM/edit?usp=sharing

// Load CSV
function loadBlogs(callback) {
    Papa.parse(SHEET_URL, {
        download: true,
        header: true,
        complete: results => callback(results.data)
    });
}

// HOME PAGE
if (document.getElementById("blogs")) {
    loadBlogs(blogs => {
        const container = document.getElementById("blogs");

        blogs
            .filter(b => b.status === "approved")
            .forEach(b => {
                const div = document.createElement("div");
                div.className = "card";
                div.innerHTML = `
          <h2>${b.title}</h2>
          <p>${b.author} · ${b.date}</p>
          <a href="blog.html?slug=${b.slug}">Read more</a>
        `;
                container.appendChild(div);
            });
    });
}

// BLOG PAGE
if (document.getElementById("content")) {
    const slug = new URLSearchParams(window.location.search).get("slug");

    loadBlogs(blogs => {
        const blog = blogs.find(
            b => b.slug === slug && b.status === "approved"
        );

        if (!blog) {
            document.getElementById("content").innerHTML = "Blog not found";
            return;
        }

        document.getElementById("title").innerText = blog.title;
        document.getElementById("meta").innerText =
            `${blog.author} · ${blog.date}`;
        document.getElementById("content").innerHTML =
            marked.parse(blog.content);
    });
}
