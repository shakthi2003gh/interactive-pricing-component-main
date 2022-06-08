const range = document.querySelector(".range");
const slider = document.querySelector("input[type='range']");
const billingTypeYear = document.querySelector("input[type='checkbox']");

const pageView = document.querySelector("output.pageviews");
const subscription = document.querySelector("output.subscription");
const subscriptionType = document.querySelector("output.billing__type");

slider.oninput = display;

billingTypeYear.onclick = display;

function display() {
  const thumbValue = parseInt((slider.value / 200) * 100);
  let subscriptionAmount, type;

  subscriptionAmount = (thumbValue * 2 * 1000) / 6250;
  if (billingTypeYear.checked) {
    subscriptionAmount =
      subscriptionAmount * 12 - subscriptionAmount * 12 * (25 / 100);
    type = "/year";
  }

  range.style.setProperty("--value-range", `${thumbValue}%`);
  pageView.innerText = `${thumbValue * 2}k`;
  subscription.innerText = `$${subscriptionAmount.toFixed(2)}`;
  subscriptionType.innerText = type || "/month";
}
