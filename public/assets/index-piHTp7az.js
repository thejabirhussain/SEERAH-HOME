(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = t(s);
    fetch(s.href, o);
  }
})();
const h = [
    {
      category: "Online Learning",
      question: "How can I learn Islam through the Madrasa App?",
      answer:
        "Madrasa App offers both online and offline learning opportunities. You can connect with qualified and verified teachers for subjects like Quran, Islamic studies, Urdu, Arabic, and Persian. Simply download the app, register, and select your preferred course, language, and learning mode (online or offline).",
    },
    {
      category: "Online Learning",
      question: "Are the teachers on Madrasa App verified?",
      answer:
        "Yes, all teachers and counselors on Madrasa App are carefully selected and verified for their qualifications, experience, and adherence to Islamic values. We ensure that the educators meet the highest standards to provide you with quality learning.",
    },
    {
      category: "Online Learning",
      question: "Does Madrasa App offer female tutors for female students?",
      answer:
        "Yes, Madrasa App offers a dedicated section where female students can connect with qualified female tutors for their Islamic education, Quranic studies, and other subjects.",
    },
    {
      category: "Online Learning",
      question: "How can I find a female tutor on Madrasa App?",
      answer:
        "You can filter your search based on your preferences such as course, language, and tutor's gender. Simply select the female tutor option when looking for tutors and choose the best match for your learning needs.",
    },
    {
      category: "Online Consultation",
      question: "What is the Online Guidance feature on Madrasa App?",
      answer:
        "The Online Guidance feature connects you with qualified Islamic Scholars, counselors, and experts who provide support for life challenges, doubts, relationship concerns, parenting challenges, and emotional well-being, all while staying aligned with Islamic values.",
    },
    {
      category: "Online Consultation",
      question: "How can I connect with an Islamic Scholar for guidance?",
      answer:
        'You can easily connect with a scholar by selecting the "Online Guidance" section in the app. Browse through the available scholars, choose the one that best fits your needs, and book a session for personalized advice and support.',
    },
    {
      category: "Online Consultation",
      question: "What kind of challenges can I seek guidance for?",
      answer:
        "You can seek guidance on a variety of issues such as personal doubts, relationship and parenting challenges, mental health concerns, anxiety, stress, spiritual doubts, life decisions, and more, all within an Islamic framework.",
    },
    {
      category: "Online Consultation",
      question: "Are the scholars on Madrasa App experienced and trustworthy?",
      answer:
        "Yes, all scholars and counselors on Madrasa App are highly qualified, experienced, and verified. They have a deep understanding of Islamic teachings and are dedicated to providing guidance with compassion and clarity.",
    },
    {
      category: "Online Consultation",
      question:
        "Can I ask questions and interact with the scholar during the session?",
      answer:
        "Yes, during your session, you can ask questions, seek clarification, and engage with the scholar to gain a deeper understanding of your issues and find tailored solutions.",
    },
    {
      category: "Prayer Tools",
      question: "What prayer tools does Madrasa App offer?",
      answer:
        "Madrasa App provides a range of prayer tools including a Digital Quran (with audio and text), Namaz Alerts, a comprehensive Dua Collection, a Zakat Calculator, and much more to help you stay connected to your faith daily.",
    },
    {
      category: "Prayer Tools",
      question: "How can I use the Digital Quran feature?",
      answer:
        "The Digital Quran feature offers both audio and text formats, allowing you to listen to the Quran or read it at your convenience. You can access it anytime to enhance your connection with Allah and deepen your understanding.",
    },
    {
      category: "Prayer Tools",
      question: "How do the Namaz Alerts work?",
      answer:
        "Madrasa App sends timely notifications to remind you of the five daily prayers (Salah). You can customize the alerts based on your location and prayer times to ensure you never miss a prayer.",
    },
    {
      category: "Prayer Tools",
      question: "What is the Dua Collection in the Madrasa App?",
      answer:
        "The Dua Collection in Madrasa App provides a curated selection of essential Duas in both audio and text formats. These Duas cover a variety of occasions and help users strengthen their faith and connection with Allah.",
    },
    {
      category: "Payment",
      question: "How can I make payments on Madrasa App?",
      answer:
        "You can make payments after taking a free session and confirming the tutor you want to learn from. Once you're satisfied, select a plan, book the tutor's availability, and proceed with the payment.",
    },
    {
      category: "Payment",
      question: "What payment methods are accepted?",
      answer:
        "Madrasa App accepts a variety of payment methods, including: UPI apps like PhonePe, Paytm, and Google Pay; Credit/Debit cards (Visa, MasterCard); Digital wallets (Apple Pay, Google Wallet); Direct bank transfers.",
    },
    {
      category: "Payment",
      question:
        "What is the refund policy for Online Learning and Online Consultation?",
      answer:
        "Madrasa App offers a free trial session for Online Learning to help you evaluate the teacher's style and compatibility. Once a teacher is selected and payment is made, the amount is non-refundable. However, if you face any issues, such as the teacher not meeting expectations or failing to teach properly, our support team will work with you to resolve the situation by finding a suitable replacement or addressing your concerns.",
    },
    {
      category: "Payment",
      question: "I have a payment issue. How can I resolve it?",
      answer: `For any payment-related queries or issues, you can directly contact us from the "Profile" section of the app, where you'll find the Support option. You can also reach out to our team via WhatsApp for quick assistance. Our support team is available to address any concerns, including failed UPI transactions, incorrect charges, or teacher-related problems after payment.`,
    },
  ],
  q = document.getElementById("faq-categories");
