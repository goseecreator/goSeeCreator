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
  // Toggle Button
  const toggleBtn = document.getElementById("toggle-btn");
  const sidebar = document.getElementById("sidebar");

  if (window.innerWidth <= 768) {
    sidebar.classList.add("collapsed");
  }
  
  toggleBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("expanded")) {
      sidebar.classList.remove("expanded");
      sidebar.classList.add("collapsed");
    } else {
      sidebar.classList.add("expanded");
      sidebar.classList.remove("collapsed");
    }
  });
  

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
        date: "May 22 – June 20, 2025",
        type: "Sports",
        description: "The Peace Tournament Project brings communities together in Nakivale Camp through football, art, and music tournaments—promoting solidarity and hope.",
        photos: [
          "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/peaceTournament3.jpeg"
        ]
      }
    ],
    past: [
      {
        id: "bridgeatnakivalerefugeecamp",
        title: "Construction of Bridge at Nakivale Refugee Camp, New Hope Village",
        date: "",
        description: `
  <p>Nakivale Refugee Camp, located in the Isingiro District of Uganda, serves as a vibrant community for thousands of resilient refugees, predominantly from neighboring countries. Despite facing challenges, the residents demonstrate remarkable strength and resourcefulness, creating a supportive environment and striving for a better future. By donating today, you can empower these children and strengthen their community, ensuring they have the opportunity to thrive and succeed. Together, let’s turn their obstacles into opportunities!</p>
  <p><strong>Partnerships</strong></p>
  <p>The Kiwanis Club of Nakivale and the Global Alliance for Peace and Solidarity for Africa successfully joined forces to build a bridge, ensuring safe crossings for children and the local community.</p>
`,
        photos: [
          "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/newHopeBridge.jpeg",
          "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/newHopeBridge1.jpeg",
          "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/newHopeBridge2.jpeg"
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
          <div id="gallery-container">
            <div id="main-photo-container">
              <img id="main-photo" src="" alt="Event photo" />
            </div>
            <div id="thumbnail-gallery"></div>
          </div>
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
    const mainPhoto = document.getElementById("main-photo");
    const thumbnailGallery = document.getElementById("thumbnail-gallery");
    const futureList = document.getElementById("future-events-list");
    const pastList = document.getElementById("past-events-list");

    // Populate event lists
    function createEventListItem(event) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = event.title;
      a.addEventListener("click", e => {
        e.preventDefault();
        selectEvent(event);
      });
      li.appendChild(a);
      return li;
    }

    eventData.future.forEach(event => {
      futureList.appendChild(createEventListItem(event));
    });

    eventData.past.forEach(event => {
      pastList.appendChild(createEventListItem(event));
    });

    // Select event and update display
    function selectEvent(event) {
      titleEl.textContent = event.title;
      dateEl.textContent = event.date || "";
      descEl.innerHTML = event.description;
      if (event.photos && event.photos.length > 0) {
        mainPhoto.src = event.photos[0];
        mainPhoto.alt = `${event.title} photo`;
        thumbnailGallery.innerHTML = "";
        event.photos.forEach((photoUrl, idx) => {
          const thumb = document.createElement("img");
          thumb.src = photoUrl;
          thumb.alt = `${event.title} thumbnail ${idx + 1}`;
          thumb.className = "thumbnail" + (idx === 0 ? " selected" : "");
          thumb.addEventListener("click", () => {
            mainPhoto.src = photoUrl;
            mainPhoto.alt = `${event.title} photo ${idx + 1}`;
            thumbnailGallery.querySelectorAll("img").forEach(img => img.classList.remove("selected"));
            thumb.classList.add("selected");
          });
          thumbnailGallery.appendChild(thumb);
        });
      } else {
        mainPhoto.src = "";
        thumbnailGallery.innerHTML = "";
      }
    }

    // Auto-select event:
    // If there are future events, select the first future event.
    // Otherwise, select the most recent past event.
    if (eventData.future.length > 0) {
      selectEvent(eventData.future[0]);
    } else if (eventData.past.length > 0) {
      selectEvent(eventData.past[eventData.past.length - 1]);
    }
  }
// DONATE PAGE
  function loadDonateSection() {
    content.innerHTML = `
      <section class="donate-section">
        <h2>Support GAPSA</h2>
        <p>Thank you for considering a donation to the Global Alliance for Peace and Solidarity for Africa (GAPSA). Your support helps us continue our mission and make a difference in refugee communities.</p>
  
        <div class="donation-options">
  
          <div class="donation-option paypal-qr">
            <h3>Donate via PayPal QR Code</h3>
            <p>Scan this QR code with your phone to donate easily via PayPal.</p>
            <img src="https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/dontaeGAPSA.png" alt="PayPal QR Code" />
          </div>
  
          <div class="donation-option paypal-button">
            <h3>Donate via PayPal</h3>
            <form action="https://www.paypal.com/ncp/payment/FX8WFVKFZNGGC" method="post" target="_blank" novalidate>
              <input type="hidden" name="business" value="seevyaj222@gmail.com" />
              <input type="hidden" name="currency_code" value="USD" />
              <button type="submit" class="btn-paypal">Donate with PayPal</button>
            </form>
          </div>
  
          <div class="donation-option worldremit">
            <h3>Donate via WorldRemit Mobile Money</h3>
            <p>Send donations directly using the WorldRemit app with the following steps:</p>
            <ol>
              <li>Download and install the <a href="https://www.worldremit.com/en-us/uganda/mobile/mtn-mobile-money" target="_blank" rel="noopener noreferrer">WorldRemit App</a> for Android or iOS.</li>
              <li>Create an account or log in.</li>
              <li>Select Uganda as the recipient country.</li>
              <li>Choose <strong>Mobile Money</strong> as the transfer method.</li>
              <li>Enter the phone number: <strong>+256 767 780 426</strong>.</li>
              <li>Enter the amount you wish to send.</li>
              <li>Review and confirm the transaction details.</li>
              <li>Track your transfer status in the app until received.</li>
            </ol>
            <p>WorldRemit is secure and regulated, ensuring your donation is safely processed.</p>
          </div>
  
        </div>
      </section>
    `;
  }
  

  // ===== NAV HANDLER =====
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.dataset.page;  // Use data-page attribute here

      // Highlight active nav link
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
            transitionTo(loadDonateSection);
            break;
        default:
          transitionTo(() => { content.innerHTML = "<h2>Page Not Found</h2>"; });
      }
    });
  });

  // Initialize to Home on page load
  transitionTo(loadHomeSection);

  document.getElementById('login-btn').addEventListener('click', function () {
    const alertBox = document.getElementById('custom-alert');
    const overlay = document.getElementById('custom-alert-overlay');
    alertBox.style.display = 'block';
    overlay.style.display = 'block';

    document.getElementById('custom-alert-close').addEventListener('click', function () {
      alertBox.style.display = 'none';
      overlay.style.display = 'none';
    });
  });
});
