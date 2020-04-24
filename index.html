<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Form validation</title>
    <meta charset="utf-8" />
    <style>
      input {
        border: 1px solid rgb(168, 168, 168);
        border-radius: 4px;
        font-size: 1rem;
        padding: 0.5rem 0.75rem;
      }

      form[data-submitted] input {
        border: 4px solid blue;
      }

      form[data-submitted] :invalid {
        border: 8px solid red;
      }
    </style>
  </head>

  <body>
    <form novalidate onsubmit="onSubmit(event)">
      <p>
        <label for="name">Name:</label><br />
        <input
          id="name"
          name="name"
          type="text"
          required
          minlength="3"
          maxlength="10"
          placeholder="First and last name"
        /><br />
        <output for="name" hidden><img src="aaa" alt="E" /></output>
      </p>

      <p>
        <label for="url"><abbr>URL</abbr>:</label><br />
        <input
          id="url"
          name="url"
          type="url"
          required
          pattern="^[^<>]*$"
          placeholder="Absolute URL"
        /><br />
        <output for="url" hidden></output>
      </p>

      <p>
        <label for="team">Team:</label><br />
        <select id="team" name="team">
          <option>Team 1</option>
          <option>Team 2</option>
          <option>Team 3</option>
          <option>Team 4</option>
        </select>
      </p>

      <p>
        <button name="mode" value="test">Send</button>
      </p>
    </form>

    <script type="module">
      import { init } from "./form.js";
      const form = document.querySelector("form");
      init(form);
    </script>

    <script>
      function onSubmit(event) {
        event.preventDefault();
        console.log(1111, event.submitter);
        const form = event.target;
        if (form.elements.name.value !== "bbb") {
          form.elements.name.setCustomValidity("Oops!");
        } else {
          form.elements.name.setCustomValidity("");
        }
        if (form.checkValidity()) {
          const fd = new FormData(form);
          const data = Object.fromEntries(fd);
          console.log(2, data);
        }
      }
    </script>
  </body>
</html>
