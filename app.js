const dataset = window.MEAL_PLAN_DATA;
const STORAGE_PREFIX = "parents-meal-plan";
const SHOPPING_GROUP_ORDER = ["野菜", "肉・卵・大豆", "そのまま一品", "乾物・乳製品", "調味料"];
const plans = buildPlans(dataset);
const todayIso = localIsoDate(new Date());
const currentPlanIndex = findCurrentPlanIndex();
const selected = { index: 0, planIndex: restorePlanIndex() };
let plan = plans[selected.planIndex];

function buildPlans(source) {
  if (Array.isArray(source.weeks) && source.weeks.length > 1) return source.weeks;
  const base = Array.isArray(source.weeks) && source.weeks.length ? source.weeks[0] : source;
  const baseStart = new Date(`${base.weekStart}T00:00:00`);
  return Array.from({ length: 52 }, (_, weekIndex) => {
    const weekStart = addDays(baseStart, weekIndex * 7);
    const week = JSON.parse(JSON.stringify(base));
    week.weekStart = localIsoDate(weekStart);
    week.weekEnd = localIsoDate(addDays(weekStart, 4));
    week.dinners = base.dinners.map((dinner, dayIndex) => {
      const date = addDays(weekStart, dayIndex);
      return {
        ...JSON.parse(JSON.stringify(dinner)),
        day: ["月", "火", "水", "木", "金"][dayIndex],
        date: `${date.getMonth() + 1}/${date.getDate()}`
      };
    });
    return week;
  });
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function localIsoDate(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

function findCurrentPlanIndex() {
  let index = 0;
  plans.forEach((candidate, candidateIndex) => {
    if (candidate.weekStart <= todayIso) index = candidateIndex;
  });
  return index;
}

function restorePlanIndex() {
  const savedWeek = localStorage.getItem(`${STORAGE_PREFIX}:selected-week`);
  const savedIndex = plans.findIndex((candidate) => candidate.weekStart === savedWeek);
  return savedIndex >= currentPlanIndex ? savedIndex : currentPlanIndex;
}

function formatRange() {
  const start = new Date(`${plan.weekStart}T00:00:00`);
  const end = new Date(`${plan.weekEnd}T00:00:00`);
  return `${start.getFullYear()}/${start.getMonth() + 1}/${start.getDate()} - ${end.getMonth() + 1}/${end.getDate()}`;
}

function storageKey(itemId) {
  return `${STORAGE_PREFIX}:${plan.weekStart}:${itemId}`;
}

function renderTabs() {
  const tabs = document.getElementById("dayTabs");
  tabs.innerHTML = plan.dinners.map((dinner, index) => `
    <button
      id="day-tab-${index}"
      type="button"
      role="tab"
      aria-selected="${index === selected.index}"
      aria-controls="mealCard"
      tabindex="${index === selected.index ? "0" : "-1"}"
      data-index="${index}"
    >
      <b>${dinner.day}</b><span>${dinner.date}</span>
    </button>
  `).join("");

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selected.index = Number(button.dataset.index);
      renderTabs();
      renderMeal();
      document.getElementById(`day-tab-${selected.index}`).focus();
    });
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      if (event.key === "Home") selected.index = 0;
      if (event.key === "End") selected.index = plan.dinners.length - 1;
      if (event.key === "ArrowLeft") {
        selected.index = (selected.index - 1 + plan.dinners.length) % plan.dinners.length;
      }
      if (event.key === "ArrowRight") {
        selected.index = (selected.index + 1) % plan.dinners.length;
      }
      renderTabs();
      renderMeal();
      document.getElementById(`day-tab-${selected.index}`).focus();
    });
  });
}

function renderMeal() {
  const dinner = plan.dinners[selected.index];
  const card = document.getElementById("mealCard");
  const status = document.getElementById("mealStatus");
  card.setAttribute("aria-labelledby", `day-tab-${selected.index}`);
  status.textContent = `${dinner.day}曜日の献立: ${dinner.title}`;
  card.innerHTML = `
    <div class="meal-card__head">
      <div>
        <span>${dinner.day}曜日の夕食</span>
        <h2>${dinner.title}</h2>
        <p>${dinner.servings} / ${plan.servingsNote}</p>
      </div>
      <div class="source-list" aria-label="出典リンク">
        ${sourceLink(dinner.main)}
        ${sourceLink(dinner.side)}
      </div>
    </div>
    <div class="dish-stack">
      ${dishBlock(dinner.main)}
      ${dishBlock(dinner.side)}
      ${dishBlock(dinner.ready)}
    </div>
    <div class="timeline">
      ${stepBlock("下準備", dinner.prep)}
      ${stepBlock("直前の調理", dinner.finish)}
    </div>`;
}

function sourceLink(dish) {
  if (!dish.sourceUrl) return "";
  return `<a class="source-link" href="${dish.sourceUrl}" target="_blank" rel="noopener">${dish.sourceTitle}</a>`;
}