function E() {
  [...new Set(h.map((e) => e.category))].forEach((e) => {
    const t = document.createElement("button");
    (t.className =
      "text-neutral-700 rounded-3xl bg-slate-100 px-4 py-1.5 inline-block text-nowrap active:text-neutral-200 active:bg-slate-800 focus:text-neutral-200 focus:bg-slate-900 !outline-none !border-none"),
      t.setAttribute("data-category", e),
      (t.textContent = e),
      t.addEventListener("click", () => {
        f(e);
      }),
      q.appendChild(t);
  });
}
E();
var L;
(L = q.firstElementChild) == null || L.classList.add("active");
const y = document.getElementById("faq-container"),
  w = document.querySelectorAll("[data-category]");
function f(a) {
  (y.innerHTML = ""),
    h
      .filter((t) => t.category === a)
      .forEach((t) => {
        const n = document.createElement("div");
        n.classList.add("faq-item", "bg-gray-100", "rounded-xl"),
          (n.innerHTML = `
    <div class="p-4 px-5">
        <div class="flex gap-2 items-center justify-between cursor-pointer">
          <h3 class="faq-question text-neutral-800 font-semib<formold text-left w-11/12">${t.question}</h3>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
            <path d="M9.99999 4.1665V15.8332M4.16666 9.99984H15.8333" stroke="#111024" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="faq-answer">
          <p class="text-left text-neutral-600 pt-2">${t.answer}</p>
        </div>
    </div>
    `),
          y.appendChild(n);
        const s = n.querySelector("h3"),
          o = n.querySelector(".faq-answer"),
          r = n.querySelector("svg");
        s &&
          o &&
          r &&
          (s.addEventListener("click", () => {
            o.classList.toggle("open"),
              r.classList.toggle("rotate-45"),
              s.classList.toggle("text-violet-800"),
              n.classList.toggle("bg-violet-50");
          }),
          r.addEventListener("click", () => {
            o.classList.toggle("open"),
              r.classList.toggle("rotate-45"),
              s.classList.toggle("text-violet-800"),
              n.classList.toggle("bg-violet-50");
          }));
      });
}
w.forEach((a) => {
  a.addEventListener("click", () => {
    const e = a.getAttribute("data-category") || "All";
    f(e),
      w.forEach((t) => {
        t.classList.remove("active");
      }),
      a.classList.add("active");
  });
});
f(h[0].category);
const x = document.querySelectorAll(".more-feature-card");
function I(a) {
  x.forEach((e) => {
    const t = e.querySelector(".bg-decor"),
      n = e.querySelector("p.text-sm");
    e === a
      ? (e.classList.add(
          "![background:linear-gradient(180deg,#FFF_55.77%,#F1F1FF_100%)]",
          "!shadow-[0px_15px_15.2px_0px_rgba(0,0,147,0.05)]",
          "!border-[rgba(109,45,211,0.30)]"
        ),
        t == null || t.classList.add("opacity-90"),
        n == null || n.classList.add("text-neutral-500"),
        setTimeout(() => {
          e.classList.remove(
            "![background:linear-gradient(180deg,#FFF_55.77%,#F1F1FF_100%)]",
            "!shadow-[0px_15px_15.2px_0px_rgba(0,0,147,0.05)]",
            "!border-[rgba(109,45,211,0.30)]"
          ),
            t == null || t.classList.remove("opacity-90"),
            n == null || n.classList.remove("text-neutral-500");
        }, 1e3))
      : (e.classList.remove(
          "![background:linear-gradient(180deg,#FFF_55.77%,#F1F1FF_100%)]",
          "!shadow-[0px_15px_15.2px_0px_rgba(0,0,147,0.05)]",
          "!border-[rgba(109,45,211,0.30)]"
        ),
        t == null || t.classList.remove("opacity-90"),
        n == null || n.classList.remove("text-neutral-500"));
  });
}
x.forEach((a) => {
  a.addEventListener("click", () => I(a));
});
const v = document.getElementById("progress"),
  b = document.getElementById("loader"),
  k = document.body;
