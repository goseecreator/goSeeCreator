document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const spinner = document.getElementById("spinner");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    // Utility: fade out, show spinner, render, fade in
    function transitionTo(renderFn) {
      content.classList.add("fade-out");
      spinner.classList.remove("hidden");
      setTimeout(() => {
        renderFn();
        content.classList.remove("fade-out");
        spinner.classList.add("hidden");
      }, 300); // match CSS transition
    }
  
    // ===== HOME SECTION =====
    function loadHomeSection() {
      content.innerHTML = `
        <div class="home-banner">
          <img src="https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/peaceTournament3.jpeg"
               alt="Peace Tournament" class="home-image"/>
        </div>
        <div class="home-buttons">
          <button data-section="info" class="active">Information</button>
          <button data-section="objectives">Objectives</button>
          <button data-section="importance">Importance</button>
          <button data-section="impact">Impact</button>
          <button data-section="conclusion">Conclusion</button>
        </div>
        <div class="home-scroll-box" id="home-scroll-box">
          <p>Select a section above to read more.</p>
        </div>
      `;
  
      const homeSections = {
        info: `
          <p>The Peace Tournament Project hosts our 3rd edition of the Peace Tournament in Nakivale Refugee Camp, Uganda, Africa. It begins 20th May to 20th June 2025. Donations are welcomed in all forms.</p>
          <p>The Nakivale Community strongly believes that our football, art, and music tournaments align with our mission of promoting solidarity through community service. The youth tournaments bring together the whole community in a spirit of collaboration and competition.</p>
          <p>Allowing the diverse cultures, languages, and challenges of the Nakivale population into unity.</p>
          <p>The Football Tournaments promote peace through fair play and healthy relating within our community. The Arts and Musical Tournaments showcase and support the talents of refugee children. By fostering social cohesion and promoting peace among refugees, we aim to create an environment that allows children to thrive and find solace away from the stress associated with their displacement.</p>
        `,
        objectives: `
          <p>The main objective of organizing the Peace Tournament in the Refugee Community is to provide a platform for refugee families to not only showcase their sporting, musical, and arts’ prowess, but also to promote unity, understanding, and integration within the international community that comprises the Nakivale Settlement.</p>
          <p>We come together around the common goal of peace. Individuals from diverse backgrounds forge bonds, break down barriers, and create a sense of solidarity.</p>
          <p>Our Tournaments feature 16 community teams of children under the age of 15 in football, eight visual arts schools, or music and dance expressions. All collaborating and competing for the title of Peace Tournament Champions.</p>
          <p>Each participating team, group, and arts school are honored with trophies, medals, and equipment to continue growing their skills and capacities in sports (football), visual arts, music, and dance. In addition, prizes will be awarded to teams who express the spirit of unity and solidarity.</p>
        `,
        importance: `
          <p>The importance of organizing such an event cannot be overstated. Beyond the obvious benefits of physical activity and skill development, during our event we offer community peace culture education sessions covering topics such as peace building; peace promotion through conflict resolution and non-violent communication; peace education in general through self-awareness and inclusion.</p>
          <p>We have also planned engaging games for children from each of the refugee communities of Nakivale for whole families to participate in throughout the event.</p>
          <p>The Peace Tournament serves as a catalyst for empowerment, self-expression, and trust-building among participants. It provides a space where children can be seen, heard, and valued for their abilities. Their natural peace cultures foster a sense of belonging and pride.</p>
        `,
        impact: `
          <p>The impact of hosting the Peace Tournament continues to be that all refugee children in Nakivale Camp come together in UNITY and PEACE. It has the power to change perceptions, challenge stereotypes, and create a more inclusive and welcoming environment for refugees.</p>
          <p>Over the years, as we evolve together, we realize that supportive dialogue and unity build friendship. Choosing different ways of responding—other than anger, violent behaviors, or trauma-informed reactivity—does matter.</p>
          <p>By empowering our youth through models of peace-building activities, the adults engage and practice with each other, ennobling and enlivening all. When the youth see the adults choosing to meet, greet, and treat one another in peaceful solidarity and with a consciousness of love, hope is created.</p>
          <p>Through this shared initiative, The Alliance for Peace & Solidarity for Africa celebrates and honors our diversity and highlights the common humanity that unites the multi-cultural fabric that Nakivale has become.</p>
        `,
        conclusion: `
          <p>In conclusion, the "PEACE TOURNAMENT 2025" project sees the promotion of community peace as much more than just a sporting or arts event. It is a testimony to the resilience, strength, and potential of refugees.</p>
          <p>We believe that by supporting this initiative, volunteers actively contribute to creating a unified and more prosperous community environment for Nakivale Refugees, sustaining greater opportunities for the youth born in the camps to shine, flourish, and determine their destiny from a place of hope.</p>
          <p>Thank you for supporting The Alliance for Peace & Solidarity for Africa and the Nakivale Refugee Settlement in Uganda.</p>
        `
      };
  
      document.querySelectorAll(".home-buttons button").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".home-buttons button").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          document.getElementById("home-scroll-box").innerHTML = homeSections[btn.dataset.section];
          document.getElementById("home-scroll-box").scrollTop = 0;
        });
      });
    }
  
    // ===== EVENTS SECTION =====
    const eventData = {
      future: [
        {
          id: "peace2025",
          title: "Peace Tournament 2025",
          date: "May 20 – June 20, 2025",
          description: "The Peace Tournament Project brings communities together in Nakivale Camp through football, art, and music tournaments—promoting solidarity and hope.",
          photos: [
            "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/peaceTournament3.jpeg",
            "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/peaceTournament2.jpeg",
            "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/peaceTournament1.jpeg"
          ]
        }
      ],
      past: [
        {
          id: "winterGala24",
          title: "Winter Gala 2024",
          date: "December 12, 2024",
          description: "A community fundraising gala featuring dinner, performances, and awards to support GAPSA’s youth programs.",
          photos: [
            "https://picsum.photos/id/1005/400/300",
            "https://picsum.photos/id/1006/400/300",
            "https://picsum.photos/id/1008/400/300"
          ]
        }
      ]
    };
  
    function loadEventsSection() {
      content.innerHTML = `
        <div id="events-container">
          <section id="event-info-screen">
            <h2 id="event-title">Select an event</h2>
            <p id="event-date" class="event-date"></p>
            <div id="event-description" class="event-description"></div>
            <div id="photo-gallery" class="photo-gallery"></div>
          </section>
          <aside id="event-links">
            <div>
              <h3>Future Events</h3>
              <ul id="future-events-list" class="event-link-list"></ul>
            </div>
            <div>
              <h3>Past Events</h3>
              <ul id="past-events-list" class="event-link-list"></ul>
            </div>
          </aside>
        </div>
      `;
  
      const titleEl = document.getElementById("event-title");
      const dateEl = document.getElementById("event-date");
      const descEl = document.getElementById("event-description");
      const galleryEl = document.getElementById("photo-gallery");
  
      function displayEvent(ev) {
        titleEl.textContent = ev.title;
        dateEl.textContent = ev.date;
        descEl.innerHTML = `<p>${ev.description}</p>`;
        galleryEl.innerHTML = "";
        ev.photos.forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = ev.title;
          galleryEl.appendChild(img);
        });
      }
  
      function buildList(arr, listId) {
        const ul = document.getElementById(listId);
        ul.innerHTML = "";
        arr.forEach(ev => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = "#";
          a.textContent = ev.title;
          a.addEventListener("click", e => {
            e.preventDefault();
            displayEvent(ev);
            document.querySelectorAll("#event-links a").forEach(x => x.classList.remove("active"));
            a.classList.add("active");
          });
          li.appendChild(a);
          ul.appendChild(li);
        });
      }
  
      buildList(eventData.future, "future-events-list");
      buildList(eventData.past,   "past-events-list");
  
      // Display first future or past
      if (eventData.future.length) {
        displayEvent(eventData.future[0]);
        document.querySelector("#future-events-list a").classList.add("active");
      } else if (eventData.past.length) {
        displayEvent(eventData.past[0]);
        document.querySelector("#past-events-list a").classList.add("active");
      }
    }
  
    // ===== NAV HANDLER =====
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const page = link.dataset.page;
  
        // highlight active
        navLinks.forEach(a => a.classList.remove("active"));
        link.classList.add("active");
  
        switch (page) {
          case "home":
            transitionTo(loadHomeSection);
            break;
          case "events":
            transitionTo(loadEventsSection);
            break;
          case "about":
            transitionTo(() => { content.innerHTML = "<h2>About Page Coming Soon</h2>"; });
            break;
          case "donate":
            transitionTo(() => { content.innerHTML = "<h2>Donate Page Coming Soon</h2>"; });
            break;
          default:
            transitionTo(() => { content.innerHTML = "<h2>Page Not Found</h2>"; });
        }
      });
    });
  
    // Initialize to Home
    transitionTo(loadHomeSection);
  });
  