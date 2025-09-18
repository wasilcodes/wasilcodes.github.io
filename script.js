// Animate skill bars on scroll
document.addEventListener("scroll", () => {
  const skillBars = document.querySelectorAll(".skill-bar span");
  const triggerPoint = window.innerHeight * 0.8;

  skillBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < triggerPoint) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});

// Contact Form Submit Animation
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const button = this.querySelector("button");
  button.textContent = "Sending...";
  button.style.background = "linear-gradient(45deg, #28a745, #20c997)";

  setTimeout(() => {
    button.textContent = "Message Sent ✓";
    setTimeout(() => {
      button.textContent = "Send Message";
      button.style.background = "linear-gradient(45deg, #00c6ff, #007bff)";
      this.reset();
    }, 2000);
  }, 1500);
});

// Responsive Navbar Toggle
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");
burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
// Close nav when a link is clicked (for better UX)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    });
});

const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.getElementById("modal-close-btn");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("h3").textContent;
    const desc = card.querySelector("p").textContent;

    modalImage.src = imgSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = desc;

    modal.classList.add("active");
  });
});

// Close Modal (Button)
closeBtn.addEventListener("click", closeModal);

// Close Modal (Outside Click)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close Modal (Esc Key)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("active");
}

const backToTopBtn = document.getElementById("back-to-top");
const progressCircle = document.querySelector(".progress-ring__circle");

const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = `${circumference}`;
progressCircle.style.strokeDashoffset = circumference;

// Update scroll progress
function updateProgress() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / scrollHeight;

  const offset = circumference - scrollPercent * circumference;
  progressCircle.style.strokeDashoffset = offset;

  // Show/Hide button
  if (scrollTop > 200) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", updateProgress);

// Scroll to top on click
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Initial call
updateProgress();