function dishBlock(dish) {
  return `<article class="dish-block">
    <div class="dish-block__head">
      <span>${dish.type}</span>
      <h3>${dish.title}</h3>
      <p>${dish.note}</p>
    </div>
    <div class="dish-detail">
      ${miniList("食材", dish.ingredients)}
      ${miniList("調味料", dish.seasonings)}
    </div>
  </article>`;
}

function miniList(label, items) {
  return `<div class="mini-list"><b>${label}</b><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></div>`;
}

function stepBlock(label, steps) {
  return `<section class="step-block">
    <h3>${label}</h3>
    <ol>${steps.map((step) => `<li>${step}</li>`).join("")}</ol>
  </section>`;
}

function renderShopping() {
  const root = document.getElementById("shoppingList");
  root.innerHTML = Object.entries(plan.shopping).map(([day, groups]) => `
    <article class="shop-day">
      <h3>${day}</h3>
      ${orderedShoppingGroups(groups).map(([group, items]) => `
        <div class="shop-group">
          <h4>${group}</h4>
          <ul>${items.map((item, index) => checklistItem(day, group, item, index)).join("")}</ul>
        </div>
      `).join("")}
    </article>
  `).join("");

  root.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.checked = localStorage.getItem(storageKey(checkbox.id)) === "1";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        localStorage.setItem(storageKey(checkbox.id), "1");
      } else {
        localStorage.removeItem(storageKey(checkbox.id));
      }
    });
  });
}

function orderedShoppingGroups(groups) {
  const knownGroups = SHOPPING_GROUP_ORDER
    .filter((group) => Array.isArray(groups[group]) && groups[group].length)
    .map((group) => [group, groups[group]]);
  const additionalGroups = Object.entries(groups)
    .filter(([group, items]) => !SHOPPING_GROUP_ORDER.includes(group) && Array.isArray(items) && items.length);
  return [...knownGroups, ...additionalGroups];
}

function checklistItem(day, group, item, index) {
  const id = `${day}-${group}-${item[0]}-${index}`.replace(/[^\w\u3040-\u30ff\u3400-\u9fff-]+/g, "-");
  return `<li class="check-item">
    <input id="${id}" type="checkbox">
    <label for="${id}">
      <span>${item[0]}<b>${item[1]}</b></span>
      <small>${item[2]}</small>
    </label>
  </li>`;
}

function renderWeekTable() {
  const table = document.getElementById("weekTable");
  table.innerHTML = plan.dinners.map((dinner) => `
    <div class="week-row">
      <b>${dinner.day}<small>${dinner.date}</small></b>
      <span>
        <strong>${dinner.main.title}</strong>
        <small>副菜: ${dinner.side.title} / 1品: ${dinner.ready.title}</small>
      </span>
    </div>
  `).join("");
}

function setupWeekToggle() {
  const button = document.getElementById("toggleWeek");
  const panel = document.getElementById("weekPanel");
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.textContent = expanded ? "月から金の献立を見る" : "献立を閉じる";
    panel.hidden = expanded;
  });
}

function setupPlanUpdate() {
  document.getElementById("prevWeek").addEventListener("click", () => {
    if (selected.planIndex <= 0) return;
    selectPlan(selected.planIndex - 1);
  });

  document.getElementById("nextWeek").addEventListener("click", () => {
    if (selected.planIndex >= plans.length - 1) return;
    selectPlan(selected.planIndex + 1);
  });

  document.getElementById("currentWeek").addEventListener("click", () => {
    selectPlan(currentPlanIndex);
  });
}

function selectPlan(index) {
  selected.planIndex = index;
  selected.index = 0;
  plan = plans[index];
  localStorage.setItem(`${STORAGE_PREFIX}:selected-week`, plan.weekStart);
  renderPlan();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPlanControls() {
  const prevButton = document.getElementById("prevWeek");
  const nextButton = document.getElementById("nextWeek");
  const currentButton = document.getElementById("currentWeek");
  const note = document.getElementById("updateNote");
  const isCurrent = selected.planIndex === currentPlanIndex;

  prevButton.disabled = selected.planIndex <= 0;
  nextButton.disabled = selected.planIndex >= plans.length - 1;
  currentButton.disabled = isCurrent;
  currentButton.setAttribute("aria-pressed", String(isCurrent));
  note.textContent = `${plan.weekStart.replace(/-/g, "/")}からの平日献立`;
}

function setupCompactHeader() {
  const hero = document.querySelector(".hero");
  const update = () => hero.classList.toggle("hero--compact", window.scrollY > 48);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setupQuickNav() {
  const links = [...document.querySelectorAll(".quick-nav a")];
  const sections = links.map((link) => document.getElementById(link.dataset.section));
  const update = () => {
    const marker = window.scrollY + window.innerHeight * 0.45;
    let activeIndex = 0;
    sections.forEach((section, index) => {
      if (section.offsetTop <= marker) activeIndex = index;
    });
    links.forEach((link, index) => {
      if (index === activeIndex) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function renderPlan() {
  document.getElementById("weekRange").textContent = formatRange();
  renderTabs();
  renderMeal();
  renderWeekTable();
  renderShopping();
  renderPlanControls();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

setupWeekToggle();
setupPlanUpdate();
setupCompactHeader();
setupQuickNav();
renderPlan();
registerServiceWorker();