v && b
  ? v.addEventListener("animationend", function () {
      (b.style.display = "none"), k.classList.remove("overflow-hidden");
    })
  : console.error("Progress or loader element is missing in the DOM.");
const i = document.getElementById("menuButton"),
  c = document.getElementById("closeMenuButton"),
  l = document.getElementById("menuPanel");
function p() {
  l == null || l.classList.add("hidden"),
    i == null || i.classList.remove("hidden"),
    c == null || c.classList.add("hidden");
}
function F() {
  l == null || l.classList.remove("hidden"),
    i == null || i.classList.add("hidden"),
    c == null || c.classList.remove("hidden");
}
i == null || i.addEventListener("click", F);
c == null || c.addEventListener("click", p);
window.addEventListener("load", () => {
  const a = document.getElementById("contact-form"),
    e = document.getElementById("toast"),
    t = document.getElementById("toast-bg"),
    n = document.getElementById("toast-icon"),
    s = document.getElementById("toast-head"),
    o = document.getElementById("toast-message");
  a
    ? a.addEventListener("submit", async (r) => {
        r.preventDefault();
        const g = a.action;
        if (!g) {
          alert("Form action URL is missing.");
          return;
        }
        const A = new FormData(a);
        try {
          (await fetch(g, { method: "POST", body: A })).ok &&
            (t == null || t.classList.add("from-[#d9f4d9]"),
            n && (n.src = "/success.svg"),
            s && (s.textContent = "Alhamdulillah!"),
            o &&
              (o.textContent =
                "Your query has been submitted. We’ll respond soon, Insha’Allah. May Allah guide us all. 🤲"),
            e == null ||
              e.classList.add(
                "!-translate-y-5",
                "!md:-translate-y-32",
                "opacity-100"
              ),
            setTimeout(() => {
              e == null ||
                e.classList.remove("!-translate-y-5", "!md:-translate-y-32");
            }, 5e3),
            a.reset());
        } catch (m) {
          console.error("Form submission failed:", m),
            t == null || t.classList.add("from-[#ffe0e4]"),
            e == null || e.classList.add("!-translate-y-5", "opacity-100"),
            n && (n.src = "/failure.svg"),
            s && (s.textContent = "Something went wrong."),
            o &&
              (o.textContent =
                "Please try again. JazakAllahu Khair for your patience."),
            setTimeout(() => {
              e == null ||
                e.classList.remove("!-translate-y-5", "!md:-translate-y-32");
            }, 5e3);
        }
      })
    : console.warn("Form element with id 'my-form' not found.");
});
const d = document.querySelector("#contact-button"),
  u = document.querySelector("#community-button");
d == null ||
  d.addEventListener("click", () => {
    const a = document.querySelector("#contact");
    a == null ||
      a.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" }),
      p();
  });
u == null ||
  u.addEventListener("click", () => {
    p();
  });
window.addEventListener("scroll", function () {
  const a = document.getElementById("top-bar");
  a
    ? window.scrollY > 1.45 * window.innerHeight
      ? a.classList.add("!bg-[#170338]")
      : a.classList.remove("!bg-[#170338]")
    : console.warn("header not found");
});
// Newsletter Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Show popup after 3 seconds
  setTimeout(() => {
    const popup = document.getElementById('newsletter-popup');
    if (popup && !localStorage.getItem('newsletterClosed')) {
      popup.classList.remove('hidden');
    }
  }, 3000);

  // Close popup
  const closeBtn = document.getElementById('close-popup');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      document.getElementById('newsletter-popup').classList.add('hidden');
      localStorage.setItem('newsletterClosed', 'true');
    });
  }

  // Connect Stay Connected button to popup
  const stayConnectedBtn = document.querySelector('#partnerCTA button');
  if (stayConnectedBtn) {
    stayConnectedBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('newsletter-popup').classList.remove('hidden');
    });
  }
});